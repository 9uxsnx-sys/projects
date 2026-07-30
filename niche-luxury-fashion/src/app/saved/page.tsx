"use client";

import { useEffect, useRef, useState } from "react";
import NavbarDesktop from "@/components/layout/Navbar/NavbarDesktop";
import NavbarMobile from "@/components/layout/Navbar/NavbarMobile";
import Footer from "@/components/sections/home-page/Footer/Footer";
import ProductCard, { Product } from "@/components/ui/ProductCard/ProductCard";
import { useSaved } from "@/contexts/SavedContext";

/* ─── All products that can be saved ─── */
const allProducts: Product[] = [
  // From data/products.ts (ids 1-4)
  { id: 1, name: "Whispering Petals Wrap Midi Dress", price: "$68.00", imageUrl: "/assets/images/season-edit/product-1.webp", href: "/products/whispering-petals-wrap-midi-dress" },
  { id: 2, name: "Meadow Sweetheart Smocked Dress", price: "$74.50", imageUrl: "/assets/images/season-edit/product-2.webp", href: "/products/meadow-sweetheart-smocked-dress" },
  { id: 3, name: "Countryside Blossom Tiered Sundress", price: "$62.00", imageUrl: "/assets/images/season-edit/product-3.webp", href: "/products/countryside-blossom-tiered-sundress" },
  { id: 4, name: "Sun-Kissed Linen Tie-Front Mini", price: "$56.00", imageUrl: "/assets/images/season-edit/product-4.webp", href: "/products/sun-kissed-linen-tie-front-mini" },
  // From SuggestedProducts (ids 5-8)
  { id: 5, name: "Silk Cowl Neck Blouse", price: "$120.00", imageUrl: "/assets/images/season-edit/product-1.webp" },
  { id: 6, name: "Linen Blend Wide-Leg Trousers", price: "$89.00", imageUrl: "/assets/images/season-edit/product-2.webp" },
  { id: 7, name: "Structured Canvas Tote", price: "$145.00", imageUrl: "/assets/images/season-edit/product-3.webp" },
  { id: 8, name: "Leather Ankle Boots", price: "$210.00", imageUrl: "/assets/images/season-edit/product-4.webp" },
];

export default function SavedPage() {
  const { savedIds, savedCount } = useSaved();
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const prevScrollY = useRef(0);

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024);
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > prevScrollY.current && currentScrollY > 80) {
        setIsVisible(false);
      } else if (currentScrollY < prevScrollY.current) {
        setIsVisible(true);
      }
      prevScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const savedProducts = allProducts.filter((p) => savedIds.includes(p.id));

  return (
    <main>
      {isMobile ? (
        <NavbarMobile isPastHero={true} isVisible={isVisible} />
      ) : (
        <NavbarDesktop isPastHero={true} isVisible={isVisible} />
      )}

      <section className="w-full bg-white min-h-screen pt-24 pb-16 px-1">
        {/* Title */}
        <div className="mb-4 px-5">
          <h1 className="text-[clamp(2.8rem,8vw,8rem)] font-switzer font-medium text-black leading-none tracking-[0.01em] select-none">
            Saved Pieces
          </h1>
        </div>

        {/* Product count */}
        <div className="flex items-center justify-between px-5 mb-8">
          <p className="text-sm font-switzer font-normal text-neutral-400">
            {savedCount} {savedCount === 1 ? "item" : "items"}
          </p>
        </div>

        {/* Product Grid or Empty State */}
        {savedProducts.length > 0 ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-1 gap-y-4">
            {savedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="py-24 text-center px-5">
            <p className="text-sm font-switzer font-normal text-neutral-400">
              Nothing saved yet.
            </p>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}
