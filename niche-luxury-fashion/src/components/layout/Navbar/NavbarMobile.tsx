"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useCart } from "@/contexts/CartContext";
import { useSaved } from "@/contexts/SavedContext";

type DropdownItem = { label: string; href: string };
type DropdownColumn = { title: string; items: DropdownItem[] };

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

export default function NavbarMobile({
  isPastHero,
  isVisible,
  overlayOpen,
}: {
  isPastHero: boolean;
  isVisible: boolean;
  overlayOpen?: boolean;
}) {
  const { itemCount, setCartOpen } = useCart();
  const { savedCount } = useSaved();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedLink, setExpandedLink] = useState<string | null>(null);
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const contentRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const forcedShow = isMenuOpen || overlayOpen;
  const textColor = forcedShow ? "text-black" : isPastHero ? "text-black" : "text-white";
  const bgColor = forcedShow ? "bg-white" : isPastHero ? "bg-white" : "bg-transparent";

  const toggleExpanded = (label: string) => {
    setExpandedLink((prev) => {
      // Collapsing: capture current height, then animate to 0
      if (prev === label) {
        const el = contentRefs.current[label];
        if (el) {
          el.style.height = `${el.scrollHeight}px`;
          requestAnimationFrame(() => {
            if (el) el.style.height = "0px";
          });
        }
        return null;
      }
      return label;
    });
  };

  // Expanding: animate from 0 to content height
  useEffect(() => {
    if (!expandedLink) return;
    const el = contentRefs.current[expandedLink];
    if (el) {
      el.style.height = "0px";
      requestAnimationFrame(() => {
        if (el) el.style.height = `${el.scrollHeight}px`;
      });
    }
  }, [expandedLink]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  return (
    <>
      {/* Top bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-[60] h-8 flex items-center ${bgColor} transition-all duration-300 ${forcedShow ? "translate-y-0" : isVisible ? "translate-y-0" : "-translate-y-full"}`}
      >
        <nav className="flex items-center justify-between px-6 w-full">
          {/* Logo - Left — hidden over hero, visible past hero */}
          <a
            href="/"
            className={`${textColor} text-lg font-synonym font-bold select-none transition-all duration-300 ${
              forcedShow ? "opacity-100 pointer-events-auto" : !isPastHero ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            babil
          </a>

          {/* Right: Menu + Saved + Cart */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className={`${textColor} text-[10px] tracking-[1.5px] uppercase font-switzer font-medium transition-colors duration-300`}
            >
              Menu
            </button>
            <Link
              href="/saved"
              className={`${textColor} text-[10px] tracking-[1.5px] uppercase font-switzer font-medium transition-colors duration-300`}
            >
              Saved ({savedCount})
            </Link>
            <Link
              href="/cart"
              className={`${textColor} text-[10px] tracking-[1.5px] uppercase font-switzer font-medium transition-colors duration-300`}
            >
              Cart ({itemCount})
            </Link>
          </div>
        </nav>
      </header>

      {/* Full-screen overlay menu */}
      <div
        className={`fixed inset-x-0 top-8 bottom-0 z-50 bg-white overflow-y-auto scrollbar-hide transition-all duration-300 ease-out ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
          {/* Nav links */}
          <div className="px-6 pt-4 pb-24">
            {navLinks.map((link) => (
              <div key={link.label}>
                {/* Link trigger */}
                <button
                  onClick={() => toggleExpanded(link.label)}
                  className={`w-full flex items-center justify-between py-3 text-xs tracking-[1.5px] uppercase font-switzer font-medium text-black border-b border-neutral-100 transition-colors duration-200 ${
                    expandedLink === link.label ? "border-b-0" : ""
                  }`}
                >
                  <span>{link.label === "Currency" ? selectedCurrency : link.label}</span>
                  {link.hasDropdown && (
                    <span
                      className={`text-base transition-transform duration-200 ${
                        expandedLink === link.label ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  )}
                </button>

                {/* Expanded columns — always mounted, height animated */}
                <div
                  ref={(el) => { contentRefs.current[link.label] = el; }}
                  className="overflow-hidden transition-all duration-500 ease-out"
                  style={{ height: "0px" }}
                >
                  <div className="pb-4 border-b border-neutral-100">
                      {link.columns?.map((col) => (
                        <div key={col.title} className="pt-4">
                          <h5 className="text-[10px] tracking-[1.5px] uppercase font-switzer font-medium text-black/50 mb-2.5">
                            {col.title}
                          </h5>
                          {col.items.map((item) =>
                            link.label === "Currency" ? (
                              <button
                                key={item.label}
                                onClick={() => setSelectedCurrency(item.label)}
                                className="block w-full text-left py-1.5 text-[10px] tracking-[1.5px] uppercase font-switzer font-normal text-black hover:text-black/60 transition-colors duration-200"
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
                                key={item.label}
                                href={item.href}
                                className="block py-1.5 text-[10px] tracking-[1.5px] uppercase font-switzer font-normal text-black hover:text-black/60 transition-colors duration-200"
                                onClick={() => { setIsMenuOpen(false); setExpandedLink(null); }}
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
            ))}

            {/* Saved & Cart at bottom */}
            <div className="mt-2">
              <Link
                href="/saved"
                className="block py-3 text-xs tracking-[1.5px] uppercase font-switzer font-medium text-black border-b border-neutral-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Saved ({savedCount})
              </Link>
              <button
                onClick={() => { setCartOpen(true); setIsMenuOpen(false); setExpandedLink(null); }}
                className="block w-full text-left py-3 text-xs tracking-[1.5px] uppercase font-switzer font-medium text-black border-b border-neutral-100"
              >
                Cart ({itemCount})
              </button>
            </div>
          </div>
        </div>
    </>
  );
}
