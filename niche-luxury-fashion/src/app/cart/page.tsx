"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import NavbarDesktop from "@/components/layout/Navbar/NavbarDesktop";
import NavbarMobile from "@/components/layout/Navbar/NavbarMobile";
import Footer from "@/components/sections/home-page/Footer/Footer";

export default function CartPage() {
  const { items, itemCount, subtotal, removeItem, updateQuantity } = useCart();
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

  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* Navbar */}
      {isMobile ? (
        <NavbarMobile isPastHero={true} isVisible={isVisible} />
      ) : (
        <NavbarDesktop isPastHero={true} isVisible={isVisible} />
      )}

      {/* Page content */}
      <div className="flex-1 pt-20 pb-12 px-6 max-w-2xl mx-auto w-full">
        {/* Header */}
        <div className="pb-6 border-b border-neutral-100">
          <h1 className="text-xl font-switzer font-medium text-black tracking-[0.05em] uppercase">
            Bag
            <span className="text-neutral-400 font-normal ml-1">
              ({itemCount})
            </span>
          </h1>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <ShoppingBag size={48} className="text-neutral-200 mb-4" strokeWidth={1} />
            <p className="text-sm font-switzer font-normal text-neutral-400 mb-6">
              Your bag is empty
            </p>
            <Link
              href="/"
              className="text-sm font-switzer font-medium text-black underline underline-offset-4 decoration-[1px] hover:text-neutral-500 transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            {/* Items */}
            <div className="py-6 space-y-6">
              {items.map((item) => {
                const key = `${item.id}-${item.size}-${item.color}`;
                return (
                  <div key={key} className="flex gap-4 pb-6 border-b border-neutral-100 last:border-0">
                    {/* Image */}
                    <Link
                      href={`/products/${item.slug}`}
                      className="w-24 h-[120px] bg-neutral-900 overflow-hidden flex-shrink-0"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </Link>

                    {/* Details */}
                    <div className="flex-1 flex flex-col justify-between min-w-0">
                      <div>
                        {/* Name + Remove */}
                        <div className="flex justify-between items-start gap-2">
                          <Link
                            href={`/products/${item.slug}`}
                            className="text-sm font-switzer font-medium text-black leading-tight hover:text-neutral-500 transition-colors truncate"
                          >
                            {item.name}
                          </Link>
                          <button
                            onClick={() => removeItem(item.id, item.size, item.color)}
                            className="text-neutral-300 hover:text-neutral-500 transition-colors flex-shrink-0 mt-0.5"
                          >
                            <X size={14} strokeWidth={1.5} />
                          </button>
                        </div>

                        {/* Size + Color */}
                        <p className="mt-1 text-xs font-switzer font-normal text-neutral-400">
                          {item.size} / {item.color}
                        </p>
                      </div>

                      {/* Bottom row: qty + price */}
                      <div className="flex items-center justify-between mt-2">
                        {/* Quantity */}
                        <div className="flex items-center border border-neutral-200">
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.id,
                                item.size,
                                item.color,
                                item.quantity - 1,
                              )
                            }
                            className="px-2.5 py-1.5 text-xs text-neutral-400 hover:text-black transition-colors"
                          >
                            <Minus size={12} strokeWidth={1.5} />
                          </button>
                          <span className="w-8 py-1.5 text-xs font-switzer font-medium text-black text-center select-none">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.id,
                                item.size,
                                item.color,
                                item.quantity + 1,
                              )
                            }
                            className="px-2.5 py-1.5 text-xs text-neutral-400 hover:text-black transition-colors"
                          >
                            <Plus size={12} strokeWidth={1.5} />
                          </button>
                        </div>

                        {/* Price */}
                        <p className="text-sm font-switzer font-medium text-black">
                          ${(item.priceValue * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Summary */}
            <div className="pt-6 border-t border-neutral-100">
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm font-switzer font-medium text-black uppercase tracking-[0.05em]">
                  Subtotal
                </span>
                <span className="text-base font-switzer font-medium text-black">
                  {subtotal}
                </span>
              </div>
              <Link
                href="/checkout"
                className="block w-full py-3 text-sm font-switzer font-medium tracking-[0.1em] uppercase bg-black text-white hover:opacity-80 transition-opacity text-center"
              >
                Checkout
              </Link>
              <p className="mt-3 text-xs font-switzer font-normal text-neutral-400 text-center">
                Free shipping on all orders
              </p>
            </div>
          </>
        )}
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
