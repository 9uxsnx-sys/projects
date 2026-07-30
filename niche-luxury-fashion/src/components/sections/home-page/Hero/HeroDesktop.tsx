"use client";

import React from "react";

export default function HeroDesktop() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
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
      <div className="absolute bottom-6 left-6 z-20">
        <h1 className="text-white text-[8vw] leading-[0.95] font-switzer font-semibold select-none">
          Frost & Lace
        </h1>
      </div>
    </section>
  );
}
