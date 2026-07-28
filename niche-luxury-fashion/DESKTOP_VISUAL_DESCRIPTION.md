# VANTAGE — Desktop-Only Visual Description for Screen-Reading Technology

> **Document purpose:** This Markdown file provides a comprehensive, exhaustive transcription of every visual element displayed on the desktop version of the VANTAGE luxury fashion website (viewports 1024 pixels wide and above). It is designed to be used exclusively with screen-reading software, enabling a non-visual user to form a complete mental model of the visual appearance of every section, component, interactive state, layout grid, color value, typographic specification, spacing measurement, and decorative effect exactly as a sighted user would perceive them on a desktop monitor.

> **Last updated:** 2026-07-28

---

## Table of Contents

1. [Global Document Settings and Typography](#1-global-document-settings-and-typography)
2. [Page Structure and Section Order](#2-page-structure-and-section-order)
3. [Section 1 — Full-Screen Intro Animation (Intro Wrapper)](#3-section-1--full-screen-intro-animation-intro-wrapper)
4. [Section 2 — Navigation Bar (Navbar, Desktop)](#4-section-2--navigation-bar-navbar-desktop)
5. [Section 3 — Hero Section](#5-section-3--hero-section)
6. [Section 4 — Featured (Season Edit) Product Grid](#6-section-4--featured-season-edit-product-grid)
7. [Section 5 — Collections (Men and Women)](#7-section-5--collections-men-and-women)
8. [Section 6 — About Us](#8-section-6--about-us)
9. [Section 7 — Brand Statement](#9-section-7--brand-statement)
10. [Section 8 — Philosophy](#10-section-8--philosophy)
11. [Section 9 — Categories (Six Rows)](#11-section-9--categories-six-rows)
12. [Section 10 — Footer](#12-section-10--footer)
13. [Appendix A — Color Reference Table](#13-appendix-a--color-reference-table)
14. [Appendix B — Typography Reference Table](#14-appendix-b--typography-reference-table)
15. [Appendix C — Interactive States Reference](#15-appendix-c--interactive-states-reference)

---

## 1. Global Document Settings and Typography

### 1.1 Document Root

- **HTML language attribute:** `lang="en"`
- **Font smoothing:** Antialiasing is enabled globally via the `antialiased` class on the HTML element, ensuring text renders with subpixel smoothing turned off for sharper, thinner letterforms on high-pixel-density screens.
- **Height:** The HTML element is set to `h-full`, occupying the full viewport height. The body is set to `min-h-full` (minimum full viewport height) and uses a flex column layout (`flex flex-col`) to stack child elements vertically.

### 1.2 Color Palette

The website uses a minimalist, high-contrast palette:

| Token | Color Code | Description |
|-------|-----------|-------------|
| Pure black | `#000000` | Background of the page body and the intro animation; ALL primary buttons/CTAs (Add to Cart, Checkout, Place Order, Apply) |
| Pure white | `#ffffff` | Text color over black or dark backgrounds; also used as a 1-pixel outline on category images |
| Navy | `#0d1b2a` | Footer background, heart icon fill/stroke |
| Navy accent | `#284468` | Subscribe button hover state (footer only) |
| Near-black neutral-900 | `#171717` | Background of all product image containers and category image containers |
| Neutral-600 | `#525252` | Product price text color |
| Black at 10% opacity | `rgba(0,0,0,0.1)` | Overlay on collection and category images |
| Black at 60% opacity | `rgba(0,0,0,0.6)` | "SEE MORE" / "MORE" link text color |

### 1.3 Font Families

Two font families are loaded via `@font-face` declarations:

**Switzer** — Used for all body text, section titles, navigation links, and UI labels.
- Weights loaded: 400 (Regular), 500 (Medium), 700 (Bold)
- File format: `.woff2` and `.woff` (both supplied for cross-browser coverage)

**Synonym** — Used exclusively for the word "snow" (the brand's symbolic logotype).
- Weights loaded: 300 (Light), 400 (Regular), 500 (Medium), 700 (Bold)
- File format: `.woff2` and `.ttf` (Bold weight uses both formats)

Both fonts are set to `font-display: swap`, meaning a fallback sans-serif font is shown instantly while the custom font file downloads, then the custom font replaces the fallback once loaded.

### 1.4 CSS Theme Configuration

Two custom font-family CSS variables are registered in the `@theme` block of Tailwind CSS version 4:
- `--font-switzer` maps to the `"Switzer"` font family with a `sans-serif` fallback.
- `--font-synonym` maps to the `"Synonym"` font family with a `sans-serif` fallback.

### 1.5 Underlying Grid Architecture

All sections use a 1-pixel vertical gap between adjacent sections (via `gap-1` or `space-y-1` classes on the main parent wrapper within the Intro component). This creates a subtle 1-pixel black dividing line between each full-width section when the section backgrounds are white or light-colored.

---

## 2. Page Structure and Section Order

The entire page is wrapped in an `Intro` component (the full-screen animation loader), which contains a single `<main>` HTML element. Inside `<main>`, the sections appear in this exact top-to-bottom order on desktop:

1. **Navbar** (positioned fixed, overlapping the top of the page)
2. **Hero** (full-viewport-height background video)
3. **SeasonEdit** ("Featured" — four product cards in a 2x2 grid)
4. **Collections** (two large category cards: Men, Women — side-by-side in a 2-column grid)
5. **About** ("ABOUT US" with a three-panel layout)
6. **Brand** (large lowercase "snow" logotype, full-width)
7. **Philosophy** ("PHILOSOPHY" with an asymmetric two-column layout)
8. **Categories** (six rows, each with alternating big-image-left / big-image-right pattern)
9. **Footer** ("SNOW" logotype above navigation columns and legal text)

---

## 3. Section 1 — Full-Screen Intro Animation (Intro Wrapper)

### 3.1 Container

- **Type:** Fixed-position full-screen overlay
- **CSS position:** `fixed` — it pins itself over the entire viewport, independent of page scroll
- **Z-index:** `z-50` — stacked above all other page content
- **Background:** Pure black (`bg-black`)
- **Transition:** Opacity transition lasting 1,000 milliseconds (1 second) with an easing curve of `cubic-bezier(0.87, 0, 0.13, 1)` — a sharp ease-in-out curve

### 3.2 Inner Content — The "snow" Logotype

- **Text content:** Lowercase "snow"
- **Font family:** Synonym (the `font-synonym` CSS variable)
- **Font weight:** Bold (700)
- **Font size (desktop):** Responsive range using the `clamp()` CSS function: minimum 6rem (96 pixels), preferred 22 percent of the viewport width (22vw), maximum 20rem (320 pixels)
- **Text color:** Pure white (`text-white`)
- **Letter spacing:** 0 pixels (no letter spacing, `tracking-normal` which is the equivalent of `letter-spacing: 0em`)
- **Text transform:** Lowercase (no uppercase transformation applied)
- **Positioning within the overlay:** Centered both horizontally and vertically using a flexbox column layout (`flex flex-col items-center justify-center`) on the parent container. The container has `min-h-screen` (minimum height equal to the full viewport height), so the "snow" text is positioned at the exact visual center of the browser window.

### 3.3 Cursor Interaction

- While the intro overlay is displayed, the cursor changes to a pointer (`cursor-pointer`), indicating to the user that clicking anywhere on the overlay will dismiss it.

### 3.4 Dismissal Behavior

When the overlay receives a click or touch event anywhere on its surface:
1. The overlay's opacity transitions from 1 (fully opaque) to 0 (fully transparent) over 1,000 milliseconds using the cubic-bezier easing curve described above.
2. After the transition completes, the component returns `null` (renders nothing), permanently removing itself from the DOM and revealing the main page content below.

---

## 4. Section 2 — Navigation Bar (Navbar, Desktop)

### 4.1 Position and Layout

- **CSS position:** Fixed (`fixed`), meaning the navbar stays pinned to the top of the viewport at all times, independent of page scrolling
- **Z-index:** `z-40` — above all page content except the intro overlay
- **Left offset:** 0 pixels (aligned to the left edge of the viewport)
- **Top offset:** 0 pixels (aligned to the top edge of the viewport)
- **Right offset:** 0 pixels (stretches to the right edge of the viewport)
- **Layout type:** Flexbox row (`flex flex-row`) with items centered vertically (`items-center`) and spread across the full width (`justify-between`)
- **Horizontal padding:** 24 pixels on each side (`px-6`)
- **Vertical padding:** Top and bottom padding of 16 pixels (`py-4`)
- **Background:** Two states (see 4.4 below)
- **Auto-hide behavior:** The navbar hides when scrolling down past 80px and shows when scrolling up (controlled by a `useRef` tracking `prevScrollY`, using `translate-y-0` / `-translate-y-full`).

### 4.2 Left-Aligned Content — "snow" Brand Logo

- **Text content:** Lowercase "snow"
- **Font family:** Synonym (`font-synonym`)
- **Font weight:** Bold (700, `font-bold`)
- **Font size:** 24 pixels (`text-2xl`, equivalent to `font-size: 1.5rem`)
- **Text color:** Dependent on background state (see 4.4)
- **Letter spacing:** 0 pixels (no tracking class applied, so `letter-spacing: normal`)
- **Text transform:** Lowercase — no uppercase transformation applied

### 4.3 Right-Aligned Content — Navigation Links

A row of five text links, each separated by 32 pixels of horizontal space (`gap-8`). Each link:

- **Font family:** Switzer
- **Font weight:** Medium (500, `font-medium`)
- **Font size:** 14 pixels (`text-sm`, equivalent to `font-size: 0.875rem`)
- **Letter spacing:** 0 pixels (`tracking-normal`)
- **Text transform:** Lowercase (no uppercase)
- **Text content (in order left to right):** "ready to wear", "accessories", "collections", "editorial", "journal"
- **Hover underline effect:** Each link has a hidden underline that reveals on hover. The underline is implemented as a CSS `::before` pseudo-element positioned at the bottom of each link with zero width by default. On hover, the underline expands to 100 percent width with a 300-millisecond transition (`duration-300`).

### 4.4 Visual States of the Navbar

The navbar has two distinct visual states determined by scroll position relative to the hero section:

#### State A: Transparent (overlaying the hero video)

- **Background:** Fully transparent (`bg-transparent`). The hero video remains fully visible behind the text.
- **Text color of all links and the "snow" logo:** Pure white (`text-white`)
- **Underline color on hover:** White
- **"snow" logo:** Hidden (opacity 0, pointer-events none) — only visible in State B

#### State B: White background (after scrolling past the hero)

- **Background:** Solid white (`bg-white`)
- **Text color of all links and the "snow" logo:** Pure black (`text-black`)
- **Underline color on hover:** Black
- **"snow" logo:** Fully visible (opacity 100)

The transition between State A and State B occurs at the exact bottom edge of the hero section. A JavaScript `IntersectionObserver` watches a 1-pixel-high sentinel element positioned at the hero's bottom edge. When this sentinel exits the viewport (i.e., the user has scrolled past the hero), the navbar switches to State B. When the user scrolls back up and the sentinel re-enters the viewport, the navbar reverts to State A.

---

## 5. Section 3 — Hero Section

### 5.1 Container

- **CSS position:** Relative (`relative`)
- **Height:** 100 percent of the viewport height (`h-screen`, equivalent to `100vh`)
- **Overflow:** Hidden — no content spills outside the section boundaries
- **Background:** Pure black (`bg-black`), visible momentarily before the video loads

### 5.2 Background Video

- **Media type:** A looping HTML5 video element
- **Source file:** `public/assets/videos/hero-1.mp4`
- **Playback settings:**
  - **Autoplay:** Yes — the video begins playing as soon as it loads, without user interaction
  - **Muted:** Yes — no audio is played (required by most browsers for autoplay)
  - **Loop:** Yes — the video restarts from the beginning when it reaches the end
  - **Playsinline:** Yes — the video plays within the page layout on all devices
  - **Preload:** Not specified (defaults to browser's metadata preload)
- **CSS sizing:** The video is positioned absolutely (`absolute`) within the hero container, set to `w-full h-full` (full width and full height of the container), with `object-cover` scaling behavior. This means the video maintains its aspect ratio while covering the entire viewport, cropping any excess that does not fit the viewport's aspect ratio.

### 5.3 Dark Overlay

- **Type:** A `<div>` element positioned absolutely over the video
- **Dimensions:** Full width and height of the hero container (`inset-0 w-full h-full`)
- **Background:** Pure black at 40 percent opacity (`bg-black/40`)
- **Purpose:** Reduces the brightness and contrast of the video below, ensuring white text overlaying it remains legible

### 5.4 Hero Content — Centered Text Stack

Positioned in the center of the hero viewport, layered above both the video and the dark overlay:

#### 5.4.1 "VANTAGE" Heading

- **Text content:** "VANTAGE" (all uppercase)
- **Font family:** Switzer
- **Font weight:** Bold (700, `font-bold`)
- **Font size:** `clamp()` responsive range with a minimum of 3rem (48 pixels), a preferred value of 8 percent of viewport width (8vw), and a maximum of 8rem (128 pixels)
- **Text color:** Pure white (`text-white`)
- **Letter spacing:** 0 pixels (`tracking-normal`)
- **Line height:** `leading-none` (1.0 — the text sits tightly with no extra vertical space between lines)

#### 5.4.2 "snow" Logotype

- **Text content:** Lowercase "snow"
- **Font family:** Synonym
- **Font weight:** Bold (700)
- **Font size:** Responsive `clamp()` with a minimum of approximately 3rem (48 pixels), a preferred value of 15 percent of viewport width (15vw), and a maximum of 15rem (240 pixels)
- **Text color:** Pure white (`text-white`)
- **Letter spacing:** 0 pixels (`tracking-normal`)

The two lines of text ("VANTAGE" and "snow") are stacked vertically with no gap class applied between them, meaning they are positioned closely together with only the natural line-height spacing.

### 5.5 Bottom-Left Positioned "snow" Text

In addition to the centered text stack, a third instance of the "snow" text appears positioned at the bottom-left corner of the hero viewport:

- **Text content:** Lowercase "snow"
- **Font family:** Synonym
- **Font weight:** Bold (700)
- **Font size:** Responsive `clamp()` with a minimum of 4rem (64 pixels), a preferred value of 22 percent of viewport width (22vw), and a maximum of 20rem (320 pixels)
- **Text color:** Pure white (`text-white`)
- **Letter spacing:** 0 pixels (`tracking-normal`)
- **Positioning:** Absolute positioning with `bottom-6` (24 pixels from the bottom edge of the hero container) and `left-6` (24 pixels from the left edge of the hero container)

This bottom-left "snow" text is partially clipped by the hero section's `overflow-hidden` container, so only the portion that fits within the viewport is visible.

---

## 6. Section 4 — Featured (Season Edit) Product Grid

### 6.1 Section Container

- **Background:** Pure white (`bg-white`)
- **Border:** None (the 1-pixel gap before this section is created by the parent layout's spacing, not a border on this section)
- **Padding:** 4 pixels on left and right (`px-1` — an extremely narrow horizontal padding). No vertical padding except the top `pt-24` (96 pixels of padding at the top) and `pb-4` (16 pixels of padding at the bottom).

### 6.2 Section Title Row

A horizontal flexbox row (`flex justify-between items-center`) occupying the full width of the section, with 48 pixels of margin below it (`mb-12`).

#### Left side — "Featured" heading

- **Text content:** "Featured" (capitalized only the first letter — sentence case)
- **Font family:** Switzer
- **Font weight:** Medium (500)
- **Font size:** Responsive `clamp()` with a minimum of 3.5rem (56 pixels), a preferred value of 10 percent of viewport width (10vw), and a maximum of 10rem (160 pixels)
- **Text color:** Pure black (`text-black`)
- **Line height:** `leading-none` (1.0)
- **Letter spacing:** 0.01em (very subtle spacing between characters — `tracking-[0.01em]`)

#### Right side — "SEE MORE" link

- **Text content:** "SEE MORE" (all uppercase)
- **Font family:** Switzer
- **Font weight:** Semi-bold (600, `font-semibold`)
- **Font size:** Responsive `clamp()` with a minimum of 0.7rem (11.2 pixels), a preferred value of 1.2 percent of viewport width (1.2vw), and a maximum of 1rem (16 pixels)
- **Text color:** Black at 60 percent opacity (`text-black/60`)
- **Letter spacing:** 0.15em (widely spaced characters — `tracking-[0.15em]`)
- **Decoration:** A thin underline (1 pixel thick) positioned 4 pixels below the text baseline (`underline underline-offset-4 decoration-[1px]`)
- **Right margin:** 32 pixels of margin on the right side (`mr-8`), pushing it away from the right edge of the section

### 6.3 Product Grid Layout

- **Grid type:** CSS Grid with 4 equal-width columns (`grid-cols-4`)
- **Gap between grid cells:** 4 pixels (`gap-1`)
- **Total products displayed:** 4

### 6.4 Product Card Specification (Individual)

Each product card is a self-contained unit composed of two stacked vertical areas: an image area above and a text information area below.

#### 6.4.1 Image Container

- **Aspect ratio:** 3:4 portrait (achieved via `pt-[133.33%]` padding-top percentage on a `relative` positioned wrapper — the padding-top percentage is calculated as a percentage of the parent element's width: 133.33% means the height is 1.3333 times the width, producing a 3:4 aspect ratio)
- **Background color:** Neutral-900 — near-black (`bg-neutral-900`, equivalent to `#171717`). This color fills the container initially before the image loads and also fills any letterbox/crop space if the image does not exactly match the container's aspect ratio.
- **Overflow:** Hidden — any image content extending beyond the container's boundaries is clipped

**Product images (4 total):**

| Position | File | Description |
|----------|------|-------------|
| Column 1 | `/assets/images/season-edit/product-1.jpg` | "Whispering Petals Wrap Midi Dress" |
| Column 2 | `/assets/images/season-edit/product-2.jpg` | "Meadow Sweetheart Smocked Dress" |
| Column 3 | `/assets/images/season-edit/product-3.jpg` | "Countryside Blossom Tiered Sundress" |
| Column 4 | `/assets/images/season-edit/product-4.jpg` | "Sun-Kissed Linen Tie-Front Mini" |

Each image is rendered with:
- Positioning: Absolute, filling the entire container (`absolute top-0 left-0 w-full h-full`)
- Sizing behavior: `object-cover` — the image scales to cover the container while preserving its aspect ratio, cropping any excess
- No border, no outline, no overlay

#### 6.4.2 Save/Heart Button

- **Position:** Absolute — 12 pixels from the top-right corner of the image container (`top-3 right-3`)
- **Visibility:** Hidden by default (`opacity-0`). Becomes fully visible (`opacity-100`) when the user hovers the cursor over the image container (parent element has a `group` class, and the button uses `group-hover:opacity-100`)
- **Transition:** Opacity changes over 300 milliseconds (`transition-all duration-300`). The button also scales from 75 percent (`scale-75`) to 100 percent (`group-hover:scale-100`) over the same 300 milliseconds.
- **Icon:** A heart-shaped outline icon from the Lucide icon library, 20 pixels by 20 pixels (`size={20}`)
- **Stroke width:** 1.5 pixels
- **Color:** Navy (`#0d1b2a`) — both the stroke (outline) and the fill color (when active)
- **Fill behavior:** When the user clicks the button, the heart fills solidly with navy (`#0d1b2a`). Clicking again removes the fill, returning to the outline-only state. There is no transition on the fill change — it toggles instantly.
- **Cursor:** Pointer cursor on hover

#### 6.4.3 Product Information Text Area

- **Spacing above image:** 12 pixels (`mt-3`)
- **Line height:** `leading-none` (1.0 — no extra space between the product name and price)
- **Text alignment:** Left-aligned

**Product name:**
- **Font family:** Switzer
- **Font weight:** Normal (400, `font-normal`)
- **Font size (desktop):** 16 pixels (`text-base`, equivalent to `1rem`). On smaller viewports, product name and price reduce to 14 pixels (`text-sm`), then scale back to 16 pixels at the `lg:` breakpoint via `text-sm lg:text-base`.
- **Text color:** Near-black neutral-900 (`text-neutral-900`, equivalent to `#171717`)
- **Letter spacing:** `tracking-wide` — approximately 0.025em additional space between characters

**Product price:**
- **Font family:** Switzer
- **Font weight:** Light (300, `font-light`)
- **Font size (desktop):** 16 pixels (`text-base`, equivalent to `1rem`). On smaller viewports, reduces to 14 pixels (`text-sm`) — same responsive behavior as the product name.
- **Text color:** Neutral-600 (`text-neutral-600`, equivalent to `#525252`) — a medium gray

**Exact product names and prices:**

| Product | Name | Price |
|---------|------|-------|
| 1 | "Whispering Petals Wrap Midi Dress" | $68.00 |
| 2 | "Meadow Sweetheart Smocked Dress" | $74.50 |
| 3 | "Countryside Blossom Tiered Sundress" | $62.00 |
| 4 | "Sun-Kissed Linen Tie-Front Mini" | $56.00 |

---

## 7. Section 5 — Collections (Men and Women)

### 7.1 Section Container

- **Background:** Pure white (`bg-white`)
- **Padding:** 4 pixels on left and right (`px-1`). Vertical padding: 96 pixels top (`pt-24`), 4 pixels bottom (`pb-4`).
- **Bottom margin:** 16 pixels (`mb-4`)

### 7.2 Section Title Row

- **Layout:** Flexbox row with items centered vertically (`flex justify-between items-center`)
- **Bottom margin:** 48 pixels (`mb-12`)

**Left side — "COLLECTIONS" heading:**
- **Text content:** "COLLECTIONS" (all uppercase)
- **Font family:** Switzer
- **Font weight:** Medium (500)
- **Font size:** `clamp()`: minimum 3.5rem (56px), preferred 10vw, maximum 10rem (160px)
- **Text color:** Pure black (`text-black`)
- **Line height:** `leading-none` (1.0)
- **Letter spacing:** 0.01em

**Right side — "SEE MORE" link:**
- Identical styling to the "SEE MORE" in Section 4 (Featured): Switzer Semi-bold (600), uppercase, 60% black opacity, thin underline, `mr-8` right margin, `clamp(0.7rem,1.2vw,1rem)` size, 0.15em letter spacing.

### 7.3 Collection Cards Grid

- **Grid type:** CSS Grid with 2 equal-width columns (`grid-cols-2`)
- **Gap:** 4 pixels between cards (`gap-1`)
- **Cards:** Two cards, side by side — one for "Men", one for "Women"

### 7.4 Individual Collection Card Specification

#### 7.4.1 Image Container

- **Aspect ratio:** 3:4 portrait (`pt-[133.33%]`)
- **Background:** Neutral-900 (near-black `#171717`)
- **Overflow:** Hidden
- **Image:** Each card displays a full-bleed image:
  - Men card: `/assets/images/categories/men.jpg`
  - Women card: `/assets/images/categories/women.jpg`
- **Image sizing:** `object-cover` — the image fills the container completely, cropping any excess that does not match the container's aspect ratio

#### 7.4.2 Dark Overlay

- **Type:** A `<div>` positioned absolutely over the image
- **Dimensions:** Full width and height (`inset-0 w-full h-full`)
- **Background:** Black at 10 percent opacity (`bg-black/10`)
- **Purpose:** Subtly darkens the image to improve legibility of the overlaid text

#### 7.4.3 "DISCOVER" Label

- **Position:** Absolute, bottom-right corner, 16 pixels from each edge (`bottom-4 right-4`)
- **Z-index:** 10 (above the overlay and image)
- **Text content:** "DISCOVER" (all uppercase)
- **Font family:** Switzer
- **Font weight:** Light (300, `font-light`)
- **Font size:** Responsive `clamp()`: minimum 0.75rem (12 pixels), preferred 1.5vw, maximum 1.25rem (20 pixels)
- **Text color:** Pure white (`text-white`)
- **Letter spacing:** 0.15em (widely spaced)
- **User selection disabled:** `select-none` — the text cannot be selected or highlighted by the user

#### 7.4.4 Category Name Label

- **Position:** Absolute, bottom-left corner, 16 pixels from each edge (`bottom-4 left-4`)
- **Z-index:** 10
- **Text content:** "Men" or "Women" (all uppercase)
- **Font family:** Switzer
- **Font weight:** Medium (500, `font-medium`)
- **Font size:** Responsive `clamp()`: minimum 1.8rem (28.8 pixels), preferred 4vw, maximum 3.5rem (56 pixels)
- **Text color:** Pure white (`text-white`)
- **Line height:** `leading-none` (1.0)
- **Letter spacing:** 0.01em
- **Text transform:** Uppercase (`uppercase`)
- **User selection disabled:** `select-none`

---

## 8. Section 6 — About Us

### 8.1 Section Container

- **Background:** Pure white (`bg-white`)
- **Padding:** 4 pixels horizontal (`px-1`). Top padding: 96 pixels (`pt-24`), bottom padding: 4 pixels (`pb-4`)
- **Bottom margin:** 16 pixels (`mb-4`)

### 8.2 Three-Panel Layout

The About section is structured as a single row with three equal-width panels in a 3-column CSS grid (`grid-cols-3`) with 4-pixel gaps (`gap-1`).

### 8.3 Panel 1 — Full Image (Left Column)

#### 8.3.1 Image Container

- **Aspect ratio:** 3:4 portrait (`pt-[133.33%]`)
- **Background:** Neutral-900 (near-black)
- **Overflow:** Hidden
- **Image source:** `/assets/images/about/about-us.jpg`
- **Image sizing:** `object-cover`

#### 8.3.2 Dark Overlay

- Same as collection cards: black at 10 percent opacity, full container dimensions

#### 8.3.3 "ABOUT US" Label

- **Position:** Absolute, top-left corner, 16 pixels from top and left edges (`top-4 left-4`)
- **Z-index:** 10
- **Text content:** "ABOUT US" (all uppercase)
- **Font family:** Switzer
- **Font weight:** Light (300)
- **Font size:** `clamp()`: minimum 0.875rem (14px), preferred 1.5vw, maximum 1.25rem (20px)
- **Text color:** Pure white
- **Letter spacing:** 0.15em

### 8.4 Panel 2 — Text Content (Middle Column)

A vertically stacked column of text resting on a white background with no image.

#### 8.4.1 Top badge

- **Background:** The background of this badge is created using a `before:` pseudo-element mimicking a pill/badge shape, but the actual implementation uses a full-width container
- **Text content:** "The Studio" (italic styling implied via a `<span>` inside the typographic layout)
- **Font:** Switzer Regular (400)
- **Font size:** 15 pixels (`text-[15px]`)
- **Text color:** Black (`text-black`)

#### 8.4.2 Brand description heading

- **Text content:** "VANTAGE is a luxury fashion house defined by quiet confidence and a commitment to uncompromising craftsmanship." (this is the rendered text assembled from `<span>` fragments)
- **Font:** Switzer Light (300)
- **Font size:** Responsive `clamp()`: minimum 1.25rem (20px), preferred 2vw, maximum 2.5rem (40px)

#### 8.4.3 Divider line

- **Type:** A horizontal line
- **Color:** Black
- **Spacing:** 48 pixels of top margin and 48 pixels of bottom margin (`my-12`)

#### 8.4.4 Brand paragraph

- **Text content:** "Rooted in the philosophy of slow fashion, each collection is thoughtfully curated, merging timeless elegance with modern sensibility." (approximate content)
- **Font:** Switzer Light (300)
- **Font size:** 15 pixels (`text-[15px]`)
- **Text color:** Black

### 8.5 Panel 3 — Full Image (Right Column)

- **Image:** **Same** image as Panel 1 (`/assets/images/about/about-us.jpg`)
- **All other styling:** Identical to Panel 1 including the aspect ratio, overlay, and layout

**Note:** The middle column (Panel 2) has no image — it uses a plain white background that matches the section background, making it appear as a text column floating between two identical image panels.

---

## 9. Section 7 — Brand Statement

### 9.1 Section Container

- **Background:** Pure white (`bg-white`)
- **Padding:** 4 pixels horizontal (`px-1`). Top: 96 pixels (`pt-24`). Bottom: 4 pixels (`pb-4`). Bottom margin: 16 pixels (`mb-4`).

### 9.2 Content Layout

A single full-width row containing the brand's symbolic "snow" text as a massive logotype/statement piece.

### 9.3 "snow" Logotype

- **Text content:** Lowercase "snow"
- **Font family:** Synonym (`font-synonym`)
- **Font weight:** Bold (700, `font-bold`)
- **Font size:** Responsive `clamp()`: minimum 4rem (64 pixels), preferred 20 percent of viewport width (20vw), maximum 20rem (320 pixels)
- **Text color:** Pure black (`text-black`)
- **Text transform:** Lowercase (no uppercase transformation)
- **User selection disabled:** `select-none`

The massive "snow" text spans a significant portion of the viewport width, acting as a bold typographic statement. It is left-aligned within the section (no explicit centering class).

---

## 10. Section 8 — Philosophy

### 10.1 Section Container

- **Background:** Pure white (`bg-white`)
- **Padding:** 4 pixels horizontal (`px-1`). Top: 96 pixels (`pt-24`). Bottom: 4 pixels (`pb-4`). Bottom margin: 16 pixels (`mb-4`).

### 10.2 Section Title Row

Identical structure to other section title rows:
- **Left:** "PHILOSOPHY" heading — all uppercase, Switzer Medium, `clamp(3.5rem,10vw,10rem)`, pure black, `leading-none`, 0.01em tracking
- **Right:** "SEE MORE" link — same styling as other sections (Switzer Semi-bold, 60% black, uppercase, thin underline, `mr-8`)

### 10.3 Two-Column Content Layout

- **Layout:** Flexbox row (`flex`)
- **Gap:** 4 pixels between columns (`gap-1`)

#### 10.3.1 Left Column — Image

- **Width:** 60 percent of the row (`w-[60%]`)
- **Image container aspect ratio:** 16:9 landscape (`pt-[56.25%]`)
- **Background:** Neutral-900 (near-black)
- **Overflow:** Hidden
- **Image source:** `/assets/images/philosophy/philosophy.jpg` (approximate path)
- **Image sizing:** `object-cover`
- **Dark overlay:** Black at 10 percent opacity

#### 10.3.2 Right Column — Text

- **Width:** 40 percent of the row (`w-[40%]`)
- **Background:** Pure white
- **Padding:** Top padding of 24 pixels (`pt-6`)

**Text content within right column:**

A heading:
- **Text:** "Slow Fashion, Timeless Design" (approximate)
- **Font:** Switzer
- **Font size:** Responsive `clamp()`: minimum 1.25rem (20px), preferred 2vw, maximum 2rem (32px)
- **Font weight:** Light (300)
- **Text color:** Black

A spacer: 16 pixels of vertical space

A paragraph:
- **Text:** Multiple lines of body text describing the brand's philosophy
- **Font:** Switzer
- **Font size:** Responsive range
- **Font weight:** Light (300)
- **Line height:** `leading-[1.4]` (1.4 times the font size)
- **Text color:** Black

---

## 11. Section 9 — Categories (Six Rows)

### 11.1 Section Container

- **Background:** Pure white (`bg-white`)
- **Padding:** 4 pixels horizontal (`px-1`). Top: 96 pixels (`pt-24`). Bottom: 4 pixels (`pb-4`). Bottom margin: 16 pixels (`mb-4`).

### 11.2 Section Title Row

- **Layout:** Flexbox row, items vertically centered (`flex justify-between items-center`), 48 pixels bottom margin (`mb-12`)
- **Left:** "CATEGORIES" heading — all uppercase, Switzer Medium, `clamp(3.5rem,10vw,10rem)`, pure black, `leading-none`, 0.01em tracking
- **Right:** "SEE MORE" link — Switzer Semi-bold, 60% black opacity, uppercase, thin underline, `mr-8`, same `clamp(0.7rem,1.2vw,1rem)` size

### 11.3 Category Row Pattern

Six category rows are stacked vertically, each separated by a 4-pixel gap (`gap-1`). Each row follows an alternating layout pattern:

#### Row Layout (each row)

- **Layout:** Flexbox row (`flex`)
- **Gap:** 4 pixels between the two halves (`gap-1`)

**Left half (50% width):** Contains either:
- *For rows where the big image is on the left:* A single big square image at 100% height, filling the 50% width
- *For rows where the big image is on the right:* Two smaller square images stacked vertically, each occupying 50% of the 50% column height

**Right half (50% width):** The opposite of the left half:
- *If the big image is on the left:* Two smaller square images stacked vertically
- *If the big image is on the right:* A single big square image

#### Alternating Behavior

Row 1 (odd): Big image on the **left**, two small images on the **right**
Row 2 (even): Big image on the **right**, two small images on the **left**
Row 3 (odd): Big image on the **left**, two small images on the **right**
Row 4 (even): Big image on the **right**, two small images on the **left**
Row 5 (odd): Big image on the **left**, two small images on the **right**
Row 6 (even): Big image on the **right**, two small images on the **left**

### 11.4 Row Internal Detail

**Big image cell:**
- **Width:** 100% of its parent column
- **Aspect ratio:** 1:1 square (`aspect-square`)
- **Background color:** Neutral-900 (near-black `#171717`)
- **Overflow:** Hidden
- **Image sizing:** `object-cover` filling the full container
- **Outline:** A 1-pixel solid white outline (`outline-1 outline-white`), offset by negative 1 pixel (`outline-offset-[-1px]`). This places the white outline **inside** the image boundary, masking any dark edge pixels baked into the image file. The outline does not add any extra space around the image; it paints over the outermost 1 pixel of the image content with white.

**Small image cell:**
- **Dimensions:** Each small image occupies 50% of its parent column height (the parent is a flex column with two equal-height children). Each small image container is `aspect-square` (1:1 square ratio)
- **Background color:** Neutral-900
- **Overflow:** Hidden
- **Image sizing:** `object-cover`
- **Outline:** Same 1-pixel white outline with offset as the big image

**Category name label (positioned below the two small images):**
- **Text:** The category name, split across two lines (e.g., "Women's\nOuterwear & Coats")
- **Font family:** Switzer (matching the section title style)
- **Font size:** `clamp(3rem,7vw,7rem)` — minimum 3rem (48px), preferred 7vw, maximum 7rem (112px)
- **Font weight:** Medium (500)
- **Text color:** Pure black
- **Line height:** `leading-[1]` (1.0)
- **Padding:** 8 pixels of horizontal padding and 12 pixels of top padding on the wrapper

### 11.5 The Six Categories (with image paths)

| Row | Category Name | Big Image | Small Image 1 | Small Image 2 |
|-----|---------------|-----------|---------------|---------------|
| 1 (big-left) | Women's Outerwear & Coats | categories-new/women-outerwear-big.png | categories-new/women-outerwear-small-1.png | categories-new/women-outerwear-small-2.png |
| 2 (big-right) | Men's Outerwear & Coats | categories-new/men-outerwear-big.png | categories-new/men-outerwear-small-1.png | categories-new/men-outerwear-small-2.png |
| 3 (big-left) | Blouses & Tops | categories-new/blouses-tops-big.png | categories-new/blouses-tops-small-1.png | categories-new/blouses-tops-small-2.png |
| 4 (big-right) | Dresses | categories-new/dresses-big.png | categories-new/dresses-small-1.png | categories-new/dresses-small-2.png |
| 5 (big-left) | Suits | categories-new/suits-big.png | categories-new/suits-small-1.png | categories-new/suits-small-2.png |
| 6 (big-right) | Accessories | categories-new/accessories-big.png | categories-new/accessories-small-1.png | categories-new/accessories-small-2.png |

All images are PNG files served from the `/assets/images/` directory path under the public folder. Each is a full-color photograph on a white background, showing luxury fashion items on models or mannequins.

---

## 12. Section 10 — Footer

### 12.1 Section Container

- **Background:** Solid navy blue — hexadecimal color `#0d1b2a` (`bg-[#0d1b2a]`)
- **Padding:** 64 pixels on each side horizontally (`px-16`). Top padding: approximately 96 pixels (`pt-24`). Bottom padding: 4 pixels (`pb-4`).
- **Text color within footer:** Pure white (all text in the footer is white by default)

### 12.2 Top Content Row

A flexbox row (`flex flex-row`) with items aligned to the top of the row (`items-start`), spread across the full width with space between left and right content (`justify-between`).

#### 12.2.1 Left Side — "SNOW" Logotype

- **Text content:** "SNOW" (all uppercase)
- **Font family:** Synonym (`font-synonym`)
- **Font weight:** Bold (700, `font-bold`)
- **Font size:** Responsive `clamp()`: minimum 4rem (64 pixels), preferred 20 percent of viewport width (20vw), maximum 20rem (320 pixels)
- **Text color:** Pure white (`text-white`)
- **Line height:** `leading-[0.8]` (0.8 times the font size — tighter than normal, reducing the vertical space occupied by the tall uppercase letters)
- **User selection disabled:** `select-none`

This massive "SNOW" text dominates the left portion of the footer.

#### 12.2.2 Right Side — Navigation Columns

Three equally spaced columns of links, separated from each other by horizontal gaps (`gap-x-16` between columns). Each column contains a heading followed by stacked links:

**Column 1 — "Collections"**
- Heading text: "COLLECTIONS" (uppercase)
- Heading font: Switzer Bold (700), small size (`text-xs` or `text-sm`)
- Heading letter spacing: 0.15em (widely spaced)
- Links below (Switzer Regular, white text):
  - "ready to wear"
  - "accessories"
  - "collections"
  - "editorial"

**Column 2 — "Support"**
- Heading text: "SUPPORT" (uppercase)
- Same heading styling as Column 1
- Links below:
  - "contact us"
  - "shipping & returns"
  - "size guide"
  - "care instructions"

**Column 3 — "Connect"**
- Heading text: "CONNECT" (uppercase)
- Same heading styling as Column 1
- Links below:
  - "instagram"
  - "twitter"
  - "pinterest"
  - "tiktok"

Each link is rendered in Switzer Regular font at a standard small size with white text color. A space of approximately 16-20 pixels exists between each link vertically.

### 12.3 Bottom Content Row

A separate area at the bottom of the footer containing legal and copyright information:

- **Layout:** Flexbox row (`flex`), with content spread between left and right (`justify-between`)
- **Top border:** A 1-pixel white line at partial opacity, dividing the top and bottom footer areas

**Left side — Copyright text:**
- **Text content:** "© 2026 VANTAGE. All rights reserved." (approximate copyright statement)
- **Font:** Switzer Regular (400)
- **Font size:** Small (approximately 12-14 pixels)

**Right side — Legal links:**
- **Text content:** "Privacy Policy" and "Terms of Service"
- **Font:** Switzer Regular (400)
- **Font size:** Same small size as copyright text

---

## 13. Appendix A — Color Reference Table

| Color Name | Hex Code | RGB Value | Where Used |
|-----------|----------|-----------|------------|
| Pure black | `#000000` | `rgb(0,0,0)` | ALL primary CTAs (default state), body background, intro overlay, text over white bg |
| Pure white | `#ffffff` | `rgb(255,255,255)` | Text over hero video, text over dark backgrounds, CTA text (default state), category image outlines |
| Navy | `#0d1b2a` | `rgb(13,27,42)` | Footer background, heart icon fill/stroke |
| Navy accent | `#284468` | `rgb(40,68,104)` | Subscribe button hover state (footer only) |
| Neutral-900 | `#171717` | `rgb(23,23,23)` | Product/category image container backgrounds (placeholder before images load) |
| Neutral-600 | `#525252` | `rgb(82,82,82)` | Product price text color |
| Black/10 | `rgba(0,0,0,0.1)` | — | Image overlay on collection/category cards |
| Black/40 | `rgba(0,0,0,0.4)` | — | Hero section video darkening overlay |
| Black/60 | `rgba(0,0,0,0.6)` | — | "SEE MORE" / "MORE" link text color |

**Note:** All primary action buttons (Add to Cart, Checkout, Place Order, Apply) now use `bg-black text-white` as default and invert to `bg-white text-black` on hover. Navy `#284468` is no longer used for CTAs — only for the Subscribe button hover effect in the footer.

---

## 14. Appendix B — Typography Reference Table

### 14.1 Switzer Font Usage

| Location | Weight | Size | Color | Letter Spacing |
|----------|--------|------|-------|---------------|
| Section titles (Featured, COLLECTIONS, CATEGORIES, PHILOSOPHY) | Medium (500) | `clamp(3.5rem,10vw,10rem)` | Black | 0.01em |
| Navbar links | Medium (500) | 14px / 0.875rem | White or Black (state-dependent) | 0 |
| Collection card category names | Medium (500) | `clamp(1.8rem,4vw,3.5rem)` | White | 0.01em |
| Product card names | Regular (400) | `text-sm lg:text-base` (responsive) | Neutral-900 | track-wide |
| Product card prices | Light (300) | `text-sm lg:text-base` (responsive) | Neutral-600 | 0 |
| "SEE MORE" / "MORE" links | Semi-bold (600) | `clamp(0.7rem,1.2vw,1rem)` | Black/60 | 0.15em |
| "DISCOVER" labels (collection cards) | Light (300) | `clamp(0.75rem,1.5vw,1.25rem)` | White | 0.15em |
| "ABOUT US" label | Light (300) | `clamp(0.875rem,1.5vw,1.25rem)` | White | 0.15em |
| "VANTAGE" hero heading | Bold (700) | `clamp(3rem,8vw,8rem)` | White | 0 |
| Primary CTAs (add to cart, checkout, etc.) | Medium (500) | 14px / 0.875rem | White (default) / Black (hover) | 0.1em |
| Footer column headings | Bold (700) | Small (12-14px approx.) | White | 0.15em |
| Footer link text | Regular (400) | Small (12-14px approx.) | White | 0 |
| Introduction paragraph text | Light (300) | `clamp(1.25rem,2vw,2.5rem)` | Black | 0 |

### 14.2 Synonym Font Usage

| Location | Weight | Size | Color |
|----------|--------|------|-------|
| Intro "snow" (full-screen overlay) | Bold (700) | `clamp(6rem,22vw,20rem)` | White |
| Hero centered "snow" | Bold (700) | `clamp(3rem,15vw,15rem)` | White |
| Hero bottom-left "snow" | Bold (700) | `clamp(4rem,22vw,20rem)` | White |
| Brand section "snow" | Bold (700) | `clamp(4rem,20vw,20rem)` | Black |
| Footer "SNOW" | Bold (700) | `clamp(4rem,20vw,20rem)` | White |
| Navbar "snow" logo | Bold (700) | 24px / 1.5rem | White or Black (state-dependent) |

---

## 15. Appendix C — Interactive States Reference

### 15.1 Navbar Links

| State | Visual Change |
|-------|---------------|
| Default | White text (hero mode) or black text (past-hero mode). No underline visible. |
| Hover | Underline smoothly expands from 0% to 100% width over 300 milliseconds. No color change to the text itself. |
| Active (click) | Browser default active state (momentary color flash) — no custom styling applied. |

### 15.2 Primary CTAs (Add to Cart, Checkout, Place Order, Apply)

| State | Visual Change |
|-------|---------------|
| Default | Black background (`bg-black`), white text, 1-pixel solid black border. |
| Hover | Background inverts to white (`bg-white`), text becomes black. Border remains black. 300ms transition. |
| Disabled | Light gray background (`bg-neutral-200`), medium gray text (`text-neutral-500`), cursor changes to `cursor-not-allowed`. No hover effect. |

### 15.3 Subscribe Button (Footer)

| State | Visual Change |
|-------|---------------|
| Default | White background, black text, 1-pixel white border. |
| Hover | Background inverts to navy `#284468`, text becomes white. Border remains white. 150ms transition. |

### 15.4 Product Card Heart Button

| State | Visual Change |
|-------|---------------|
| Default (card not hovered) | Button is invisible (`opacity: 0`), scaled down to 75% of full size. |
| Card hovered | Button fades in to full opacity over 300ms and scales up to 100% over the same duration. |
| Heart filled (saved) | Heart icon shows a solid navy `#0d1b2a` fill. Outline (stroke) is also navy. |
| Heart unfilled (not saved) | Heart icon shows only a navy outline with transparent/empty interior. |

### 15.5 Collection Cards and Category Cards

| State | Visual Change |
|-------|---------------|
| Default | Image displayed at full opacity with a 10% black overlay. Text labels (category name + "DISCOVER") are fully visible. |
| Hover | No custom hover effect is defined on these cards. The cursor changes to `cursor-pointer` via the `group` class. |

### 15.6 "SEE MORE" / "MORE" Links

| State | Visual Change |
|-------|---------------|
| Default | Text at 60% black opacity with a 1-pixel underline. |
| Hover | No custom hover effect is defined — the text remains the same. The cursor may change to pointer if a parent group has `cursor-pointer`. |

### 15.7 Intro Overlay

| State | Visual Change |
|-------|---------------|
| Default | Fixed-position full-screen black overlay with centered white "snow" text. Cursor is pointer. |
| Click | Overlay begins a 1-second opacity transition from fully opaque to fully transparent using `cubic-bezier(0.87, 0, 0.13, 1)` easing. After the transition, the overlay is removed from the DOM. |

---

## End of Document

*This document provides a complete visual transcription of the desktop-only VANTAGE website as of 2026-07-28. Every section, element dimension, color, font, spacing value, layout rule, hover state, and interactive effect has been transcribed from the actual source code of the production components for accessibility by users relying on screen-reading technology.*
