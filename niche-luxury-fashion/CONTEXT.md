# Niche Strategy: Luxury Fashion Brand (E-commerce)

## 1. Project Identity
- **Brand Name:** VANTAGE
- **Logo/Label:** snow (lowercase)
- **Niche:** Luxury Fashion / High-End Streetwear
- **Target Audience:** High-net-worth individuals, fashion-forward Gen Z/Millennials in the GCC (Oman/Dubai) and Global markets.
- **Vibe:** Avant-garde, minimalist, sophisticated, and fast (performance-focused).

## 2. The Problem (For the Case Study)
- **Problem:** Existing luxury fashion sites are often heavy and slow, or generic. They fail to tell a "story" and rely too much on basic grids, leading to high bounce rates for mobile users.
- **Our Solution:** An editorial-first homepage that blends high-end typography with lightning-fast Next.js performance and subtle "scroll-triggered" storytelling.

## 3. Visual Direction
- **Typeface:** *Synonym* (Bold) for all "snow" branding across every section — Intro overlay, Hero (lowercase, bottom-left), Navbar logo (lowercase), Brand statement (lowercase), and Footer brand block (uppercase "SNOW"). *Switzer* (Bold, Medium, Regular, Light) for all section titles (Featured, COLLECTIONS, CATEGORIES, PHILOSOPHY), UI/navigation text, product cards, Philosophy copy, and "SEE MORE/MORE" links. *Khand* and *Plein* were evaluated and removed during a cleanup audit as neither was used in production code.
- **Color Palette:** Monochrome with accent — Pure Black (`#000000`) background, White (`#ffffff`) foreground, Navy (`#284468`) for navbar background, footer background, size buttons, Add to Cart, and interactive accent elements. Original navy `#0d1b2a` replaced with `#284468` across all components. Mode switching on scroll (transparent → navy bg with white text). Color swatch borders match their own hex when selected. Heart icon stroke+fill uses `#0d1b2a`.
- **Layout:** Full-width grids with 4px gaps, large typography using `clamp()`, alternating big-left/big-right pattern for Categories rows, and consistent edge padding (`px-1`).

## 4. Sections & Current Status

| # | Section | Status |
|---|---------|--------|
| 1 | **Intro Overlay** — Fullscreen black overlay with centered lowercase "snow" in Synonym Bold. Click-to-dismiss with 1s opacity transition. | ✅ Complete |
| 2 | **Hero Section** — Fullscreen MP4 video background with `bg-black/40` overlay, centered "VANTAGE" heading + lowercase "snow" (Synonym Bold), and bottom-left "snow" (Synonym Bold, `clamp(4rem,22vw,20rem)`, 0 tracking) | ✅ Complete |
| 3 | **Responsive Navbar** — Fixed top, scroll-based mode switching (transparent over hero → navy `#0d1b2a` bg past hero). White text in both modes. Lowercase "snow" logo in Synonym Bold. | ✅ Complete |
| 4 | **Brand Statement** — Full-width lowercase "snow" in Synonym Bold, `clamp(4rem,20vw,20rem)`, pure black text on white background. Right side: three link columns (Collections, Support, Connect). | ✅ Complete |
| 5 | **Featured (SeasonEdit)** — "Featured" title + "SEE MORE" (right-aligned with underline). 4 products in `grid-cols-4` with 4px gap. Product cards: 3:4 images, hover heart save (navy `#0d1b2a`), name + price. | ✅ Complete |
| 6 | **Collections** — "COLLECTIONS" title + "SEE MORE". 2 cards (Men, Women) in `grid-cols-2`. Cards: 3:4 ratio, 10% black overlay, category name bottom-left, "DISCOVER" bottom-right. Accessories card removed. | ✅ Complete |
| 7 | **Categories** — "CATEGORIES" title + "SEE MORE". 6 category rows with alternating big-left/big-right 1:1 image pattern. Category titles below small images. All images use 1px white outline-offset to mask dark edges. | ✅ Complete |
| 8 | **Philosophy** — "PHILOSOPHY" title + "SEE MORE". Two-column layout: 60% image (16:9) left, 40% text right. Switzer Light body copy. | ✅ Complete |
| 9 | **About Us** — 3-column grid (image + text + image). Left/right panels: 3:4 ratio images with 10% black overlay, "ABOUT US" top-left + "DISCOVER" top-right. Center panel: brand copy with divider line. | ✅ Complete |
| 10 | **Footer** — Navy `#284468` bg. Left: massive "SNOW" in Synonym Bold `clamp(4rem,20vw,20rem)` with `leading-[0.8]`. Right: 3 nav columns (Collections, Support, Connect). Bottom: copyright + legal links. | ✅ Complete |
| 11 | **Product Detail Desktop** — Sticky 50/50 layout. Left: stacked 3:4 images scroll normally. Right: sticky product info (name, price, color/size selectors, Add to Cart) + 5-section accordion (Description, Details, Size & Fit, Material & Care, Shipping & Returns). Accordion uses +/× icon with smooth open animation. Color swatch borders match own color when selected. | ✅ Complete |
| 12 | **Suggested Products** — "You May Also Like" section below product detail, 4 ProductCards in a row, same grid style as SeasonEdit. | ✅ Complete |
| 13 | **Dynamic Product Routing** — `/products/[slug]` dynamic route handles all product detail pages. Shared product data in `src/data/products.ts`. All 4 SeasonEdit products link to their respective detail pages. | ✅ Complete |

