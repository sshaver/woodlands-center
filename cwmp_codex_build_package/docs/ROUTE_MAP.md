# Route Map

Use `data/route_manifest.json` as the implementation source of truth for route creation. Route slugs are defaults that can be revised, but every page, page group, event detail, story detail, popover, and external-link placeholder represented there must exist in the build.

## Primary routes

| Path | Name | Template | Content source |
|---|---|---|---|
| `/` | Home / Events | Home / Events | Events, feature blocks, mission/video block, season seats block |
| `/events` | Events Listing | Home / Events | Events |
| `/events/[slug]` | Event Detail Pages | Event Detail | Events |
| `/season-seats` | Season Seats Landing Page | Landing Page | Landing Pages / SS |
| `/plan-your-visit` | Plan Your Visit | Plan Your Visit | Plan Visit |
| `/mission` | Arts Access Mission Landing Page | Mission Landing | Mission, blocks, stories |
| `/story-hub` | Story Hub | Story Hub | Stories |
| `/story-hub/topic/[topic]` | Stories by Topic | Story Hub by Tag | Stories |
| `/story-hub/[slug]` | Story Detail | Story Detail | Stories |

## Mission subsection routes

Create landing pages for Support the Arts, Funding the Arts, Arts Outreach, and Arts Shows using the reusable Landing Page template. These pages must be CMS-editable and must support title, subtitle, CTA, video block, HTML block, tab systems, stats/data highlights, story block, and related event/story lists.

## Footer routes

Footer content pages use the Landing Page template unless marked as an external link or popover. Footer navigation must include Staff, Leadership, History, Press, Work at CWMP, Rent The Pavilion, Volunteer, Sponsors, Donate, Staff Login, Contact, and Get Emails.
