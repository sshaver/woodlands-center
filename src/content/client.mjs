import * as fixtures from './site-data.mjs';
import { fetchSanityContent, hasSanityConfig } from './sanity-client.mjs';

const bySlug = (items = []) => new Map(items.map((item) => [item.slug, item]));

const withFallback = (cmsValue, fixtureValue) => {
  if (Array.isArray(fixtureValue)) return Array.isArray(cmsValue) && cmsValue.length ? cmsValue : fixtureValue;
  if (cmsValue && typeof cmsValue === 'object') return { ...fixtureValue, ...cmsValue };
  return cmsValue || fixtureValue;
};

const mergeBySlug = (cmsValue, fixtureValue) => {
  if (!Array.isArray(cmsValue) || !cmsValue.length) return fixtureValue;
  const merged = new Map((fixtureValue || []).map((item) => [item.slug, item]));
  cmsValue.forEach((item) => {
    if (!item?.slug) return;
    merged.set(item.slug, { ...(merged.get(item.slug) || {}), ...item });
  });
  return [...merged.values()];
};

const normalizeForms = (forms) => {
  if (!forms) return forms;
  const normalized = { ...forms };
  if (normalized.getEmails && !normalized['get-emails']) {
    normalized['get-emails'] = normalized.getEmails;
    delete normalized.getEmails;
  }
  return normalized;
};

const normalizeStoryTopics = (topics) => {
  if (!Array.isArray(topics)) return topics;
  return topics.map((topic) => (typeof topic === 'string' ? topic : topic.title)).filter(Boolean);
};

const normalizeExternalRoutes = (routes) => {
  if (!routes?.routes) return routes;
  return Object.fromEntries(routes.routes.filter((route) => route.path).map((route) => [route.path, route]));
};

const normalizeNavigation = (navigation) => {
  if (!navigation) return navigation;
  const cmsPrimaryByHref = new Map((navigation.desktopPrimary || []).map((item) => [item.href, item]));
  return {
    ...navigation,
    desktopPrimary: fixtures.navigation.desktopPrimary.map((item) => ({
      ...(cmsPrimaryByHref.get(item.href) || {}),
      ...item
    }))
  };
};

const collectionRequirements = [
  'events',
  'planVisitTopics',
  'grantPrograms',
  'outreachPrograms',
  'landingPages',
  'stories',
  'storyTopics'
];

const assertCmsCompleteness = (cms = {}) => {
  if (process.env.SANITY_REQUIRE_CONTENT !== 'true') return;

  const missingCollections = collectionRequirements
    .map((key) => {
      const fixtureCount = Array.isArray(fixtures[key]) ? fixtures[key].length : 0;
      const cmsCount = Array.isArray(cms[key]) ? cms[key].length : 0;
      return cmsCount < fixtureCount ? `${key}: ${cmsCount}/${fixtureCount}` : '';
    })
    .filter(Boolean);

  if (missingCollections.length) {
    throw new Error(
      `Sanity content is incomplete for production build (${missingCollections.join(', ')}). ` +
        'Check SANITY_READ_TOKEN and dataset read permissions.'
    );
  }
};

const mergeSource = (cms = {}) => ({
  settings: withFallback(cms.settings, fixtures.settings),
  navigation: normalizeNavigation(withFallback(cms.navigation, fixtures.navigation)),
  forms: withFallback(normalizeForms(cms.forms), fixtures.forms),
  alert: withFallback(cms.alert, fixtures.alert),
  blocks: withFallback(cms.blocks, fixtures.blocks),
  events: mergeBySlug(cms.events, fixtures.events),
  planVisitTopics: mergeBySlug(cms.planVisitTopics, fixtures.planVisitTopics),
  mission: withFallback(cms.mission, fixtures.mission),
  seasonSeats: withFallback(cms.seasonSeats, fixtures.seasonSeats),
  grantPrograms: mergeBySlug(cms.grantPrograms, fixtures.grantPrograms),
  outreachPrograms: mergeBySlug(cms.outreachPrograms, fixtures.outreachPrograms),
  landingPages: mergeBySlug(cms.landingPages, fixtures.landingPages),
  stories: mergeBySlug(cms.stories, fixtures.stories),
  storyTopics: withFallback(normalizeStoryTopics(cms.storyTopics), fixtures.storyTopics),
  externalRoutes: withFallback(normalizeExternalRoutes(cms.externalRoutes), fixtures.externalRoutes)
});

export const buildContent = (source = fixtures) => {
  const merged = mergeSource(source);
  const landingPageMap = bySlug(merged.landingPages);
  const grantMap = bySlug(merged.grantPrograms);
  const outreachMap = bySlug(merged.outreachPrograms);
  const storyMap = bySlug(merged.stories);
  const eventMap = bySlug(merged.events);

  return {
    ...merged,
    getEvent: (slug) => eventMap.get(slug),
    getStory: (slug) => storyMap.get(slug),
    getLandingPage: (slug) => landingPageMap.get(slug),
    getGrantProgram: (slug) => grantMap.get(slug),
    getOutreachProgram: (slug) => outreachMap.get(slug)
  };
};

export const content = buildContent(fixtures);

export const loadContent = async () => {
  if (!hasSanityConfig()) return content;

  try {
    const cmsContent = await fetchSanityContent();
    assertCmsCompleteness(cmsContent);
    return buildContent(cmsContent || fixtures);
  } catch (error) {
    if (process.env.SANITY_REQUIRE_CONTENT === 'true') throw error;
    console.warn(`Warning: ${error.message}. Falling back to local fixture content.`);
    return content;
  }
};
