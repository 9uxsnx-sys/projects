"use client";

import React, { useState } from "react";

const navLinks = [
  { label: "Men", href: "#" },
  { label: "Women", href: "#" },
  { label: "Accessories", href: "#" },
  { label: "Collections", href: "#" },
  { label: "Account", href: "#" },
];

export default function NavbarDesktop() {
  const [savedCount] = useState(0);
  const [cartCount] = useState(0);

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <nav className="flex items-center justify-between px-12 py-5 max-w-[1920px] mx-auto">
        {/* Logo - Left */}
        <a
          href="/"
          className="text-white text-2xl tracking-[0.4em] uppercase font-khand select-none"
        >
          SNOW
        </a>

        {/* Navigation Links */}
        <ul className="flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="relative text-white text-xs tracking-[1.5px] uppercase font-switzer font-medium pb-1 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-px before:bg-white before:transition-all before:duration-300 hover:before:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}

          {/* Saved with count */}
          <li>
            <a
              href="#"
              className="relative text-white text-xs tracking-[1.5px] uppercase font-switzer font-medium pb-1 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-px before:bg-white before:transition-all before:duration-300 hover:before:w-full"
            >
              Saved ({savedCount})
            </a>
          </li>

          {/* Cart with count */}
          <li>
            <a
              href="#"
              className="relative text-white text-xs tracking-[1.5px] uppercase font-switzer font-medium pb-1 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-px before:bg-white before:transition-all before:duration-300 hover:before:w-full"
            >
              Cart ({cartCount})
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
