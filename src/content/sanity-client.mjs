const DEFAULT_API_VERSION = '2025-02-19';

const collectionKeys = [
  'events',
  'planVisitTopics',
  'grantPrograms',
  'outreachPrograms',
  'landingPages',
  'stories',
  'storyPillars',
  'storyTopics'
];

const singletonKeys = ['settings', 'navigation', 'forms', 'alert', 'blocks', 'mission', 'seasonSeats', 'externalRoutes'];

const typeMap = {
  settings: 'settings',
  navigation: 'navigation',
  forms: 'forms',
  alert: 'alert',
  blocks: 'blocks',
  mission: 'mission',
  seasonSeats: 'seasonSeats',
  externalRoutes: 'externalRoutes',
  events: 'event',
  planVisitTopics: 'planVisitTopic',
  grantPrograms: 'grantProgram',
  outreachPrograms: 'outreachProgram',
  landingPages: 'landingPage',
  stories: 'story',
  storyPillars: 'storyPillar',
  storyTopics: 'storyTopic'
};

const singletonProjection = (key) => `"${key}": *[_type == "${typeMap[key]}"{draftFilter}][0]`;
const collectionProjection = (key, order = '') => `"${key}": *[_type == "${typeMap[key]}"{draftFilter}]${order}`;

const configured = () => Boolean(process.env.SANITY_PROJECT_ID && process.env.SANITY_DATASET);

const imageUrlFromRef = (ref, config) => {
  if (!ref?.startsWith('image-')) return '';
  const parts = ref.replace(/^image-/, '').split('-');
  const extension = parts.pop();
  const dimensions = parts.pop();
  const id = parts.join('-');
  if (!id || !dimensions || !extension) return '';
  return `https://cdn.sanity.io/images/${config.projectId}/${config.dataset}/${id}-${dimensions}.${extension}`;
};

const normalizeValue = (value, config) => {
  if (Array.isArray(value)) return value.map((item) => normalizeValue(item, config));
  if (!value || typeof value !== 'object') return value;
  if (value._type === 'slug') return value.current || '';
  if (value._type === 'image' || value._type === 'mediaAsset' || value.src || value.asset?._ref || value.asset?.url) {
    return value.asset?.url || imageUrlFromRef(value.asset?._ref, config) || value.src || '';
  }
  return Object.fromEntries(
    Object.entries(value)
      .filter(([key]) => !key.startsWith('_'))
      .map(([key, item]) => [key, normalizeValue(item, config)])
  );
};

const normalizeDocument = (document, config) => normalizeValue(document, config);

const buildQuery = (previewDrafts) => {
  const draftFilter = previewDrafts ? '' : ' && !(_id in path("drafts.**"))';
  return `{
    ${singletonKeys.map((key) => singletonProjection(key).replaceAll('{draftFilter}', draftFilter)).join(',\n    ')},
    ${collectionProjection('events', '|order(eventDate asc)').replaceAll('{draftFilter}', draftFilter)},
    ${collectionProjection('planVisitTopics', '|order(orderRank asc, title asc)').replaceAll('{draftFilter}', draftFilter)},
    ${collectionProjection('grantPrograms', '|order(orderRank asc, title asc)').replaceAll('{draftFilter}', draftFilter)},
    ${collectionProjection('outreachPrograms', '|order(orderRank asc, title asc)').replaceAll('{draftFilter}', draftFilter)},
    ${collectionProjection('landingPages', '|order(orderRank asc, title asc)').replaceAll('{draftFilter}', draftFilter)},
    ${collectionProjection('stories', '|order(publishDate desc)').replaceAll('{draftFilter}', draftFilter)},
    ${collectionProjection('storyPillars', '|order(orderRank asc, title asc)').replaceAll('{draftFilter}', draftFilter)},
    ${collectionProjection('storyTopics', '|order(orderRank asc, title asc)').replaceAll('{draftFilter}', draftFilter)}
  }`;
};

export const hasSanityConfig = configured;

export const fetchSanityContent = async () => {
  if (!configured()) return null;
  if (typeof fetch !== 'function') {
    throw new Error('Native fetch is required for Sanity content loading. Use Node 18 or newer.');
  }

  const config = {
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: process.env.SANITY_DATASET,
    apiVersion: process.env.SANITY_API_VERSION || DEFAULT_API_VERSION,
    readToken: process.env.SANITY_READ_TOKEN || '',
    previewDrafts: process.env.SANITY_PREVIEW_DRAFTS === 'true'
  };

  const query = buildQuery(config.previewDrafts);
  const url = new URL(`https://${config.projectId}.api.sanity.io/v${config.apiVersion}/data/query/${config.dataset}`);
  url.searchParams.set('query', query);

  const response = await fetch(url, {
    headers: config.readToken ? { Authorization: `Bearer ${config.readToken}` } : {}
  });

  if (!response.ok) {
    throw new Error(`Sanity content request failed with ${response.status} ${response.statusText}`);
  }

  const payload = await response.json();
  const result = payload.result || {};

  return Object.fromEntries(
    [...singletonKeys, ...collectionKeys].map((key) => {
      const value = result[key];
      if (Array.isArray(value)) return [key, value.map((item) => normalizeDocument(item, config))];
      return [key, normalizeDocument(value, config)];
    })
  );
};
