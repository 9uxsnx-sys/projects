# SNOW — Luxury Perfume House

Niche #6 of the "10-in-1" Portfolio Factory. A quiet-luxury perfume brand homepage: an editorial, monochrome e-commerce experience built around the idea of *"a scent distilled from the hour when light turns to gold."*

## Current Scope (In Progress)

- **Dev page** (`/dev`): full-screen hero + fixed transparent navbar.
- **Desktop**: centered Quilon "SNOW" logo, shortcuts hugging the logo (Collections · Maison · Journal left, Saved · Cart · Account right), Zodiak italic two-line hero title, Switzer micro-copy, plain-text "Shop Now ↗" bottom-right.
- **Mobile** (< 1024px): logo left, Menu + Cart right; hero title + trimmed paragraph bottom-left with right-aligned "Shop ↗".

## Tech Stack

- Next.js 16 (App Router), React 19, TypeScript
- Tailwind CSS v4 (`@import "tailwindcss"`, `@theme` font tokens, custom `@font-face`)
- Framer Motion (available, for future sections)

## Typography

| Font | Usage | Source |
|---|---|---|
| Quilon | Logo / brand wordmark | `public/assets/fonts/quilon` |
| Zodiak | Editorial hero titles (medium italic) | `public/assets/fonts/zodiak` |
| Switzer | Body, nav shortcuts, paragraph | `public/assets/fonts/switzer` |
| Satoshi | Available (bold italic loaded) | `public/assets/fonts/satoshi` |
| ClashDisplay | Available | `public/assets/fonts/clash-display` |

## Structure

```
src/
  app/
    layout.tsx        # Root layout, SEO metadata
    page.tsx          # Main home (untouched — not in scope yet)
    dev/page.tsx      # Active dev page: Navbar + Hero
  components/
    layout/Navbar/    # Navbar (orchestrator) + NavbarDesktop + NavbarMobile
    sections/Hero/    # Hero (orchestrator) + HeroDesktop + HeroMobile
  styles/globals.css  # Fonts, theme tokens, base styles
public/assets/
  fonts/              # quilon, zodiak, switzer, satoshi, clash-display
  images/hero/        # hero-bg.jpeg (desktop), hero-bg-mobile.jpeg
```

## Running

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
```

## Docs

- `CONTEXT.md` — niche strategy & visual direction
- `DESIGN_LOG.md` — decision log for this build
- `CASE_STUDY.md` — portfolio story (finalized after full build)
