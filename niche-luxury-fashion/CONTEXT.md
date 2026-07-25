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
| 3 | **The Selection Edit** — "SELECTION" title + "DISCOVER MORE" CTA right-aligned. 8 products in full-width 2x4 grid (desktop) / single column (mobile). Product cards with 3:4 images, hover heart save, name + price | ✅ Complete |
| 4 | **Collections** — "COLLECTIONS" title + "DISCOVER MORE" CTA right-aligned. 3 category cards (Men, Women, Accessories) in full-width 3-column grid (desktop) / single column (mobile). 3:4 images with 10% black overlay, category name bottom-left | ✅ Complete |
| 5 | **About** — Two 3:4 blocks side by side (desktop) / stacked (mobile). Left: image with "ABOUT US" top-left + "DISCOVER" top-right, 20% overlay. Right: auto-playing video with 10% overlay. Zero gap between blocks | ✅ Complete |
| 6 | **"The Collection" Reveal** — Smooth horizontal scroll or grid showing featured pieces with hover effects | 🔜 Planned |
| 7 | **The "Philosophy" Section** — Large, bold typography explaining the brand's sustainable/luxury ethos | 🔜 Planned |
| 8 | **Product Spotlight** — High-conversion section with clean "Add to Bag" interactions | 🔜 Planned |
| 9 | **The Instagram/Social Grid** — Minimalist feed integration | 🔜 Planned |

## 5. Implemented Features

### Navbar
- **Fixed positioning** — Always visible at top of viewport
- **Scroll-based mode switching:** Transparent background + white text over Hero → White background + black text past Hero (switches precisely at `scrollY >= window.innerHeight`)
- **Auto-hide/show:** Navbar slides up out of view on scroll down, slides back into view on scroll up (tracked via scroll direction)
- **Fixed height:** Desktop `h-12` (48px), Mobile `h-10` (40px) — with flex-centered SNOW logo
- **Smooth transitions:** All color and position changes use `transition-all duration-300`

### SeasonEdit Section
- **Title:** "SELECTION" in Switzer medium, large clamp-based sizing, tight letter-spacing (`0.01em`)
- **CTA:** "DISCOVER MORE" right-aligned in same row, Switzer medium, loose tracking
- **Desktop layout:** Full-width 4-column grid, 2 rows of 4 products, `gap-1` (4px) between columns and matching edge padding (`px-1`)
- **Mobile layout:** Single-column vertical stack, `gap-8` between products, same edge padding (`px-1`)
- **Spacing between rows:** `gap-y-12` (48px) for clear row separation on desktop

### Collections Section
- **Title:** "COLLECTIONS" in Switzer medium, same sizing + tracking as SeasonEdit
- **CTA:** "DISCOVER MORE" right-aligned in same row, Switzer medium, loose tracking
- **Desktop layout:** Full-width 3-column grid, `gap-1` between cards, matching `px-1` edge padding
- **Mobile layout:** Single-column vertical stack, `gap-4` between cards
- **Category cards:** 3:4 ratio, custom images (men.jpg, women.jpg, accessories.jpg), 10% black overlay, category name bottom-left in white Switzer

### About Section
- **Desktop layout:** `grid grid-cols-2` — image left, video right, zero gap between blocks, `px-1` edge padding
- **Mobile layout:** Stacked vertically, same edge padding
- **Image block (left):** Custom image (about-us.jpg), 20% black overlay, "ABOUT US" (large) top-left + "DISCOVER" (small, loose tracking) top-right
- **Video block (right):** Custom video (about-us.mp4), auto-play muted loop, 10% black overlay

### ProductCard Component
- **Image:** 3:4 portrait aspect ratio using `pt-[133.33%]` padding trick
- **Save heart:** Lucide `Heart` icon, appears on hover (opacity + scale transition), toggles fill on click, positioned top-right
- **Info:** Name (Switzer normal) + Price (Switzer light) — flush with zero gap, left-aligned to image edge

### CategoryCard Component
- **Image:** 3:4 portrait aspect ratio, `object-cover`
- **Overlay:** 10% black (`bg-black/10`) for readability
- **Label:** Category name bottom-left, white Switzer medium, clamp-based sizing
- **Location:** `src/components/ui/CategoryCard/`

## 6. Technical Goals
- 100% Mobile Responsive (Critical for Fashion).
- Framer Motion for "Catwalk-style" entrance animations (installed, pending use).
- Image/video optimization using Next.js `<Image />` and native `<video>` for instant loading.
- Auto-hide Navbar pattern (scroll-down-hide, scroll-up-show) common in luxury e-commerce.
