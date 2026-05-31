# IRIS — Festival Website (IIM Indore)

Developer README for the IRIS fest website. This file contains the essential information to set up, build, and deploy the site, plus a few repository-specific development notes and best practices.

## Summary
- Purpose: Static, marketing-style website for the IRIS festival using Next.js (App Router) and TypeScript.
- Intended deployment: static export (Cloudflare Pages or other static hosts).

## Tech Stack
- Next.js (App Router)
- React 19, TypeScript
- CSS Modules + Tailwind (utility-first styles present)
- Framer Motion for animations
- Lucide icons

## Quick Start
1. Install dependencies:

```bash
npm install
```

2. Run dev server:

```bash
npm run dev
```

3. Build (local):

```bash
npx next build
```

4. Static export (configured via `next.config.ts` -> `output: "export"`):

```bash
npx next build
# output will be exported to ./out for static hosting
```

Scripts available (package.json):
- `dev` — run development server
- `build` — production build
- `start` — start the Next.js server (not used for static export)
- `lint` — run ESLint

## Environment / Config
- `next.config.ts` is set for static export: `output: "export"` (recommended for Cloudflare Pages with the Next.js static preset).
- Public runtime envs: `NEXT_PUBLIC_GA_MEASUREMENT_ID` (optional Google Analytics).

## Build & Deploy (Cloudflare Pages - recommended setup)
- Framework preset: **Next.js (Static HTML Export)**
- Build command: `npx next build`
- Output directory: `out`
- To surface the commit hash in build logs (useful when Pages picks the wrong commit temporarily):

```bash
git rev-parse --short HEAD && npx next build
```

## Image & Performance Guidelines (practical standards)
- Keep using plain `<img>` elements for static export; prefer these attributes:
  - `loading="lazy"` for non-critical images
  - `decoding="async"`
  - add `loading="eager" fetchPriority="high"` on hero/background images and preload the main hero in `app/layout.tsx`
  - include `width` / `height` when possible to avoid layout shift
  - provide `srcset` / responsive variants or use `<picture>` for critical responsive images
- Prefer WebP/AVIF for CDN-hosted assets; serve via a CDN for reduced latency.

## CSS Modules / Styles
- Use CSS Modules for component styles (`Component.module.css`).
- Global rules and browser pseudo-element selectors (e.g., `::-webkit-scrollbar`) must be placed in `src/app/globals.css` — avoid global pseudo-selectors inside module files to keep CSS Module purity.

## Linting & Type Checking
- ESLint: `npm run lint` (configured with `eslint-config-next`)
- Type-check: `npx tsc --noEmit`

## Project Structure (essential)
- `public/` — static assets: fonts, images, svgs
- `src/app/` — Next.js App Router (layout, pages, global styles)
- `src/components/` — React components (organized by page)
- `src/lib/` — utilities

## Contributing / Standards
- Keep commits focused and atomic.
- Run `npm run lint` and `npx tsc --noEmit` before opening PRs.
- Document any new environment variables in this README.

## Notes & Recommendations
- Move any global pseudo CSS selectors into `src/app/globals.css` to avoid Next.js/CSS Module build errors.
- When deploying to Cloudflare Pages, confirm the deployed commit hash in the Pages UI logs if a previous deploy fails.
- Consider generating responsive image variants and adding `width`/`height` attributes programmatically if many images exist.

## Maintainer
- Systems & IT team — IRIS


