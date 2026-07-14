import fs from 'node:fs';
import path from 'node:path';
import {
  alert,
  blocks,
  events,
  externalRoutes,
  forms,
  grantPrograms,
  landingPages,
  mission,
  navigation,
  outreachPrograms,
  planVisitTopics,
  seasonSeats,
  settings,
  stories,
  storyPillars,
  storyTopics
} from '../src/content/site-data.mjs';

const outFile = path.resolve('sanity/seed/cwmp-content.ndjson');

const slugId = (prefix, slugOrTitle) =>
  `${prefix}.${String(slugOrTitle)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')}`;

let keyIndex = 0;
const ctaFieldNames = new Set(['cta', 'primaryCTA', 'secondaryCTA', 'donateCTA', 'programsCTA', 'holderLoginCTA', 'learnMoreCTA', 'applicationCTA', 'finalCTA']);
const formFieldNames = new Set(['contact', 'getEmails', 'seasonSeats', 'missionSeekers', 'programReminder']);
const mediaBlockFieldNames = new Set(['feature', 'video', 'email', 'storyPrefooter', 'impactHeading', 'humanProof', 'placeMap', 'pricing', 'seatingMap', 'conversionProof', 'supportIntro', 'supportProof']);
const blockScopedMediaFields = new Set(['seasonSeats']);
const arrayItemTypes = {
  desktopPrimary: 'navItem',
  footer: 'navItem',
  impactStats: 'stat',
  mobileDock: 'navItem',
  routes: 'routeItem',
  sections: 'policySection',
  showSchedule: 'scheduleRow',
  sponsorGroups: 'sponsorGroup',
  sponsors: 'sponsorItem',
  stats: 'stat',
  tabs: 'tab',
  utility: 'navItem'
};
const mediaFieldNames = new Set([
  'cardImage',
  'fallbackImage',
  'headerImage',
  'heroImage',
  'homeBackgroundImage',
  'image',
  'logo',
  'logoBlue',
  'logoWhite',
  'poster',
  'proofImage',
  'seatingMapImage',
  'shareImage'
]);

const altFromPath = (value) =>
  path
    .basename(value)
    .replace(/\.[^.]+$/, '')
    .replace(/[-_]+/g, ' ')
    .trim();

const objectTypeForField = (keyName, parentKey) => {
  if (ctaFieldNames.has(keyName)) return 'cta';
  if (parentKey === 'forms' && formFieldNames.has(keyName)) return 'formReference';
  if (mediaBlockFieldNames.has(keyName)) return 'mediaBlock';
  if (parentKey === 'blocks' && blockScopedMediaFields.has(keyName)) return 'mediaBlock';
  if (keyName === 'conversion') return 'conversionBlock';
  return '';
};

const withKeys = (value, keyName = '', parentKey = '') => {
  if (keyName === 'slug' && typeof value === 'string') {
    return { _type: 'slug', current: value };
  }
  if (mediaFieldNames.has(keyName) && typeof value === 'string') {
    return { _type: 'mediaAsset', src: value, alt: altFromPath(value) };
  }
  if (Array.isArray(value)) {
    const itemType = arrayItemTypes[keyName];
    return value.map((item) => {
      const next = withKeys(item, '', keyName);
      if (next && typeof next === 'object' && !Array.isArray(next) && !next._key) {
        return { _key: `k${(keyIndex += 1).toString(36)}`, ...(itemType && !next._type ? { _type: itemType } : {}), ...next };
      }
      return next;
    });
  }
  if (!value || typeof value !== 'object') return value;
  const explicitType = objectTypeForField(keyName, parentKey);
  return {
    ...(explicitType && !value._type ? { _type: explicitType } : {}),
    ...Object.fromEntries(Object.entries(value).map(([key, item]) => [key, withKeys(item, key, keyName)]))
  };
};

const sanityForms = ({ ['get-emails']: getEmails, ...rest }) => ({ ...rest, getEmails });
const sanityExternalRoutes = (routes) => ({
  routes: Object.entries(routes).map(([routePath, route]) => ({ path: routePath, ...route }))
});

const doc = (_type, _id, value) => JSON.stringify({ _id, _type, ...withKeys(value, _type) });

const documents = [
  doc('settings', 'settings', settings),
  doc('navigation', 'navigation', navigation),
  doc('forms', 'forms', sanityForms(forms)),
  doc('alert', 'alert', alert),
  doc('blocks', 'blocks', blocks),
  doc('mission', 'mission', mission),
  doc('seasonSeats', 'seasonSeats', seasonSeats),
  doc('externalRoutes', 'externalRoutes', sanityExternalRoutes(externalRoutes)),
  ...events.map((item) => doc('event', slugId('event', item.slug), item)),
  ...planVisitTopics.map((item) => doc('planVisitTopic', slugId('planVisitTopic', item.slug), item)),
  ...grantPrograms.map((item) => doc('grantProgram', slugId('grantProgram', item.slug), item)),
  ...outreachPrograms.map((item) => doc('outreachProgram', slugId('outreachProgram', item.slug), item)),
  ...landingPages.map((item) => doc('landingPage', slugId('landingPage', item.slug), item)),
  ...stories.map((item) => doc('story', slugId('story', item.slug), item)),
  ...storyPillars.map((item) => doc('storyPillar', slugId('storyPillar', item.slug || item.title), item)),
  ...storyTopics.map((title) => doc('storyTopic', slugId('storyTopic', title), { title }))
];

fs.mkdirSync(path.dirname(outFile), { recursive: true });
fs.writeFileSync(outFile, `${documents.join('\n')}\n`);

console.log(`Wrote ${documents.length} Sanity seed documents to ${outFile}`);
