# Acceptance Checklist

## Source adherence

- [ ] `docs/SITE_OUTLINE_EXACT.md` has been implemented as the source of truth.
- [ ] Every route in `data/route_manifest.json` exists or is intentionally redirected/external with CMS-configurable destination.
- [ ] Every page title, subtitle, CTA, tab group, and field listed in the outline has a place in the CMS/data model.
- [ ] Required Templates section is implemented: Home / Events, Event Detail, Landing Pages, Blank Page, Story Hub.
- [ ] Backend Set-Up section is implemented: Events, Plan Visit, Mission, Stories, Blocks, Header, Footer, SS, Alert, Emails.

## Template coverage

- [ ] Home / Events supports event list in two styles.
- [ ] Home / Events includes global Feature Block, Video Block, and Season Seats Block.
- [ ] Event Detail includes title/main artist, secondary artists, event date, start time, gate time, header image, ticket link, policy links, schedule, and description.
- [ ] Landing Page supports title, subtitle, CTA button, video block, HTML block, tab system, and story block.
- [ ] Blank / Flow has no forced title and supports HTML/rich content.
- [ ] Story Hub supports stories by tags/topics.
- [ ] Plan Your Visit supports AI/search and topic tabs.
- [ ] Popover CTA supports Contact and Get Emails.

## Design match

- [ ] Desktop home/events resembles `HOME ALTv2.jpg`, `HOME.jpg`, and/or `HOMEv2.jpg`.
- [ ] Mobile home/events resembles `HOME _ EVENTS.jpg`.
- [ ] Event detail resembles `EVENT DETAILv2.jpg`.
- [ ] Mobile menu resembles `M - MENU.jpg`.
- [ ] Mission page resembles `MISSION.jpg` and `MISSIONv2.jpg`.
- [ ] Arts grants/funding page resembles `ARTS GRANTS.jpg`.
- [ ] Plan Your Visit resembles `PLAN YOUR VISIT AIv2.jpg`.
- [ ] Story Hub resembles `STORY HUB HOMEv2.jpg` and uses the light theme variant.
- [ ] Buttons, cards, glows, gradients, rounded corners, image overlays, and footer mountains are implemented as reusable CSS/components.

## CMS/editability

- [ ] Events can be created, edited, ordered, featured, published/unpublished, and linked to tickets.
- [ ] Plan Visit topics and policies can be edited by staff.
- [ ] Landing page block order can be edited.
- [ ] Stories can be tagged and featured.
- [ ] Header, footer, mobile nav, and popover content are editable.
- [ ] Alerts can be scheduled.
- [ ] Email/contact forms can be configured.
- [ ] CSS source is present and editable in the repository.

## Integrations

- [ ] HubSpot form component accepts portal/form IDs from config/CMS.
- [ ] Ticket CTAs are configurable per event.
- [ ] Season Seat holder login is configurable.
- [ ] Foundant, DonorPerfect, Acceptd, Paycom, Google Sheets, Chamberfest, and email CTAs are configurable.
- [ ] `.env.example` documents required environment variables.
- [ ] External links open safely when configured for new tabs.

## AI/search

- [ ] Plan Your Visit search indexes internal policy content.
- [ ] Search indexes event names, dates, times, schedule, and event-specific policy overrides.
- [ ] Search indexes active alerts.
- [ ] Answers include source links.
- [ ] No-answer state routes users to contact/help.
- [ ] The code separates MVP local search from future LLM/vector provider.

## Accessibility

- [ ] Semantic landmarks are present.
- [ ] Heading order is logical.
- [ ] Keyboard navigation works for header, mobile menu, tabs, carousels, popovers, forms, and video controls.
- [ ] Focus states are visible.
- [ ] Popovers trap focus and close with Escape.
- [ ] Color contrast passes for text over images and gradient backgrounds.
- [ ] Images have alt text or are marked decorative.
- [ ] Carousels do not auto-advance without controls.
- [ ] Reduced-motion preference is respected.
- [ ] Forms have labels and error states.

## Performance and quality

- [ ] Images use responsive sizing and optimization.
- [ ] Fonts are loaded responsibly and have fallbacks.
- [ ] No production UI text is flattened into screenshots.
- [ ] Build passes.
- [ ] Type checking passes.
- [ ] Linting passes.
- [ ] Content schema validation passes.
- [ ] Basic route/page smoke tests pass.
- [ ] README explains local development and deployment assumptions.
