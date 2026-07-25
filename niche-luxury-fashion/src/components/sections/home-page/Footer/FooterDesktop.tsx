"use client";

import React from "react";

export default function FooterDesktop() {
  return (
    <section className="w-full bg-black relative overflow-hidden">
      {/* Main Content */}
      <div className="px-1 pt-20 pb-0">
        {/* Top Grid — 4 columns */}
        <div className="grid grid-cols-4 gap-1 mb-32">
          {/* Column 1: Subscribe */}
          <div className="flex flex-col gap-6">
            <h6 className="text-white uppercase text-2xl font-switzer font-semibold leading-tight">
              STAY IN THE LOOP
            </h6>
            <p className="text-white/80 text-sm font-switzer font-light leading-snug">
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
                  className="h-10 w-full border-b border-white p-1 text-sm font-switzer font-normal leading-snug bg-transparent text-white placeholder:text-zinc-500 outline-none"
                />
                <button
                  type="submit"
                  className="bg-white text-black uppercase tracking-[-0.8px] cursor-pointer text-xs font-switzer font-semibold leading-none duration-150 pt-4 pb-3 px-6 border border-solid border-white hover:text-white hover:bg-black"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>

          {/* Column 2: Collections */}
          <div className="flex flex-col gap-4 pl-10">
            <h3 className="text-white/50 text-xs font-switzer font-medium tracking-[0.2em] uppercase">
              Collections
            </h3>
            <div className="flex flex-col gap-2">
              {["Men", "Women", "Accessories", "The Archive"].map((item) => (
                <span
                  key={item}
                  className="text-white/80 text-sm font-switzer font-light tracking-[0.05em] cursor-pointer hover:text-white transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Column 3: Customer */}
          <div className="flex flex-col gap-4 pl-10">
            <h3 className="text-white/50 text-xs font-switzer font-medium tracking-[0.2em] uppercase">
              Customer
            </h3>
            <div className="flex flex-col gap-2">
              {["Contact", "Shipping", "Returns", "FAQ"].map((item) => (
                <span
                  key={item}
                  className="text-white/80 text-sm font-switzer font-light tracking-[0.05em] cursor-pointer hover:text-white transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Column 4: Follow */}
          <div className="flex flex-col gap-4 pl-10">
            <h3 className="text-white/50 text-xs font-switzer font-medium tracking-[0.2em] uppercase">
              Follow
            </h3>
            <div className="flex flex-col gap-2">
              {["Instagram", "X", "Pinterest"].map((item) => (
                <span
                  key={item}
                  className="text-white/80 text-sm font-switzer font-light tracking-[0.05em] cursor-pointer hover:text-white transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Massive Half-Clipped SNOW */}
        <div className="relative -mb-[20vh] select-none pointer-events-none">
          <h2 className="text-white text-[30vw] leading-[0.85] font-plein font-bold tracking-[0.02em] text-center">
            SNOW
          </h2>
        </div>
      </div>
    </section>
  );
}
