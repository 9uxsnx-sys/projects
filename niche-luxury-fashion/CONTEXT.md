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
- **Typeface:** *Synonym* (Bold) for editorial "snow" branding across Hero (lowercase, bottom-left), Brand section (lowercase, centered), Navbar logo (lowercase), and the massive Footer brand block (uppercase, half-clipped). *Switzer* (Bold, Medium, Regular, Light) for section titles (Featured, COLLECTIONS, CATEGORIES), UI/navigation text, product cards, and the Philosophy pull-quote. *Plein* (Bold, Regular) was evaluated for the Footer but replaced with Synonym Bold after testing. *Khand* (SemiBold, Bold) was evaluated for headlines but replaced with Switzer Bold for a cleaner editorial look. Khand remains registered but unused in production.
- **Color Palette:** Monochrome with accent — Pure Black (`#000000`) background, White (`#ffffff`) foreground, Deep Navy (`#0d1b2a`) for footer background and navbar scroll-state typography. Mode switching on scroll.
- **Layout:** Asymmetric grids, large whitespace, fullscreen video hero, and editorial-first presentation.

## 4. Sections & Current Status

| # | Section | Status |
|---|---------|--------|
| 1 | **Intro Overlay** — Fullscreen video overlay with centered "snow" in Synonym Bold (lowercase). Plays on every visit. Slides upward (curtain reveal) after ~2.5s | ✅ Complete |
| 2 | **The Editorial Hero** — Fullscreen video background with lowercase "snow" title (Synonym Bold, bottom-left), zero letter-spacing | ✅ Complete |
| 3 | **Responsive Navbar** — Fixed top, auto-hide/show on scroll, mode switching (transparent→white bg, white→navy text), logo hidden over hero | ✅ Complete |
| 4 | **The Selection Edit** — "Featured" title. 4 products in full-width single-row grid (desktop) / single column (mobile). Product cards with 3:4 images, hover heart save, name + price | ✅ Complete |
| 5 | **Collections** — "COLLECTIONS" title. 3 category cards (Men, Women, Accessories) in full-width 3-column grid (desktop) / single column (mobile). 3:4 images with 10% black overlay, category name bottom-left, "DISCOVER" bottom-right | ✅ Complete |
| 6 | **About** — Two 3:4 blocks side by side (desktop) / stacked (mobile). Left: image with "ABOUT US" top-left + "DISCOVER" top-right, 20% overlay. Right: auto-playing video with 10% overlay. Zero gap between blocks | ✅ Complete |
| 7 | **Brand** — Full-width 4:3 (desktop) / 3:4 (mobile) autoplay video with centered "snow" in Synonym Bold, 30% black overlay for readability | ✅ Complete |
| 8 | **Philosophy** — Editorial pull-quote with Switzer medium, centered single paragraph, large opening quotation mark | ✅ Complete |
| 9 | **Categories** — 1 big 1:1 image left + 1 column of 2 small 1:1 images right per row (desktop 2 rows, mobile 2 rows stacked). Category titles overlay. "CATEGORIES" header | ✅ Complete |
| 10 | **Footer** — Navy bg (`#0d1b2a`). Desktop: Subscribe ("NEVER MISS A DROP" + email + white Subscribe button with navy hover) left-aligned with fixed width. 4 link columns (Collections, Customer, Follow, Policies) pushed right. Mobile: Compact subscribe + stacked 2x2 link grid + half-clipped SNOW. Massive "SNOW" in Synonym Bold clipped at bottom | ✅ Complete |

## 5. Implemented Features

### Intro Overlay Section
- **Fullscreen video background** — Auto-playing, muted, looping MP4 (`intro-bg.mp4`) with `bg-black/20` overlay for readability
- **"snow" title** — Synonym Bold, centered, lowercase, `text-[clamp(6rem,18vw,20rem)]`, `tracking-[0.02em]`, `leading-[0.85]`
- **Logo fade-in** — Appears after 400ms, 600ms opacity transition
- **Curtain slide-up** — Entire overlay slides up (`translateY(-100%)`) after 2.5s, 1000ms duration, `cubic-bezier(0.22,1,0.36,1)` easing
- **Repeat behavior:** Plays on every page visit (no sessionStorage restriction)
- **Z-index:** `z-[9999]` — highest layer, above all page content
- **Architecture:** `Intro.tsx` (wrapper with responsive detection) → `IntroDesktop.tsx` (≥1024px) or `IntroMobile.tsx` (<1024px). Desktop "snow" uses `clamp(6rem,22vw,20rem)`, mobile uses `clamp(6rem,26vw,16rem)`.

### Hero Section
- **Fullscreen video background** — Auto-playing, muted, looping MP4 (`hero-bg.mp4`) with `bg-black/20` overlay for readability
- **"snow" title** — Synonym Bold, positioned bottom-left (`bottom-6 left-6` desktop / `bottom-4 left-4` mobile), desktop `text-[14vw]` with `tracking-[0px]`, mobile `text-[20vw]` with `tracking-[0px]`, `leading-[0.85]`
- **Responsive:** Desktop uses `h-screen`, mobile uses `min-h-[100dvh]` for proper viewport handling

