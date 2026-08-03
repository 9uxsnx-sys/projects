# Design Log: SNOW — Luxury Perfume House

## Phase 1: Strategy & Setup
- [x] Define Value Proposition — "a scent distilled from the hour when light turns to gold"
- [x] Choose Typography & Palette — Quilon / Zodiak / Switzer / Satoshi / ClashDisplay; black + white (85–95%) 
- [x] Set up Folder Structure — template layout with `Navbar/` and `Hero/` component folders

## Phase 2: Core Development

### Navbar (Desktop)
- Fixed transparent header over hero, white text, `z-50`.
- Centered "SNOW" wordmark in Quilon (variable font), `text-6xl`, bold, uppercase, `tracking-[0.1em]`.
- Left shortcuts: Collections · Maison · Journal — right shortcuts: Saved · Cart · Account.
- Shortcuts hug the logo (not screen edges) via `grid-cols-[1fr_auto_1fr]` + `justify-self-end/start`, same horizontal line as logo, `gap-8` between items, `gap-x-16` from logo.
- Style: Switzer semibold, `text-sm`, `tracking-[0.2em]`, uppercase; hover fades to 60% opacity.

### Hero (Desktop)
- Full-bleed facial image (`hero-bg.jpeg`) with `object-cover` on black canvas.
- Top fade overlay: `bg-gradient-to-b from-black/20 to-transparent`.
- Title "Captured in / Golden Light" — Zodiak medium italic, `text-7xl`, `tracking-[0.05em]`, `leading-[1.05]`, white 95%, bottom-left (`px-12`, `bottom-12`).
- Micro-copy: Switzer, 22px, white 85%, `max-w-[44rem]`, 2-line sentence under title.
- "Shop Now ↗" — plain text (no button), `text-base`, Switzer semibold uppercase, bottom-right, level with the paragraph's last line.

### Mobile (< 1024px)
- Navbar: "SNOW" logo left (Quilon, `text-3xl`), Menu + Cart right (Switzer semibold, `text-xs`), `h-14`.
- Hero: mobile background `hero-bg-mobile.jpeg`, same top fade.
- Title `text-[34px]`, paragraph `text-[15px]` with fixed width `max-w-[18rem]`, both bottom-left (`px-6`, `bottom-10`).
- Paragraph trimmed to keep meaning at half length: "A scent distilled from the hour when light turns to gold, with frozen florals."
- "Shop ↗" right-aligned, level with the paragraph's last line, tighter gap.

### Fonts & Assets
- Copied full packs: Quilon, Satoshi, ClashDisplay into `public/assets/fonts/`.
- Registered via `@font-face` + `@theme` tokens (`font-zodiak`, `font-switzer`, `font-quilon`, `font-satoshi`, `font-clash`).
- Hero assets: `hero-bg.jpeg` (desktop), `hero-bg-mobile.jpeg` (mobile).

## Phase 3: Polish & Optimization
- [x] Mobile Audit — desktop/mobile split verified at 1024px breakpoint
- [ ] Performance Audit (Lighthouse)
- [ ] Final Case Study Write-up
