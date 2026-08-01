# BEFORE_MEDUSA.md — Storefront Prep Checklist for Medusa.js Integration

> This document captures the current storefront state and the exact work to do **before** connecting this project to Medusa.js.
>
> The goal: make the swap from local/mock data to the Medusa backend **mechanical and safe** — no architecture rewrites, no broken pages, no data drift. Everything below is storefront-only; no backend decisions are made here.

---

## 1. Purpose

VANTAGE is a pure client-side storefront today (local mock data, React Context state). Medusa.js will later provide: products, variants, customers, orders, cart (server-side), checkout, and payments.

The prep work below ensures that when Medusa lands:

1. Product data flows through **one** typed entry point (an adapter), so replacing the adapter with Medusa SDK calls is the only change needed.
2. Cart + Saved survive page reloads (expected baseline UX for any storefront).
3. The design system holds up (font fallback bug fixed).
4. The site is presentable in search/social links (SEO metadata).

**Non-goals (deliberately excluded):** auth, order history, payment, inventory, admin, CMS, i18n, analytics. Medusa or a later pass owns those.

---

## 2. Current State Snapshot

| Area | Status |
|---|---|
| Framework | Next.js 16.2.10 (App Router, Turbopack) + React 19 |
| Styling | Tailwind CSS v4, CSS-first `@theme` config |
| State | `CartContext` + `SavedContext` (React Context, in-memory only) |
| Data | Mock product data, hardcoded in multiple files (see Task 1) |
| Assets | WebP images + compressed MP4 videos (~29 MB total), posters + `preload="metadata"` |
| Perf | Dynamic imports + Suspense for below-fold sections; LCP ~1.5–3s |
| SEO | Basic `title` + `description` in `layout.tsx` only (no OG / robots / sitemap) |
| Fonts | Switzer (body/UI) + Synonym (wordmark). **Bug:** `body` falls back to Inter |

### Routes
| Route | Purpose |
|---|---|
| `/` | Homepage (Intro → Hero → Brand → SeasonEdit → Collections → Categories → Philosophy → About → Footer) |
| `/products` | Product listing with filters (category, colour, size, price, sort) |
| `/products/[slug]` | Product detail (images, colour/size/qty, Add to Cart, accordions, You May Also Like) |
| `/cart` | Full-page mobile cart |
| `/checkout` | Responsive checkout (mobile stacked / desktop 60-40) |
| `/saved` | Wishlist — "Saved Pieces" |
| `/test-categories`, `/test-intro` | Dev/test routes (keep or remove before launch) |

---

## 3. What Medusa Will Own (later — context only)

| Concern | Medusa module | Storefront today |
|---|---|---|
| Product catalog + variants | Product / Product Variant | `src/data/products.ts` + hardcoded arrays |
| Prices & currencies | Price Lists / Money | `price` string + `priceValue` number (duplicated — see Task 1) |
| Cart | Cart (server-side) | `CartContext` (client-only) |
| Checkout + payments | Cart completion + Payment | Static `/checkout` UI, no logic |
| Customers / auth | Customer + Auth | None |
| Orders | Order | None |
| Inventory / stock | Stock locations | None |
| Search | Product query API / later Meilisearch | Client-side filter overlay |

---

## 4. Prep Tasks

### Task 1 — Single Product Data Source + Adapter (HIGH PRIORITY)

**Why:** product data is currently copy-pasted across 5+ files. Each copy can drift (it already did — `.jpg` vs `.webp` mismatch). Medusa can't cleanly replace 5 sources; it can replace 1 adapter.

**Files with hardcoded product data today:**

| File | What it holds |
|---|---|
| `src/data/products.ts` | Full product details (4 products, images, colors, sizes, description, materials, care…) |
| `src/components/sections/product-listing/ProductListingDesktop.tsx` | Listing array (id, name, price, imageUrl, href, categorySlug) |
| `src/components/sections/product-listing/ProductListingMobile.tsx` | Same listing array (duplicate) |
| `src/components/sections/product-detail/SuggestedProducts.tsx` | 4 suggested products |
| `src/app/saved/page.tsx` | Saved-page grid products |

