# DESIGN LOG.md — VANTAGE / snow

## 2026-07-30 — Hero Text: "Frost & Lace"

- **Hero text changed**: From "Whispers of Ivory" (Switzer, uppercase, light, tracked) to "Frost & Lace" (sentence case)
- **Font**: Switzer (switched from Synonym back to Switzer per user request)
- **Weight**: Semibold
- **Size increased**: Desktop 6vw → 8vw, Mobile 10vw → 14vw
- **Case**: Sentence case ("Frost & Lace"), not all caps

## 2026-07-30 — Full Performance Optimization Pass

- **Video compression**: All 4 background videos compressed from ~190 MB total to ~29 MB (85% reduction) using CRF 23-26, H.264, scaled to 1080p
- **Image conversion**: All PNG/JPEG images converted to WebP — 18 category images, 4 season-edit products, 2 collections, 1 about image — reducing ~70 MB to ~7 MB
- **Code optimizations**: Added `preload="metadata"` + `poster` to all 8 video components
- **Dynamic imports**: Wrapped Categories, Philosophy, About, Footer with `next/dynamic` + `Suspense` — below-fold sections no longer block initial render
- **Layout shift fix**: Added `width`/`height` attributes to ProductCard and CategoryCard images
- **Intro rework**: Added "Skip" button (appears after 1s), children render underneath intro (not hidden) for background resource loading
- **Categories dark flash fix**: Removed `loading="lazy"` from dynamically-imported Categories, changed `bg-neutral-900` containers to `bg-white`
- **Font cleanup**: Removed redundant `Synonym-Bold.ttf` (~100 KB) keeping only `.woff2`
- **Mobile layout fixes**: Brand section full-screen (`min-h-[100dvh]`), About section edge-to-edge, removed gaps between image/video blocks, footer link sizes increased

## 2026-07-30 — Product Detail: Save, Cart Toast, Cart Reset

- **Desktop heart**: Added save heart button to ProductDetailDesktop next to the price row (inline-right)
- **Mobile heart moved**: Removed from product image (top-right corner) and placed next to price row, matching desktop layout
- **Cart toast (mobile)**: When product added to cart, subtle bottom toast slides up with "Added to cart" + "View Cart" link. Auto-dismisses after 5s. Uses `CartToast` component + `animate-slide-up` CSS keyframe
- **Add to cart reset**: Both desktop and mobile now reset selected size (→ null) and color (→ first color) after adding to cart. Forces re-selection for next add
- **Saved page persist**: `SavedContext` now persists `savedIds` to `localStorage` under `niche-saved-ids` so saved items survive page navigation and refresh
- **Saved page image URLs**: Fixed product image URLs from `.jpg` → `.webp` to match actual files

## 2026-07-30 — Desktop Mega Menu Refinements & Route Cleanup

- **Mega menu height**: Removed `min-h-[300px]` so dropdown height fits tallest column content. Added `pt-3 pb-3` for equal spacing top/bottom
- **Blur overlay on open**: When mega menu opens (past hero), page behind gets `backdrop-blur-[2px]` overlay to focus attention on the menu. No blur when navbar is transparent (hero section)
- **Scroll lock**: Page scrolling locked while mega menu is open via `overflow:hidden` on both `<html>` and `<body>`
- **Shadow removed**: Removed `shadow-lg` from menu card — blur overlay replaces need for shadow
- **Route renamed**: `/dev` → `/products` for proper product listing page
- **"SEE MORE" links**: Categories and Season Edit "SEE MORE" buttons now link to `/products` product listing page
- **About Desktop edge-to-edge**: Removed `px-1` side padding and `pb-6` bottom gap to Footer, matching mobile layout

## 2026-07-25 — Purple Logo / Text around Logo (reverted)

- added colour tag with purple on the logo and the container that wraps it, looked like a complete different brand. not suitable for VANTAGE. reverted back to original.

## 2026-07-27 — Color Unification: Navy → Black for All CTAs

- Changed ALL primary action buttons from navy (`#284468`) to pure black (`#000000`)
- Affected buttons: Add to Cart (mobile + desktop), Checkout (cart drawer + mobile), Place Order (mobile + desktop)
- Applied the **invert-on-hover** pattern to all CTAs: `bg-black text-white border border-black` → `hover:bg-white hover:text-black`
- Desktop Checkout button also changed from navy to black for consistency
- Navy `#284468` is retained only for the Subscribe button hover state in the footer

## 2026-07-27 — Mobile Complete Feature Set

- Full-screen mobile menu overlay (below navbar, smooth opacity transition, accordion categories)
- Mobile product detail page (full-width images, color/size/quantity, Add to Cart)
- Mobile cart page (`/cart`)
- Mobile checkout page (scrollable, Place Order with invert hover)
- Mobile product listing page with full-screen filter overlay (category + colour + size + price + sort)
- Saved/Wishlist page (`/saved`) — "Saved Pieces"
- Navbar `overlayOpen` prop for keeping navbar visible during child overlays
- All navbar "Saved" links point to `/saved`

## 2026-07-22 — Navbar Auto-Hide on Scroll

- Implemented auto-hide/show behavior based on scroll direction (hides on scroll down, shows on scroll up)
- Desktop: transparent → white background when past hero section
- Mobile: slim `h-8` bar with `text-[10px]` links

## 2026-07-21 — Initial Desktop Build

- Full homepage: Intro → Hero → SeasonEdit → Collections → About → Brand → Philosophy → Categories → Footer
- Desktop product detail page
- Desktop cart drawer + checkout
- Desktop product listing with filter drawer
