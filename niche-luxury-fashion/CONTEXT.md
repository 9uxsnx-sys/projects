# VANTAGE — Project Context

## Overview

A luxury fashion e-commerce website for the **VANTAGE** brand, built with Next.js, Tailwind CSS v4, and TypeScript. The site is a full-fledged e-commerce experience with desktop and mobile support for browsing, product detail, cart, checkout, wishlist, and product listing with filtering.

### Brand Identity

- **Minimalist, editorial aesthetic** — heavily inspired by SSENSE, The Row, and luxury lookbook layouts
- **Monochrome palette** — black, white, and deep navy (`#0d1b2a`) used sparingly
- **Two fonts:** Switzer (body/UI) and Synonym (brand logotype "snow")

---

## Architecture

### Design System

#### CTAs & Interactive Elements
- **Primary CTAs** (Add to Cart, Checkout, Place Order, Apply filters): `bg-black text-white border border-black` with `hover:bg-white hover:text-black` (invert on hover)
- **Subscribe button (footer):** `bg-white text-black` with `hover:bg-[#284468] hover:text-white` (inverts to navy)
- **Size selectors:** Selected size uses `bg-black text-white`, unselected uses `bg-transparent border border-neutral-200`

#### Color System
| Token | Code | Usage |
|-------|------|-------|
| Black | `#000000` | ALL buttons/CTAs, selected states, primary text |
| Navy | `#0d1b2a` | Footer background, heart icon |
| Navy accent | `#284468` | Subscribe button hover (footer only) |
| White | `#ffffff` | Backgrounds, text over dark |

#### Button Hover Pattern
All primary action buttons invert colors on hover:
```
Default:  bg-black text-white border border-black
Hover:    bg-white text-black
```

### Page Architecture

```
Pages (routes):
├── /                    → Homepage (Intro → Hero → Sections → Footer)
├── /dev                 → Dev/listing page
├── /cart                → Full-page cart (mobile)
├── /checkout            → Responsive checkout (Mobile / Desktop)
├── /products/[slug]     → Responsive product detail (Mobile / Desktop)
└── /saved               → Wishlist "Saved Pieces"

Components:
├── layout/
│   ├── NavbarDesktop.tsx      ← Auto-hide on scroll, transparent→white bg
│   └── NavbarMobile.tsx       ← Fixed h-8, menu overlay, overlayOpen prop
│
├── cart/
│   └── CartDrawer.tsx         ← Desktop slide-in drawer
│
├── checkout/
│   ├── CheckoutDesktop.tsx    ← 60/40 split layout
│   └── CheckoutMobile.tsx     ← Stacked full-width, scrollable
│
├── sections/
│   ├── home-page/             ← Hero, SeasonEdit, Collections, etc.
│   ├── product-detail/
│   │   ├── ProductDetailDesktop.tsx
│   │   ├── ProductDetailMobile.tsx
│   │   └── SuggestedProducts.tsx
│   └── product-listing/
│       ├── ProductListingDesktop.tsx  ← Drawer filters, 4-col grid
│       └── ProductListingMobile.tsx   ← Overlay filters, 2-col/4-col grid
│
└── ui/
    └── ProductCard/ProductCard.tsx    ← Shared card component

Context:
├── CartContext   ← items, addItem, removeItem, updateQuantity, setCartOpen
└── SavedContext  ← savedIds, toggleSave, isSaved, savedCount
```

### Mobile Features (Complete)
| Feature | Implementation |
|---------|---------------|
| Navbar | `h-8` fixed, auto-hide on scroll, bg-white/text-black past hero |
| Menu overlay | Full-screen below navbar, accordion links, smooth opacity transition |
| Product detail | Full-width images, stacked remaining images, color/size/quantity, Add to Cart |
| Cart page | `/cart` route with Navbar + Footer, qty controls, Checkout button |
| Checkout | Stacked layout, scrollable, Place Order with invert hover |
| Product listing | Filter/sort buttons, full-screen filter overlay (below navbar) |
| Saved (wishlist) | `/saved` route, "Saved Pieces" title, same grid as listing |
| Filter overlay | Full-screen, category accordion + color/size/price/sort, body scroll lock |

### Key Technical Patterns

1. **Navbar overlay communication:** Components with child overlays (e.g., ProductListingMobile) use `onFilterChange` callback. Parent page passes `overlayOpen` to `NavbarMobile` to keep navbar visible while overlay is open.

2. **Smooth accordion animation:** `useRef<Record<string, HTMLDivElement | null>>` to measure `scrollHeight`, animate via `requestAnimationFrame`.

3. **Body scroll lock:** `useEffect` sets `overflow = "hidden"` when overlay/menu opens, restores and cleans up on close.

4. **Global scrollbar hidden:** CSS hides scrollbar on `html` while keeping scroll functionality (`overflow-y: scroll` + `scrollbar-width: none`).

5. **Responsive breakpoint:** `lg:` = 1024px. Mobile detection via `window.innerWidth < 1024`.

6. **Navbar auto-hide:** Hides on scroll down past 80px, shows on scroll up. Uses `translate-y-0` / `-translate-y-full`.

## Project Status

| Area | Status |
|------|--------|
| Desktop homepage | Complete |
| Desktop product detail | Complete |
| Desktop cart/checkout | Complete |
| Desktop product listing | Complete |
| Mobile navbar + menu | Complete |
| Mobile product detail | Complete |
| Mobile cart + checkout | Complete |
| Mobile product listing + filters | Complete |
| Saved / wishlist page | Complete |
| Button hover states (invert) | Complete |
