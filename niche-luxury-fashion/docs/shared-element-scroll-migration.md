# Shared Element Scroll Migration — "VANTAGE" Hero to Navbar

## Overview

A high-end animation pattern where the massive "VANTAGE" hero title **travels and scales** from the bottom-left of the cinematic video background into the top-left of the fixed Navbar as the user scrolls. This creates a powerful sense of brand continuity — the title never disappears, it just relocates.

## Architecture

```
components/
├── layout/
│   └── Navbar.tsx                  ← Fixed navbar (destination container)
└── sections/
    └── home-page/
        └── Hero/
            ├── Hero.tsx            ← Responsive router (unchanged)
            ├── HeroDesktop.tsx     ← Integrates ScrollAnimatedLogo
            ├── HeroMobile.tsx      ← Mobile fallback (no scroll animation)
            └── ScrollAnimatedLogo.tsx  ← The core animation logic
```

**New file:** `ScrollAnimatedLogo.tsx` — handles the motion using Framer Motion's `useScroll` and `useTransform`.

## The 3 States

| State | Trigger | Position | Scale | Opacity |
|-------|---------|----------|-------|---------|
| **Start** | `scrollYProgress = 0` | Bottom-left (`y: 75vh`, `x: 5vw`) | Large (`scale: 1.0`, ~`text-7xl`) | Full (`1`) |
| **Mid** | `scrollYProgress = 0.3–0.6` | Traveling diagonally up-left | Shrinking | Remaining full |
| **End** | `scrollYProgress ≈ 1` | Top-left navbar (`x: 24px`, `y: 12px`) | Small (`scale: 0.25`, ~`text-xl`) | Full (`1`) |

## Framer Motion Implementation

### Setup

```tsx
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
```

### Core Logic

```tsx
const sectionRef = useRef<HTMLDivElement>(null);
const { scrollYProgress } = useScroll({
  target: sectionRef,
  offset: ["start start", "end start"], // Track from hero top to hero bottom
});
```

### Transform Mapping

```tsx
// Movement: bottom → top
const y = useTransform(scrollYProgress, [0, 1], ["75vh", "12px"]);
const x = useTransform(scrollYProgress, [0, 1], ["5vw", "24px"]);

// Scale: massive → logo
const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.25]);

// Optional: letter-spacing tighten
const letterSpacing = useTransform(
  scrollYProgress,
  [0, 0.8],
  ["0.15em", "0.05em"]
);
```

### Applied to Element

```tsx
<motion.h1
  style={{ y, x, scale, letterSpacing }}
  className="fixed z-50 left-0 bottom-0 text-white font-light uppercase"
>
  VANTAGE
</motion.h1>
```

**Key detail:** The element must be `fixed` positioned so it can "break out" of the hero section flow and seamlessly land in the navbar.

## Navbar Integration (`Navbar.tsx`)

The navbar must be:

- **Fixed** at the top (`fixed top-0 left-0 w-full z-40`)
- **Initially transparent** (`bg-transparent`)
- **Transitions to solid** on scroll past hero (`bg-black` with backdrop blur)

The logo slot in the navbar must be **empty** — it acts as the landing zone for the migrating title. No duplicate "VANTAGE" text should exist in the navbar.

```tsx
// Navbar.tsx — minimal, logo slot is intentionally empty
export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full h-16 z-40 flex items-center px-6">
      {/* Logo slot intentionally empty — filled by ScrollAnimatedLogo */}
      <div className="w-24 h-8" />
      {/* Nav links */}
      <div className="ml-auto flex gap-8 text-white/70 text-xs tracking-widest uppercase">
        <span>Collections</span>
        <span>Philosophy</span>
        <span>Journal</span>
      </div>
    </nav>
  );
}
```

## File-by-File Changes Checklist

- [ ] **Create** `src/components/sections/home-page/Hero/ScrollAnimatedLogo.tsx`
- [ ] **Create** `src/components/layout/Navbar.tsx`
- [ ] **Update** `HeroDesktop.tsx` — integrate `ScrollAnimatedLogo` + `sectionRef`
- [ ] **Update** `page.tsx` — import and render `Navbar` before `<Hero />`
- [ ] **Adjust** Navbar z-index to be below the animated logo during migration

## Z-Index Stacking Order

| Layer | Z-Index | Element |
|-------|---------|---------|
| Video background | `z-0` | `<video>` |
| Black overlay | `z-10` | Overlay div |
| Hero content | `z-20` | General hero content |
| Animated logo | `z-30` | `ScrollAnimatedLogo` (migrating) |
| Navbar | `z-40` | Fixed navbar frame |
| Navbar links | `z-50` | Clickable nav items |

The animated logo starts below the navbar (`z-30`) but migrates upward into it visually. The navbar frame (`z-40`) stays above so clickable links are always accessible.

## Edge Cases & Notes

- **Hydration:** `useScroll` is client-side only. The component must use `"use client"`.
- **Mobile:** This animation is desktop-only. `HeroMobile.tsx` should remain simple (video only, or a separate layout).
- **Scroll progress range:** If the hero is `100vh`, `scrollYProgress` goes from `0` (top of hero at viewport top) to `1` (bottom of hero at viewport top). The `offset: ["start start", "end start"]` handles this.
- **Performance:** `useTransform` runs on the main thread but is throttled by Framer Motion's RAF loop. The `scale` transform is GPU-composited for smooth 60fps.
- **Framer Motion v12 note:** The API for `useScroll` and `useTransform` is stable but double-check the import path — in Next.js 16 with Framer Motion 12, import from `"framer-motion"` directly.

## Testing

1. Open the page at viewport width > 1024px (desktop)
2. Confirm "VANTAGE" appears at bottom-left, large, over the video
3. Scroll down — the title should smoothly travel up-left and shrink
4. Once past the hero, it should sit perfectly in the navbar as the logo
5. Scroll back up — the animation should reverse seamlessly
6. Resize the browser and repeat

---

*Document created 2026-07-22. To be implemented when Navbar and Hero scroll animation development begins.*