**Target architecture:**

```
UI components
    │  import from…
    ▼
data/products.ts  ← SINGLE source of truth (all fields, all views)
    │  exposed via…
    ▼
data/catalog.ts   ← thin adapter: getProducts(), getProductBySlug(), getSuggestedProducts()
    │
    ▼
(Medusa SDK later implements the same signatures)
```

**Steps:**

1. **Create `src/data/catalog.ts`** with the adapter signatures. This is the file Medusa will eventually replace with SDK-backed implementations:

```ts
// src/data/catalog.ts
import { products, getProductBySlug as bySlug } from "./products";
import type { ProductDetail } from "./products";

export type ListingProduct = {
  id: number;
  name: string;
  price: string;
  imageUrl: string;
  href: string;
  categorySlug?: string;
};

export function getProducts(): ProductDetail[] {
  return products;
}

export function getProductBySlug(slug: string): ProductDetail | undefined {
  return bySlug(slug);
}

export function getListingProducts(): ListingProduct[] {
  // Derived from the single source — never hand-maintained in the UI layer.
  return products.map((p) => ({
    id: p.id,
    name: p.name,
    price: p.price,
    imageUrl: p.images[0],
    href: `/products/${p.slug}`,
  }));
}

export function getSuggestedProducts(excludeSlug?: string): ListingProduct[] {
  return getListingProducts().filter((p) => p.href !== `/products/${excludeSlug}`);
}
```

2. **Point the UI at the adapter** — delete the local arrays and import instead:
   - `ProductListingDesktop.tsx` → `import { getListingProducts } from "@/data/catalog"`
   - `ProductListingMobile.tsx` → same
   - `SuggestedProducts.tsx` → `import { getSuggestedProducts } from "@/data/catalog"`
   - `saved/page.tsx` → derive from `getProducts()` (map the 8 saved cards to the same source)

3. **Keep one `price` field.** Today `CartItem` carries both `price: string` and `priceValue: number` — the two can disagree. Derive `priceValue` from `price` in one helper (or store cents + format at render). Single currency string `"$68.00"` → store `priceCents: 6800` and format once:

```ts
// src/data/catalog.ts (or a shared money util)
export function priceToCents(price: string): number {
  const n = Number(price.replace(/[^0-9.]/g, ""));
  return Math.round(n * 100);
}
```

**Acceptance criteria:**
- `grep -r "season-edit/product" src` shows the path only in `products.ts` (or nowhere, if derived).
- No product array literal remains in any component under `src/components/` or `src/app/`.
- Changing one field in `products.ts` updates listing, detail, suggested, and saved pages with no other edits.

---

### Task 2 — Cart + Saved Persistence (HIGH PRIORITY, small)

**Why:** cart and wishlist currently reset on refresh — the first UX complaint any real visitor hits.

**Approach:** hydrate from `localStorage` on mount, write on change. Both contexts use the same pattern.

**Cart (`src/contexts/CartContext.tsx`):**

```tsx
const STORAGE_KEY = "vantage-cart";

const [items, setItems] = useState<CartItem[]>(() => {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as CartItem[]) : [];
  } catch {
    return [];
  }
});

useEffect(() => {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    /* storage full / private mode — ignore */
  }
}, [items]);
```

**Saved (`src/contexts/SavedContext.tsx`):** identical pattern with key `"vantage-saved"` storing the id array (`savedIds`).

**Notes:**
- Wrap `localStorage` reads in `try/catch` (private mode / storage quota).
- Version the key (`vantage-cart-v1`) so a future schema change (e.g., real Medusa cart ids) can invalidate cleanly.
- When Medusa lands, this code is deleted in favor of the server cart — but the UX remains identical for the user.

**Acceptance criteria:**
- Add items, hard-refresh → items persist.
- Toggle saved hearts, hard-refresh → hearts persist.
- Clearing cart (checkout success path later) clears storage too.

---

### Task 3 — Fix Body Font Fallback (LOW PRIORITY, 1 line)

