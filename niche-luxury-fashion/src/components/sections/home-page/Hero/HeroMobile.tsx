"use client";

import React from "react";

export default function HeroMobile() {
  return (
    <section className="relative min-h-[100dvh] w-full overflow-hidden bg-black">
      {/* Cinematic Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/assets/images/video-poster.jpg"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/assets/videos/hero-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Subtle Overlay for Luxury Aesthetic */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/20 z-10" />

      {/* Brand Title - Bottom Left */}
      <div className="absolute bottom-4 left-4 z-20">
        <h1 className="text-white text-[14vw] leading-[0.95] font-switzer font-semibold select-none">
          Frost & Lace
        </h1>
      </div>
    </section>
  );
}
