"use client";

import React from "react";

const navLinks = [
  { label: "Men", href: "#" },
  { label: "Women", href: "#" },
  { label: "Accessories", href: "#" },
  { label: "Collections", href: "#" },
  { label: "Saved", href: "#" },
  { label: "Currency", href: "#" },
  { label: "Cart", href: "#" },
  { label: "Account", href: "#" },
];

export default function NavbarDesktop() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <nav className="flex items-center justify-between px-12 py-5 max-w-[1920px] mx-auto">
        {/* Logo - Left */}
        <a
          href="/"
          className="text-white text-xl tracking-[0.4em] uppercase font-quilon select-none"
        >
          SNOW
        </a>

        {/* Navigation Links - Right */}
        <ul className="flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-white/60 text-xs tracking-[1.5px] uppercase font-rowan font-medium hover:text-white transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
