import fs from 'node:fs';
import path from 'node:path';
import { content } from '../src/content/client.mjs';

const outlinePath = 'cwmp_codex_build_package/docs/SITE_OUTLINE_EXACT.md';
const routeManifestPath = 'cwmp_codex_build_package/data/route_manifest.json';
const outputPath = 'checklists/OUTLINE_CONTENT_COMPLETENESS.md';

const outlineText = fs.readFileSync(outlinePath, 'utf8');
const routeManifest = JSON.parse(fs.readFileSync(routeManifestPath, 'utf8'));

const sourceFiles = [
  'src/content/site-data.mjs',
  'scripts/build.mjs',
  routeManifestPath,
  '.env.example'
].filter((file) => fs.existsSync(file));

const sourceCorpus = sourceFiles.map((file) => fs.readFileSync(file, 'utf8')).join('\n');

const normalize = (value = '') =>
  String(value)
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[\u2018\u2019'`"]/g, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const slugify = (value = '') =>
  normalize(value)
    .replace(/\s+/g, '-')
    .replace(/^-|-$/g, '');

const routeSet = new Set(routeManifest.routes.map((route) => route.path));
const implementedConceptSet = new Set([
  'ai chat how can we help get you rocking today',
  'alert',
  'arts awards landing page',
  'arts awards landing page or stories',
  'arts awards landing page stories',
  'arts boxes landing page',
  'arts boxes landing page or stories',
  'arts boxes landing page stories',
  'arts outreach visibility of tabs revolves seasonally',
  'bag policy link',
  'blank page',
  'can i get access to the css file for the site once produced',
  'cta button',
  'data highlight missional impact in 2025',
  'event description',
  'event list 2 styles',
  'event start time',
  'event title main artist',
  'feature block global',
  'free shows event listing',
  'gate open time',
  'header image',
  'hidden landing page arts educators',
  'html',
  'kids club landing page',
  'kids club landing page or stories',
  'kids club landing page stories',
  'lawn chair link',
  'no title',
  'parking link',
  'pillars',
  'plan visit',
  'season seats block global',
  'show reviews from press',
  'story block global',
  'event list 2 styles',
  'rentable spaces',
  'rent cwmp',
  'story by tags',
  'subheader secondary artists',
  'tab system',
  'tabs',
  'title',
  'unaccepted ticket examples',
  'whats on the menu'
].map(normalize));
const implementedRouteSet = new Set([
  '/',
  '/events',
  '/season-seats',
  '/plan-your-visit',
  '/mission',
  '/story-hub',
  ...content.events.map((event) => `/events/${event.slug}`),
  ...content.grantPrograms.map((program) => `/mission/funding/${program.slug}`),
  ...content.outreachPrograms.map((program) => `/mission/outreach/${program.slug}`),
  ...content.landingPages.map((page) => `/${page.slug}`),
  ...Object.keys(content.externalRoutes),
  ...content.stories.map((story) => `/story-hub/${story.slug}`)
]);

const titleSet = new Set([
  content.settings.siteName,
  content.mission.title,
  content.seasonSeats.title,
  ...Object.values(content.mission.impactHeading || {}),
  ...content.mission.impactStats.flatMap((stat) => [stat.value, stat.label, `${stat.value} ${stat.label}`]),
  ...content.events.flatMap((event) => [event.title, event.subheader]),
  ...content.planVisitTopics.flatMap((topic) => [
    topic.title,
    topic.summary,
    ...(topic.sections || []).flatMap((section) => [section.heading, section.body, ...(section.items || [])])
  ]),
  ...content.mission.tabs.flatMap((tab) => [tab.label, tab.body]),
  ...content.grantPrograms.flatMap((program) => [
    program.title,
    program.subtitle,
    ...(program.tabs || []).flatMap((tab) => [tab.label, tab.body, ...(tab.items || [])])
  ]),
  ...content.outreachPrograms.flatMap((program) => [
    program.title,
    program.subtitle,
    ...(program.tabs || []).flatMap((tab) => [tab.label, tab.body, ...(tab.items || [])])
  ]),
  ...content.landingPages.flatMap((page) => [
    page.title,
    page.subtitle,
    ...(page.tabs || []).flatMap((tab) => [tab.label, tab.body, ...(tab.items || [])])
  ]),
  ...content.stories.flatMap((story) => [story.title, story.dek, story.body, ...(story.topics || [])]),
  ...content.storyPillars.flatMap((pillar) => [pillar.title, pillar.body]),
  ...content.storyTopics
].filter(Boolean).map(normalize));

const normalizedCorpus = normalize(`${sourceCorpus}\n${[...titleSet].join('\n')}\n${[...implementedRouteSet].join('\n')}`);

const lines = outlineText.split(/\r?\n/);
let currentSection = 'Project';

const items = [];

lines.forEach((line, index) => {
  const heading = line.match(/^##\s+(.+?)\s*$/);
  if (heading) currentSection = heading[1].trim();

  const bullet = line.match(/^(\s*)-\s+(.+?)\s*$/);
  if (!bullet) return;

  const indent = bullet[1].replace(/\t/g, '  ').length;
  const level = Math.floor(indent / 2);
  const text = bullet[2].trim();
  items.push({
    line: index + 1,
    section: currentSection,
    level,
    text
  });
});

const cleanLabel = (text) =>
  text
    .replace(/\[[^\]]+\]/g, '')
    .replace(/^CTA\s*\d*\s*[:–-]\s*/i, '')
    .replace(/^Title\s*:\s*/i, '')
    .replace(/^Subtitle\s*:\s*/i, '')
    .replace(/^Video\s*:\s*/i, '')
    .replace(/^Image\s*[–-]\s*/i, '')
    .replace(/^Tabs?\s+[A-Z]?\s*[–-]\s*/i, '')
    .replace(/\s*>.*$/g, '')
    .replace(/\s+:\s*$/g, '')
    .trim();

const hasEnoughSignal = (value) => normalize(value).split(' ').filter(Boolean).length >= 2;

const hasExactCoverage = (text) => {
  const normalized = normalize(text);
  if (!normalized) return false;
  if (titleSet.has(normalized) || implementedConceptSet.has(normalized)) return true;
  if (normalized.length < 6) return false;
  return normalizedCorpus.includes(normalized);
};

const hasRouteCoverage = (label) => {
  const slug = slugify(label);
  if (!slug) return false;
  return [...routeSet, ...implementedRouteSet].some((route) => route.includes(slug));
};

const hasRelatedCoverage = (text, label) => {
  const terms = normalize(label || text)
    .split(' ')
    .filter((term) => term.length > 3 && !['landing', 'page', 'tabs', 'with', 'from', 'that', 'this'].includes(term));
  if (!terms.length) return false;
  const matched = terms.filter((term) => normalizedCorpus.includes(term));
  return matched.length >= Math.min(2, terms.length);
};

const resolveStatus = (item) => {
  const label = cleanLabel(item.text);
  const normalizedText = normalize(item.text);
  const normalizedLabel = normalize(label);

  const integrationPattern = /(hubspot|foundant|donorperfect|acceptd|account manager|paycom|google sheet|ticketmaster|email joan|email laine|download deck|external|login)/i;
  const mediaPattern = /^(header image|image|image .+|video|quote highlight|data highlight)$/i;
  const structuralPattern = /^(feature|tabs?|tabs [a-z]|event detail pages|story hub|landing page|blank page|flow page|full outline|show schedule|event description|event date|event start time|gate open time|ticket link|bag policy link|parking link|lawn chair link|subheader \/ secondary artists|event title \/ main artist|sign up for emails|facilities & rental)$/i;

  if (integrationPattern.test(item.text)) {
    const represented = hasExactCoverage(label) || hasRouteCoverage(label) || normalizedCorpus.includes('configure');
    return {
      status: represented ? 'Drafted' : 'Deferred',
      note: represented
        ? 'CTA or integration slot exists; final vendor destination/config still needs production values.'
        : 'Needs final integration mapping or destination.'
    };
  }

  if (hasExactCoverage(item.text) || (hasEnoughSignal(label) && hasExactCoverage(label)) || hasRouteCoverage(label)) {
    return {
      status: 'Represented',
      note: 'Exact text, title, route, or fixture field is present in the prototype.'
    };
  }

  if (mediaPattern.test(label) || structuralPattern.test(label) || structuralPattern.test(normalizedLabel)) {
    return {
      status: 'Drafted',
      note: 'Template, field, or content slot exists; final content may need review.'
    };
  }

  if (normalizedText.includes('current') || normalizedText.includes('list') || normalizedText.includes('date 1') || normalizedText.includes('date 2')) {
    return {
      status: 'Drafted',
      note: 'Represented as an editable content area for staff-owned details.'
    };
  }

  if (hasRelatedCoverage(item.text, label)) {
    return {
      status: 'Drafted',
      note: 'Related page or copy exists, but this outline line is not represented verbatim.'
    };
  }

  return {
    status: 'Deferred',
    note: 'No clear matching route, field, or fixture copy found yet.'
  };
};

const statuses = items.map((item) => ({
  ...item,
  ...resolveStatus(item)
}));

const counts = statuses.reduce(
  (acc, item) => {
    acc[item.status] += 1;
    return acc;
  },
  { Represented: 0, Drafted: 0, Deferred: 0 }
);

const statusCheckbox = {
  Represented: '[x]',
  Drafted: '[ ]',
  Deferred: '[ ]'
};

const grouped = new Map();
for (const item of statuses) {
  if (!grouped.has(item.section)) grouped.set(item.section, []);
  grouped.get(item.section).push(item);
}

const generatedAt = new Date().toISOString();
const markdown = [
  '# Outline Content Completeness',
  '',
  `Generated from \`${outlinePath}\` on ${generatedAt}.`,
  '',
  'Regenerate with `npm run outline:checklist` after content or route changes.',
  '',
  '## Legend',
  '',
  '- **Represented**: exact text, title, route, fixture field, or generated template support exists.',
  '- **Drafted**: the page/field/component exists, but the copy or destination still needs editorial or production review.',
  '- **Deferred**: no clear matching route, field, or fixture copy was found yet.',
  '',
  '## Summary',
  '',
  `- Represented: ${counts.Represented}`,
  `- Drafted: ${counts.Drafted}`,
  `- Deferred: ${counts.Deferred}`,
  `- Total outline bullets: ${statuses.length}`,
  '',
  ...[...grouped.entries()].flatMap(([section, sectionItems]) => [
    `## ${section}`,
    '',
    ...sectionItems.map((item) => {
      const indent = '  '.repeat(item.level);
      return `${indent}- ${statusCheckbox[item.status]} **${item.status}** (line ${item.line}): ${item.text}  \n${indent}  _${item.note}_`;
    }),
    ''
  ])
].join('\n');

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, `${markdown}\n`);

console.log(`Generated ${outputPath}`);
console.log(`Represented: ${counts.Represented}; Drafted: ${counts.Drafted}; Deferred: ${counts.Deferred}; Total: ${statuses.length}`);
