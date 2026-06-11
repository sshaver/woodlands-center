# Integrations and AI Search Specification

## External systems

The site currently links to or may integrate with these systems. Build all external destinations as CMS-configurable CTAs or environment variables.

| System | Site uses |
|---|---|
| HubSpot | Forms, email signup, contact, social/CRM workflows |
| Ticketmaster / Account Manager | Event ticket CTAs and Season Seat holder login |
| Foundant | Grant applications |
| DonorPerfect | Donations |
| Acceptd | Scholarship applications |
| Paycom | Work at CWMP and staff/partner login references |
| Google Sheets | Arts On The Go registration placeholder |
| Chamberfest website | Chamberfest registration |
| Email links | Staff/Joan/Laine/Erin/Arts Outreach question CTAs |

## Environment variables

Create `.env.example` with placeholders such as:

```bash
NEXT_PUBLIC_SITE_URL=
HUBSPOT_PORTAL_ID=
HUBSPOT_REGION=
TICKETMASTER_BASE_URL=
ACCOUNT_MANAGER_URL=
FOUNDANT_BASE_URL=
DONORPERFECT_DONATION_URL=
ACCEPTD_APPLICATION_URL=
PAYCOM_URL=
AI_PROVIDER=
AI_API_KEY=
AI_MODEL=
AI_EMBEDDING_MODEL=
CMS_API_URL=
CMS_API_TOKEN=
```

Use exact names only if they match the selected framework. Keep the intent clear.

## HubSpot forms

- Build a `HubspotFormEmbed` component.
- Form IDs should be entered in the CMS per CTA/form block.
- If script loading fails, show a fallback link or contact message.
- Forms required by outline: Season Seats, Plan Your Visit email signup, Arts Access Mission donation/contact CTA if configured, Instrument Petting Zoo host form, Fine Arts Education Days registration, Hats Off reminders, Mini Maestros signup, Arts in Action nominations, Scout Day registration, Arts Educator newsletter signup, Free Shows email signup, Contact popover, Get Emails popover, Rent CWMP booking.

## Ticketmaster / Account Manager

- Event `ticketLink` points to the current official ticket URL.
- Season Seat Holder Login is a configurable Account Manager URL.
- All ticket CTA clicks should be trackable.
- Use external-link safety attributes for new tabs.

## AI search / chat for Plan Your Visit

### Objective

Provide excellent answers to common fan questions such as:

- `What's your bag policy?`
- `Can I bring an umbrella?`
- `Where should I park?`
- `What time do gates open?`
- `Is Poison playing this year?`
- `Can I bring a lawn chair?`

### Knowledge sources

AI answers may use only internal structured content:

- Plan Visit topics and policy sections.
- Events, including title, date, times, schedule, status, and policy overrides.
- Event detail pages.
- Alerts.
- Relevant mission/program content only when query intent indicates it.

### Answer rules

- Prefer exact policy snippets from structured content over generic language.
- If event-specific policy exists, show it before general policy.
- Return a short answer first, then source links/buttons.
- Include links to relevant pages or sections.
- If no reliable answer is available, say so and route to Contact or Box Office information from CMS.
- Do not guess. Do not fabricate event dates, artists, policies, prices, or application windows.
- Respect alert data: active alerts should override stale normal answers.

### Implementation approach

1. Build a `knowledgeChunks` process that indexes CMS content into chunks with fields:
   - `id`
   - `title`
   - `body`
   - `sourceType`
   - `sourceSlug`
   - `url`
   - `keywords`
   - `lastUpdated`
   - `eventDate` optional
   - `priority`
2. For MVP, use keyword/BM25/fuzzy search over local structured content.
3. Add embeddings/LLM answering behind a provider interface when API credentials are available.
4. Always include source links in UI.
5. Log anonymous search queries and no-result queries for staff review.

### UI states

- Empty input prompt.
- Loading animation.
- Answer result with source links.
- Multiple matches / did-you-mean state.
- No confident answer state.
- Error state.

## Analytics events

Create an analytics abstraction so the platform can later plug in GA4, HubSpot tracking, or another tool. Track:

- Ticket CTA clicks.
- Donate CTA clicks.
- Form opens/submits when detectable.
- AI search queries and answer success/no-result.
- Event view toggle usage.
- Story topic filter clicks.
- External link clicks.
- Video play clicks.
