# Template Specification

Build these templates as reusable component assemblies. The CMS/content layer should select the template and provide typed data; page code should not duplicate layout logic.

## A. Home / Events Template

Reference comps: `HOME ALTv2.jpg`, `HOME.jpg`, `HOMEv2.jpg`, `HOME _ EVENTS.jpg`.

### Required sections

1. Global header
2. Featured event hero or event carousel/list region
3. Event list with two display styles
   - card carousel style
   - list/table row style
4. Global feature block
5. Global video block
6. Global season seats block
7. Mobile bottom navigation
8. Footer, when page length requires it

### Event list behaviors

- Support toggling between carousel/cards and list rows, as shown in the comps.
- Event cards must include image, event title, date, and Get Tickets CTA.
- List rows must include event date, title, and Get Tickets CTA.
- Featured/center card must appear larger with stronger glow.
- Hidden side cards may be partially visible on wide screens.
- On mobile, cards should become swipeable with scroll snapping.
- All event data must come from the `events` collection.

### Home page cross-linking

- Include a mission/video feature that links to `/mission`.
- Include story/feature blocks as configured by CMS.
- Include season seats block linking to `/season-seats` or relevant external Account Manager CTA.

## B. Event Detail Template

Reference comp: `EVENT DETAILv2.jpg`.

### Required event fields

- Event Title / Main Artist
- Subheader / Secondary Artists
- Event Date
- Event Start Time
- Gate Open Time
- Header Image
- Ticket Link
- Bag Policy Link
- Parking Link
- Lawn Chair Link
- Show Schedule
- Event Description

### Required UI

- Full-bleed hero using Header Image with dark gradient overlay.
- Top nav consistent with global header.
- Large title with date/time and secondary artists.
- Primary `Get Tickets` CTA.
- Policy quick links for Bag Policy, Parking, Lawn Chairs using icon pills/cards.
- Event metadata and show schedule below the hero.
- Event description body with rich text support.
- Related events or stories optional via CMS block.

## C. Landing Page Template

Reference comps: `MISSION.jpg`, `MISSIONv2.jpg`, `ARTS GRANTS.jpg`.

### Required modules

- Title
- Subtitle
- CTA Button
- Video Block
- HTML Block
- Tab System
- Story Block (Global)

### Landing page content model

Each landing page should support ordered sections. A section can be one of:

- `hero`: title, subtitle, background/media, CTA(s)
- `video`: thumbnail, video source/embed, play label, caption
- `stats`: data highlights
- `tabs`: one or more tab groups with labels, icons, content, CTA(s)
- `mediaText`: image/video + text + CTA(s), left or right alignment
- `html`: rich text/HTML block
- `storyBlock`: featured story cards or story feed
- `eventListing`: filtered event list for free shows or related events
- `ctaBand`: large conversion section
- `footerLinks`: optional supporting links

### Tab system requirements

- Tab labels must be content-managed.
- Tabs can be rendered as pill filters.
- Active tab uses filled/glowing blue treatment.
- Disabled or seasonal tabs can be shown dimmed or hidden based on CMS fields.
- Each tab must be keyboard accessible using proper tab semantics or an accessible disclosure pattern.

## D. Plan Your Visit Template

Reference comp: `PLAN YOUR VISIT AIv2.jpg`.

### Required sections

1. Header/nav
2. Hero title: `Plan your visit`
3. Prompt: `How can we help get you rocking today?`
4. AI search/chat input with arrow submit button
5. Topic tabs: What to Bring, Rules, Parking, Accessibility, Concessions, Ticket Info, Facilities & Rentals
6. Answer-card preview grid
7. Email signup form
8. Footer mountain shape and utility links

### Required behavior

- Users can search common questions, e.g. bag policy, umbrellas, parking locations, show schedules, whether a performer is playing.
- Topic tabs update visible cards/content.
- Cards link to in-page content sections or detail drawers.
- Search results must cite internal content sources by linking to matching sections/pages.
- If the answer depends on event-specific rules, return event-specific content first and general policy second.

## E. Mission Landing Template

Reference comps: `MISSION.jpg`, `MISSIONv2.jpg`.

This may be implemented as a specialized landing page preset using the generic Landing Page blocks.

### Required sections from outline

- Title: Arts access for you. Arts access for all.
- Subtitle exactly as provided in the outline.
- CTA: HubSpot Form / Donate Today depending on final CTA configuration.
- Video: Mission Video.
- Data Highlight: Missional Impact in 2025.
- Sections for Support The Arts, Funding the Arts, Arts Outreach, Arts Shows, and Story Hub.

## F. Story Hub Template

Reference comp: `STORY HUB HOMEv2.jpg`.

### Required sections

- Light theme page shell.
- Story Hub logo/header and Back to Main Site link.
- Featured story/video hero card.
- Recent Stories three-card row.
- Large featured story band.
- Stories by Topic tag filters.
- Footer mountain shape and utility links.

### Story topic filters

Topics from the outline:

- Arts in Schools
- Fans
- Shows
- Scholarships
- Grants
- Backstage
- Supporters
- Outreach

### Story card requirements

- Image or video thumbnail.
- Title.
- Topic/tag metadata.
- CTA label such as `Read the story`, `Watch the Video`, or `Hear from our staff`.
- Publication date optional.
- Featured status optional.

## G. Blank / Flow Template

This is the flexible one-off page template for special events and custom pages.

### Required behavior

- No automatic title.
- CMS-managed HTML/rich text and block stack.
- Can opt into either dark or light theme.
- Can include custom CSS class names from an allow-list.
- Must still use the global header/footer unless explicitly disabled by CMS.
- CSS source for this template and all global CSS must remain available in the repository.

## H. Popover CTA Template

Use for Contact and Get Emails.

### Requirements

- Triggered by footer pills, utility nav, or configured CTAs.
- Modal/popover must be accessible: focus trap, escape to close, close button, labelled title, restored focus.
- Supports HubSpot embed, native form placeholder, or external link fallback.
- CMS fields: title, subtitle, form type, HubSpot portal ID, HubSpot form ID, thank-you message, privacy copy, fallback URL.
