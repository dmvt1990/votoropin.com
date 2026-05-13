# votoropin.com

Personal site of Dmitry Votoropin, CFA. Built with [Astro](https://astro.build/),
deployed as a static site to a VPS behind Cloudflare.

## What this site is

- **/** — landing page with positioning and links to both indices
- **/cv** — full CV with photo, experience, credentials, capabilities
- **/indices/rhix** — Russian Healthcare Index methodology, live levels, constituents
- **/indices/ritix** — Russia IT Index methodology, performance, constituents
- **/notes** — occasional writing on index design and portfolio construction
- **/contact** — email & social links

## Tech stack

- **Astro 4** — static site generator, zero JS by default
- **Tailwind CSS** — utility-first styling
- **MDX** — methodology and notes written as markdown
- **ECharts** — interactive charts (loaded as a client-side island)
- **TypeScript** — strict mode
- **Nginx** — static file serving on the VPS
- **Cloudflare** — CDN, TLS at the edge, DDoS protection
- **Let's Encrypt** — origin TLS via certbot, end-to-end encryption

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:4321

## Build

```bash
npm run build      # outputs to ./dist
npm run preview    # serve dist locally
```

## Project structure

```
src/
├── content/             # MDX content
│   ├── indices/         #   methodology docs (rhix.mdx, ritix.mdx)
│   ├── notes/           #   blog posts
│   └── config.ts        #   schemas
├── data/                # TypeScript data files
│   ├── rhix-constituents.ts
│   ├── ritix-constituents.ts
│   └── timeseries.ts    #   historical level series
├── components/          # Astro components
├── layouts/             # Page layouts
├── pages/               # File-based routing
│   ├── index.astro      #   /
│   ├── cv.astro         #   /cv
│   ├── contact.astro    #   /contact
│   ├── indices/[slug].astro    # /indices/rhix, /indices/ritix
│   └── notes/
│       ├── index.astro          # /notes
│       └── [slug].astro         # /notes/<slug>
└── styles/global.css

public/                  # static assets served as-is
├── favicon.svg
├── robots.txt
├── images/              # add photo.jpg here
└── downloads/           # CV PDF, methodology PDFs

deploy/                  # production config
├── nginx.conf           # Nginx config for the VPS
├── SETUP.md             # first-time VPS setup guide
└── deploy.sh            # build + rsync script
```

## How to update content

### Add a new note (blog post)

Create `src/content/notes/your-slug.mdx`:

```markdown
---
title: "Your post title"
summary: "One-line summary for the index page card."
date: "2026-05-14"
tag: "Methodology"   # or Weighting, Data, Markets, Portfolio
readMinutes: 5
draft: false          # set true to keep unpublished
---

Your content here, in Markdown / MDX.

## Section heading

Paragraph...
```

Build & deploy. The post appears at `/notes/your-slug`.

### Update index constituents

Edit `src/data/rhix-constituents.ts` or `ritix-constituents.ts`. Update
the `*_AS_OF` constant to the new rebalance date and the
constituents array. The site picks the change up at the next build.

### Update index time-series

For now, `src/data/timeseries.ts` generates synthetic placeholder
series. When you have real data:

1. Drop a CSV with `date,level` columns into `src/data/rhix.csv`.
2. Replace the body of `RHIX_SERIES` with a parser:

```ts
import csv from "./rhix.csv?raw";
export const RHIX_SERIES = csv
  .trim()
  .split("\n")
  .slice(1)
  .map((row) => {
    const [date, level] = row.split(",");
    return [date, parseFloat(level)] as [string, number];
  });
```

### Edit methodology

Open `src/content/indices/rhix.mdx` or `ritix.mdx`. Update the frontmatter
(version, date) and the body. Commit & deploy.

### Replace the CV photo

Drop the photo at `public/images/photo.jpg` (3:4 portrait, ~800×1067).
Then in `src/pages/cv.astro` find the placeholder `<div>` (search for
"PHOTO") and replace it with:

```html
<img src="/images/photo.jpg" alt="Dmitry Votoropin"
     class="aspect-[3/4] w-full object-cover rounded-sm" />
```

### Add the CV PDF

Drop `votoropin-cv.pdf` into `public/downloads/`. The links on the CV
and Contact pages already point there.

## Deploy

First-time VPS setup: see [`deploy/SETUP.md`](deploy/SETUP.md).

Routine deploys:

```bash
./deploy/deploy.sh
```

This builds locally and rsyncs `dist/` to the server.

## License

Code: MIT. Content (methodology documents, CV, notes): all rights reserved.
