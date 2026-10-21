# Knowlton Lab Website

This repository contains the source for https://knowlton.co.nz, rebuilt with Astro and Tailwind CSS.

## Stack

- Astro for static site generation
- Tailwind CSS 4 via the Vite plugin
- English-only pages at the canonical domain

## Local development

```bash
npm install
npm run dev
```

Use Node 22 or newer. The current local machine image available in this session only exposes Node `0.12.2`, so dependency installation and Astro validation could not be completed here.

## Content model

- Shared site copy and navigation live in `src/data/site.ts`
- Selected publications live in `src/data/publications.ts`
- Static assets that must ship as-is live in `public/`

## Notes

The untranslated /mi/ mirror is retired. Former URLs require permanent redirects at the Cloudflare edge.
