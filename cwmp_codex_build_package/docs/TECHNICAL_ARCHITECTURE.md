# Technical Architecture Recommendation

This is a pragmatic architecture for Codex to implement. It is intentionally CMS-adapter-friendly because the RFP does not mandate a platform.

## Application layers

1. `app/routes`: route files/pages.
2. `components`: reusable UI components and page sections.
3. `content`: typed content schemas, local fixtures, CMS client adapter.
4. `blocks`: block renderer and block-specific components.
5. `integrations`: HubSpot, external CTAs, ticket links, analytics, AI provider adapter.
6. `styles`: global CSS variables, reset, typography, utilities, component styles.
7. `tests`: content schema tests, smoke tests, accessibility-focused component tests where practical.

## Content adapter pattern

Create an interface similar to:

```ts
export interface ContentClient {
  getSiteSettings(): Promise<SiteSettings>;
  getNavigation(): Promise<NavigationData>;
  getEvents(params?: EventQuery): Promise<Event[]>;
  getEventBySlug(slug: string): Promise<Event | null>;
  getLandingPageBySlug(slug: string): Promise<LandingPage | null>;
  getPlanVisitTopics(): Promise<PlanVisitTopic[]>;
  getMission(): Promise<MissionPage>;
  getStories(params?: StoryQuery): Promise<Story[]>;
  getStoryBySlug(slug: string): Promise<Story | null>;
  getAlerts(context?: AlertContext): Promise<Alert[]>;
  getForms(): Promise<FormConfig[]>;
}
```

Initial implementation can be `LocalJsonContentClient`. A later CMS can implement the same interface.

## Recommended repository structure

```text
/src
  /app
    /(site)
      /page.tsx
      /events/page.tsx
      /events/[slug]/page.tsx
      /plan-your-visit/page.tsx
      /mission/page.tsx
      /story-hub/page.tsx
      /story-hub/topic/[topic]/page.tsx
      /story-hub/[slug]/page.tsx
      /[...landing]/page.tsx
    /api
      /ai-search/route.ts
  /components
    /global
    /ui
    /events
    /landing
    /plan-visit
    /story-hub
    /forms
  /content
    /fixtures
    /schemas
    client.ts
    local-client.ts
  /integrations
    hubspot.tsx
    external-links.ts
    analytics.ts
  /ai
    knowledge.ts
    search.ts
    provider.ts
  /styles
    globals.css
    tokens.css
```

## Rendering strategy

- Public pages can be statically generated or server-rendered depending on CMS capabilities.
- Event pages should revalidate quickly or use on-demand revalidation because events change often.
- Alerts should be fetched dynamically or revalidated frequently.
- AI search should run server-side to protect credentials.

## SEO and metadata

Each page/content type needs:

- title
- description
- canonical URL
- social image
- robots setting for hidden pages
- structured data where appropriate, especially events

Event detail pages should output structured event metadata when complete.

## Security and safety

- Sanitize CMS HTML blocks or use an allowlist.
- Never expose API keys to client bundles unless explicitly public.
- External URLs should be validated and safely rendered.
- HubSpot embeds should be isolated and fail gracefully.
- AI answers must be constrained to internal sources.

## Performance

- Use responsive images and explicit dimensions.
- Avoid oversized glow/shadow effects causing excessive repaints on mobile.
- Lazy-load below-the-fold images/video embeds.
- Defer third-party scripts until needed.
- Keep carousels simple and accessible; avoid heavy dependencies unless required.

## Testing recommendations

- Content schema validation test for fixtures.
- Route manifest smoke test that checks all routes resolve.
- Component tests for tab system, popovers, and mobile menu.
- Accessibility checks for major templates.
- Unit tests for Plan Your Visit search ranking and no-answer behavior.
