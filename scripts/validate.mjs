import fs from 'node:fs';
import path from 'node:path';
import { content } from '../src/content/client.mjs';

const routeManifest = JSON.parse(fs.readFileSync('cwmp_codex_build_package/data/route_manifest.json', 'utf8'));
const requiredEnv = [
  'NEXT_PUBLIC_SITE_URL',
  'HUBSPOT_PORTAL_ID',
  'HUBSPOT_REGION',
  'SANITY_PROJECT_ID',
  'SANITY_DATASET',
  'SANITY_API_VERSION',
  'SANITY_READ_TOKEN',
  'SANITY_PREVIEW_DRAFTS',
  'TICKETMASTER_BASE_URL',
  'ACCOUNT_MANAGER_URL',
  'FOUNDANT_BASE_URL',
  'DONORPERFECT_DONATION_URL',
  'ACCEPTD_APPLICATION_URL',
  'PAYCOM_URL',
  'AI_PROVIDER',
  'AI_API_KEY',
  'AI_MODEL',
  'AI_EMBEDDING_MODEL',
  'CMS_API_URL',
  'CMS_API_TOKEN'
];

const errors = [];
const warnings = [];

const assert = (condition, message) => {
  if (!condition) errors.push(message);
};

const warn = (condition, message) => {
  if (!condition) warnings.push(message);
};

const hasRouteData = (route) => {
  if (route.path === '/' || route.path === '/events' || route.path === '/events/[slug]') return true;
  if (route.path === '/season-seats' || route.path === '/plan-your-visit' || route.path === '/mission') return true;
  if (route.path.startsWith('/mission/funding/')) return Boolean(content.getGrantProgram(route.path.replace('/mission/funding/', '')));
  if (route.path.startsWith('/mission/outreach/')) return Boolean(content.getOutreachProgram(route.path.replace('/mission/outreach/', '')));
  if (route.path === '/story-hub' || route.path === '/story-hub/topic/[topic]' || route.path === '/story-hub/[slug]') return true;
  if (content.externalRoutes[route.path]) return true;
  return Boolean(content.getLandingPage(route.path.replace(/^\//, '')));
};

for (const route of routeManifest.routes) {
  assert(hasRouteData(route), `Missing fixture data for route ${route.path}`);
}

for (const event of content.events) {
  assert(event.title && event.slug && event.eventDate, `Event ${event.slug || event.title} is missing title, slug, or date`);
  assert(event.headerImage && event.ticketLink, `Event ${event.slug} is missing header image or ticket link`);
  assert(event.showSchedule?.length >= 2, `Event ${event.slug} needs gate and show schedule rows`);
}

for (const topic of content.planVisitTopics) {
  assert(topic.title && topic.slug && topic.summary, `Plan Visit topic ${topic.slug || topic.title} is incomplete`);
  assert(topic.sections?.length, `Plan Visit topic ${topic.slug} needs sections for search/source links`);
}

for (const form of Object.values(content.forms)) {
  assert(form.type && (form.fallbackUrl || form.formId), `Form ${form.title} needs a fallback or form ID`);
}

const envExample = fs.readFileSync('.env.example', 'utf8');
for (const key of requiredEnv) {
  assert(envExample.includes(`${key}=`), `.env.example missing ${key}`);
}

const assetRoots = [
  'cwmp_codex_build_package/assets/content-images',
  'cwmp_codex_build_package/assets/logos',
  'cwmp_codex_build_package/assets/video-placeholders',
  'cwmp_codex_build_package/assets/documents'
];

const productionAssets = assetRoots.flatMap((root) => {
  if (!fs.existsSync(root)) return [];
  return fs.readdirSync(root, { recursive: true }).filter((file) => !file.endsWith('.gitkeep'));
});

warn(fs.existsSync('cwmp_codex_build_package/data/content_asset_manifest.json'), 'No content_asset_manifest.json found; using scanned production asset folders and fixture mappings.');
warn(productionAssets.length > 20, 'Production asset folders contain fewer files than expected.');

if (fs.existsSync('dist')) {
  for (const route of routeManifest.routes) {
    if (route.path.includes('[')) continue;
    const file = route.path === '/' ? 'dist/index.html' : path.join('dist', route.path, 'index.html');
    assert(fs.existsSync(file), `Built route file missing: ${file}`);
  }
  for (const event of content.events) {
    assert(fs.existsSync(path.join('dist/events', event.slug, 'index.html')), `Built event detail missing: ${event.slug}`);
  }
  for (const story of content.stories) {
    assert(fs.existsSync(path.join('dist/story-hub', story.slug, 'index.html')), `Built story detail missing: ${story.slug}`);
  }
}

for (const warning of warnings) console.warn(`Warning: ${warning}`);
if (errors.length) {
  console.error(errors.map((error) => `Error: ${error}`).join('\n'));
  process.exit(1);
}

console.log(`Validated ${routeManifest.routes.length} manifest routes, ${content.events.length} events, ${content.planVisitTopics.length} visit topics, and ${content.stories.length} stories.`);
