# Niche Strategy: Luxury Fashion Brand (E-commerce)

## 1. Project Identity
- **Brand Name:** VANTAGE
- **Logo/Label:** SNOW
- **Niche:** Luxury Fashion / High-End Streetwear
- **Target Audience:** High-net-worth individuals, fashion-forward Gen Z/Millennials in the GCC (Oman/Dubai) and Global markets.
- **Vibe:** Avant-garde, minimalist, sophisticated, and fast (performance-focused).

## 2. The Problem (For the Case Study)
- **Problem:** Existing luxury fashion sites are often heavy and slow, or generic. They fail to tell a "story" and rely too much on basic grids, leading to high bounce rates for mobile users.
- **Our Solution:** An editorial-first homepage that blends high-end typography with lightning-fast Next.js performance and subtle "scroll-triggered" storytelling.

## 3. Visual Direction
- **Typeface:** *Khand* (SemiBold, Bold) for brand headlines — *Switzer* (Regular, Medium) for navigation & UI text.
- **Color Palette:** Monochrome — Pure Black (`#000000`) background, White (`#ffffff`) foreground. Mode switching on scroll.
- **Layout:** Asymmetric grids, large whitespace, fullscreen video hero, and editorial-first presentation.

## 4. Sections & Current Status

| # | Section | Status |
|---|---------|--------|
| 1 | **The Editorial Hero** — Fullscreen video background with massive "SNOW" title overlay | ✅ Complete |
| 2 | **Responsive Navbar** — Fixed top, auto-hide/show on scroll, mode switching (transparent→white bg, white→black text), centered logo | ✅ Complete |
| 3 | **"The Collection" Reveal** — Smooth horizontal scroll or grid showing featured pieces with hover effects | 🔜 Planned |
| 4 | **The "Philosophy" Section** — Large, bold typography explaining the brand's sustainable/luxury ethos | 🔜 Planned |
| 5 | **Product Spotlight** — High-conversion section with clean "Add to Bag" interactions | 🔜 Planned |
| 6 | **The Instagram/Social Grid** — Minimalist feed integration | 🔜 Planned |

## 5. Navbar Features (Implemented)
- **Fixed positioning** — Always visible at top of viewport
- **Scroll-based mode switching:** Transparent background + white text over Hero → White background + black text past Hero (switches precisely at `scrollY >= window.innerHeight`)
- **Auto-hide/show:** Navbar slides up out of view on scroll down, slides back into view on scroll up (tracked via scroll direction)
- **Fixed height:** Desktop `h-12` (48px), Mobile `h-10` (40px) — with flex-centered SNOW logo
- **Smooth transitions:** All color and position changes use `transition-all duration-300`

## 6. Technical Goals
- 100% Mobile Responsive (Critical for Fashion).
- Framer Motion for "Catwalk-style" entrance animations (installed, pending use).
- Image/video optimization using Next.js `<Image />` and native `<video>` for instant loading.
- Auto-hide Navbar pattern (scroll-down-hide, scroll-up-show) common in luxury e-commerce.
