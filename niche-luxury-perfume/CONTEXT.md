# Niche Strategy: Luxury Perfume Brand — "SNOW"

## 1. Project Identity
- **Niche Name:** Luxury Perfume Brand (E-comm)
- **Brand Concept:** "SNOW" – a scent distilled from the hour when light turns to gold. Frozen florals and warm amber, poured into faceted glass for the quiet hours after dusk.
- **Target Audience:** High-net-worth fragrance collectors and quiet-luxury shoppers in MENA/GCC and international markets.
- **Vibe:** Quiet luxury, editorial, avant-garde, monochrome with warm-gold accents.

## 2. The Problem (For the Case Study)
- **Problem:** Perfume brands in this tier compete with loud, cluttered e-commerce. Price and heritage are invisible in a sea of sameness.
- **Our Solution:** An editorial, image-first homepage that treats the fragrance as art — full-bleed photography, restrained typography, and a deliberate, slow pacing that signals exclusivity before a single word is read.

## 3. Visual Direction
- **Typeface:** Quilon (wordmark), Zodiak (editorial titles, medium italic), Switzer (body/nav), Satoshi + ClashDisplay (available).
- **Color Palette:** Near-black `#000` canvas, white text at 85–95% opacity, transparent-to-black gradient overlay on hero imagery.
- **Layout:** Fixed transparent navbar over full-screen hero; centered wordmark with shortcuts hugging the logo; title + micro-copy bottom-left; CTA bottom-right.

## 4. Key Sections to Build
1. Hero — full-screen image, title, micro-copy, Shop Now (desktop + mobile) ✅
2. Navbar — centered logo, shortcuts, fixed transparent (desktop + mobile) ✅
3. Collections — category storytelling
4. Maison — brand heritage / house story
5. Journal — editorial content feed
6. Account / Cart / Saved — commerce touchpoints

## 5. Technical Goals
- 100% Mobile Responsive (desktop/mobile component split at 1024px).
- Framer Motion for high-end animations in later sections.
- Custom fonts self-hosted in `public/assets/fonts`, variable weights to keep payloads low.
- Image optimization using Next.js (`/` assets, `object-cover` full-bleed hero).
- Performance-first: JPEG hero assets, no render-blocking third-party fonts.
