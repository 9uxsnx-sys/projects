"use client";

import React from "react";

export default function BrandMobile() {
  return (
    <section className="relative min-h-[100dvh] w-full overflow-hidden bg-black">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/assets/images/video-poster.jpg"
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/assets/videos/brand-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Subtle Overlay */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Centered Brand Title */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <h2 className="text-white text-[clamp(4rem,20vw,20rem)] leading-[0.85] font-zodiak font-normal tracking-[clamp(8px,2vw,30px)] select-none">
          babil
        </h2>
      </div>
    </section>
  );
}
