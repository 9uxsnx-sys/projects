"use client";

import React from "react";

export default function HeroDesktop() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Full-bleed image background */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/images/hero/hero-bg.jpeg"
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      {/* Top fade — black 20% at top, 0 at bottom */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/20 to-transparent z-10" />

      {/* Title + micro copy — bottom left */}
      <div className="absolute left-0 bottom-12 z-20 w-full px-12 text-left">
        <h1 className="text-white/95 text-7xl font-zodiak font-medium italic tracking-[0.05em] leading-[1.05]">
          Captured in
          <br />
          Golden Light
        </h1>
        <p className="mt-6 max-w-[44rem] text-white/85 text-[22px] font-switzer font-normal leading-relaxed">
          A scent distilled from the hour when light turns to gold, frozen
          florals and warm amber, poured into faceted glass for the quiet hours
          after dusk.
        </p>
      </div>

      {/* Shop Now — bottom right, plain text */}
      <a
        href="#"
        className="absolute right-12 bottom-14 z-20 inline-flex items-center gap-3 text-white/85 text-base font-switzer font-semibold tracking-[0.2em] uppercase transition-opacity duration-300 hover:opacity-60"
      >
        Shop Now
        <span className="text-lg leading-none">↗</span>
      </a>
    </section>
  );
}
