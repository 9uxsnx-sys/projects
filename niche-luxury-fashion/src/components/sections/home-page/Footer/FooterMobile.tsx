"use client";

import React from "react";

export default function FooterMobile() {
  return (
    <section className="w-full bg-[#0d1b2a] relative overflow-hidden">
      <div className="px-1 pt-12 pb-0">
        {/* Subscribe */}
        <div className="flex flex-col gap-4 mb-12">
          <h2 className="text-[20px] font-switzer font-medium text-white leading-none tracking-[0.05em] select-none">
            NEVER MISS A DROP
          </h2>
          <p className="text-white/70 text-sm font-switzer font-light leading-snug">
            I say it almost every time, but once again, we've created
            something we're proud of. Don't miss it and subscribe now
            to be notified.
          </p>
          <form className="w-full">
            <div className="flex w-full items-center gap-2">
              <input
                type="email"
                name="contact[email]"
                placeholder="Email address"
                required
                className="h-10 w-full border-b border-white/20 p-1 text-sm font-switzer font-normal leading-snug bg-transparent text-white placeholder:text-white/40 outline-none"
              />
              <button
                type="submit"
                className="bg-white text-black uppercase tracking-[0.1em] cursor-pointer text-xs font-switzer font-normal leading-none duration-150 pt-4 pb-3 px-6 border border-solid border-white hover:bg-transparent hover:text-white"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>

        {/* Link Columns */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          <div className="flex flex-col gap-3">
            <h3 className="text-white/50 text-xs font-switzer font-medium tracking-[0.2em] uppercase">
              Collections
            </h3>
            {["Accessories", "The Archive", "Women", "Men"].map((item) => (
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
            {["Shipping", "Contact", "Returns", "FAQ"].map((item) => (
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
            {["Instagram", "Pinterest", "YouTube", "TikTok"].map((item) => (
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
