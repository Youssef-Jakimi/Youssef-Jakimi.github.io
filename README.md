# Youssef Jakimi — Portfolio

Personal brand site for **Youssef Jakimi**, positioned as an **AI Systems Engineer**.
Dark, cinematic, motion-driven. Built to impress recruiters, founders, and technical reviewers.

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** — custom dark / electric-indigo design system
- **Framer Motion** — component motion, kinetic headline, scroll-linked parallax
- **Lenis** — smooth scroll (auto-disabled under `prefers-reduced-motion`)
- Custom **canvas aurora** background (no WebGL) + custom cursor

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the build
```

## Structure

```
src/
  app/                 layout, page, globals.css, sitemap, robots, OG image
  components/
    layout/            Navbar, Footer
    sections/          Hero, Stats, Work, ProjectCard, CaseStudy,
                       Capabilities, Stack, About, Contact
    ui/                Reveal, SectionHeading, MagneticButton,
                       AuroraBackground, Cursor
  lib/                 data.ts (all content), utils.ts
  providers/           SmoothScroll (Lenis)
```

## Editing content

All copy, projects, stats, timeline and stack live in [`src/lib/data.ts`](src/lib/data.ts).
Change the `SITE.url` there before deploying (used by metadata, sitemap, robots, OG).

## Deploy — GitHub Pages (root repo)

The site is configured for **static export** (`output: 'export'` → `out/`) and ships a
GitHub Actions workflow that builds and deploys on every push to `main`.

1. Create a repo named **`Youssef-Jakimi.github.io`** (exact name = served at the root domain).
2. Push this project to its `main` branch.
3. In the repo: **Settings → Pages → Build and deployment → Source = GitHub Actions**.
4. Done. Each push runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) and
   publishes to `https://youssef-jakimi.github.io`.

Notes:
- A `.nojekyll` file ships in `public/` so GitHub serves the `_next/` asset folder.
- `trailingSlash: true` keeps direct links working on a static host.
- The social-preview image is a pre-rendered PNG ([`src/app/opengraph-image.png`](src/app/opengraph-image.png));
  to regenerate it after design changes, run `OG_RENDER=1 npm run dev`, open
  `/opengraph-image`, and save the PNG back to that path.

## Accessibility & performance

- Honors `prefers-reduced-motion` (smooth scroll, aurora, and reveals degrade gracefully).
- Canvas animation pauses when off-screen and on reduced motion.
- ~147 kB First Load JS; static-prerendered homepage.
