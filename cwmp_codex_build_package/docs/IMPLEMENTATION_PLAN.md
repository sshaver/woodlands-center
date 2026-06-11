# Implementation Plan for Codex

This plan assumes Codex will build a repository from the specs in this package.

## Phase 0 — Read source material

1. Read `prompts/CODEX_MASTER_PROMPT.md` first.
2. Read `docs/SITE_OUTLINE_EXACT.md` and treat it as the authoritative site structure/content requirement.
3. Read the template/design docs.
4. Inspect all files under `assets/reference-designs/`.
5. Use `data/route_manifest.json` to create routes.

## Phase 1 — Project setup

- Create app with TypeScript.
- Add routing for every route in `data/route_manifest.json`.
- Add linting, formatting, type checking, and basic tests.
- Add global CSS tokens and design system variables.
- Add local fixture data from content model to unblock UI work.
- Add `.env.example` with integration placeholders.

## Phase 2 — Data layer and content schemas

- Create typed content models for Events, Landing Pages, Plan Visit Topics, Mission, Grant Programs, Outreach Programs, Stories, Blocks, Navigation, Alerts, Forms, and Settings.
- Create a CMS/data access abstraction with local JSON fixtures.
- Add validation so missing required content is visible during development.
- Create seed fixture content for all outline pages, even if some bodies are placeholders pending final copy.

## Phase 3 — Global shell

- Build global header, mobile dock, mobile menu, footer mountain section, alert banner, and popover CTA.
- Implement active nav states and responsive behavior.
- Ensure all nav/menu/popover interactions are keyboard accessible.

## Phase 4 — Core templates

Build templates in this order:

1. Home / Events
2. Event Detail
3. Landing Page / Block Renderer
4. Plan Your Visit
5. Mission Landing preset
6. Story Hub / Story Detail
7. Blank / Flow
8. Popover CTA

## Phase 5 — Pages and content wiring

- Use `data/route_manifest.json` to map routes to templates and content.
- Implement all pages from the outline.
- Wire page CTAs to configurable placeholder URLs/forms.
- Ensure seasonal/hidden tabs work.
- Ensure the Free Community Shows landing page can list filtered events and link to event detail pages.

## Phase 6 — AI search MVP

- Build local knowledge chunk generation from Plan Visit topics, Events, Alerts, and policy content.
- Implement client/server search endpoint.
- Return short answer, supporting sources, and CTA links.
- Add no-result/fallback behavior.
- Add provider interface for later LLM integration.

## Phase 7 — Responsive and accessibility QA

- Match desktop reference comps at wide breakpoints.
- Match mobile reference comps for Home/Events and Menu.
- Validate keyboard navigation, focus states, semantic headings, alt text, tab roles, and color contrast.
- Test reduced-motion preference.
- Test with empty/missing optional content.

## Phase 8 — Integration readiness

- Confirm HubSpot form embed path.
- Confirm external link fields and environment variable placeholders.
- Confirm event ticket CTAs and season seat login are editable in CMS/fixtures.
- Confirm `CSS` source is accessible in the repo.
- Document how to add/update each content type.

## Phase 9 — Acceptance checklist

Run through `checklists/ACCEPTANCE_CHECKLIST.md` before delivery.

## Deliverables Codex should produce

- Source repository.
- Local run instructions.
- Build/deploy instructions.
- CMS/content editing documentation.
- `.env.example`.
- Fixture data for all pages.
- Screenshot or preview notes comparing implemented templates to reference images.
- Known limitations list for any missing external credentials/content.
