# Codex Master Prompt — Build The Cynthia Woods Mitchell Pavilion Website

You are building the redesigned website for The Cynthia Woods Mitchell Pavilion from the supplied specification package. Read every referenced file before coding.

## Start here

1. Read `docs/SITE_OUTLINE_EXACT.md`. This is the authoritative outline. The bullet and sub-bullet hierarchy defines the required site structure, pages, content requirements, tabs, CTAs, and backend setup.
2. Read `data/route_manifest.json`. Create every route, popover, external-link placeholder, and template mapping listed there.
3. Read `docs/TEMPLATE_SPEC.md`, `docs/DESIGN_SYSTEM.md`, `docs/CONTENT_MODEL_AND_CMS.md`, `docs/COMPONENT_SPEC.md`, `docs/INTEGRATIONS_AND_AI.md`, and `docs/IMPLEMENTATION_PLAN.md`.
4. Inspect all reference images in `assets/reference-designs/`. Use them as the visual template source.
5. Read `docs/ASSET_INTAKE_AND_USAGE.md`. If `data/content_asset_manifest.json` exists, use it to map production assets to pages/components. If it does not exist, scan the production asset folders and report missing required assets clearly.

## Build objective

Create a responsive, CMS-ready website that follows the outline exactly and recreates the provided design system:

- dark concert/mission pages with electric blue glow, pill nav, large rounded cards, gradient image overlays, serif italic display typography, and mobile bottom navigation;
- a light Story Hub variant with blue glow cards and topic filters;
- a Plan Your Visit page with AI question input and topic-based answers;
- reusable page templates and content blocks so Pavilion staff can update content frequently without developer support.

## Required templates

Implement these template families:

1. Home / Events
2. Event Detail
3. Landing Pages
4. Plan Your Visit
5. Story Hub
6. Popover CTA
7. Blank / Flow

Also implement these global/reusable blocks:

- Event List with two display styles: carousel/cards and list rows.
- Feature Block.
- Video Block.
- Season Seats Block.
- Story Block.
- HTML/Rich Text Block.
- Tab System.
- Stats/Data Highlight Block.
- Alert Banner.
- Header, Footer, Mobile Dock, Mobile Menu.

## Data/CMS requirement

Build a structured content layer. If no CMS is selected in the repo, implement local JSON fixtures and a typed adapter so a CMS can be plugged in later.

Required content areas:

- Events
- Plan Visit
- Mission
- Stories
- Blocks
- Header
- Footer
- SS / Season Seats
- Alert
- Emails / Forms

Staff must be able to update event listings/detail pages, plan-visit policies, landing pages, story hub content, header/footer links, global blocks, alerts, and form/CTA destinations without code changes once a CMS is connected.

## Route requirements

Use `data/route_manifest.json` for the route list. At minimum, implement:

- `/` and `/events`
- `/events/[slug]`
- `/season-seats`
- `/plan-your-visit`
- `/mission`
- all mission/support/funding/outreach/arts-show pages in the route manifest
- `/story-hub`, `/story-hub/topic/[topic]`, `/story-hub/[slug]`
- footer pages: staff, leadership, history, press, work-at-cwmp, rent, volunteer, sponsors
- external link placeholders: donate, staff login
- popovers: contact, get emails

## Visual requirements

Use the design comps in `assets/reference-designs/` as follows:

- Home/Events desktop: `HOME ALTv2.jpg`, `HOME.jpg`, `HOMEv2.jpg`
- Home/Events mobile: `HOME _ EVENTS.jpg`
- Event Detail: `EVENT DETAILv2.jpg`
- Mobile menu: `M - MENU.jpg`
- Arts Access Mission: `MISSION.jpg`, `MISSIONv2.jpg`
- Arts Grants/Funding: `ARTS GRANTS.jpg`
- Plan Your Visit: `PLAN YOUR VISIT AIv2.jpg`
- Story Hub: `STORY HUB HOMEv2.jpg`

Do not flatten UI into images. All text, buttons, cards, tabs, and nav items must be real accessible HTML. Treat `assets/reference-designs/` as template references only. Production content images belong in `assets/content-images/`, `assets/logos/`, `assets/video-placeholders/`, and `assets/documents/`; follow `docs/ASSET_INTAKE_AND_USAGE.md`.

## Accessibility and UX rules

- Use semantic HTML landmarks and heading order.
- All interactive controls must be keyboard accessible.
- All tab systems must be accessible.
- Popovers must trap focus, restore focus on close, and close via Escape.
- Images need alt text unless decorative.
- Text over imagery must have sufficient contrast.
- Mobile navigation and carousel interactions must work with touch and keyboard.
- Respect `prefers-reduced-motion`.

## Integrations

Create placeholders/configuration for:

- HubSpot forms
- Ticketmaster / Account Manager
- Foundant
- DonorPerfect
- Acceptd
- Paycom
- Google Sheets
- external email CTAs
- AI provider/API credentials

Do not invent secrets. Use `.env.example` and CMS-configurable fields.

## AI search requirement

Implement Plan Your Visit AI/search as an MVP using internal content only:

- index plan-visit topics, policies, events, event schedule data, and active alerts;
- answer common questions with a short answer and source links;
- do not guess when the content does not contain an answer;
- support event-title searches such as whether an artist is playing;
- structure the code so an LLM/vector provider can be added behind a clean interface.

## Done means

- Every route in `data/route_manifest.json` exists.
- Every required outline item in `docs/SITE_OUTLINE_EXACT.md` is represented either as a page, field, tab, CTA, block, collection, or fixture content.
- The required templates and blocks exist and are reusable.
- The responsive layouts visually follow the provided comps.
- The CMS/data model supports staff editing without code changes.
- CSS source is present and editable.
- The site builds successfully, passes type/lint checks, and has basic tests or validation for content schemas.
- `checklists/ACCEPTANCE_CHECKLIST.md` can be completed without major gaps.
