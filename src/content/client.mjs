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
  storyTopics
} from './site-data.mjs';

const bySlug = (items) => new Map(items.map((item) => [item.slug, item]));

const landingPageMap = bySlug(landingPages);
const grantMap = bySlug(grantPrograms);
const outreachMap = bySlug(outreachPrograms);
const storyMap = bySlug(stories);
const eventMap = bySlug(events);

export const content = {
  settings,
  navigation,
  forms,
  alert,
  blocks,
  events,
  planVisitTopics,
  mission,
  seasonSeats,
  grantPrograms,
  outreachPrograms,
  landingPages,
  stories,
  storyTopics,
  externalRoutes,
  getEvent: (slug) => eventMap.get(slug),
  getStory: (slug) => storyMap.get(slug),
  getLandingPage: (slug) => landingPageMap.get(slug),
  getGrantProgram: (slug) => grantMap.get(slug),
  getOutreachProgram: (slug) => outreachMap.get(slug)
};
