"use client";

import React, { useState } from "react";

export default function NavbarMobile({
  isPastHero,
  isVisible,
}: {
  isPastHero: boolean;
  isVisible: boolean;
}) {
  const [cartCount] = useState(0);
  const textColor = isPastHero ? "text-black" : "text-white";
  const bgColor = isPastHero ? "bg-white" : "bg-transparent";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-10 flex items-center ${bgColor} transition-all duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <nav className="flex items-center justify-between px-6 w-full">
        {/* Logo */}
        <a
          href="/"
          className={`${textColor} text-lg tracking-[0.35em] uppercase font-khand select-none transition-colors duration-300`}
        >
          SNOW
        </a>

        {/* Right: Menu + Cart */}
        <div className="flex items-center gap-5">
          <a
            href="#"
            className={`${textColor} text-xs tracking-[1.5px] uppercase font-switzer font-medium transition-colors duration-300`}
          >
            Menu
          </a>
          <a
            href="#"
            className={`${textColor} text-xs tracking-[1.5px] uppercase font-switzer font-medium transition-colors duration-300`}
          >
            Cart ({cartCount})
          </a>
        </div>
      </nav>
    </header>
  );
}
