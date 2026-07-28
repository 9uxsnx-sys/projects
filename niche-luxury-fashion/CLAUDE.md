# VANTAGE — Luxury Fashion E-Commerce

## Project Overview
A high-end luxury fashion e-commerce website built with Next.js, Tailwind CSS v4, and TypeScript. The brand aesthetic is minimal, editorial, and monochrome — focusing on quiet luxury.

---

## Tech Stack
- **Framework:** Next.js 16 (Turbopack)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **State:** React Context (Cart, Saved)

---

## Color System (Current)
| Token | Code | Usage |
|-------|------|-------|
| Pure black | `#000000` | All CTAs (Add to Cart, Checkout, Place Order, Apply), selected states, text over light bg |
| Pure white | `#ffffff` | Text over dark bg, button text (default state) |
| Navy | `#0d1b2a` | Footer background, heart icon fill/stroke |
| Navy accent | `#284468` | *(Deprecated for CTAs — replaced by black)* Still used in Subscribe button hover on footer |
| Neutral-900 | `#171717` | Product image container backgrounds |
| Neutral-600 | `#525252` | Product price text |
| Black/60 | `rgba(0,0,0,0.6)` | "MORE"/"SEE MORE" link text |

---

## Layout & Spacing
- **Section padding:** `px-1` (4px) horizontal on all grid sections
- **Vertical gap between sections:** 1px (via parent `gap-1`)
- **Product grid:** `grid-cols-4` desktop, `grid-cols-2` mobile
- **Product card aspect ratio:** 3:4 (`pt-[133.33%]`)
- **Navbar height:** `h-8` (32px) on mobile, `py-4` (16px padding) on desktop
- **Navbar z-index:** `z-[60]` on mobile to stay above overlays

---

## Typography
- **Switzer:** All body text, section titles, navigation, UI labels
- **Synonym:** Brand logotype "snow" only
- **Product card text:** `text-sm lg:text-base` (responsive)
- **Navbar links:** `text-[10px]` on mobile, `text-sm` on desktop
- **Section titles:** `text-[clamp(3.5rem,10vw,10rem)]` desktop, clamp or smaller on mobile

---

## Button System (Interactive States)
All primary CTAs follow the **invert hover pattern**:
- **Default:** `bg-black text-white border border-black`
- **Hover:** `bg-white text-black` (border stays black)
- **Transition:** `transition-all duration-300`
- **Affected buttons:** Add to Cart, Checkout, Place Order, Apply (filter overlay)

---

## Component Architecture

### Pages / Routes
| Route | Component | Status |
|-------|-----------|--------|
| `/` (homepage) | `app/page.tsx` → Intro + Hero + SeasonEdit + Collections + About + Brand + Philosophy + Categories + Footer | Complete |
| `/dev` | `app/dev/page.tsx` → Dev page with Navbar + ProductListing + News + Footer | Active |
| `/cart` | `app/cart/page.tsx` → Full-page cart (mobile) | Complete |
| `/checkout` | `app/checkout/page.tsx` → CheckoutMobile / CheckoutDesktop (responsive) | Complete |
| `/products/[slug]` | `app/products/[slug]/page.tsx` → ProductDetailMobile / ProductDetailDesktop | Complete |
| `/saved` | `app/saved/page.tsx` → Saved Pieces page (wishlist) | Complete |

### Navbar Components
- **NavbarDesktop** — Fixed top, transparent→white bg on scroll, auto-hide/show on scroll direction
- **NavbarMobile** — Fixed top `h-8`, responsive visibility, full-screen menu overlay, `overlayOpen` prop for filter/saved menu coexistence

  **NavbarMobile `overlayOpen` prop**: When `true`, forces the navbar to stay visible (`translate-y-0`, `bg-white`, `text-black`, logo visible) — used when a child overlay (e.g., filter menu) is open.

### Mobile Menu Overlay
- Full-screen overlay positioned below navbar: `fixed inset-x-0 top-8 bottom-0`
- Smooth opacity transition (300ms ease-out)
- Accordion-style expand/collapse for nav link categories
- Ref-based height animation via `scrollHeight` + `requestAnimationFrame`
- Body scroll lock when open
- Toggled by "Menu" button (open/close)

### Mobile Filter Overlay (Product Listing)
- Same pattern as menu overlay: `fixed inset-x-0 top-8 bottom-0 z-50`
- Uses `onFilterChange` callback to communicate `overlayOpen` state to parent
- Parent passes `overlayOpen` to `NavbarMobile` to keep navbar visible
- Contains: Category (accordion), Colour, Size, Price Range, Sort By, Clear/Apply

### Product Detail Components
- **ProductDetailDesktop** — Left 50% image stack (no gap), right 50% info panel
- **ProductDetailMobile** — Main image (3:4), name/price/description, remaining 4 images stacked full-width (no gap), color/size selectors, quantity, Add to Cart, accordion

### Cart & Checkout
- **CartDrawer** — Desktop slide-in drawer (right side)
- **Cart page** (`/cart`) — Mobile full-page cart with Navbar + Footer
- **CheckoutDesktop** — 60/40 split layout
- **CheckoutMobile** — Stacked full-width, collapsible sections, scrollable (no fixed buttons)

### Product Listing
- **ProductListingDesktop** — Filters drawer, sort by, 4-col grid
- **ProductListingMobile** — Filter/sort buttons, full-screen filter overlay, 2-col grid mobile / 4-col desktop

### Saved (Wishlist)
- **Route:** `/saved`
- **Title:** "Saved Pieces"
- **Grid:** `grid-cols-2 lg:grid-cols-4 gap-x-1 gap-y-4`
- Uses `SavedContext` to filter products by saved IDs
- Includes Navbar + Footer, responsive

---

## Key Technical Patterns
1. **Body scroll lock**: `useEffect` sets `document.body.style.overflow = "hidden"` when overlay/menu open, restored on close + cleanup
2. **Global scrollbar hidden**: CSS rules on `html` + `.scrollbar-hide` class
3. **Responsive detection**: `useState` + `useEffect` checking `window.innerWidth < 1024`, with resize listener
4. **Navbar auto-hide**: `useRef` tracking `prevScrollY`, hides on scroll down past 80px, shows on scroll up
5. **Smooth accordion animation**: `useRef` map + `scrollHeight` + `requestAnimationFrame`

---

## Data
- Products defined locally in component files (no database)
- `src/data/products.ts` — centralized product data for detail pages
- `CartContext` — `items`, `addItem`, `removeItem`, `updateQuantity`, `itemCount`, `subtotal`, `setCartOpen`
- `SavedContext` — `savedIds`, `toggleSave`, `isSaved`, `savedCount`
