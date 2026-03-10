# Knowlton Lab Website

This repository contains the source for https://knowlton.co.nz, rebuilt with Astro and Tailwind CSS.

## Stack

- Astro for static site generation
- Tailwind CSS 4 via the Vite plugin
- Locale-aware routing with English at `/` and a secondary locale at `/mi/`

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

The multilingual setup is route-based and keeps English as the canonical root experience while allowing additional locales to be expanded incrementally.
