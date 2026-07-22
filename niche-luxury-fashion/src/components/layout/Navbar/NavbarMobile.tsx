"use client";

import React, { useState } from "react";

export default function NavbarMobile() {
  const [cartCount] = useState(0);

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <nav className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
          href="/"
          className="text-white text-lg tracking-[0.35em] uppercase font-khand select-none"
        >
          SNOW
        </a>

        {/* Right: Menu + Cart */}
        <div className="flex items-center gap-5">
          <a
            href="#"
            className="text-white text-xs tracking-[1.5px] uppercase font-switzer font-medium"
          >
            Menu
          </a>
          <a
            href="#"
            className="relative text-white text-xs tracking-[1.5px] uppercase font-switzer font-medium"
          >
            Cart ({cartCount})
          </a>
        </div>
      </nav>
    </header>
  );
}
