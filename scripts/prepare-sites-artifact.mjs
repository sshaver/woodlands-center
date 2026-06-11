import { execFile } from "node:child_process";
import { cp, mkdir, readFile, readdir, rm, stat, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { promisify } from "node:util";

const projectRoot = process.cwd();
const staticDist = join(projectRoot, "dist");
const stageRoot = join(projectRoot, ".sites-stage");
const stagedDist = join(stageRoot, "dist");
const stagedPublic = join(stagedDist, "server", "public");
const maxHostedFileSize = 25 * 1024 * 1024;
const execFileAsync = promisify(execFile);

const skippedDistEntries = new Set([".openai", "assets", "server"]);

async function copyStaticDist(source, target, isDistRoot = false) {
  await mkdir(target, { recursive: true });
  const entries = await readdir(source, { withFileTypes: true });

  for (const entry of entries) {
    if (isDistRoot && skippedDistEntries.has(entry.name)) {
      continue;
    }

    const sourcePath = join(source, entry.name);
    const targetPath = join(target, entry.name);

    if (entry.isDirectory()) {
      await copyStaticDist(sourcePath, targetPath);
      continue;
    }

    if (entry.isFile()) {
      await cp(sourcePath, targetPath);
    }
  }
}

async function collectFiles(source) {
  const entries = await readdir(source, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const sourcePath = join(source, entry.name);
    if (entry.isDirectory()) {
      files.push(...await collectFiles(sourcePath));
      continue;
    }
    if (entry.isFile()) {
      files.push(sourcePath);
    }
  }

  return files;
}

function assetReferencesFromText(text) {
  const references = new Set();
  const attributePattern = /\b[\w:-]+=["']([^"']*\/assets\/[^"']*)["']/g;
  const cssUrlPattern = /url\(\s*(["']?)(\/assets\/.*?)\1\s*\)/g;

  const addReference = (rawReference) => {
    const assetStart = rawReference.indexOf("/assets/");
    if (assetStart === -1 || rawReference.includes("url(")) {
      return;
    }

    const cleanReference = rawReference.slice(assetStart).split(/[?#]/)[0].trim();

    try {
      references.add(decodeURIComponent(cleanReference).replace(/^\/assets\//, ""));
    } catch {
      references.add(cleanReference.replace(/^\/assets\//, ""));
    }
  };

  for (const match of text.matchAll(attributePattern)) {
    addReference(match[1]);
  }

  for (const match of text.matchAll(cssUrlPattern)) {
    addReference(match[2]);
  }

  return references;
}

async function copyReferencedAssets() {
  const candidateFiles = await collectFiles(staticDist);
  const references = new Set();

  for (const filePath of candidateFiles) {
    if (!/\.(?:html|css|js)$/i.test(filePath)) {
      continue;
    }

    const text = await readFile(filePath, "utf8");
    for (const reference of assetReferencesFromText(text)) {
      references.add(reference);
    }
  }

  for (const reference of references) {
    const sourcePath = join(staticDist, "assets", reference);
    const targetPath = join(stagedPublic, "assets", reference);
    await mkdir(join(targetPath, ".."), { recursive: true });
    await cp(sourcePath, targetPath);
  }

  return references.size;
}

async function optimizeOversizedImages() {
  const files = await collectFiles(join(stagedPublic, "assets"));
  let optimizedCount = 0;

  for (const filePath of files) {
    if (!/\.(?:jpe?g|png)$/i.test(filePath)) {
      continue;
    }

    const fileStats = await stat(filePath);
    if (fileStats.size <= maxHostedFileSize) {
      continue;
    }

    for (const maxDimension of [2400, 1800, 1400]) {
      await execFileAsync("sips", ["-Z", String(maxDimension), filePath]);
      const updatedStats = await stat(filePath);

      if (updatedStats.size <= maxHostedFileSize) {
        optimizedCount++;
        break;
      }
    }
  }

  return optimizedCount;
}

const workerSource = `const INDEX_FILE = "/index.html";

function assetCandidates(pathname) {
  const cleanPath = pathname.replace(/\\/+$/, "") || "/";
  const finalSegment = cleanPath.split("/").pop() || "";
  const hasExtension = finalSegment.includes(".");

  if (cleanPath === "/") {
    return [INDEX_FILE];
  }

  if (hasExtension) {
    return [cleanPath];
  }

  return [\`\${cleanPath}/index.html\`, \`\${cleanPath}.html\`, INDEX_FILE];
}

async function fetchAsset(request, env, path) {
  if (!env?.ASSETS?.fetch) {
    return new Response("Static asset binding is unavailable.", { status: 500 });
  }

  const url = new URL(request.url);
  url.pathname = path;
  return env.ASSETS.fetch(new Request(url, request));
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    for (const candidate of assetCandidates(url.pathname)) {
      const response = await fetchAsset(request, env, candidate);
      if (response.status !== 404) {
        return response;
      }
    }

    return new Response("Not found", { status: 404 });
  },
};
`;

await rm(stageRoot, { recursive: true, force: true });
await mkdir(join(stagedDist, "server"), { recursive: true });
await copyStaticDist(staticDist, stagedPublic, true);
const copiedAssetCount = await copyReferencedAssets();
const optimizedImageCount = await optimizeOversizedImages();
try {
  await cp(join(projectRoot, "public", "screenshot.jpeg"), join(stagedPublic, "screenshot.jpeg"));
} catch (error) {
  if (error.code !== "ENOENT") {
    throw error;
  }
}
await mkdir(join(stagedDist, ".openai"), { recursive: true });
await cp(join(projectRoot, ".openai", "hosting.json"), join(stagedDist, ".openai", "hosting.json"));
await writeFile(join(stagedDist, "server", "index.js"), workerSource);

console.log(`Prepared Sites artifact at ${stageRoot} with ${copiedAssetCount} referenced assets and ${optimizedImageCount} optimized images`);
