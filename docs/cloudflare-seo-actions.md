# Cloudflare manual follow-up

**Not configured by this GitHub pull request.**

Set exact HTTP 301 redirects at the Cloudflare zone for knowlton.co.nz, preserving query strings:

| Previous path | Destination |
|---|---|
| /mi/ | / |
| /mi/about/ | /about/ |
| /mi/research/ | /research/ |
| /mi/students/ | /students/ |
| /mi/teaching/ | /teaching/ |
| /mi/publications/ | /publications/ |
| /mi/join/ | /join/ |

Test each redirect with `curl -IL`: a single 301 followed by 200 at the canonical English route. Do not block /mi/ in robots.txt. Add non-trailing-slash variants only if they are reachable or observed in historical links.

Cloudflare Email Address Obfuscation was reported by the audit. The Astro site already renders public Massey and Auckland addresses. Disable the obfuscation feature for the public Join/footer paths or the zone, then verify raw returned HTML contains the public mailto anchors. Preserve the current Join intake notice.

After deploying the Astro pull request, verify:
- /llms.txt is 200 text/plain.
- no English page advertises an /mi/ canonical or alternate.
- /sitemap-index.xml and underlying sitemaps omit /mi/.
- /teaching/ links straight to /161324/.
- /161777/ remains a noindex compatibility stub.

Cloudflare and Search Console actions remain **unverified** until performed and checked.
