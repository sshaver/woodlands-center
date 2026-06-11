# Design System and Visual Specification

Use the files in `assets/reference-designs/` as the visual source. The implementation should recreate the structure, atmosphere, and interaction patterns rather than using the images as production UI screenshots.

## Reference comp mapping

| File | Use as reference for |
|---|---|
| `HOME ALTv2.jpg` | Desktop event hero/detail-forward home state with featured headliner, top nav, utility CTA buttons, venue policy icons |
| `HOME.jpg` | Desktop home/events carousel state with stacked cards and list/card view toggle |
| `HOMEv2.jpg` | Desktop home/events carousel refinement; duplicate/reference variation of card layout |
| `HOME _ EVENTS.jpg` | Mobile home/events page with event carousel, feature image cards, and bottom navigation |
| `EVENT DETAILv2.jpg` | Desktop event detail page hero; artist title/date/support copy, ticket CTA, policy quick links |
| `M - MENU.jpg` | Mobile slide/panel menu with logo, glowing container, pill-style nav groups |
| `MISSION.jpg` | Desktop Arts Access Mission hero and stats block |
| `MISSIONv2.jpg` | Full-length Arts Access Mission page; mission sections, tab pills, footer mountain shape |
| `ARTS GRANTS.jpg` | Arts funding/grant landing page; video/story block, tabbed funding blocks, two-column image/text cards |
| `PLAN YOUR VISIT AIv2.jpg` | Plan Your Visit page; hero search bar, topic tabs, answer-card grid, email signup, footer |
| `STORY HUB HOMEv2.jpg` | Story Hub; light theme variant, story cards, hero video card, tag filters, footer |

## Visual language

- Overall feel: night-concert atmosphere with black/navy base, electric cyan glow, high-contrast white typography, and large rounded media cards.
- Primary shape language: pill buttons, oversized rounded cards, glowing borders, soft blue outer shadows, and large radial/linear gradients.
- Brand texture: stage lighting, amphitheater audience imagery, mountains/venue silhouette in footer, and clean iconography.
- Primary CTA treatment: filled bright blue rounded pill with subtle highlight and darker border/shadow.
- Secondary CTA treatment: dark/transparent pill with blue border, icon on left, white or muted text.
- Cards: rounded corners, clipped imagery, dark gradient overlays at bottom for text legibility, electric blue glow around active/featured cards.
- Mobile: bottom dock navigation, horizontally swipeable event cards, compact icon+label nav, slide-in menu panel.
- Story Hub: intentionally lighter page background while preserving the blue glow/card language.

## Design tokens

Use CSS custom properties in a global token file. The following token names should exist even if final values are tuned during implementation:

```css
:root {
  --color-black: #000000;
  --color-ink: #05090d;
  --color-navy-950: #03101a;
  --color-navy-900: #071827;
  --color-blue-900: #062c48;
  --color-blue-700: #095a87;
  --color-blue-500: #26a7df;
  --color-blue-400: #40bdf4;
  --color-blue-glow: rgba(64, 189, 244, 0.72);
  --color-white: #ffffff;
  --color-muted: rgba(255, 255, 255, 0.64);
  --color-border-blue: rgba(64, 189, 244, 0.78);
  --shadow-blue-glow: 0 0 24px rgba(64, 189, 244, 0.55), 0 0 60px rgba(59, 91, 255, 0.35);
  --radius-pill: 999px;
  --radius-card-sm: 24px;
  --radius-card-md: 36px;
  --radius-card-lg: 48px;
  --container-max: 1180px;
}
```

## Typography

The comps use a theatrical italic serif for headlines, buttons, labels, and much of the body copy. Implement typography with font variables so the final font can be swapped safely:

- `--font-display`: italic serif display face matching the comps; fallback `Georgia, serif`.
- `--font-body`: readable serif or sans-serif depending on final accessibility review; fallback `Georgia, serif`.
- `--font-ui`: interface font for small metadata, admin-like labels, and screen-reader-friendly utility text; fallback `system-ui, sans-serif`.

Do not embed or redistribute unlicensed font files. If an external web font is selected, load it through normal licensed/web-safe means.

## Layout rules

- Desktop nav: logo at upper left; top-center nav pills for Plan your visit, Events, Arts Access Mission; active nav pill has filled blue gradient.
- Mobile nav: bottom dock with Season Seats, Donate, Events, Visit, Mission; preserve accessible labels and keyboard/focus states.
- Hero sections: full-width image or background treatment with dark gradient overlay and bottom fade.
- Page sections: generous vertical spacing, asymmetrical two-column layouts, and glows behind key image blocks.
- Footer: mountain silhouette/wave footer in bright blue with text links and right-aligned pill actions.
- Cards must never rely on image text; all card copy must be real HTML text.

## Responsive breakpoints

Use a mobile-first implementation with at least these conceptual breakpoints:

- `sm`: 480px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

At `md` and below:

- Event cards become horizontal swipe decks or stacked cards.
- Primary nav collapses into the mobile menu/dock pattern.
- Two-column landing sections stack.
- Large hero type scales down and line-height increases slightly.
- Tab pills must wrap or horizontally scroll with visible focus states.

## Accessibility constraints

- Maintain WCAG contrast for all text, including text over images.
- Provide non-hover access to carousel/list toggles, nav, cards, and popovers.
- Use semantic headings, landmarks, buttons, links, and form labels.
- Video play controls must be keyboard reachable and have accessible names.
- Images need meaningful alt text when content-bearing; decorative glows and silhouettes must be hidden from assistive tech.
- Motion must respect `prefers-reduced-motion`.
- Carousels must not auto-advance unless users can pause them.
