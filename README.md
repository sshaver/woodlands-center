# CWMP Redesign Static Prototype

This repository implements the provided `cwmp_codex_build_package` as a CMS-ready static prototype for The Cynthia Woods Mitchell Pavilion website redesign.

## Local Commands

```bash
npm run build
npm run validate
npm run test
npm run serve
```

The local preview server defaults to [http://127.0.0.1:4321/](http://127.0.0.1:4321/).

## What Is Implemented

- Every non-dynamic route in `cwmp_codex_build_package/data/route_manifest.json`.
- Dynamic generated event details under `/events/[slug]`.
- Dynamic generated Story Hub topic and story detail pages.
- Home / Events template with card and list event display modes.
- Event Detail template with hero, schedule, ticket CTA, and policy links.
- Landing Page template with hero, CTA, tab system, HTML/content card, and story block.
- Mission landing preset with stats, mission video, mission tabs, and hierarchy links.
- Plan Your Visit page with topic tabs and local internal-content AI/search MVP.
- Story Hub light theme with featured story, topic filters, recent cards, and article pages.
- Contact and Get Emails popovers with focus handling and HubSpot-ready placeholders.
- Header, footer, alert banner, mobile menu, and mobile dock.
- `.env.example` placeholders for HubSpot, Ticketmaster/Account Manager, Foundant, DonorPerfect, Acceptd, Paycom, Google Sheets, CMS, and AI provider config.

## Content Model

The local CMS fixture layer lives in:

- `src/content/site-data.mjs`
- `src/content/client.mjs`

The content is organized around the requested collections: events, plan visit topics, mission, stories, blocks, navigation, alerts, forms, season seats, grants, outreach programs, and landing pages. A future CMS adapter can replace `src/content/client.mjs` while preserving the templates and route renderer.

## Asset Handling

The build copies production assets from `cwmp_codex_build_package/assets` into `dist/assets`. Reference design files remain available for visual comparison, but the generated UI uses real HTML, CSS, and production content images from `assets/content-images`, `assets/logos`, `assets/video-placeholders`, and `assets/documents`.

There is no `content_asset_manifest.json` in the package, so the prototype uses the scanned asset folders and explicit fixture mappings. `npm run validate` reports that as a warning.

## Build Output

Generated static files are written to `dist/`. Each route uses an `index.html` file so it can be served from a static host with clean URLs.

## Known Integration Placeholders

External destinations are intentionally not hard-coded with secrets or final vendor URLs. Replace `CONFIGURE_*_IN_CMS` values in the fixture layer or future CMS with production URLs/form IDs before launch.

## Validation

`npm run test` performs syntax checks and validates:

- route fixture coverage against the route manifest;
- event required fields;
- Plan Your Visit sections for search/source links;
- form fallbacks/config placeholders;
- `.env.example` variables;
- generated route files when `dist/` exists.
