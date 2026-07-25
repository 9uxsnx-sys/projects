# Design & Technical Log

## Progress Tracking

### [Phase 1: Setup] ✅
- [x] Initialize project structure (Next.js 16 + Tailwind v4 + TypeScript)
- [x] Configure Tailwind v4 with `@theme` CSS-first config
- [x] Set up custom fonts: Khand (headlines) + Switzer (UI)
- [x] Set up globals.css with monochrome color system

### [Phase 2: Development]
- [x] Hero Section — fullscreen video background with "SNOW" title
- [x] Responsive Navbar — auto-hide/show, scroll-based mode switching
- [x] SeasonEdit Section — "SELECTION" title + product grid (desktop 2x4, mobile single column)
- [x] ProductCard Component — 3:4 image, heart save icon, name + price
- [x] Collections Section — 3 category cards (Men, Women, Accessories), full-width grid
- [x] CategoryCard Component — 3:4 image, 10% black overlay, label bottom-left
- [x] About Section — twin 3:4 blocks (image + video), zero gap, custom assets
- [ ] Mobile responsive audit
- [ ] Custom animations & micro-interactions (Framer Motion)

---

## Decision Log

### Decision: Navbar Mode Switching (Scroll-Based)
- **Context:** The Navbar needs two visual modes — transparent over the dark Hero section, solid white when scrolled past it.
- **Choice:** Track `scrollY >= window.innerHeight` and toggle `bg-transparent`/`bg-white` + `text-white`/`text-black` with `transition-colors duration-300`.
- **Rationale:** Threshold at exactly 1 viewport height ensures the switch happens precisely when the Hero fully exits the viewport. No premature or delayed transition.

### Decision: Navbar Auto-Hide/Show on Scroll
- **Context:** Luxury e-commerce sites (Farfetch, SSENSE) hide the navbar on scroll-down to maximize content immersion and show it on scroll-up for navigation access.
- **Choice:** Track scroll direction via `useRef(prevScrollY)`. Hide (`-translate-y-full`) when scrolling down past 80px. Show (`translate-y-0`) when scrolling up. Both with `transition-all duration-300`.
- **Rationale:** Using a ref avoids unnecessary re-renders on every scroll event. The 80px threshold prevents accidental hide on tiny scrolls.

### Decision: Navbar Fixed Height with Centered Logo
- **Context:** The "SNOW" logo needed equal vertical spacing above and below it within the Navbar.
- **Choice:** Fixed heights (`h-12` desktop / `h-10` mobile) with `flex items-center` on the header. Removed vertical padding from the nav element.
- **Rationale:** Fixed height guarantees consistent spacing regardless of content. Flex centering is the simplest CSS approach for perfect vertical centering.

### Decision: Font Selection
- **Context:** The original CONTEXT.md specified Didot/Bodoni for headlines and Inter/Satoshi for UI.
- **Choice:** **Khand** (SemiBold, Bold) for brand titles/headlines — **Switzer** (Regular, Medium) for navigation & UI text.
- **Rationale:** Khand provides a bold, contemporary, slightly geometric sans-serif that suits avant-garde streetwear. Switzer is a clean, versatile sans-serif with excellent legibility at small sizes. Both are self-hosted via `@font-face` in globals.css.

### Decision: Hero Media Type
- **Context:** CONTEXT.md originally called for a "massive high-res image" for the Hero.
- **Choice:** Replaced with a fullscreen MP4 video background (`hero-bg.mp4`) with a subtle black overlay (`bg-black/20`).
- **Rationale:** Video creates a more immersive, editorial, luxury feel. The overlay ensures text readability regardless of video content. MP4 is self-hosted for performance control.

### Decision: Product Card Design
- **Context:** The SeasonEdit section needed product cards that feel editorial and luxury, not commercial.
- **Choice:** 3:4 portrait aspect ratio (`pt-[133.33%]`), heart icon (lucide `Heart`) appears on hover with opacity + scale transition, info below image with name (Switzer normal) + price (Switzer light) flush at zero gap.
- **Rationale:** 3:4 is the industry standard for luxury fashion e-commerce (SSENSE, Farfetch). The heart icon on hover follows luxury site conventions for save/wishlist. Flush name + price creates a clean, editorial block.