## 5. Implemented Features

### Intro Overlay Section
- **Fullscreen black overlay** — Fixed position (`z-50`), pure black background
- **"snow" title** — Synonym Bold, centered, lowercase, `text-[clamp(6rem,22vw,20rem)]`, 0 tracking
- **Dismiss behavior:** Click anywhere to trigger opacity transition from 1→0 over 1000ms (`cubic-bezier(0.87,0,0.13,1)`). Cursor is pointer during display.
- **Architecture:** `Intro.tsx` (wrapper with responsive detection) → `IntroDesktop.tsx` (≥1024px) or `IntroMobile.tsx` (<1024px). Desktop "snow" uses `clamp(6rem,22vw,20rem)`, mobile uses `clamp(6rem,26vw,16rem)`.

### Hero Section
- **Fullscreen video background** — Auto-playing, muted, looping MP4 with `bg-black/40` overlay for readability
- **"VANTAGE" heading** — Centered, Switzer Bold, `clamp(3rem,8vw,8rem)`, white, 0 tracking
- **Centered "snow" title** — Synonym Bold, `clamp(3rem,15vw,15rem)`, white, 0 tracking
- **Bottom-left "snow" title** — Synonym Bold, `clamp(4rem,22vw,20rem)`, white, 0 tracking, positioned `bottom-6 left-6`
- **Architecture:** `Hero.tsx` → `HeroDesktop.tsx` (≥1024px) | `HeroMobile.tsx` (<1024px). Mobile bottom-left: `bottom-4 left-4`.

### Navbar
- **Fixed positioning** — Always visible at top of viewport (`z-40`)
- **Scroll-based mode switching:** Transparent background + white text over Hero → Navy (`#0d1b2a`) background + white text past Hero (switches precisely at `scrollY >= window.innerHeight`)
- **Layout:** Flexbox row with `px-6 py-4`. Left: lowercase "snow" logo (Synonym Bold, 24px). Right: 5 nav links (ready to wear, accessories, collections, editorial, journal) with hover underline animation (300ms).
- **Smooth transitions:** All color changes use `transition-all duration-300`

### Brand Statement Section
- **Background:** Pure white
- **Content:** Massive lowercase "snow" in Synonym Bold, `clamp(4rem,20vw,20rem)`, pure black text
- **Layout:** Full-width, left-aligned, `pt-24 pb-4`, with right-side column for three nav link groups

### SeasonEdit Section (Featured)
- **Title row:** "Featured" (Switzer Medium, `clamp(3.5rem,10vw,10rem)`) left + "SEE MORE" (Switzer Semi-bold, 60% black, underline, right-aligned with `mr-8`)
- **Desktop layout:** Full-width 4-column grid (`grid-cols-4`), 1 row of 4 products, `gap-1` (4px) between columns and matching edge padding (`px-1`)
- **Products:** 4 fashion items with 3:4 images (`.jpg`), names in Switzer Regular, prices in Switzer Light
- **Heart save:** Lucide `Heart` icon, navy `#0d1b2a`, appears on hover with opacity + scale transition, toggles fill on click

### Collections Section
- **Title row:** "COLLECTIONS" + "SEE MORE" (same styling as Featured)
- **Desktop layout:** 2-column grid (`grid-cols-2`), `gap-1` between cards
- **Category cards:** 2 cards (Men, Women), 3:4 ratio, custom images, 10% black overlay, category name bottom-left (Switzer Medium, `clamp(1.8rem,4vw,3.5rem)`), "DISCOVER" bottom-right (Switzer Light, loose tracking)

### Categories Section
- **Title row:** "CATEGORIES" + "SEE MORE" (same styling)
- **Desktop layout:** 6 category rows stacked vertically, each with 4px gap. Alternating pattern:
  - Odd rows (1,3,5): Big 1:1 image left, two small 1:1 images stacked right
  - Even rows (2,4,6): Two small 1:1 images stacked left, big 1:1 image right
