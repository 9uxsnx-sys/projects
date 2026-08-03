"use client";

import React from "react";

export default function NavbarMobile() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="flex h-14 items-center justify-between px-4">
        {/* Logo - Left */}
        <a
          href="/"
          className="text-white text-3xl font-quilon font-bold tracking-[0.1em] uppercase select-none"
        >
          Snow
        </a>

        {/* Menu + Cart - Right */}
        <div className="flex items-center gap-6">
          <button className="text-white text-xs font-switzer font-semibold tracking-[0.2em] uppercase transition-opacity duration-200 hover:opacity-60">
            Menu
          </button>
          <button className="text-white text-xs font-switzer font-semibold tracking-[0.2em] uppercase transition-opacity duration-200 hover:opacity-60">
            Cart
          </button>
        </div>
      </nav>
    </header>
  );
}
