# Project Brief for Codex

## Organization

The Cynthia Woods Mitchell Pavilion is a 501(c)(3) nonprofit organization serving the Greater Houston area through a 16,000+ capacity amphitheater, 70+ annual performances, free arts performances, arts educator grants, student scholarships, and arts education programs.

## Site purpose

Build a redesigned website that balances two large audience needs:

1. Fans and guests who need fast access to tickets, event details, parking, rules, bag policy, schedules, concessions, and accessibility information.
2. Donors, educators, families, volunteers, partners, press, and staff who need clear paths into The Pavilion’s nonprofit mission, arts access programs, stories, grants, scholarships, and support opportunities.

## Project goals

- Create a visual overhaul that follows the provided design comps.
- Simplify information architecture while preserving the exact outline in `docs/SITE_OUTLINE_EXACT.md`.
- Make the site highly editable by Pavilion staff because content changes occur multiple times per day.
- Create landing pages that convert toward many outcomes: ticket purchase, email sign-up, giving, volunteering, program registration, grant/scholarship applications, and event attendance.
- Create a flexible blank/flow template for one-off experience pages such as a gala.
- Reduce contact requests by making answers easier to find.
- Increase engagement through stronger wayfinding, interactive blocks, and story/event cross-linking.
- Make desktop and mobile implementations equally strong.

## Required template families

1. Home / Events
2. Event Detail
3. Landing Pages
4. Plan Your Visit
5. Story Hub
6. Popover CTA
7. Blank / Flow

The outline also calls out these reusable global blocks: event list in two display styles, feature block, video block, season seats block, tab system, story block, HTML block, alert block, header, footer, and email/contact popovers.

## Non-negotiable implementation requirements

- Use the exact site structure and page/content requirements in `docs/SITE_OUTLINE_EXACT.md`.
- Use the visual direction in `assets/reference-designs/` as the template source.
- Build a CMS-friendly content model. Staff should be able to update events, pages, plan-your-visit topics, stories, blocks, header/footer navigation, season seats content, alerts, and email/contact forms without code edits.
- Keep all CSS source available in the repository. Do not deliver only minified CSS. The outline explicitly asks whether the site owner can access the CSS once produced; the answer in implementation must be yes.
- Make external integrations configurable rather than hard-coded.
- Make the site accessible, responsive, keyboard navigable, and usable without hover-only interactions.
- Preserve the ability to host or embed video.
- Implement AI search/chat for Plan Your Visit and event/policy questions with a controlled knowledge base.

## Recommended build assumption

Unless a different stack is already chosen, implement the build as a TypeScript React/Next-style application with a CMS/data abstraction layer. Use local JSON fixtures first, then plug in the selected CMS adapter. This lets Codex build the front end and content model even before final hosting/CMS decisions are locked.

If choosing a CMS during implementation, prioritize:

- editor-friendly admin screens;
- strong structured content fields;
- draft/publish workflows;
- image/media management;
- roles and permissions;
- webhooks or cache revalidation;
- low friction for staff who update content 3-5 times per day.

## Integration placeholders

Use CMS-configurable external links or environment variables for:

- HubSpot Forms, email, social, and CRM;
- Ticketmaster or Account Manager for Season Seat holders;
- Foundant grant applications;
- DonorPerfect donations;
- Acceptd scholarship applications;
- Paycom and scheduling login;
- Google Sheets registration links;
- Chamberfest website;
- staff email CTAs.

Do not fake integration secrets or API keys. Create typed config placeholders and document required environment variables.
