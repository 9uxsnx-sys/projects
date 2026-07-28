# DESIGN LOG.md — VANTAGE / snow

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
