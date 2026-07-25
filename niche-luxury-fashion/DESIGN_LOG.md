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

---

## Technical Notes

### Navbar Component Architecture
- **Wrapper** (`Navbar.tsx`): Handles responsive detection (< 1024px = mobile), scroll tracking (isPastHero, isVisible), passes props down.
- **Desktop variant** (`NavbarDesktop.tsx`): Full nav links (Men, Women, Accessories, Collections, Account, Saved, Cart), underline hover effects.
- **Mobile variant** (`NavbarMobile.tsx`): Compact layout (SNOW, Menu, Cart).
- Both variants are stateless presentational components — all state lives in the wrapper.
