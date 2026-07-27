# Design & Technical Log

## Progress Tracking

### [Phase 1: Setup] ✅
- [x] Initialize project structure (Next.js 16 + Tailwind v4 + TypeScript)
- [x] Configure Tailwind v4 with `@theme` CSS-first config
- [x] Set up custom fonts: Switzer (UI) + Synonym (editorial snow branding)
- [x] Set up globals.css with monochrome + navy color system

### [Phase 2: Development]
- [x] Hero Section — fullscreen video background with centered VANTAGE heading + bottom-left "snow" in Synonym Bold (0 tracking)
- [x] Responsive Navbar — auto-hide/show, scroll-based mode switching (transparent → navy bg with white text)
- [x] SeasonEdit Section — "Featured" title + "SEE MORE" link, 4-product grid (desktop 4-col), heart save (navy #0d1b2a)
- [x] ProductCard Component — 3:4 image, navy heart icon on hover, name + price
- [x] Collections Section — 2 category cards (Men, Women), full-width grid, DISCOVER label
- [x] CategoryCard Component — 3:4 image, 10% black overlay, name bottom-left + DISCOVER bottom-right
- [x] About Section — 3-column layout (image + text + image), zero gap, custom assets
- [x] Brand Section — full-width lowercase "snow" in Synonym Bold, `clamp(4rem,20vw,20rem)`
- [x] Philosophy Section — 60/40 image + text layout, Switzer Light body copy
- [x] Categories Section — 6 category rows with alternating big-left/big-right 1:1 pattern, category titles below small images
- [x] Footer Section — navy bg (#284468), massive "SNOW" logotype (Synonym Bold), 3 nav columns, copyright + legal links
- [x] Intro Overlay — fullscreen black overlay with centered "snow" in Synonym Bold, click-to-dismiss
- [x] Font Cleanup Audit — removed Khand, Plein, and ~70 unused Switzer variant files (~100 files total). Only Switzer and Synonym remain.
- [x] Desktop Visual Description — comprehensive screen-reader-accessible document (DESKTOP_VISUAL_DESCRIPTION.md)
- [x] Product Detail Desktop — sticky 50/50 layout, stacked 3:4 images left, sticky info right, 5-section accordion
- [x] Dynamic Product Routing — /products/[slug] dynamic route, shared product data in src/data/products.ts
- [x] SuggestedProducts Section — "You May Also Like" below product detail, 4-card grid
- [x] Navy Unification — switched all interactive navy from #0d1b2a → #284468 (navbar, footer, size buttons, Add to Cart)
- [ ] Mobile responsive audit
- [ ] Custom animations & micro-interactions (Framer Motion)

---

## Decision Log

### Decision: Universal "snow" Font Switch (Switzer → Synonym Bold)
- **Context:** The word "snow" (the brand's symbolic logotype) used Switzer Bold in the Hero, Brand section, and Navbar. It needed a more editorial, lowercase-friendly treatment.
- **Choice:** Switched all instances of "snow" across the entire site to **Synonym Bold** — including Intro overlay, Hero (centered + bottom-left), Navbar logo, Brand statement, and Footer "SNOW" (uppercase).
- **Rationale:** Synonym Bold offers a more refined, magazine-cover editorial character that works beautifully in lowercase. This creates a unified brand voice across every section. Switzer remains for all UI text, section titles, and body copy.

### Decision: Universal Letter-Spacing Normalization (22px → 0px)
- **Context:** The Hero's "snow" title originally had extreme tracking values (`tracking-[22px]` desktop, `tracking-[20px]` mobile) inherited from a Khand Bold experiment. After switching to Synonym Bold, these enormous letter-spacing values distorted the typeface.
- **Choice:** Set letter-spacing to `0px` (normal) for all "snow" text across all sections — Hero, Brand, Navbar, Footer, and Intro.
- **Rationale:** Synonym Bold's natural letterfit is tight and elegant. Adding tracking destroys its editorial character. Zero tracking creates visual consistency across the entire brand system.

### Decision: Navbar Mode Switching (Scroll-Based)
- **Context:** The Navbar needs two visual modes — transparent over the dark Hero section, solid dark when scrolled past it.
- **Choice:** Track `scrollY >= window.innerHeight` and toggle `bg-transparent`/`bg-[#0d1b2a]` (navy) + white text in both modes with `transition-colors duration-300`.
- **Rationale:** Navy background on scroll matches the footer's accent color, creating bookend visual consistency. White text in both modes ensures legibility and avoids a jarring color shift.

### Decision: Navbar Auto-Hide/Show on Scroll
- **Context:** Luxury e-commerce sites (Farfetch, SSENSE) hide the navbar on scroll-down to maximize content immersion and show it on scroll-up for navigation access.
- **Choice:** Track scroll direction via `useRef(prevScrollY)`. Hide (`-translate-y-full`) when scrolling down past 80px. Show (`translate-y-0`) when scrolling up. Both with `transition-all duration-300`.
- **Rationale:** Using a ref avoids unnecessary re-renders on every scroll event. The 80px threshold prevents accidental hide on tiny scrolls.

### Decision: Navbar Fixed Height with Centered Logo
- **Context:** The "snow" logo needed equal vertical spacing above and below it within the Navbar.
- **Choice:** `py-4` with `flex items-center` on the header.
- **Rationale:** Fixed vertical padding guarantees consistent spacing regardless of content. Flex centering is the simplest CSS approach for perfect vertical centering.

### Decision: Font Selection
- **Context:** The original CONTEXT.md specified Didot/Bodoni for headlines and Inter/Satoshi for UI.
- **Choice:** **Switzer** (Bold, Medium, Regular, Light) for section titles, UI, navigation, and body copy. **Synonym** (Bold, Medium, Regular, Light) for all "snow" brand logotype text. Khand and Plein were evaluated and subsequently removed during a cleanup audit as neither was used in production.
- **Rationale:** Switzer provides a clean, versatile sans-serif with excellent legibility across all sizes. Synonym offers a refined editorial character ideal for the lowercase "snow" brand treatment. Using two complementary families creates clear visual hierarchy.

### Decision: Hero Media Type
- **Context:** CONTEXT.md originally called for a "massive high-res image" for the Hero.
- **Choice:** Replaced with a fullscreen MP4 video background (`hero-bg.mp4`) with a subtle black overlay (`bg-black/40`).
- **Rationale:** Video creates a more immersive, editorial, luxury feel. The overlay ensures text readability regardless of video content.

### Decision: Product Card Design
- **Context:** The SeasonEdit section needed product cards that feel editorial and luxury.
- **Choice:** 3:4 portrait aspect ratio (`pt-[133.33%]`), heart icon (lucide `Heart`) appears on hover with opacity + scale transition, info below image with name (Switzer normal) + price (Switzer light) flush at zero gap. Navy `#0d1b2a` for heart color.
- **Rationale:** 3:4 is the industry standard for luxury fashion e-commerce (SSENSE, Farfetch). Navy heart color ties into the brand's accent palette.

### Decision: Section Layout (Full-Width Grid)
- **Context:** All sections should feel immersive and full-bleed, not constrained in a container.
- **Choice:** No `max-width` container. `grid-cols-N gap-1` with matching `px-1` on the section, so edge padding equals the gap between items.
- **Rationale:** The 4px equal spacing creates a tight, cohesive grid where items feel connected but distinct.

### Decision: Collections Section — Accessories Card Removed
- **Context:** The Collections section originally had 3 cards (Men, Women, Accessories) in a 3-column grid.
- **Choice:** Removed the Accessories card and changed to a 2-column grid (`grid-cols-2`) so Men and Women take full width with no empty space.
- **Rationale:** Having only two editorial categories (Men, Women) creates a stronger visual focus. The Accessories category was redundant with the Categories section below.

### Decision: Categories Section — Expanded to 6 Rows with Alternating Layout
- **Context:** The Categories section needed more content and a distinctive layout pattern.
- **Choice:** 6 category rows with alternating big-left (odd rows) / big-right (even rows) pattern. Each row: one 1:1 big image on one side, two 1:1 small images stacked on the other. Category titles positioned below the small images.
- **Rationale:** The alternating pattern creates visual rhythm and prevents monotony as the user scrolls. The 6 categories cover all major fashion segments without being overwhelming.

### Decision: Category Image Outline Fix
- **Context:** Category PNG images had baked-in dark edge pixels showing as a black outline around images on the white background.
- **Choice:** Applied `outline-1 outline-white outline-offset-[-1px]` to every category `<img>` element, painting a 1px white line inside the image boundary that masks the dark edges.
- **Rationale:** The issue was in the source PNG files (not a CSS problem). The outline-offset technique is lightweight, doesn't affect layout, and reliably covers edge artifacts without modifying the image files.

### Decision: Section Title Pattern (SEE MORE / MORE with Underline)
- **Context:** All major sections (Featured, COLLECTIONS, CATEGORIES, PHILOSOPHY) needed a consistent secondary CTA aligned right of the section title.
- **Choice:** Desktop: "SEE MORE" on one line, Switzer Semi-bold, 60% black opacity, uppercase, 0.15em tracking, 1px underline, `mr-8` right margin. Mobile: Just "MORE" (single word), same styling. Both vertically centered with the section title via `items-center`.
- **Rationale:** "SEE MORE" is a clean editorial convention. The underline provides subtle visual weight without being obtrusive. The mobile truncation to just "MORE" saves horizontal space on small screens.

### Decision: About Section — 3-Column Layout (Image + Text + Image)
- **Context:** The original two-panel layout (image + video) didn't effectively communicate the brand story.
- **Choice:** Changed to a 3-column grid: left panel = image with 10% overlay and text labels, center panel = brand text content with divider line, right panel = same image as left. All with 4px gaps.
- **Rationale:** The symmetrical image panels create a strong editorial frame for the central text. The repeated image on both sides feels intentional and gallery-like rather than redundant.

### Decision: Philosophy Section — Image + Text Split Layout
- **Context:** The original Philosophy was just a centered pull-quote with a large quotation mark.
- **Choice:** Changed to a full section with a title row (PHILOSOPHY + SEE MORE), then a two-column layout: 60% 16:9 image with 10% overlay left, 40% text right.
- **Rationale:** The new layout better communicates the brand's philosophy through visual + textual storytelling rather than relying solely on typography.

### Decision: Brand Section — Text-Only Statement
- **Context:** The Brand section originally had an autoplay MP4 video with centered "SNOW" in Switzer Bold.
- **Choice:** Replaced entirely — now a pure text section with massive lowercase "snow" in Synonym Bold (`clamp(4rem,20vw,20rem)`) on a white background.
- **Rationale:** The text-only approach is cleaner and more editorial. It lets the typography speak as the brand statement without competing with video content. The removal of the video improves page performance.

### Decision: Footer — Simplified Layout
- **Context:** The original Footer had a complex subscribe form, 4 link columns, and various interactive elements that didn't match the brand's minimalist direction.
- **Choice:** Simplified to: navy `#0d1b2a` background, massive "SNOW" (Synonym Bold, `clamp(4rem,20vw,20rem)`, `leading-[0.8]`) on the left, 3 nav columns on the right, copyright + legal links at the bottom.
- **Rationale:** The simplified footer follows the minimalist luxury convention (similar to Celine, The Row). The massive SNOW creates a strong brand anchor at the page bottom.

### Decision: Heart Color — Black to Navy
- **Context:** The heart icon on ProductCards used black for stroke and fill.
- **Choice:** Changed to navy `#0d1b2a` for both stroke and fill color.
- **Rationale:** Navy ties the interactive save element into the brand's accent color palette, creating visual consistency with the footer and navbar.

### Decision: Font Cleanup Audit
- **Context:** The project had accumulated ~100 font files across 4 families. Only 2 families were actually used in production.
- **Choice:** Removed Khand (24 files), Plein (4 files), and ~70 unused Switzer variant files. Kept only Switzer Regular/Medium/Bold (.woff2 + .woff) and Synonym Light/Regular/Medium/Bold. Also removed orphaned images (accessories.jpg, women-outerwear-big.jpg).
- **Rationale:** Reduces project size by ~11-14 MB. No impact on production since removed fonts were not referenced in any production component.

### Decision: Section Order on Homepage
- **Context:** The sections needed a deliberate order that tells a brand story from top to bottom.
- **Choice:** Navbar → Hero → Brand → Featured → Collections → Categories → Philosophy → About → Footer
- **Rationale:** Brand statement right after Hero establishes visual identity immediately. Featured (products) follows as the first commercial section. Collections and Categories provide navigation structure. Philosophy and About offer brand depth as editorial closer-content before the Footer.

### Decision: Price Display — text-2xl font-medium
- **Context:** The product detail page price started at `text-lg font-light` (18px, thin), which felt underweight compared to the product name (up to 40px).
- **Choice:** Bumped to `text-2xl font-medium text-neutral-600` (24px, medium weight).
- **Rationale:** Luxury stores state prices with presence, not apology. The 24px medium weight pairs confidently with the product name's clamp. Neutral-600 keeps it from competing with the name (black).

### Decision: Accordion Icon — +/× Rotation Instead of ↓ Arrow
- **Context:** The initial accordion used a `↓` arrow with `group-open:rotate-180`. User requested a cleaner icon system.
- **Choice:** Replaced the `↓` arrow with a `+` character that rotates 45° on open to form `×`. Uses `group-open:rotate-45 transition-transform duration-300 select-none`.
- **Rationale:** The +/× pattern is more widely recognized in luxury e-commerce (matches Net-a-Porter, Ssense). The 45° rotation is subtle and clean — no character swap, just a CSS transform.

### Decision: Accordion Smooth Open Animation
- **Context:** Native `<details>` elements open/close instantly without transition, which felt abrupt for a luxury site.
- **Choice:** Added CSS `@keyframes` animation via globals.css — content fades in (`opacity: 0→1`) and slides down (`translateY(-6px→0)`) over 0.35s `ease-out`. Applied to `details.accordion-item[open] > :not(summary)`.
- **Rationale:** Close animation is instant (CSS can't animate `open` attribute removal), but the open animation provides a polished entrance. The ease-out curve gives a natural deceleration feel.

### Decision: Color Swatch Self-Matching Border
- **Context:** Selected color swatches used a navy `#284468` border, which looked wrong when a non-navy color was selected (e.g., Sage with navy border).
- **Choice:** When selected, each swatch's border matches its own hex color. Applied via inline `style={{ borderColor: color.hex }}` to avoid Tailwind JIT dynamic class issues.
- **Rationale:** A self-matching border reinforces the color identity. This is the standard on luxury sites where the swatch is both the button and the preview.

### Decision: Navy Unification — Switched from #0d1b2a to #284468
- **Context:** The site had two navy shades — `#0d1b2a` (navbar, footer, ProductCard heart) and `#284468` (size buttons, Add to Cart). User finalized `#284468` after testing 5+ shades.
- **Choice:** Updated all 6 instances: NavbarDesktop bg, NavbarMobile bg, FooterDesktop bg + subscribe hover, FooterMobile bg + subscribe hover.
- **Rationale:** A single navy creates visual consistency. `#284468` reads as clearly navy (not near-black) at all screen sizes. The heart icon retains `#0d1b2a` as a standalone accent.

### Decision: Product Detail Dynamic Routing
- **Context:** Initially built product-3 detail page as a static route. Needed to support all 4 products.
- **Choice:** Created dynamic route `/products/[slug]` with a shared `src/data/products.ts` file containing all product details. ProductDetailDesktop refactored to accept a `product` prop. SeasonEdit cards link to their respective slugs.
- **Rationale:** Dynamic routing follows Next.js conventions and eliminates duplication. The data layer separates content from presentation, making it easy to add new products without creating new components.

---

## Technical Notes

### Navbar Component Architecture
- **Wrapper** (`Navbar.tsx`): Handles responsive detection (< 1024px = mobile), scroll tracking (isPastHero, isVisible), passes props down.
- **Desktop variant** (`NavbarDesktop.tsx`): Full nav links (ready to wear, accessories, collections, editorial, journal), underline hover effects.
- **Mobile variant** (`NavbarMobile.tsx`): Compact layout with hamburger menu.
- Both variants are stateless presentational components — all state lives in the wrapper.

### ProductCard Component Architecture
- **Location:** `src/components/ui/ProductCard/ProductCard.tsx`
- **Props:** Accepts `Product` type (`id`, `name`, `price`, `imageUrl`, `href?`)
- **Image:** 3:4 ratio via padding trick, `object-cover` for consistent fill, neutral-900 background fallback
- **Save state:** Local `useState` toggle on heart click, `stopPropagation` to prevent accidental navigation
- **Hover:** Heart appears with `opacity-0 → opacity-100` + `scale-75 → scale-100`, `duration-300`
- **Link support:** When `href` is provided, card wraps in `<Link>` for client-side navigation to product detail pages

### CategoryCard Component Architecture
- **Location:** `src/components/ui/CategoryCard/CategoryCard.tsx`
- **Props:** Accepts `Category` type (`id`, `name`, `imageUrl`)
- **Image:** 3:4 ratio via padding trick, `object-cover`
- **Overlay:** `bg-black/10` positioned absolutely over the full image
- **Label:** Absolute positioned bottom-left with `z-10`, white Switzer medium, clamp-based responsive sizing

### Assets Directory Structure
- **public/assets/images/categories-new/** — 18 PNGs (6 categories × 3 images each): big + small-1 + small-2
- **public/assets/images/categories/** — men.jpg, women.jpg (Accessories removed)
- **public/assets/images/about/** — about-us.jpg
- **public/assets/images/season-edit/** — product-1.jpg through product-4.jpg
- **public/assets/images/product-detail/** — Cover + 4 gallery images per product (products 1-4)
- **public/assets/videos/** — hero-bg.mp4
- **public/assets/fonts/synonym/** — Synonym-Bold.woff2, Synonym-Bold.ttf, Synonym-Medium.woff2, Synonym-Regular.woff2, Synonym-Light.woff2
- **public/assets/fonts/switzer/** — Switzer-Bold.woff2, Switzer-Bold.woff, Switzer-Medium.woff2, Switzer-Medium.woff, Switzer-Regular.woff2, Switzer-Regular.woff

### ProductDetailDesktop Component Architecture
- **Location:** `src/components/sections/product-detail/ProductDetailDesktop.tsx`
- **Props:** Accepts `ProductDetail` type (from `@/data/products`)
- **Layout:** 50/50 flex split. Left: stacked 3:4 images. Right: `sticky top-0 min-h-screen` info panel
- **State:** Local `useState` for selectedSize, selectedColor, quantity
- **Accordion:** 5 native `<details>` items with `accordion-item` CSS class for smooth open animation. +/× icon via `group-open:rotate-45`
- **Color swatches:** Self-matching border via inline `style={{ borderColor: color.hex }}`

### SuggestedProducts Component Architecture
- **Location:** `src/components/sections/product-detail/SuggestedProducts.tsx`
- **Layout:** Same as SeasonEdit — `bg-white pt-24 pb-16 px-1`, 4 ProductCards in `grid-cols-4 gap-x-1`
- **Data:** Local hardcoded array with 4 different products (Blouse, Trousers, Tote, Boots)

### Shared Product Data
- **File:** `src/data/products.ts`
- **Exports:** `ProductDetail` type, `products` array (4 products), `getProductBySlug()`, `getProductBySeasonEditId()`
- **Fields per product:** id, slug, name, price, description, details (string[]), sizeFit, material, care, shipping, images (string[]), colors ({name, hex}[]), sizes (string[])

### Component Architecture: Section Wrapper Pattern
- **Wrapper** (e.g., `Brand.tsx`, `Philosophy.tsx`): Handles responsive detection (`< 1024px`), renders Desktop or Mobile variant. Returns null during SSR to prevent hydration mismatch.
- **Desktop variant** (e.g., `BrandDesktop.tsx`): Full layout for screens ≥ 1024px.
- **Mobile variant** (e.g., `BrandMobile.tsx`): Adapted layout for screens < 1024px.
- All variants are stateless presentational components.

### Font Cleanup Summary
- **Removed:** Khand (entire folder), Plein (entire folder), ~70 unused Switzer variant files (kept only Regular/Medium/Bold)
- **Removed images:** accessories.jpg, women-outerwear-big.jpg (orphaned)
- **globals.css:** Cleaned @font-face blocks — only Switzer (400/500/700) and Synonym (300/400/500/700) remain. Added Synonym-Bold.woff2 alongside existing .ttf for better browser coverage.
- **Savings:** ~100 files, ~11-14 MB total
