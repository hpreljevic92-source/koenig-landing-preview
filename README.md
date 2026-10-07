# KÖNIG Fachpersonal – Relaunch-Konzept (inoffiziell)
- `content.json`, `audit.md`, `todos.md`, `real-data.md` – Phase 1
- `screenshots/current/` (Original), `screenshots/v1/` (Konzept), `lighthouse/`
- `site/` – Astro 7 + Tailwind 4, statisch, 1 Seite. Fonts selbst gehostet (Inter + Manrope variabel, @fontsource). Bilder AVIF via astro:assets.

## Lokal
    cd site && npm ci && npm run build && npx astro preview   # http://localhost:4321

## Deploy GitHub Pages (erst nach Freigabe!)
    cd site
    SITE_URL=https://<user>.github.io BASE_PATH=/<repo>/ npm run build
    # dist/ in Branch gh-pages pushen, z. B.: npx gh-pages -d dist
    # oder: Repo anlegen, Pages -> "GitHub Actions", Workflow withastro/action nutzen.
Jeder statische Host geht (Netlify, Cloudflare Pages): Build `npm run build`, Output `dist/`.

## Hinweise
- `noindex,nofollow` + robots.txt Disallow (inoffizielles Konzept) → Lighthouse-SEO zeigt deshalb 69. Für Live-Betrieb entfernen → SEO 100.
- Kontaktformular ist Demo (sendet nichts). Honeypot `website`, DSGVO-Checkbox, Clientvalidierung.
- Karte: OSM-iframe erst nach Klick (keine Drittanbieter-Requests vorher). Kein Cookie-Banner nötig.
- Bildnachweis: rawpixel CC0; „Linz Donau Austria“ Lemur1000, Wikimedia Commons, CC0.
