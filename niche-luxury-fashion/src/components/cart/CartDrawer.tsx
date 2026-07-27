"use client";

import React from "react";
import Link from "next/link";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

export default function CartDrawer() {
  const { items, itemCount, subtotal, isCartOpen, setCartOpen, removeItem, updateQuantity } =
    useCart();

  return (
    <>
      {/* Overlay */}
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-50"
          onClick={() => setCartOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[420px] bg-white z-50 shadow-2xl transition-transform duration-300 ease-out flex flex-col ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-16 pb-4 border-b border-neutral-100 flex-shrink-0">
          <h2 className="text-base font-switzer font-medium text-black tracking-[0.05em] uppercase">
            Bag
            <span className="text-neutral-400 font-normal ml-1">
              ({itemCount})
            </span>
          </h2>
          <button
            onClick={() => setCartOpen(false)}
            className="hover:opacity-60 transition-opacity"
          >
            <X size={18} className="text-neutral-500" />
          </button>
        </div>

        {/* Body */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <ShoppingBag size={40} className="text-neutral-200 mb-4" strokeWidth={1} />
            <p className="text-sm font-switzer font-normal text-neutral-400 mb-6">
              Your bag is empty
            </p>
            <button
              onClick={() => setCartOpen(false)}
              className="text-sm font-switzer font-medium text-black underline underline-offset-4 decoration-[1px] hover:text-neutral-500 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto px-6 py-6">
            <div className="space-y-6">
              {items.map((item) => {
                const key = `${item.id}-${item.size}-${item.color}`;
                return (
                  <div key={key} className="flex gap-4 pb-6 border-b border-neutral-100 last:border-0">
                    {/* Image */}
                    <Link
                      href={`/products/${item.slug}`}
                      onClick={() => setCartOpen(false)}
                      className="w-20 h-[100px] bg-neutral-900 overflow-hidden flex-shrink-0"
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
                            onClick={() => setCartOpen(false)}
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
                            className="px-2 py-1 text-xs text-neutral-400 hover:text-black transition-colors"
                          >
                            <Minus size={12} strokeWidth={1.5} />
                          </button>
                          <span className="w-8 py-1 text-xs font-switzer font-medium text-black text-center select-none">
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
                            className="px-2 py-1 text-xs text-neutral-400 hover:text-black transition-colors"
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
          </div>
        )}

        {/* Footer */}
        {items.length > 0 && (
          <div className="flex-shrink-0 px-6 py-5 border-t border-neutral-100 bg-white">
            <div className="flex items-center justify-between mb-5">
              <span className="text-sm font-switzer font-medium text-black uppercase tracking-[0.05em]">
                Subtotal
              </span>
              <span className="text-base font-switzer font-medium text-black">
                {subtotal}
              </span>
            </div>
            <Link
              href="/checkout"
              onClick={() => setCartOpen(false)}
              className="block w-full py-3.5 text-sm font-switzer font-medium tracking-[0.1em] uppercase bg-[#284468] text-white hover:opacity-90 transition-opacity text-center"
            >
              Checkout
            </Link>
            <p className="mt-3 text-xs font-switzer font-normal text-neutral-400 text-center">
              Free shipping on all orders
            </p>
          </div>
        )}
      </div>
    </>
  );
}
