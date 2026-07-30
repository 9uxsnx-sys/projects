# VANTAGE — Luxury Fashion E-Commerce

A high-end luxury fashion e-commerce platform built with Next.js 16, Tailwind CSS v4, and TypeScript. Minimalist, editorial aesthetic inspired by SSENSE and The Row.

## Tech Stack

- **Framework:** Next.js 16 (Turbopack)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **State:** React Context (Cart, Saved)

## Getting Started

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Features

- Full e-commerce flow: browse → product detail → cart → checkout
- Desktop + mobile responsive layouts
- Cinematic video backgrounds (compressed, ~29 MB total)
- Image gallery with WebP format (all images converted)
- Wishlist ("Saved Pieces") with context-based state
- Product listing with filter/sort overlays
- Skip-able intro animation (3.6s → skip after 1s)

## Performance

| Metric | Before | After |
|--------|--------|-------|
| Total page data | ~300 MB | **~38 MB** (87% ↓) |
| Videos | 190 MB | **29 MB** |
| Images | ~70 MB (PNG/JPEG) | **~7 MB (WebP)** |

## Docs

- [CONTEXT.md](./CONTEXT.md) — Technical architecture and patterns
- [DESIGN_LOG.md](./DESIGN_LOG.md) — Design decisions and changes
- [OPTIMIZATION_PLAN.md](./OPTIMIZATION_PLAN.md) — Performance optimization report
- [CASE_STUDY.md](./CASE_STUDY.md) — Business case study
- [DESKTOP_VISUAL_DESCRIPTION.md](./DESKTOP_VISUAL_DESCRIPTION.md) — Screen-reader visual description
