# Content Model and CMS Specification

The backend must support the outline’s required backend setup: Events, Plan Visit, Mission, Stories, Blocks, Header, Footer, SS/Season Seats, Alert, and Emails.

## Principles

- Staff must be able to update content without a developer.
- CTAs and integrations must be configurable.
- Event updates must be fast because events are high-change content.
- Pages should use reusable blocks, not hard-coded one-off layouts.
- All media needs alt text and focal point/crop controls.
- Seasonal visibility controls are required for tabs and outreach programs.

## Core collections

### `events`

Fields:

- `title` string, required. Event Title / Main Artist.
- `slug` string, required, unique.
- `subheader` string. Secondary artists/supporting acts.
- `eventDate` date, required.
- `eventStartTime` time/string.
- `gateOpenTime` time/string.
- `headerImage` media, required for public pages.
- `cardImage` media, optional override.
- `ticketLink` URL, required when tickets are available.
- `bagPolicyLink` relationship or URL.
- `parkingLink` relationship or URL.
- `lawnChairLink` relationship or URL.
- `showSchedule` rich text or structured schedule rows.
- `eventDescription` rich text.
- `eventType` enum: `liveNation`, `performingArts`, `freeCommunity`, `education`, `fundraiser`, `rental`, `other`.
- `isFeatured` boolean.
- `featuredOrder` number.
- `listingStatus` enum: `draft`, `published`, `cancelled`, `postponed`, `soldOut`, `comingSoon`.
- `ctaLabel` string default `Get Tickets`.
- `policyOverrides` rich text/relationship for event-specific rules.
- `seo` object.

### `landingPages`

Fields:

- `title` string.
- `slug` string, unique.
- `templatePreset` enum: `generic`, `mission`, `grants`, `outreach`, `supportArts`, `freeShows`, `footerPage`, `blankFlow`.
- `subtitle` rich text or text.
- `heroImage` media optional.
- `heroVideo` media/embed optional.
- `primaryCTA` CTA object.
- `secondaryCTA` CTA object optional.
- `sections` block array.
- `visibility` enum: `public`, `hidden`, `redirect`, `draft`.
- `seo` object.

### `planVisitTopics`

Fields:

- `title` string, e.g. What to Bring, Rules, Parking.
- `slug` string.
- `icon` string/icon reference.
- `summary` text.
- `sections` array of policy sections.
- `cards` preview cards for the Plan Your Visit grid.
- `aiKeywords` array of strings.
- `aiAnswerPriority` number.
- `lastReviewedAt` date.
- `effectiveDate` date optional.

Policy section fields:

- `heading` string.
- `body` rich text.
- `items` array of text or structured objects.
- `cta` optional.
- `relatedEventTypes` optional.
- `sourceLabel` optional.

### `mission`

Singleton or collection with:

- `title` string.
- `subtitle` rich text.
- `donateCTA` CTA.
- `missionVideo` video object.
- `impactStats` array of stat objects.
- `supportArtsTabs` tab group.
- `fundingTabs` tab group.
- `outreachTabs` tab group.
- `artsShowsTabs` tab group.
- `storyHubCTA` CTA.
- `sections` optional block array.

### `grantPrograms`

Fields:

- `title` string.
- `slug` string.
- `subtitle` text.
- `programType` enum: `professionalDevelopment`, `resources`, `travel`, `artsOrganizations`, `scholarships`.
- `applicationCTA` CTA.
- `quoteHighlight` rich text.
- `tabs` tab group with Qualifications, Dates, Impact, and other program-specific tabs.
- `finalCTA` CTA.
- `relatedStories` relationship.
- `status` enum: `open`, `closed`, `comingSoon`, `archived`.

### `outreachPrograms`

Fields:

