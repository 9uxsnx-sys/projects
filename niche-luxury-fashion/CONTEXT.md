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
- **Typeface:** *Switzer* (Bold, Medium, Regular) for brand headlines (SNOW), section titles, and UI/navigation text. *Plein* (Bold, Regular) for the massive "SNOW" brand block in Brand and Footer sections. Khand Bold was evaluated but Switzer Bold was selected for its cleaner, more editorial look. Plein Bold added for the heavy, monolithic brand statement.
- **Color Palette:** Monochrome — Pure Black (`#000000`) background, White (`#ffffff`) foreground. Mode switching on scroll.
- **Layout:** Asymmetric grids, large whitespace, fullscreen video hero, and editorial-first presentation.

## 4. Sections & Current Status

| # | Section | Status |
|---|---------|--------|
| 1 | **The Editorial Hero** — Fullscreen video background with massive "SNOW" title overlay (Switzer Bold) | ✅ Complete |
| 2 | **Responsive Navbar** — Fixed top, auto-hide/show on scroll, mode switching (transparent→white bg, white→black text), centered logo | ✅ Complete |
| 3 | **The Selection Edit** — "SELECTION" title. 8 products in full-width 2x4 grid (desktop) / single column (mobile). Product cards with 3:4 images, hover heart save, name + price | ✅ Complete |
| 4 | **Collections** — "COLLECTIONS" title. 3 category cards (Men, Women, Accessories) in full-width 3-column grid (desktop) / single column (mobile). 3:4 images with 10% black overlay, category name bottom-left | ✅ Complete |
| 5 | **About** — Two 3:4 blocks side by side (desktop) / stacked (mobile). Left: image with "ABOUT US" top-left + "DISCOVER" top-right, 20% overlay. Right: auto-playing video with 10% overlay. Zero gap between blocks | ✅ Complete |
| 6 | **Brand** — Full-width 4:3 (desktop) / 3:4 (mobile) autoplay video with centered "SNOW" in Plein Bold, 30% black overlay for readability | ✅ Complete |
| 7 | **Philosophy** — Editorial paragraph with Switzer light, large pull-quote opening, "–" line breaks, italicized brand name **VANTAGE/SNOW** | ✅ Complete |
| 8 | **Categories** — 1 big 1:1 image left + 1 column of 2 small 1:1 images right per row (desktop 2 rows, mobile 2 rows stacked). Category titles overlay. "CATEGORIES" header | ✅ Complete |
| 9 | **Footer** — 4-column grid. Column 1: "STAY IN THE LOOP" subscribe form (email + white Subscribe button with hover-to-black). Columns 2-4: Collections, Customer, Follow links. Massive "SNOW" in Plein Bold clipped at bottom | ✅ Complete |

## 5. Implemented Features

### Hero Section
- **Fullscreen video background** — Auto-playing, muted, looping MP4 (`hero-bg.mp4`) with `bg-black/20` overlay for readability
- **"SNOW" title** — Switzer Bold, positioned bottom-left (`bottom-1 left-2`), desktop `text-[14vw]` with `tracking-[22px]`, mobile `text-[20vw]` with `tracking-[20px]`
- **Responsive:** Desktop uses `h-screen`, mobile uses `min-h-[100dvh]` for proper viewport handling

### Navbar
- **Fixed positioning** — Always visible at top of viewport
- **Scroll-based mode switching:** Transparent background + white text over Hero → White background + black text past Hero (switches precisely at `scrollY >= window.innerHeight`)
- **Auto-hide/show:** Navbar slides up out of view on scroll down, slides back into view on scroll up (tracked via scroll direction)
- **Fixed height:** Desktop `h-12` (48px), Mobile `h-10` (40px) — with flex-centered SNOW logo
- **Smooth transitions:** All color and position changes use `transition-all duration-300`

### SeasonEdit Section
- **Title:** "SELECTION" in Switzer medium, large clamp-based sizing, tight letter-spacing (`0.01em`)
- **Desktop layout:** Full-width 4-column grid, 2 rows of 4 products, `gap-1` (4px) between columns and matching edge padding (`px-1`)
- **Mobile layout:** Single-column vertical stack, `gap-8` between products, same edge padding (`px-1`)
- **Spacing between rows:** `gap-y-12` (48px) for clear row separation on desktop

### Collections Section
- **Title:** "COLLECTIONS" in Switzer medium, same sizing + tracking as SeasonEdit
- **Desktop layout:** Full-width 3-column grid, `gap-1` between cards, matching `px-1` edge padding
- **Mobile layout:** Single-column vertical stack, `gap-4` between cards
- **Category cards:** 3:4 ratio, custom images (men.jpg, women.jpg, accessories.jpg), 10% black overlay, category name bottom-left in white Switzer

### About Section
- **Desktop layout:** `grid grid-cols-2` — image left, video right, zero gap between blocks, `px-1` edge padding
- **Mobile layout:** Stacked vertically, same edge padding
- **Image block (left):** Custom image (about-us.jpg), 20% black overlay, "ABOUT US" (large) top-left + "DISCOVER" (small, loose tracking) top-right
- **Video block (right):** Custom video (about-us.mp4), auto-play muted loop, 10% black overlay

### Brand Section
- **Desktop layout:** Full-width 4:3 aspect ratio video (`aspect-video`), centered "SNOW" in Plein Bold `text-[20vw]`, 30% black overlay (`bg-black/30`) for readability
- **Mobile layout:** 3:4 aspect ratio video (`aspect-[3/4]`), same centered SNOW + overlay
- **Video:** Custom MP4 (`brand-bg.mp4`), auto-play muted loop
- **Font:** Plein Bold for the heavy, monolithic "SNOW" brand statement — distinct from Hero's Switzer Bold

### Philosophy Section
- **Desktop layout:** Max-width container (`max-w-4xl`), centered editorial paragraph with large pull-quote opening
- **Mobile layout:** Same paragraph style, responsive padding
- **Typography:** Switzer light, large opening quote (`text-7xl`), "–" line breaks between key statements
- **Brand name:** **VANTAGE/SNOW** italicized for emphasis

### Categories Section
- **Title:** "CATEGORIES" in Switzer medium, same sizing + tracking as other section headers
- **Desktop layout:** 2 rows, each row has 1 large 1:1 image (left, `col-span-1`) + 2 small 1:1 images (right, stacked in a column, `col-span-1`), `grid grid-cols-2 gap-1`
- **Mobile layout:** 2 rows stacked vertically, same 1-big-2-small per row
- **Images:** Custom category photos with text overlays, uniform 1:1 aspect ratio
- **Edge padding:** `px-1` consistent with other sections

### Footer Section
- **Desktop layout:** 4-column `grid grid-cols-4 gap-1`, link columns pushed right with `pl-10` for balanced spacing
- **Column 1 — Subscribe:** "STAY IN THE LOOP" heading (`text-2xl font-semibold`), editorial paragraph, email input (`placeholder="Email address"`) + Subscribe button (white bg, `hover:bg-black hover:text-white`)
- **Columns 2-4:** Collections (Men, Women, Accessories, The Archive), Customer (Contact, Shipping, Returns, FAQ), Follow (Instagram, X, Pinterest) — each with uppercase label + link list
- **SNOW brand block:** Massive `text-[30vw]` in Plein Bold, half-clipped bottom with `-mb-[20vh]`, pointer-events-none
- **Background:** Full black (`bg-black`)

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
