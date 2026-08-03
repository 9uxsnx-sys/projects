"use client";

import React from "react";

export default function HeroMobile() {
  return (
    <section className="relative min-h-[100dvh] w-full overflow-hidden bg-black">
      {/* Full-bleed image background */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/images/hero/hero-bg-mobile.jpeg"
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Top fade — black 20% at top, 0 at bottom */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/20 to-transparent z-10" />

      {/* Title + paragraph — bottom left */}
      <div className="absolute left-0 bottom-10 z-20 w-full px-6 text-left">
        <h1 className="text-white/95 text-[34px] font-zodiak font-medium italic tracking-[0.05em] leading-[1.05]">
          Captured in
          <br />
          Golden Light
        </h1>
        <p className="mt-4 max-w-[18rem] text-white/85 text-[15px] font-switzer font-normal leading-relaxed">
          A scent distilled from the hour when light turns to gold, with frozen
          florals.
        </p>
      </div>

      {/* Shop — right, level with the paragraph's last line */}
      <a
        href="#"
        className="absolute right-6 bottom-10 z-20 inline-flex items-center gap-1 text-white/85 text-sm font-switzer font-semibold tracking-[0.2em] uppercase transition-opacity duration-300 hover:opacity-60"
      >
        Shop
        <span className="text-base leading-none">↗</span>
      </a>
    </section>
  );
}