- `title` string.
- `slug` string.
- `subtitle` text.
- `programType` enum: `instrumentPettingZoo`, `fineArtsEducationDays`, `hatsOffToReading`, `miniPavilionMaestros`, `artsInActionAwards`, `artsOnTheGo`, `chamberfestStringsCamp`, `scoutDays`, `artsEducators`.
- `primaryCTA` CTA.
- `secondaryCTAs` array.
- `tabs` tab group.
- `seasonalVisibility` object.
- `relatedStories` relationship.

### `stories`

Fields:

- `title` string.
- `slug` string, unique.
- `dek` text.
- `body` rich text / block array.
- `heroImage` media.
- `thumbnail` media.
- `video` optional.
- `topics` array enum/relationship: Arts in Schools, Fans, Shows, Scholarships, Grants, Backstage, Supporters, Outreach.
- `pillars` array optional.
- `featuredSlot` enum: `none`, `hero`, `recent`, `largeFeature`.
- `publishDate` date.
- `author` relationship/string.
- `ctaLabel` string.
- `seo` object.

### `blocks`

Reusable global block collection. Types:

- Header
- Footer
- SS / Season Seats
- Alert
- Stories
- Emails
- Feature Block
- Video Block
- Story Block
- HTML Block
- CTA Band
- Stats Block
- Tab Group
- Event List

### `navigation`

Singletons:

- `headerNav`
- `mobileNav`
- `footerNav`

Fields:

- logo media.
- nav items with label, icon, URL/page relationship, active matching rule, external flag.
- mobile dock items.
- utility links.

### `alerts`

Fields:

- `title` string.
- `message` rich text.
- `severity` enum: `info`, `weather`, `schedule`, `urgent`, `success`.
- `startAt`, `endAt` dates.
- `pages` page relationship or global flag.
- `dismissible` boolean.
- `cta` optional.

### `forms`

Fields:

- `name` string.
- `type` enum: `hubspot`, `externalLink`, `emailLink`, `nativePlaceholder`.
- `portalId` string.
- `formId` string.
- `region` string.
- `externalUrl` URL.
- `emailAddress` string.
- `subject` string.
- `thankYouMessage` rich text.
- `privacyCopy` rich text.

### `settings`

Fields:

- site name.
- logo assets.
- default SEO.
- default social image.
- integration config references.
- feature flags.
- AI assistant settings.

## Shared objects

### CTA

```ts
type CTA = {
  label: string;
  type: 'internal' | 'external' | 'hubspotForm' | 'email' | 'download' | 'popover' | 'accountManager';
  href?: string;
  pageRef?: string;
  formRef?: string;
  popoverId?: 'contact' | 'get-emails';
  openInNewTab?: boolean;
  icon?: string;
  style?: 'primary' | 'secondary' | 'ghost' | 'text';
};
```

### Media

```ts
type Media = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  focalPoint?: { x: number; y: number };
  caption?: string;
  decorative?: boolean;
};
```

### Tab group

```ts
type TabGroup = {
  label?: string;
  display: 'pills' | 'segmented' | 'cards';
  tabs: Array<{
    label: string;
    icon?: string;
    slug: string;
    summary?: string;
    body?: string;
    sections?: Block[];
    ctas?: CTA[];
    isActiveByDefault?: boolean;
    visibility?: 'visible' | 'hidden' | 'disabled' | 'seasonal';
  }>;
};
```

### Block union

```ts
type Block =
  | HeroBlock
  | VideoBlock
  | StatsBlock
  | TabBlock
  | MediaTextBlock
  | RichHtmlBlock
  | StoryBlock
  | EventListBlock
  | SeasonSeatsBlock
  | FeatureBlock
  | CtaBandBlock;
```

## CMS permissions

Minimum recommended roles:

- Admin: all access.
- Editor: create/edit/publish pages, events, stories, media, plan-visit content, alerts.
- Event Editor: events and event media only.
- Story Editor: stories and story media only.
- Viewer: read-only access.

## Publish workflow

- Draft, preview, and publish states for pages/events/stories.
- Scheduled publish/unpublish for alerts and events.
- Preview URLs for draft content.
- Change log/audit trail preferred for policy pages.
