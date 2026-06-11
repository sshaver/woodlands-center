# Asset Intake and Usage Instructions for Codex

This package includes reference mockups in `assets/reference-designs/`. Those files define the visual templates and should not be treated as final site content photography.

Production and editable content assets should be added in the `assets/` tree below before Codex begins implementation.

## Where to put images

Use these folders:

```text
assets/
  reference-designs/          # Already included. Template/layout comps only.
  content-images/
    events/                   # Artist photos, event hero images, event thumbnails.
    mission/                  # Arts Access Mission photography/video thumbnails.
    plan-your-visit/          # Venue, parking, concessions, bag policy, accessibility images.
    story-hub/                # Story cards, featured story images, article images.
    landing-pages/            # Generic landing-page heroes and supporting images.
    staff-board/              # Staff, board, leadership, history, press, work-at-CWMP images.
    partners-sponsors/        # Corporate partner, sponsor, volunteer, donor imagery.
  logos/                      # Logo files, sponsor logos, partner logos.
  icons/                      # Custom SVG icons not provided by the icon library.
  video-placeholders/         # Poster images for videos and embeds.
  documents/
    decks/                    # Sponsorship PDFs, press kits, downloadable decks.
    maps/                     # Seating maps, parking maps, venue maps.
```

## Naming convention

Use lowercase, hyphenated filenames. Include the page or entity, image role, and an optional descriptor/date.

Recommended format:

```text
<section-or-page>--<role>--<descriptor>.<ext>
```

Examples:

```text
assets/content-images/events/motley-crue--hero--2026.jpg
assets/content-images/events/sting--card--2026.jpg
assets/content-images/mission/arts-access--video-poster--student-microphone.jpg
assets/content-images/plan-your-visit/bag-policy--hero--north-plaza.jpg
assets/content-images/story-hub/orchestra-electrified--featured-card.jpg
assets/documents/maps/season-seats--seating-map.pdf
assets/logos/cwmp-logo--white.svg
```

Avoid spaces in new filenames. Keep original high-resolution files if possible, but also allow the build pipeline to generate responsive image sizes.

## Metadata manifest

After adding production images, create or update:

```text
data/content_asset_manifest.json
```

Use this schema:

```json
{
  "assets": [
    {
      "id": "mission-video-poster",
      "path": "assets/content-images/mission/arts-access--video-poster--student-microphone.jpg",
      "type": "image",
      "intended_use": ["mission.hero_video_poster", "home.mission_video_block"],
      "alt": "A student smiles while participating in a Pavilion arts outreach activity.",
      "credit": "The Cynthia Woods Mitchell Pavilion",
      "rights": "CWMP-owned or approved for website use",
      "priority": "required"
    }
  ]
}
```

Required fields: `id`, `path`, `type`, `intended_use`, `alt`, `rights`, and `priority`.

Allowed `type` values: `image`, `logo`, `icon`, `video-poster`, `document`, `map`.

Allowed `priority` values: `required`, `preferred`, `optional`.

## Codex implementation requirements

Codex must:

1. First scan `data/content_asset_manifest.json` if it exists.
2. Then scan `assets/content-images/`, `assets/logos/`, `assets/icons/`, `assets/video-placeholders/`, and `assets/documents/` for additional files.
3. Use the manifest mapping when available instead of guessing image placement.
4. Treat `assets/reference-designs/` as visual guidance only.
5. Never hard-code external image URLs when a local matching asset exists.
6. Implement a reusable image component that supports responsive sizes, lazy loading, explicit dimensions, and meaningful alt text.
7. Surface missing required assets as build warnings with a clear list of missing IDs and recommended filenames.
8. Use safe fallbacks for optional assets, but do not silently substitute reference-design mockups as production content.
9. Preserve image attribution/credit fields in the CMS model where credits are supplied.
10. Generate responsive derivatives or configure the framework image optimizer so large source images are not shipped unoptimized.

## Minimum asset set to gather before build

For a useful first implementation, add:

- Site logo in white SVG or transparent PNG.
- Home/events hero background image.
- At least 6 event card images.
- Event detail hero image sample.
- Mission video poster image.
- Mission/arts access hero image.
- Plan Your Visit background/hero image.
- Story Hub featured image and at least 3 story card images.
- Arts grants/resource image.
- Instrument Petting Zoo image.
- Season seats seating map.
- Parking map.
- Sponsor/partner logos, if the partner/sponsor sections are implemented in the first pass.

## Suggested page-to-folder mapping

| Site area | Preferred folder |
|---|---|
| Home / Events | `assets/content-images/events/` |
| Event Detail Pages | `assets/content-images/events/` |
| Arts Access Mission | `assets/content-images/mission/` |
| Plan Your Visit | `assets/content-images/plan-your-visit/` |
| Story Hub | `assets/content-images/story-hub/` |
| Funding the Arts / Arts Grants | `assets/content-images/landing-pages/` |
| Arts Outreach | `assets/content-images/mission/` or `assets/content-images/landing-pages/` |
| Staff / Leadership / History / Press / Work | `assets/content-images/staff-board/` |
| Sponsors / Corporate Partnership / Volunteer | `assets/content-images/partners-sponsors/` |
| Maps / downloadable files | `assets/documents/maps/` or `assets/documents/decks/` |