- **Category titles:** Below the two small images, Switzer Medium, `clamp(3rem,7vw,7rem)`, pure black, `leading-[1]`
- **Images:** All PNGs with white background (`/assets/images/categories-new/`). 1px white outline (`outline-1 outline-white outline-offset-[-1px]`) on every image to mask baked-in dark edges.
- **6 categories:** Women's Outerwear & Coats, Men's Outerwear & Coats, Blouses & Tops, Dresses, Suits, Accessories

### Philosophy Section
- **Title row:** "PHILOSOPHY" + "SEE MORE" (same styling)
- **Desktop layout:** Flex row with `gap-1`. Left 60%: 16:9 image (`object-cover`) with 10% black overlay. Right 40%: text content with heading + body copy in Switzer Light.
- **Background:** White

### About Section
- **Desktop layout:** 3-column grid (`grid-cols-3`, `gap-1`)
- **Panel 1 (left):** 3:4 image, 10% black overlay, "ABOUT US" top-left + "DISCOVER" top-right
- **Panel 2 (center):** Text content — badge ("The Studio"), brand description (Switzer Light, `clamp(1.25rem,2vw,2.5rem)`), divider line, brand paragraph
- **Panel 3 (right):** Same image as panel 1, identical styling

### Footer Section
- **Background:** Deep navy (`bg-[#0d1b2a]`), `px-16 pt-24 pb-4`
- **Top row:** Flex layout. Left: massive "SNOW" (Synonym Bold, `clamp(4rem,20vw,20rem)`, white, `leading-[0.8]`). Right: 3 nav columns (Collections, Support, Connect) with uppercase headings (Switzer Bold, wide tracking) and lowercase link lists.
- **Bottom row:** Copyright + legal links (Privacy Policy, Terms of Service), separated by white divider line
- **All text:** Pure white

### ProductCard Component
- **Image:** 3:4 portrait aspect ratio using `pt-[133.33%]` padding trick, `bg-neutral-900` fallback
- **Save heart:** Lucide `Heart` icon, navy `#0d1b2a` stroke + fill, appears on hover (`opacity-0→100`, `scale-75→100`, 300ms), positioned top-right
- **Info:** Name (Switzer Regular, neutral-900, `tracking-wide`) + Price (Switzer Light, neutral-600) — flush zero gap, left-aligned to image edge
- **Link support:** Accepts optional `href` prop. When present, card wraps in `<Link>` for client-side navigation. Used in SeasonEdit (all 4 products link to their detail pages).

### ProductDetailDesktop Component
- **Location:** `src/components/sections/product-detail/ProductDetailDesktop.tsx`
- **Props:** Accepts `ProductDetail` type (from `@/data/products`)
- **Layout:** 50/50 flex split. Left: 5 stacked 3:4 images with `outline-offset-[-1px]` to mask dark edges. Right: sticky info panel (`sticky top-0 min-h-screen`)
- **Top section (fixed, never shrinks):** Product name (clamp 1.5-2.5rem, font-medium, black), price (text-2xl, font-medium, neutral-600), tax note, divider, color selector (swatches with self-matching border on select), size selector (navy `#284468` on select, navy hover border on unselected), quantity + Add to Cart button
- **Fixed spacer:** 80px (`h-20`) gap between Add to Cart and accordion section
- **Accordion section:** 5 items using native `<details>` elements — Description, Details (bullet list), Size & Fit, Material & Care, Shipping & Returns. Custom +/× icon with group-open:rotate-45 transition. CSS keyframe animation for smooth open (opacity + translateY).
- **Data:** Product content lives in `src/data/products.ts` with all 4 products

### SuggestedProducts Component
- **Location:** `src/components/sections/product-detail/SuggestedProducts.tsx`
- **Layout:** Same grid style as SeasonEdit — `grid-cols-4 gap-x-1`, 4 ProductCards
- **Title:** "You May Also Like" in clamp(2.5rem,6vw,6rem), Switzer Medium, `mb-12` spacing

### CategoryCard Component
- **Image:** 3:4 portrait aspect ratio, `object-cover`, `bg-neutral-900`
- **Overlay:** 10% black (`bg-black/10`) for readability
- **Label:** Category name bottom-left, white Switzer Medium, `clamp(1.8rem,4vw,3.5rem)`
- **DISCOVER:** "DISCOVER" bottom-right, white Switzer Light, `tracking-[0.15em]`, uppercase
- **Location:** `src/components/ui/CategoryCard/`

## 6. Technical Goals
- 100% Mobile Responsive (Critical for Fashion).
- Font cleanup: only Synonyn and Switzer remain; Khand and Plein removed.
- Image/video optimization using Next.js `<Image />` and native `<video>` for instant loading.
- Auto-hide Navbar pattern (scroll-down-hide, scroll-up-show) common in luxury e-commerce.
