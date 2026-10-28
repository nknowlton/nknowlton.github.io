# Claude instructions for knowlton.co.nz

Follow `AGENTS.md` for content and design rules.

## Workflow

- Commit and push directly to `master`. Do not open pull requests or work on feature branches.
- Pushing to `master` triggers "Deploy Astro Site", which publishes to GitHub Pages in about a minute.
- The "Astro SEO checks" workflow only runs on pull requests, so run the same checks locally before every push:

```bash
npm ci
npm run check
ASTRO_TELEMETRY_DISABLED=1 npm run build
npm run seo:check
```
