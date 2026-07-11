---
type: project
status: current-authority
created: 2026-07-11
tags: [website-design, knowlton-co-nz, handoff, slate-theme]
---

# knowlton.co.nz — Slate Theme Build Spec (LLM Handoff)

**Status: CURRENT AUTHORITY.** This supersedes earlier colour explorations in
[[knowlton.co.nz — Design Concept]]. Layout and content model from that note still
hold; only the palette decision is finalised here.

**Chosen direction:** Editorial Index layout (sketch `007`) + **Slate palette**.
**Working files:** `/home/nick/knowlton-sketches/`
- `theme.css` — single source of truth for the palette (link from every page)
- `knowlton-slate/index.html` — canonical home page, already wired to `theme.css`

---

## Non-negotiable decisions (do not revisit without Nick)

1. **Palette is "Slate" — a muted blue-grey charcoal, NOT pure black, NOT navy, NOT white.**
   Nick rejected pure-black (too heavy) and explicitly ruled out plain white-and-blue.
2. **Red/crimson accent stays.** `--accent: #e63946`.
3. **No white backgrounds anywhere.**
4. **The palette lives in ONE file — `theme.css` — and every page links it.**
   Do NOT copy colour values into individual page `<style>` blocks. Change a colour
   once in `theme.css` and the whole site must follow. This was the point of the refactor.
5. **NZ spelling** throughout (modelling, colour, programme, optimise).
6. **Fonts:** Instrument Serif (display, italic accents), Inter (body), JetBrains Mono (labels/mono).
7. **Content is verified — reuse verbatim.** Do not invent people, papers, stats, or dates.
   In particular: **Dr Alex Trevarton's Ngā Puanga Pūtaiao Fellowship is HIS achievement;
   Nick is the named primary mentor** — never phrase it as Nick's fellowship. Same for
   Dr Hossein Jahedi (Nick is statistical mentor).
8. **WyldBloom link** = cyan (`--cyan`), visually distinct, external. Nav button + footer.

## The Slate palette (reference — canonical values in `theme.css`)

| Token | Value | Use |
|---|---|---|
| `--bg` | `#232830` | page background (the "slate") |
| `--bg-2` | `#1e232b` | footer / recessed bands |
| `--surface` | `#2b313a` | raised panels, stat cards |
| `--card` | `#2e343e` | content cards, rows |
| `--text` | `#eae6de` | primary text |
| `--text-2` | `#a7a89f` | body / secondary |
| `--text-3` | `#6f7178` | captions / muted |
| `--accent` | `#e63946` | crimson — primary accent, section labels, buttons |
| `--warm` | `#e9c46a` | gold — sub-taglines, emphasis |
| `--cyan` | `#4fc3e8` | WyldBloom / product links ONLY |
| `--green` | `#4a9b8f` | guideline tag / status |

Translational-outcome tags (`.arc-patent`, `.arc-policy`, `.arc-product`,
`.arc-guideline`, `.arc-teaching`) are also defined in `theme.css` — use those classes
directly on every page so tags stay consistent.

## How every page must be structured

```html
<head>
  <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../theme.css">   <!-- palette + fonts + tag classes -->
  <style>
    /* page-specific LAYOUT only — never colour literals; use var(--token) */
  </style>
</head>
```

Rule: **page `<style>` blocks may only contain layout/structure.** Every colour must be
`var(--token)`. If you need a new colour, add the token to `theme.css`, don't hardcode it.

## Pages to build (same theme, same masthead + footer on each)

Carry the exact masthead and footer from `knowlton-slate/index.html` onto every page.

- [ ] **index.html** — DONE (home). Hero, sticky index rail + stats, embryo band,
      research streams, people directory, publications table, join.
- [ ] **research.html** — expand the four streams into full case studies
      (clinical problem → statistical method → where it landed). Keep the `?`-question framing.
- [ ] **people.html** — full cohort (Massey + Auckland as one), students with research
      questions, postdoc mentoring, completed MSc alumni with destinations.
- [ ] **teaching.html** — course-dropdown sidebar (select a course → materials drop inline).
      Philosophy up top: "If a method can't survive messy data, it doesn't belong in the toolkit."
      Courses: 161762, 161777, 161101, 161251, 297101. Sticky breadcrumb back-nav.
- [ ] **publications.html** — full list as a ruled table, each row tagged with translational
      outcome (patent / policy / product / guideline / teaching). Filterable by tag is a plus.
- [ ] **join.html** — mentorship philosophy, what to send (CV, statement, transcript),
      shared values, what it's like to work in the lab.

## Verification (run before declaring done)

```bash
cd /home/nick/knowlton-sketches
# every page must link the shared theme
grep -L 'theme.css' */index.html *.html 2>/dev/null   # should print nothing
# no colour literals should have crept into page <style> blocks (spot check)
grep -n '#[0-9a-fA-F]\{6\}' knowlton-slate/index.html  # should only match inside theme.css, not here
# render + eyeball each page
npx playwright screenshot --full-page --viewport-size=1440,900 knowlton-slate/index.html slate-home.png
magick slate-home.png -quality 90 slate-home.jpg
```

Then confirm: no unstyled/default-blue links (would mean the CSS link failed), no white
backgrounds, red accent present, gold sub-tagline present, tags coloured correctly.

## Related
- [[knowlton.co.nz — Design Concept]] — layout rationale, content inventory, tagline decision
- [[8 Best Academic Lab Websites — Impact Media Lab]] — design patterns
- [[Gribble 2025 — How to design your academic website]]
