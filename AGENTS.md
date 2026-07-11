# Website content and design guidance

Edit the Astro source in `src/`; do not edit generated `dist/` files. Run `ASTRO_TELEMETRY_DISABLED=1 npm run build` after content or presentation changes.

## Page content

- Shared site metadata and page-hero copy live in `src/data/site.ts`.
- People, teaching, research, and Join-page content live in `src/data/sections.ts`.
- Publication records live in `src/data/publications.ts`, ordered newest to oldest.
- Page rendering lives in `src/components/SectionPageView.astro`.

## People page

- Keep the People-page hero focused on students working across biomedical research, statistical methods, applied AI, and translational science at Massey and Auckland.
- Current students are grouped by research area and display a role plus a short research description.
- Where a LinkedIn URL is known, make the student's name a LinkedIn link that opens in a new tab. Do not invent missing profile URLs.
- Alumni names should also link to LinkedIn where a URL is available.

## Publications page

- Use the hero subtitle: `Recent scholarly outputs.`
- Keep entries in descending year order.
- Use subject-area tags rather than generic impact claims: `epidemiology`, `ml`, and `research` as appropriate.
- Reserve `patent` and `product` for the Misaghi embryo morphokinetic-stage paper only.

## Join page

- State clearly that new students are not being accepted at present and that the next intake is 2028.
- Keep both Massey and Auckland email links visible, with Massey first.
- The email buttons are intentionally crossed out, stacked vertically, and subtly different colours to communicate that applications are unavailable.
