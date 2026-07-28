"use client";

import React, { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import { useSaved } from "@/contexts/SavedContext";

type DropdownItem = { label: string; href: string };

const navLinks: { label: string; hasDropdown: boolean; dropdownItems?: DropdownItem[] }[] = [
  {
    label: "New Arrivals",
    hasDropdown: true,
    dropdownItems: [
      { label: "View All", href: "#" },
      { label: "Women's New", href: "#" },
      { label: "Men's New", href: "#" },
      { label: "Accessories", href: "#" },
    ],
  },
  {
    label: "Women",
    hasDropdown: true,
    dropdownItems: [
      { label: "View All Women", href: "#" },
      { label: "Dresses", href: "#" },
      { label: "Blouses & Tops", href: "#" },
      { label: "Trousers & Pants", href: "#" },
      { label: "Outerwear & Coats", href: "#" },
      { label: "Suits", href: "#" },
      { label: "Accessories", href: "#" },
    ],
  },
  {
    label: "Men",
    hasDropdown: true,
    dropdownItems: [
      { label: "View All Men", href: "#" },
      { label: "T-Shirts & Polos", href: "#" },
      { label: "Shirts", href: "#" },
      { label: "Trousers & Pants", href: "#" },
      { label: "Outerwear & Coats", href: "#" },
      { label: "Suits", href: "#" },
      { label: "Accessories", href: "#" },
    ],
  },
  {
    label: "The Edit",
    hasDropdown: true,
    dropdownItems: [
      { label: "Seasonal Edit", href: "#" },
      { label: "Evening Wear", href: "#" },
      { label: "The Essentials", href: "#" },
      { label: "Tailoring", href: "#" },
    ],
  },
  {
    label: "Journal",
    hasDropdown: true,
    dropdownItems: [
      { label: "All Stories", href: "#" },
      { label: "Style Notes", href: "#" },
      { label: "Lookbooks", href: "#" },
      { label: "Behind the Scenes", href: "#" },
    ],
  },
];

export default function NavbarDesktop({
  isPastHero,
  isVisible,
}: {
  isPastHero: boolean;
  isVisible: boolean;
}) {
  const { itemCount, setCartOpen } = useCart();
  const { savedCount } = useSaved();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const textColor = "text-white";
  const underlineColor = "before:bg-white";
  const bgColor = isPastHero ? "bg-[#284468]" : "bg-transparent";

  const activeLink = navLinks.find((l) => l.label === activeMenu);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-10 flex items-center ${bgColor} transition-all duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <nav className="flex items-center justify-between px-12 max-w-[1920px] mx-auto w-full">
        {/* Logo - Left */}
        <a
          href="/"
          className={`${textColor} text-[28px] font-synonym font-bold select-none transition-all duration-300 ${
            !isPastHero ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          snow
        </a>

        {/* Links block container — holds links + unified navy dropdown */}
        <div
          className="relative"
          onMouseLeave={() => setActiveMenu(null)}
        >
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li
                key={link.label}
                onMouseEnter={() => setActiveMenu(link.hasDropdown ? link.label : null)}
              >
                <a
                  href="#"
                  className={`relative ${textColor} text-sm tracking-[1.5px] uppercase font-switzer font-medium pb-0.5 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-px ${underlineColor} before:transition-all before:duration-300 hover:before:w-full transition-colors duration-300`}
                >
                  {link.label}
                </a>
              </li>
            ))}

            {/* Saved with live count */}
            <li>
              <a
                href="#"
                className={`relative ${textColor} text-sm tracking-[1.5px] uppercase font-switzer font-medium pb-0.5 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-px ${underlineColor} before:transition-all before:duration-300 hover:before:w-full transition-colors duration-300`}
              >
                Saved ({savedCount})
              </a>
            </li>

            {/* Cart with live count */}
            <li>
              <button
                onClick={() => setCartOpen(true)}
                className={`relative ${textColor} text-sm tracking-[1.5px] uppercase font-switzer font-medium pb-0.5 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-px ${underlineColor} before:transition-all before:duration-300 hover:before:w-full transition-colors duration-300`}
              >
                Cart ({itemCount})
              </button>
            </li>
          </ul>

          {/* Unified navy dropdown — spans full links block width */}
          {activeLink && activeLink.dropdownItems && (
            <div
              className="absolute top-full -left-4 -right-4 pt-3"
              onMouseEnter={() => setActiveMenu(activeLink.label)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <div className="bg-[#284468]">
                {activeLink.dropdownItems.length <= 4 ? (
                  <div className="py-3 px-5">
                    {activeLink.dropdownItems.map((item, i) => (
                      <a
                        key={i}
                        href={item.href}
                        className="block py-1.5 text-sm tracking-[1.5px] uppercase font-switzer font-medium text-white hover:text-white/70 transition-colors duration-200"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                ) : (
                  <div className="py-3 px-5 flex gap-12">
                    <div>
                      {activeLink.dropdownItems.slice(0, 4).map((item, i) => (
                        <a
                          key={i}
                          href={item.href}
                          className="block py-1.5 text-sm tracking-[1.5px] uppercase font-switzer font-medium text-white hover:text-white/70 transition-colors duration-200"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                    <div>
                      {activeLink.dropdownItems.slice(4).map((item, i) => (
                        <a
                          key={i}
                          href={item.href}
                          className="block py-1.5 text-sm tracking-[1.5px] uppercase font-switzer font-medium text-white hover:text-white/70 transition-colors duration-200"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
