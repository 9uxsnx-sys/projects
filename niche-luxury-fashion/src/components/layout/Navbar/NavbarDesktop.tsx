"use client";

import React, { useState, useEffect } from "react";
import { useCart } from "@/contexts/CartContext";
import { useSaved } from "@/contexts/SavedContext";

type DropdownItem = { label: string; href: string };
type DropdownColumn = { title: string; items: DropdownItem[] };

const currencyList = [
  { label: "USD", href: "#" },
  { label: "EUR", href: "#" },
  { label: "GBP", href: "#" },
  { label: "CHF", href: "#" },
  { label: "SEK", href: "#" },
  { label: "NOK", href: "#" },
  { label: "AED", href: "#" },
  { label: "SAR", href: "#" },
  { label: "QAR", href: "#" },
  { label: "JPY", href: "#" },
  { label: "KRW", href: "#" },
  { label: "SGD", href: "#" },
  { label: "AUD", href: "#" },
  { label: "CAD", href: "#" },
];

const navLinks: { label: string; hasDropdown: boolean; columns?: DropdownColumn[] }[] = [
  {
    label: "New Arrivals",
    hasDropdown: true,
    columns: [
      {
        title: "Highlights",
        items: [
          { label: "View All", href: "#" },
          { label: "Women's New", href: "#" },
          { label: "Men's New", href: "#" },
          { label: "Accessories New", href: "#" },
          { label: "Shoes New", href: "#" },
          { label: "Bags New", href: "#" },
          { label: "Seasonal Capsule", href: "#" },
          { label: "Limited Edition", href: "#" },
        ],
      },
      {
        title: "Trending",
        items: [
          { label: "Ready-to-Wear", href: "#" },
          { label: "Outerwear", href: "#" },
          { label: "Evening", href: "#" },
          { label: "Vacation Shop", href: "#" },
        ],
      },
    ],
  },
  {
    label: "Women",
    hasDropdown: true,
    columns: [
      {
        title: "Clothing",
        items: [
          { label: "View All Women", href: "#" },
          { label: "Dresses", href: "#" },
          { label: "Blouses & Tops", href: "#" },
          { label: "Trousers & Pants", href: "#" },
          { label: "Outerwear & Coats", href: "#" },
          { label: "Suits", href: "#" },
          { label: "Knitwear", href: "#" },
          { label: "Denim", href: "#" },
        ],
      },
      {
        title: "Accessories",
        items: [
          { label: "Shoes", href: "#" },
          { label: "Bags", href: "#" },
          { label: "Belts", href: "#" },
          { label: "Hats", href: "#" },
          { label: "Scarves", href: "#" },
          { label: "Jewellery", href: "#" },
        ],
      },
    ],
  },
  {
    label: "Men",
    hasDropdown: true,
    columns: [
      {
        title: "Clothing",
        items: [
          { label: "View All Men", href: "#" },
          { label: "T-Shirts & Polos", href: "#" },
          { label: "Shirts", href: "#" },
          { label: "Trousers & Pants", href: "#" },
          { label: "Outerwear & Coats", href: "#" },
          { label: "Suits", href: "#" },
          { label: "Knitwear", href: "#" },
          { label: "Denim", href: "#" },
        ],
      },
      {
        title: "Accessories",
        items: [
          { label: "Shoes", href: "#" },
          { label: "Bags", href: "#" },
          { label: "Belts", href: "#" },
          { label: "Hats", href: "#" },
          { label: "Scarves", href: "#" },
          { label: "Jewellery", href: "#" },
        ],
      },
    ],
  },
  {
    label: "Journal",
    hasDropdown: true,
    columns: [
      {
        title: "Read",
        items: [
          { label: "All Stories", href: "#" },
          { label: "Style Notes", href: "#" },
          { label: "Lookbooks", href: "#" },
          { label: "Behind the Scenes", href: "#" },
          { label: "Interviews", href: "#" },
          { label: "Runway Reports", href: "#" },
          { label: "Brand Drops", href: "#" },
          { label: "Editor's Letter", href: "#" },
        ],
      },
      {
        title: "Watch",
        items: [
          { label: "Films", href: "#" },
          { label: "Campaigns", href: "#" },
          { label: "Tutorials", href: "#" },
        ],
      },
    ],
  },
  {
    label: "Currency",
    hasDropdown: true,
    columns: [
      {
        title: "Americas",
        items: [
          { label: "USD", href: "#" },
          { label: "CAD", href: "#" },
          { label: "BRL", href: "#" },
          { label: "MXN", href: "#" },
        ],
      },
      {
        title: "Europe",
        items: [
          { label: "EUR", href: "#" },
          { label: "GBP", href: "#" },
          { label: "CHF", href: "#" },
          { label: "SEK", href: "#" },
          { label: "NOK", href: "#" },
        ],
      },
      {
        title: "MENA & Asia",
        items: [
          { label: "AED", href: "#" },
          { label: "SAR", href: "#" },
          { label: "QAR", href: "#" },
          { label: "JPY", href: "#" },
          { label: "KRW", href: "#" },
          { label: "SGD", href: "#" },
          { label: "AUD", href: "#" },
        ],
      },
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
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const textColor = isPastHero ? "text-black" : "text-white";
  const underlineColor = isPastHero ? "before:bg-black" : "before:bg-white";
  const bgColor = isPastHero ? "bg-white" : "bg-transparent";

  const activeLink = navLinks.find((l) => l.label === activeMenu);

  // Lock page scroll when mega menu is open
  useEffect(() => {
    if (activeMenu) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [activeMenu]);

  return (
    <>
      {activeMenu && isPastHero && (
        <div
          className="fixed inset-0 top-10 z-40 bg-black/10 backdrop-blur-[2px]"
          onClick={() => setActiveMenu(null)}
          onMouseEnter={() => setActiveMenu(null)}
        />
      )}
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
          babil
        </a>

        {/* Links block container */}
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
                  {link.label === "Currency" ? selectedCurrency : link.label}
                </a>
              </li>
            ))}

            {/* Saved with live count */}
            <li>
              <a
                href="/saved"
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

          {/* Unified white dropdown */}
          {activeLink && activeLink.columns && (
            <div
              className="absolute top-full -left-4 -right-4 pt-3"
              onMouseEnter={() => setActiveMenu(activeLink.label)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <div className="bg-white border-t border-neutral-100">
                <div className="px-5 pt-3 pb-3">
                  {/* Columns */}
                  <div className="flex gap-16">
                    {activeLink.columns.map((col, ci) => (
                      <div key={ci}>
                        {/* Column title */}
                        <h5 className="text-sm tracking-[1.5px] uppercase font-switzer font-medium text-black mb-3">
                          {col.title}
                        </h5>
                        {/* Column items */}
                        {col.items.map((item, i) =>
                          activeLink.label === "Currency" ? (
                            <button
                              key={i}
                              onClick={() => setSelectedCurrency(item.label)}
                              className="block w-full text-left py-1 text-xs tracking-[1.5px] uppercase font-switzer font-normal text-black hover:text-black/60 transition-colors duration-200"
                            >
                              <span className="flex items-center gap-3">
                                <span
                                  className={`w-1.5 h-1.5 rounded-full transition-all duration-200 flex-shrink-0 ${
                                    selectedCurrency === item.label ? "bg-black" : "bg-transparent"
                                  }`}
                                />
                                {item.label}
                              </span>
                            </button>
                          ) : (
                            <a
                              key={i}
                              href={item.href}
                              className="block py-1 text-xs tracking-[1.5px] uppercase font-switzer font-normal text-black hover:text-black/60 transition-colors duration-200"
                            >
                              {item.label}
                            </a>
                          ),
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
    </>
  );
}