**Bug:** [globals.css](file:///c:/Projects/websites/niche-luxury-fashion/src/styles/globals.css) `body { font-family: Inter, … }` — Switzer is applied per-component via `font-switzer`, but any unstyled element renders in Inter, breaking the type system.

**Fix:** [globals.css](file:///c:/Projects/websites/niche-luxury-fashion/src/styles/globals.css#L84-L88)

```css
body {
  background: var(--background);
  color: var(--foreground);
  font-family: "Switzer", system-ui, -apple-system, sans-serif;
}
```

**Acceptance criteria:** no `Inter` reference remains; unstyled text renders in Switzer.

---

### Task 4 — SEO / Social Metadata (MEDIUM PRIORITY)

**Current:** [layout.tsx](file:///c:/Projects/websites/niche-luxury-fashion/src/app/layout.tsx) has only `title` + `description`.

**Add in `src/app/layout.tsx`:**

```ts
export const metadata: Metadata = {
  title: "VANTAGE | Luxury Fashion & Editorial Design",
  description: "A minimalist luxury fashion brand — quiet luxury, editorial design, high-performance e-commerce.",
  metadataBase: new URL("https://vantage.example.com"),
  openGraph: {
    title: "VANTAGE",
    description: "A minimalist luxury fashion brand — quiet luxury, editorial design.",
    images: [{ url: "/assets/images/video-poster.jpg", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VANTAGE",
    description: "A minimalist luxury fashion brand.",
    images: ["/assets/images/video-poster.jpg"],
  },
  robots: { index: true, follow: true },
};
```

**Also:**
- `src/app/sitemap.ts` — export a static sitemap (homepage + product slugs from `products.ts`).
- `src/app/robots.ts` — allow all, point at sitemap.
- Per-product metadata: in `src/app/products/[slug]/page.tsx`, add `generateMetadata({ params })` reading `getProductBySlug` (title = product name, OG image = first product image).

**Acceptance criteria:** the product detail page exposes per-product `<title>` and OG image; `/robots.txt` and `/sitemap.xml` resolve.

---

## 5. Medusa Data-Model Mapping (reference for the integration day)

When the adapter is swapped, map the local `ProductDetail` shape to Medusa fields:

| VANTAGE field | Medusa field |
|---|---|
| `id` | Product id (UUID) — replace numeric ids |
| `slug` | `handle` |
| `name` | `title` |
| `price` / `priceValue` | `variants[].prices[]` (store in cents — matches `priceToCents`) |
| `images[]` | `images[]` (URLs) |
| `colors[]` | Product option `"Colour"` (values from array) |
| `sizes[]` | Product option `"Size"` (values from array) |
| `description` | `description` |
| `details[]`, `material`, `care`, `sizeFit` | `metadata` (or structured `description` blocks) |
| `shipping` | Content / static text (or Medusa shipping profile later) |
| Category (dresses) | Product categories |
| Suggested products | Medusa Product API (`id[]` param) or a `related` metadata field |

**Key rule:** the adapter must return the **same shape** (`ProductDetail` / `ListingProduct`) regardless of backend, so UI components never know where data comes from.

---

## 6. Suggested Order of Execution

1. **Task 1** — single data source + adapter (unblocks everything else; largest diff).
2. **Task 2** — persistence (isolated, quick win).
3. **Task 4** — SEO metadata (small, launch-relevant).
4. **Task 3** — font fallback (one line, do anytime).
5. Re-run the design review checklist (below) and commit as one "pre-Medusa hardening" PR.

---

## 7. Post-Task Verification Checklist

- [ ] `npm run build` passes clean (no type errors from adapter refactor).
- [ ] Product listing shows all 4 products from `products.ts`.
- [ ] Product detail page loads images, colours, sizes, and "You May Also Like" from the same source.
- [ ] Saved page reflects the same product set.
- [ ] Cart + saved persist across a hard refresh.
- [ ] No `Inter` in `globals.css`.
- [ ] `/sitemap.xml` and `/robots.txt` resolve; product pages expose OG tags.
- [ ] All asset references are `.webp` (except `video-poster.jpg`, which is intentional).
- [ ] `git status` shows no untracked leftovers.

---

*Document created 2026-08-01. Storefront prep only — Medusa integration itself is out of scope here.*
