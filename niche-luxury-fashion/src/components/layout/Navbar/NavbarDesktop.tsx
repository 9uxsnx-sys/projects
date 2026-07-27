"use client";

import React from "react";
import { useCart } from "@/contexts/CartContext";

const navLinks = [
  { label: "Men", href: "#" },
  { label: "Women", href: "#" },
  { label: "Accessories", href: "#" },
  { label: "Collections", href: "#" },
  { label: "Account", href: "#" },
];

export default function NavbarDesktop({
  isPastHero,
  isVisible,
}: {
  isPastHero: boolean;
  isVisible: boolean;
}) {
  const { itemCount, setCartOpen } = useCart();
  const textColor = "text-white";
  const underlineColor = "before:bg-white";
  const bgColor = isPastHero ? "bg-[#284468]" : "bg-transparent";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-14 flex items-center ${bgColor} transition-all duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <nav className="flex items-center justify-between px-12 max-w-[1920px] mx-auto w-full">
        {/* Logo - Left — hidden over hero, visible past hero */}
        <a
          href="/"
          className={`${textColor} text-[28px] font-synonym font-bold select-none transition-all duration-300 ${
            !isPastHero ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          snow
        </a>

        {/* Navigation Links */}
        <ul className="flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`relative ${textColor} text-sm tracking-[1.5px] uppercase font-switzer font-medium pb-1 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-px ${underlineColor} before:transition-all before:duration-300 hover:before:w-full transition-colors duration-300`}
              >
                {link.label}
              </a>
            </li>
          ))}

          {/* Saved */}
          <li>
            <a
              href="#"
              className={`relative ${textColor} text-sm tracking-[1.5px] uppercase font-switzer font-medium pb-1 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-px ${underlineColor} before:transition-all before:duration-300 hover:before:w-full transition-colors duration-300`}
            >
              Saved
            </a>
          </li>

          {/* Cart with live count */}
          <li>
            <button
              onClick={() => setCartOpen(true)}
              className={`relative ${textColor} text-sm tracking-[1.5px] uppercase font-switzer font-medium pb-1 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-px ${underlineColor} before:transition-all before:duration-300 hover:before:w-full transition-colors duration-300`}
            >
              Cart ({itemCount})
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
