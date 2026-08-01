"use client";

import React from "react";

export default function FooterMobile() {
  return (
    <section className="w-full bg-[#284468] relative overflow-hidden">
      <div className="px-5 pt-16 pb-0">
        {/* Subscribe — compact for mobile */}
        <div className="flex flex-col gap-2 mb-12">
          <h2 className="text-[14px] font-switzer font-medium text-white leading-none tracking-[0.05em] select-none">
            NEVER MISS A DROP
          </h2>
          <p className="text-white/60 text-[11px] font-switzer font-light leading-snug">
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
                className="h-8 w-full border-b border-white/20 px-1 text-[11px] font-switzer font-normal leading-snug bg-transparent text-white placeholder:text-white/40 outline-none"
              />
              <button
                type="submit"
                className="bg-white text-black uppercase tracking-[0.1em] cursor-pointer text-[10px] font-switzer font-normal leading-none duration-150 pt-2 pb-2 px-4 border border-solid border-white hover:bg-[#284468] hover:text-white"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>

        {/* Link Columns — 2x2 grid, centered */}
        <div className="grid grid-cols-2 w-fit mx-auto gap-x-10 gap-y-8 mb-16">
          {/* Row 1 */}
          <div className="flex flex-col items-center gap-2">
            <h3 className="text-white/50 text-xs font-switzer font-medium tracking-[0.2em] uppercase">
              Collections
            </h3>
            {["Accessories", "The Archive", "Women", "Men"].map((item) => (
              <span
                key={item}
                className="text-white/80 text-[15px] font-switzer font-light tracking-[0.05em] text-center"
                >
                  {item}
                </span>
              ))}
          </div>
          <div className="flex flex-col items-center gap-2">
            <h3 className="text-white/50 text-xs font-switzer font-medium tracking-[0.2em] uppercase">
              Customer
            </h3>
            {["Shipping", "Contact", "Returns", "FAQ"].map((item) => (
              <span
                key={item}
                className="text-white/80 text-[15px] font-switzer font-light tracking-[0.05em] text-center"
                >
                  {item}
                </span>
              ))}
          </div>
          {/* Row 2 */}
          <div className="flex flex-col items-center gap-2">
            <h3 className="text-white/50 text-xs font-switzer font-medium tracking-[0.2em] uppercase">
              Follow
            </h3>
            {["Instagram", "Pinterest", "YouTube", "TikTok"].map((item) => (
              <span
                key={item}
                className="text-white/80 text-[15px] font-switzer font-light tracking-[0.05em] text-center"
                >
                  {item}
                </span>
              ))}
          </div>
          <div className="flex flex-col items-center gap-2">
            <h3 className="text-white/50 text-xs font-switzer font-medium tracking-[0.2em] uppercase">
              Policies
            </h3>
            {["Terms of Service", "Privacy Policy", "Cookie Policy", "Warranty"].map((item) => (
              <span
                key={item}
                className="text-white/80 text-[15px] font-switzer font-light tracking-[0.05em] text-center"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Massive Half-Clipped BABIL — same effect as desktop */}
        <div className="relative -mb-[6vh] select-none pointer-events-none">
          <h2 className="text-white text-[28vw] leading-[0.85] font-synonym font-bold tracking-[0.02em] text-center">
            babil
          </h2>
        </div>
      </div>
    </section>
  );
}
