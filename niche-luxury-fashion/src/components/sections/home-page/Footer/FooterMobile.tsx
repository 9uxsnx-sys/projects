"use client";

import React from "react";

export default function FooterMobile() {
  return (
    <section className="w-full bg-black relative overflow-hidden">
      <div className="px-1 pt-12 pb-0">
        {/* Newsletter */}
        <div className="flex flex-col gap-4 mb-12">
          <h3 className="text-white text-sm font-switzer font-medium tracking-[0.2em] uppercase">
            Think
          </h3>
          <input
            type="email"
            placeholder="Your email"
            className="w-full bg-transparent border-b border-white/30 pb-2 text-white text-sm font-switzer font-light tracking-[0.05em] placeholder:text-white/40 outline-none focus:border-white/60 transition-colors"
          />
          <span className="text-white/60 text-xs font-switzer font-light tracking-[0.15em] uppercase">
            Subscribe
          </span>
        </div>

        {/* Link Columns */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          <div className="flex flex-col gap-3">
            <h3 className="text-white/50 text-xs font-switzer font-medium tracking-[0.2em] uppercase">
              Collections
            </h3>
            {["Men", "Women", "Accessories"].map((item) => (
              <span
                key={item}
                className="text-white/80 text-sm font-switzer font-light tracking-[0.05em]"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-white/50 text-xs font-switzer font-medium tracking-[0.2em] uppercase">
              Customer
            </h3>
            {["Contact", "Shipping", "Returns"].map((item) => (
              <span
                key={item}
                className="text-white/80 text-sm font-switzer font-light tracking-[0.05em]"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-white/50 text-xs font-switzer font-medium tracking-[0.2em] uppercase">
              Follow
            </h3>
            {["Instagram", "X", "Pinterest"].map((item) => (
              <span
                key={item}
                className="text-white/80 text-sm font-switzer font-light tracking-[0.05em]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Massive Half-Clipped SNOW */}
        <div className="relative -mb-[15vh] select-none pointer-events-none">
          <h2 className="text-white text-[35vw] leading-[0.85] font-plein font-bold tracking-[0.02em] text-center">
            SNOW
          </h2>
        </div>
      </div>
    </section>
  );
}
