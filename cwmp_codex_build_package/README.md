# CWMP Website Codex Build Package

This package contains the instructions, source outline, route manifest, design references, content model, component specs, integration notes, and acceptance checklist needed to hand the website build to Codex.

## How to use this package

1. Give Codex the entire folder.
2. Instruct Codex to start with `prompts/CODEX_MASTER_PROMPT.md`.
3. Treat `docs/SITE_OUTLINE_EXACT.md` as the authoritative outline and `data/route_manifest.json` as the route creation manifest.
4. Use `assets/reference-designs/` as the visual template source.
5. Use `checklists/ACCEPTANCE_CHECKLIST.md` before considering the build complete.


## Adding production images and documents

Put production assets in the new `assets/` folders before handing the package to Codex:

- `assets/content-images/events/` — event heroes, artist photos, event cards.
- `assets/content-images/mission/` — Arts Access Mission and outreach imagery.
- `assets/content-images/plan-your-visit/` — venue, parking, concessions, rules, accessibility imagery.
- `assets/content-images/story-hub/` — story cards and article images.
- `assets/content-images/landing-pages/` — reusable landing-page heroes/supporting images.
- `assets/content-images/staff-board/` — staff, leadership, history, press, employment imagery.
- `assets/content-images/partners-sponsors/` — volunteer, sponsor, partner imagery.
- `assets/logos/` — CWMP, sponsor, and partner logos.
- `assets/icons/` — custom SVG icons.
- `assets/video-placeholders/` — video poster/thumbnail images.
- `assets/documents/maps/` and `assets/documents/decks/` — seating maps, parking maps, sponsorship decks, press kits.

Then copy `data/content_asset_manifest.template.json` to `data/content_asset_manifest.json` and update paths, alt text, rights, and intended uses. Codex has explicit instructions in `docs/ASSET_INTAKE_AND_USAGE.md` to scan that manifest and these folders.

## Key files

- `prompts/CODEX_MASTER_PROMPT.md` — primary copy/paste prompt for Codex.
- `prompts/CODEX_BUILD_TASKS.md` — phased build task list.
- `docs/SITE_OUTLINE_EXACT.md` — extracted outline from the supplied Full Outline document.
- `docs/PROJECT_BRIEF.md` — product brief and non-negotiable requirements.
- `docs/RFP_REQUIREMENTS_SUMMARY.md` — condensed RFP requirements.
- `docs/ROUTE_MAP.md` and `data/route_manifest.json` — page and route map.
- `docs/TEMPLATE_SPEC.md` — template requirements.
- `docs/DESIGN_SYSTEM.md` — visual/design system requirements.
- `docs/CONTENT_MODEL_AND_CMS.md` — CMS/content model spec.
- `docs/COMPONENT_SPEC.md` — component architecture.
- `docs/INTEGRATIONS_AND_AI.md` — external systems and AI search plan.
- `docs/IMPLEMENTATION_PLAN.md` — build phases.
- `docs/ASSET_INTAKE_AND_USAGE.md` — where production images/documents go and how Codex should use them.
- `checklists/ACCEPTANCE_CHECKLIST.md` — completion criteria.
- `assets/reference-designs/` — all supplied design comps.
- `data/full_outline_paragraphs.json` — paragraph-level structured extraction of the outline.
- `data/rfp_paragraphs.json` — paragraph-level structured extraction of the RFP.

## Source files included

- `source-Full Outline.docx`
- `source-Request for Proposal 01.docx`

## Important instruction to Codex

Do not simplify the site structure. Do not omit pages because they seem similar. Implement every item in the outline either as a route, CMS field, tab, CTA, block, collection, or external-link/popover configuration.
