# CMS + HubSpot Implementation

## Architecture

The public site remains the current static frontend. Content can now come from two sources:

- Sanity CMS in production when `SANITY_PROJECT_ID` and `SANITY_DATASET` are configured.
- Local fixtures in `src/content/site-data.mjs` when CMS credentials are missing or a non-required CMS request fails.

HubSpot remains the source of truth for forms, contact capture, email signup and marketing workflows. The CMS stores HubSpot portal IDs, form IDs and fallback URLs, but it does not store submitted form data.

## Environment Variables

Required for CMS-backed builds:

```sh
SANITY_PROJECT_ID=
SANITY_DATASET=production
SANITY_API_VERSION=2025-02-19
SANITY_READ_TOKEN=
SANITY_PREVIEW_DRAFTS=false
SANITY_REQUIRE_CONTENT=false
```

Required for HubSpot form embeds:

```sh
HUBSPOT_PORTAL_ID=
HUBSPOT_REGION=na1
```

Set `SANITY_REQUIRE_CONTENT=true` in CI or production if a failed CMS fetch should fail the build instead of falling back to fixtures.

## Content Model

Singleton documents:

- `settings`: site name, logos, fallback images and external destination URLs.
- `navigation`: desktop nav, utility links, mobile dock and footer links.
- `forms`: HubSpot form configuration for Contact, Get Emails, Season Seats and program-specific CTAs.
- `alert`: global alert banner content.
- `mission`: Arts Access Mission page content, stats, proof story and pathway tabs.
- `seasonSeats`: Season Seats page content, CTAs, pricing slot, seating map and experience tabs.
- `blocks`: global reusable blocks used on the home page and prefooter areas.
- `externalRoutes`: placeholder pages for external destinations.

Collection documents:

- `event`: event listings, event detail pages, ticket links, parking/lawn-chair links, show schedule, text updates and policy overrides.
- `planVisitTopic`: Plan Your Visit tab content and full lower modules.
- `grantProgram`: Arts funding and scholarship pages.
- `outreachProgram`: Arts outreach program pages.
- `landingPage`: flexible pages such as support, staff, history and related routes.
- `story`: Story Hub articles.
- `storyTopic`: Story Hub topic filters.

## Staff Workflows

### Add an event

1. Create a new `event`.
2. Add title, slug, date, start time, gate time, hero image and listing image.
3. Set `listingStatus` to `published` when ready.
4. Add Ticketmaster, parking, lawn-chair and hotel URLs where available.
5. Use `ctaLabel` as `Get Tickets` for paid shows or `RSVP for this Show` for free performing arts shows.
6. Add show schedule rows and any event-specific policy notes.

### Update Plan Your Visit policies

1. Open the relevant `planVisitTopic`.
2. Update the summary for the tab preview.
3. Update `sections` for the full lower modules shown after the tab is selected.
4. Keep each section concise so search answers can quote useful lines.

### Add a story

1. Create a new `story`.
2. Add title, slug, topic, publish date and card image.
3. Write the dek and story body.
4. Set `listingStatus` to `published`.
5. Add a YouTube link when the story hero image should link to a video.

### Edit forms and CTAs

1. Open `forms` to update HubSpot portal IDs, form IDs, regions and fallback URLs.
2. Open `settings.integrations` for external destinations such as Ticketmaster, DonorPerfect, Foundant, Acceptd, Paycom and Google Sheets.
3. Use CTA fields on each document for page-specific labels and links.

### Publish or hide seasonal pages

Use `listingStatus`:

- `draft`: content is not ready.
- `published`: visible in normal builds.
- `hidden`: content can exist but should not be promoted.
- `seasonal`: content is temporarily relevant.
- `archived`: old content preserved for reference.

## Preview Workflow

For a draft-inclusive local preview build:

```sh
npm run build:preview
```

This sets `SANITY_PREVIEW_DRAFTS=true`. Use a read token that can access drafts.

## Migration

Run:

```sh
npm run cms:seed
```

This writes `sanity/seed/cwmp-content.ndjson` from the current fixtures. Import that NDJSON with the Sanity CLI after the project and dataset are created. Slugs are preserved so existing URLs continue to work.

## Testing

Run:

```sh
npm test
```

This validates syntax, builds all static routes, checks generated pages and confirms the CMS fallback path still loads fixture content when credentials are absent.
