"use client";

import React from "react";

export default function AboutDesktop() {
  return (
    <section className="w-full bg-white pt-12">
      {/* Two blocks — no gap between them */}
      <div className="grid grid-cols-2">
        {/* Left: Image block with title */}
        <div className="relative w-full pt-[133.33%] bg-neutral-900 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/images/about/about-us.webp"
            alt="About VANTAGE"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          {/* 20% black overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-black/20" />
          {/* Title — top row */}
          <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between">
            <h2 className="text-white text-[clamp(2rem,4vw,3.5rem)] font-switzer font-medium leading-none tracking-[0.01em] uppercase select-none">
              ABOUT US
            </h2>
            <span className="text-white text-[clamp(0.875rem,1.5vw,1.25rem)] font-switzer font-light tracking-[0.15em] uppercase select-none">
              DISCOVER
            </span>
          </div>
        </div>

        {/* Right: Video block with overlay */}
        <div className="relative w-full pt-[133.33%] bg-neutral-900 overflow-hidden">
          <video
            src="/assets/videos/about-us.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/assets/images/video-poster.jpg"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          {/* 10% black overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-black/10" />
        </div>
      </div>
    </section>
  );
}
