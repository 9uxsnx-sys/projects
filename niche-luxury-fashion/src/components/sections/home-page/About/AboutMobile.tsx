"use client";

import React from "react";

export default function AboutMobile() {
  return (
    <section className="w-full bg-white pt-8 pb-6 px-1">
      {/* Stacked blocks — no gap between them */}
      <div className="flex flex-col">
        {/* Image block with title */}
        <div className="relative w-full pt-[133.33%] bg-neutral-900 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/images/about/about-us.jpg"
            alt="About VANTAGE"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black/20" />
          <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between">
            <h2 className="text-white text-[clamp(2rem,8vw,3.5rem)] font-switzer font-medium leading-none tracking-[0.01em] uppercase select-none">
              ABOUT US
            </h2>
            <span className="text-white text-[clamp(0.875rem,3vw,1.25rem)] font-switzer font-light tracking-[0.15em] uppercase select-none">
              DISCOVER
            </span>
          </div>
        </div>

        {/* Video block */}
        <div className="relative w-full pt-[133.33%] bg-neutral-900 overflow-hidden">
          <video
            src="/assets/videos/about-us.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black/10" />
        </div>
      </div>
    </section>
  );
}
