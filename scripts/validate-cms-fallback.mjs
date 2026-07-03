import { content, loadContent } from '../src/content/client.mjs';

const sanityKeys = [
  'SANITY_PROJECT_ID',
  'SANITY_DATASET',
  'SANITY_API_VERSION',
  'SANITY_READ_TOKEN',
  'SANITY_PREVIEW_DRAFTS',
  'SANITY_REQUIRE_CONTENT'
];

for (const key of sanityKeys) delete process.env[key];

const loaded = await loadContent();

if (loaded.events.length !== content.events.length) {
  throw new Error('CMS fallback did not preserve fixture events.');
}

if (!loaded.getEvent('rod-stewart')) {
  throw new Error('CMS fallback route helpers are not available.');
}

if (!loaded.forms.contact?.fallbackUrl) {
  throw new Error('CMS fallback did not preserve form fallback data.');
}

console.log(`CMS fallback loaded ${loaded.events.length} events and ${loaded.stories.length} stories from fixtures.`);
