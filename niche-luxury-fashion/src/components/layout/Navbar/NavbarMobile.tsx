"use client";

import React from "react";
import { useCart } from "@/contexts/CartContext";

export default function NavbarMobile({
  isPastHero,
  isVisible,
}: {
  isPastHero: boolean;
  isVisible: boolean;
}) {
  const { itemCount, setCartOpen } = useCart();
  const textColor = "text-white";
  const bgColor = isPastHero ? "bg-[#284468]" : "bg-transparent";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-10 flex items-center ${bgColor} transition-all duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <nav className="flex items-center justify-between px-6 w-full">
        {/* Logo - Left — hidden over hero, visible past hero */}
        <a
          href="/"
          className={`${textColor} text-lg font-synonym font-bold select-none transition-all duration-300 ${
            !isPastHero ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          snow
        </a>

        {/* Right: Menu + Cart */}
        <div className="flex items-center gap-5">
          <a
            href="#"
            className={`${textColor} text-xs tracking-[1.5px] uppercase font-switzer font-medium transition-colors duration-300`}
          >
            Menu
          </a>
          <button
            onClick={() => setCartOpen(true)}
            className={`${textColor} text-xs tracking-[1.5px] uppercase font-switzer font-medium transition-colors duration-300`}
          >
            Cart ({itemCount})
          </button>
        </div>
      </nav>
    </header>
  );
}