### Navbar
- **Fixed positioning** — Always visible at top of viewport
- **Scroll-based mode switching:** Transparent background + white text over Hero → White background + navy (`#0d1b2a`) text past Hero (switches precisely at `scrollY >= window.innerHeight`)
- **Auto-hide/show:** Navbar slides up out of view on scroll down, slides back into view on scroll up (tracked via scroll direction)
- **Fixed height:** Desktop `h-14` (56px), Mobile `h-10` (40px) — with flex-centered SNOW logo. Logo hidden over hero (`opacity-0`), visible past hero (`opacity-100`).
- **Smooth transitions:** All color and position changes use `transition-all duration-300`

### SeasonEdit Section
- **Title:** "Featured" in Switzer medium, large clamp-based sizing, tight letter-spacing (`0.01em`)
- **Desktop layout:** Full-width 4-column grid, 1 row of 4 products, `gap-x-1` (4px) between columns and matching edge padding (`px-1`)
- **Mobile layout:** Single-column vertical stack, `gap-8` between products, same edge padding (`px-1`)

### Collections Section
- **Title:** "COLLECTIONS" in Switzer medium, same sizing + tracking as SeasonEdit
- **Desktop layout:** Full-width 3-column grid, `gap-1` between cards, matching `px-1` edge padding
- **Mobile layout:** Single-column vertical stack, `gap-4` between cards
- **Category cards:** 3:4 ratio, custom images (men.jpg, women.jpg, accessories.jpg), 10% black overlay, category name bottom-left in white Switzer medium, "DISCOVER" bottom-right in Switzer light

### About Section
- **Desktop layout:** `grid grid-cols-2` — image left, video right, zero gap between blocks, `px-1` edge padding
- **Mobile layout:** Stacked vertically, same edge padding
- **Image block (left):** Custom image (about-us.jpg), 20% black overlay, "ABOUT US" (large) top-left + "DISCOVER" (small, loose tracking) top-right
- **Video block (right):** Custom video (about-us.mp4), auto-play muted loop, 10% black overlay

### Brand Section
- **Desktop layout:** Full-width 4:3 aspect ratio video (`aspect-video`), centered "snow" in Synonym Bold `text-[clamp(4rem,16vw,16rem)]`, 30% black overlay (`bg-black/30`) for readability
- **Mobile layout:** 3:4 aspect ratio video (`aspect-[3/4]`), same centered "snow" + overlay
- **Video:** Custom MP4 (`brand-bg.mp4`), auto-play muted loop
- **Font:** Synonym Bold for the centered "snow" brand statement — lowercase editorial treatment matching the Intro and Hero

### Philosophy Section
- **Desktop layout:** Max-width container (`max-w-[90%]`), centered single editorial pull-quote with large opening quotation mark
- **Mobile layout:** Same paragraph style, responsive padding, slightly larger text for mobile readability
- **Typography:** Switzer medium, large clamp-based opening quote (`text-[clamp(3rem,10vw,10rem)]` desktop / `text-[clamp(3rem,12vw,6rem)]` mobile), single centered paragraph
- **Background:** White background (`bg-white`), black text

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
- **SNOW brand block:** Massive `text-[30vw]` (desktop) / `text-[28vw]` (mobile) in Synonym Bold, half-clipped bottom with `-mb-[20vh]` (desktop) / `-mb-[6vh]` (mobile), `overflow-hidden`
- **Background:** Deep navy (`bg-[#0d1b2a]`)

### ProductCard Component
- **Image:** 3:4 portrait aspect ratio using `pt-[133.33%]` padding trick
- **Save heart:** Lucide `Heart` icon, appears on hover (opacity + scale transition), toggles fill on click, positioned top-right
- **Info:** Name (Switzer normal) + Price (Switzer light) — flush with zero gap, left-aligned to image edge

### CategoryCard Component
- **Image:** 3:4 portrait aspect ratio, `object-cover`
- **Overlay:** 10% black (`bg-black/10`) for readability
- **Label:** Category name bottom-left, white Switzer medium, clamp-based responsive sizing (`clamp(1.8rem,4vw,3.5rem)`)
- **DISCOVER:** "DISCOVER" text bottom-right, white Switzer light, loose tracking (`0.15em`), uppercase
- **Location:** `src/components/ui/CategoryCard/`

## 6. Technical Goals
- 100% Mobile Responsive (Critical for Fashion).
- Framer Motion for "Catwalk-style" entrance animations (installed, pending use).
- Image/video optimization using Next.js `<Image />` and native `<video>` for instant loading.
- Auto-hide Navbar pattern (scroll-down-hide, scroll-up-show) common in luxury e-commerce.
