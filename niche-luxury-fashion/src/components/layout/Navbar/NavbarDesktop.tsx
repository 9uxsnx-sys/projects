"use client";

import React, { useState } from "react";

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
  const [savedCount] = useState(0);
  const [cartCount] = useState(0);
  const textColor = isPastHero ? "text-[#0d1b2a]" : "text-white";
  const underlineColor = isPastHero ? "before:bg-[#0d1b2a]" : "before:bg-white";
  const bgColor = isPastHero ? "bg-white" : "bg-transparent";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-12 flex items-center ${bgColor} transition-all duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <nav className="flex items-center justify-between px-12 max-w-[1920px] mx-auto w-full">
        {/* Logo - Left */}
        <a
          href="/"
          className={`${textColor} text-2xl tracking-[0.4em] uppercase font-khand select-none transition-colors duration-300`}
        >
          SNOW
        </a>

        {/* Navigation Links */}
        <ul className="flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`relative ${textColor} text-xs tracking-[1.5px] uppercase font-switzer font-medium pb-1 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-px ${underlineColor} before:transition-all before:duration-300 hover:before:w-full transition-colors duration-300`}
              >
                {link.label}
              </a>
            </li>
          ))}

          {/* Saved with count */}
          <li>
            <a
              href="#"
              className={`relative ${textColor} text-xs tracking-[1.5px] uppercase font-switzer font-medium pb-1 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-px ${underlineColor} before:transition-all before:duration-300 hover:before:w-full transition-colors duration-300`}
            >
              Saved ({savedCount})
            </a>
          </li>

          {/* Cart with count */}
          <li>
            <a
              href="#"
              className={`relative ${textColor} text-xs tracking-[1.5px] uppercase font-switzer font-medium pb-1 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-px ${underlineColor} before:transition-all before:duration-300 hover:before:w-full transition-colors duration-300`}
            >
              Cart ({cartCount})
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
