"use client";

import React from "react";

const leftLinks = [
  { label: "Collections", href: "#" },
  { label: "Maison", href: "#" },
  { label: "Journal", href: "#" },
];

const rightLinks = [
  { label: "Saved", href: "#" },
  { label: "Cart", href: "#" },
  { label: "Account", href: "#" },
];

export default function NavbarDesktop() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="grid h-20 grid-cols-[1fr_auto_1fr] items-center gap-x-16 px-8">
        {/* Left shortcuts — hug the logo (flush right toward it) */}
        <div className="flex items-center gap-8 justify-self-end">
          {leftLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white text-sm font-switzer font-semibold tracking-[0.2em] uppercase transition-opacity duration-200 hover:opacity-60"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Logo - Center */}
        <a
          href="/"
          className="text-white text-6xl font-quilon font-bold tracking-[0.1em] uppercase select-none"
        >
          Snow
        </a>

        {/* Right shortcuts — hug the logo (flush left toward it) */}
        <div className="flex items-center gap-8 justify-self-start">
          {rightLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white text-sm font-switzer font-semibold tracking-[0.2em] uppercase transition-opacity duration-200 hover:opacity-60"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
