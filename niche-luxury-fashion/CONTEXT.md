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
- **Typeface:** *Switzer* (Bold, Medium, Regular) for brand headlines (SNOW), section titles, and UI/navigation text. *Plein* (Bold, Regular) for the massive "SNOW" brand block in the Footer section (text-[30vw], half-clipped). Brand section SNOW uses Switzer Bold (centered, text-[clamp(4rem,16vw,16rem)]). Khand Bold was evaluated but Switzer Bold was selected for its cleaner, more editorial look. Plein Bold added for the heavy, monolithic footer statement.
- **Color Palette:** Monochrome with accent — Pure Black (`#000000`) background, White (`#ffffff`) foreground, Deep Navy (`#0d1b2a`) for footer background and navbar scroll-state typography. Mode switching on scroll.
- **Layout:** Asymmetric grids, large whitespace, fullscreen video hero, and editorial-first presentation.

## 4. Sections & Current Status

| # | Section | Status |
|---|---------|--------|
| 1 | **The Editorial Hero** — Fullscreen video background with massive "SNOW" title overlay (Switzer Bold) | ✅ Complete |
| 2 | **Responsive Navbar** — Fixed top, auto-hide/show on scroll, mode switching (transparent→white bg, white→navy text), centered logo | ✅ Complete |
| 3 | **The Selection Edit** — "SELECTION" title. 8 products in full-width 2x4 grid (desktop) / single column (mobile). Product cards with 3:4 images, hover heart save, name + price | ✅ Complete |
| 4 | **Collections** — "COLLECTIONS" title. 3 category cards (Men, Women, Accessories) in full-width 3-column grid (desktop) / single column (mobile). 3:4 images with 10% black overlay, category name bottom-left | ✅ Complete |
| 5 | **About** — Two 3:4 blocks side by side (desktop) / stacked (mobile). Left: image with "ABOUT US" top-left + "DISCOVER" top-right, 20% overlay. Right: auto-playing video with 10% overlay. Zero gap between blocks | ✅ Complete |
| 6 | **Brand** — Full-width 4:3 (desktop) / 3:4 (mobile) autoplay video with centered "SNOW" in Switzer Bold, 30% black overlay for readability | ✅ Complete |
| 7 | **Philosophy** — Editorial paragraph with Switzer light, large pull-quote opening, "–" line breaks, italicized brand name **VANTAGE/SNOW** | ✅ Complete |
| 8 | **Categories** — 1 big 1:1 image left + 1 column of 2 small 1:1 images right per row (desktop 2 rows, mobile 2 rows stacked). Category titles overlay. "CATEGORIES" header | ✅ Complete |
| 9 | **Footer** — Navy bg (`#0d1b2a`). Desktop: Subscribe ("NEVER MISS A DROP" + email + white Subscribe button with navy hover) left-aligned with fixed width. 4 link columns (Collections, Customer, Follow, Policies) pushed right. Mobile: Compact subscribe + stacked 2x2 link grid + half-clipped SNOW. Massive "SNOW" in Plein Bold clipped at bottom | ✅ Complete |

## 5. Implemented Features

### Hero Section
- **Fullscreen video background** — Auto-playing, muted, looping MP4 (`hero-bg.mp4`) with `bg-black/20` overlay for readability
- **"SNOW" title** — Switzer Bold, positioned bottom-left (`bottom-1 left-2`), desktop `text-[14vw]` with `tracking-[22px]`, mobile `text-[20vw]` with `tracking-[20px]`
- **Responsive:** Desktop uses `h-screen`, mobile uses `min-h-[100dvh]` for proper viewport handling

### Navbar
- **Fixed positioning** — Always visible at top of viewport
- **Scroll-based mode switching:** Transparent background + white text over Hero → White background + navy (`#0d1b2a`) text past Hero (switches precisely at `scrollY >= window.innerHeight`)
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
- **Desktop layout:** Full-width 4:3 aspect ratio video (`aspect-video`), centered "SNOW" in Switzer Bold `text-[clamp(4rem,16vw,16rem)]`, 30% black overlay (`bg-black/30`) for readability
- **Mobile layout:** 3:4 aspect ratio video (`aspect-[3/4]`), same centered SNOW + overlay
- **Video:** Custom MP4 (`brand-bg.mp4`), auto-play muted loop
- **Font:** Switzer Bold for the centered "SNOW" brand statement — consistent weight with Hero title, but visually distinct via centering + aspect ratio difference

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
- **Desktop layout:** Flex layout — subscribe block (fixed width `max-w-lg`, left-spaced with `ml-20`), 4 link columns pushed right (`ml-auto w-1/2`)
- **Subscribe:** "NEVER MISS A DROP" heading (`24px`, Switzer medium, `tracking-[0.05em]`), editorial paragraph, email input (`placeholder="Email address"`) + Subscribe button (white bg, black text, `tracking-[0.1em]`, `hover:bg-[#0d1b2a]` navy fill)
- **Link columns (4):** Collections (Accessories, The Archive, Women, Men), Customer (Shipping, Contact, Returns, FAQ), Follow (Instagram, Pinterest, YouTube, TikTok), Policies (Terms of Service, Privacy Policy, Cookie Policy, Warranty) — all sorted longest word first, uppercase label + link list
- **Mobile layout:** Compact subscribe block at top, 4 columns in 2x2 stacked grid (row 1: Collections + Customer, row 2: Follow + Policies), sized to content (`w-fit`), left-aligned. SNOW at bottom with `-mb-[6vh]` clip
- **SNOW brand block:** Massive `text-[30vw]` (desktop) / `text-[28vw]` (mobile) in Plein Bold, half-clipped bottom with `-mb-[20vh]` (desktop) / `-mb-[6vh]` (mobile), `overflow-hidden`
- **Background:** Deep navy (`bg-[#0d1b2a]`)

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
