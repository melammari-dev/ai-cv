# Mouhssine Yacine EL-AMMARI — Portfolio site

Static portfolio and CV site built with vanilla HTML, CSS, and JavaScript. No build step, no dependencies.

Live: [melammari-dev.github.io/ai-cv](https://melammari-dev.github.io/ai-cv/)

---

## Pages

| Page | File | Description |
|---|---|---|
| Home | `index.html` | Hero + skills overview |
| About | `about.html` | Background, values, career timeline |
| CV | `cv.html` | Full experience loaded from JSON |
| Contact | `contact.html` | LinkedIn link + mailto form |

---

## Project structure

```
ai-cv/
├── index.html
├── about.html
├── cv.html
├── contact.html
├── robots.txt
├── sitemap.xml
├── css/
│   └── styles.css          # All styles — mobile-first
├── js/
│   ├── main.js             # Mobile nav toggle
│   ├── i18n.js             # EN/FR language switcher
│   └── cv.js               # Loads and renders CV items from JSON
├── data/
│   └── experiences/
│       ├── manifest.json   # Ordered list of experience files
│       ├── ville-marseille.json
│       ├── groupe-adsn.json
│       ├── tricentis.json
│       ├── traxens.json
│       └── monext.json
└── assets/
    └── logos/              # Company logo images
```

---

## Running locally

The CV data is loaded via `fetch()`, so a local web server is required (the `file://` protocol blocks it).

```bash
# Python 3
python -m http.server 8000

# Node.js (npx)
npx serve .
```

Then open `http://localhost:8000`.

---

## Internationalisation (EN / FR)

Language strings live entirely in `js/i18n.js` under the `STR` object. The active language is persisted in `localStorage` and defaults to the browser language.

To add or edit a string:
1. Open `js/i18n.js`
2. Add/update the key in both `STR.en` and `STR.fr`
3. Add `data-i18n="your.key"` on the HTML element

For HTML content (links inside text), use `data-i18n-html="your.key"` instead.

---

## Adding a CV experience

1. Create a new file in `data/experiences/`, e.g. `my-company.json`:

```json
{
  "order": 6,
  "current": false,
  "logo": "assets/logos/my-company.png",
  "logoAlt": { "en": "My Company logo", "fr": "Logo My Company" },
  "company": { "name": "My Company", "url": "https://my-company.com" },
  "meta": { "en": "2024 — present · Paris, France", "fr": "2024 — aujourd'hui · Paris, France" },
  "role": { "en": "Senior Engineer", "fr": "Ingénieur senior" },
  "bullets": [
    { "en": "First achievement.", "fr": "Première réalisation." }
  ]
}
```

2. Add the file path to `data/experiences/manifest.json`:

```json
{
  "experienceFiles": [
    "data/experiences/ville-marseille.json",
    "data/experiences/my-company.json"
  ]
}
```

Items are sorted by the `order` field (ascending).

---

## SEO

Every page includes:
- `canonical` link, `hreflang` (`en`, `fr`, `x-default`)
- Open Graph and Twitter Card meta tags
- `meta author`, `robots`, `theme-color`
- JSON-LD structured data: `Person` + `WebSite` on the home page, `BreadcrumbList` on inner pages

`robots.txt` and `sitemap.xml` are at the root.

**If you use a custom domain**, update the base URL in:
- `robots.txt` — Sitemap directive
- `sitemap.xml` — all `<loc>` entries
- The `canonical`, `og:url`, `hreflang` tags in all four HTML files
- The `@id` and `url` fields in the JSON-LD blocks

---

## Deploying to GitHub Pages

```bash
git add .
git commit -m "Update site"
git push origin main
```

Then in the repository settings → **Pages** → set source to the `main` branch, root folder.

---

## Licence

Personal portfolio — all content © Mouhssine Yacine EL-AMMARI.