### Decision: Section Layout (Full-Width Grid)
- **Context:** The SeasonEdit products should feel immersive and full-bleed, not constrained in a container.
- **Choice:** No `max-width` container. `grid grid-cols-4 gap-1` with matching `px-1` on the section, so edge padding equals the gap between products. Row gap at `gap-y-12` for clear separation.
- **Rationale:** The 4px equal spacing creates a tight, cohesive grid where products feel connected but distinct. Full-width layout matches the avant-garde, editorial aesthetic.

### Decision: Mobile Single-Column Pattern
- **Context:** The mobile layout for SeasonEdit needed to maintain the same edge gap as desktop while adapting to smaller screens.
- **Choice:** Single column (`flex flex-col gap-8`) with same `px-1` edge padding. Title uses `clamp(2.5rem,12vw,4rem)` for responsive sizing.
- **Rationale:** Single column is the standard mobile pattern for product listings. The 32px gap between products provides clear breathing room. Matching edge padding ensures consistency across breakpoints.

### Decision: Category Card Design
- **Context:** The Collections section needed category cards (Men, Women, Accessories) that feel distinct from product cards while maintaining the same visual language.
- **Choice:** Same 3:4 aspect ratio, custom brand images (men.jpg, women.jpg, accessories.jpg), 10% black overlay for text readability, category name bottom-left in white Switzer medium. No interactivity (save heart, etc.) — purely navigational.
- **Rationale:** The 10% overlay is lighter than the ProductCard (no heart interaction needed). Bottom-left label position is a familiar luxury editorial convention. Keeping the same 3:4 ratio and `gap-1` spacing creates visual consistency across sections.

### Decision: About Section Layout (Twin 3:4 Blocks)
- **Context:** The About section needed to communicate brand story through a dual-media layout — one side image, one side video.
- **Choice:** Two 3:4 blocks in a `grid grid-cols-2` with zero gap between them. Left: custom image with dual text (ABOUT US + DISCOVER), 20% overlay. Right: custom autoplay video with 10% overlay. Same `px-1` edge padding as other sections.
- **Rationale:** Zero gap creates a cohesive visual where the two blocks feel like a single composition. The different overlay percentages (20% image vs 10% video) account for the inherent brightness difference between a still image and a moving video.

### Decision: Section CTA Pattern ("DISCOVER MORE")
- **Context:** Section title rows across SeasonEdit, Collections, and About needed a consistent editorial CTA.
- **Choice:** "DISCOVER MORE" right-aligned on the same row as the section title, Switzer medium, `tracking-[0.15em]` uppercase, with `pr-10` right padding for breathing room from edge.
- **Rationale:** Having the CTA in the title row creates a clean, editorial header without requiring a separate row or button. The right-aligned position signals forward action. Consistent across all content sections.

---

## Technical Notes

### Navbar Component Architecture
- **Wrapper** (`Navbar.tsx`): Handles responsive detection (< 1024px = mobile), scroll tracking (isPastHero, isVisible), passes props down.
- **Desktop variant** (`NavbarDesktop.tsx`): Full nav links (Men, Women, Accessories, Collections, Account, Saved, Cart), underline hover effects.
- **Mobile variant** (`NavbarMobile.tsx`): Compact layout (SNOW, Menu, Cart).
- Both variants are stateless presentational components — all state lives in the wrapper.

### ProductCard Component Architecture
- **Location:** `src/components/ui/ProductCard/ProductCard.tsx` — reusable, can be used across sections
- **Props:** Accepts `Product` type (`id`, `name`, `price`, `imageUrl`)
- **Image:** 3:4 ratio via padding trick, `object-cover` for consistent fill, neutral-900 background fallback
- **Save state:** Local `useState` toggle on heart click, `stopPropagation` to prevent accidental navigation
- **Hover:** Heart appears with `opacity-0 → opacity-100` + `scale-75 → scale-100`, `duration-300`

### CategoryCard Component Architecture
- **Location:** `src/components/ui/CategoryCard/CategoryCard.tsx` — reusable, can be used across sections
- **Props:** Accepts `Category` type (`id`, `name`, `imageUrl`)
- **Image:** 3:4 ratio via padding trick, `object-cover`
- **Overlay:** `bg-black/10` positioned absolutely over the full image
- **Label:** Absolute positioned bottom-left with `z-10`, white Switzer medium, clamp-based responsive sizing

### Assets Directory Structure
- **public/assets/images/categories/** — men.jpg, women.jpg, accessories.jpg
- **public/assets/images/about/** — about-us.jpg
- **public/assets/videos/** — hero-bg.mp4, about-us.mp4
