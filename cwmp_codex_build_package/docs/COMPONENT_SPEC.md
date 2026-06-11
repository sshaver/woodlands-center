# Component Specification

Use these component boundaries so Codex can build a maintainable front end. Component names are suggestions; keep the responsibilities intact.

## App shell

- `SiteShell`: wraps pages with header, mobile dock, alert bar, footer, and popovers.
- `GlobalHeader`: desktop logo/nav pills; active state; utility icons.
- `MobileDockNav`: fixed bottom mobile nav matching `HOME _ EVENTS.jpg`.
- `MobileMenuPanel`: menu overlay matching `M - MENU.jpg`.
- `FooterMountains`: footer links, right-side CTA pills, mountain silhouette.
- `AlertBanner`: CMS-driven alert with severity and dismissal state.
- `PopoverCTA`: contact/email modal.

## UI primitives

- `GlowButton`: primary/secondary/ghost pill button.
- `IconPill`: pill nav/filter with icon.
- `GlowCard`: rounded card with glow border/shadow.
- `MediaCard`: image/video card with gradient overlay and text.
- `VideoPlayButton`: accessible play overlay.
- `TabPills`: accessible tab/filter system.
- `StatStrip`: horizontal stat/data highlight strip.
- `RichText`: safe rich text renderer.
- `HtmlBlock`: allowlisted HTML renderer for CMS-managed content.
- `SectionHeading`: consistent title/subtitle/eyebrow CTA layout.

## Events components

- `EventHeroHome`: featured event hero for home.
- `EventCarousel`: large center card with side cards and scroll snapping.
- `EventListRows`: list style rows with date, title, ticket CTA.
- `EventViewToggle`: card/list toggle buttons.
- `EventCard`: reusable event card.
- `EventDetailHero`: full event detail hero with artist/date/ticket CTA.
- `EventPolicyQuickLinks`: Bag Policy, Parking, Lawn Chairs links.
- `ShowSchedule`: structured schedule list.
- `RelatedEvents`: optional block.

## Landing page components

- `LandingHero`: title/subtitle/CTA/media background.
- `MissionHero`: landing hero preset for Arts Access Mission.
- `VideoFeatureBlock`: large rounded thumbnail/video embed.
- `MediaTextFeature`: two-column image/text/CTA block.
- `StoryBlock`: story cards/bands fed by story collection.
- `SeasonSeatsBlock`: global season seats promo.
- `FeatureBlock`: global feature/promo block.
- `StatsBlock`: data highlight bar.
- `CtaBand`: conversion section.
- `BlockRenderer`: renders CMS block arrays.

## Plan Your Visit components

- `PlanVisitHero`: title, prompt, search bar.
- `AiSearchBox`: input, submit button, loading/result/error states.
- `PlanVisitTopicTabs`: topic filters.
- `PlanVisitAnswerGrid`: answer cards.
- `PolicySection`: content sections for policies.
- `EmailSignupInline`: email field and submit arrow.

## Story Hub components

- `StoryHubShell`: light theme layout.
- `StoryHeroCard`: featured story/video card.
- `RecentStoryGrid`: three-card recent stories section.
- `LargeStoryFeature`: wide feature band.
- `StoryTopicFilters`: tag/topic pills.
- `StoryCard`: card variant for story lists.
- `StoryDetail`: article/video page.

## Forms and integrations

- `HubspotFormEmbed`: loads HubSpot form using configured portal/form IDs.
- `ExternalCtaLink`: secure external link with `rel="noopener noreferrer"` when opening new tab.
- `DownloadCta`: deck downloads/press assets.
- `EmailCta`: mailto links from CMS-managed email addresses.

## Data and utility modules

- `content/client`: interface to fetch CMS data or local fixtures.
- `content/schemas`: TypeScript types or zod schemas for content validation.
- `ai/knowledge`: transforms events, policies, pages, and stories into retrievable chunks.
- `ai/answer`: constrained answer function for Plan Your Visit search.
- `seo/metadata`: creates page metadata from CMS fields.
- `analytics/events`: CTA click and search tracking hooks.

## Required states

For all async/dynamic components implement:

- Loading state.
- Empty state.
- Error state.
- Draft/preview support where relevant.
- Keyboard focus state.
- Reduced-motion mode.
