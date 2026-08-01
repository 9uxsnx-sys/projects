"use client";

import React, { useState } from "react";
import type { ProductDetail } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { useSaved } from "@/contexts/SavedContext";
import { Heart } from "lucide-react";

export default function ProductDetailDesktop({
  product,
}: {
  product: ProductDetail;
}) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string>("Ivory");
  const [quantity, setQuantity] = useState(1);
  const { addItem, setCartOpen } = useCart();
  const { toggleSave, isSaved } = useSaved();
  const saved = isSaved(product.id);

  const sizeColors: Record<string, string> = {
    XS: "#000000",
    S: "#000000",
    M: "#000000",
    L: "#000000",
    XL: "#000000",
  };
  const navyColor = "#000000";

  return (
    <section className="bg-white">
      <div className="flex">
        {/* ─── Left: Images ─── */}
        <div className="w-1/2">
          <div className="flex flex-col">
            {product.images.map((src, i) => (
              <div
                key={i}
                className="relative w-full pt-[133.33%] bg-neutral-900 overflow-hidden"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt={`${product.name} — view ${i + 1}`}
                    className="absolute inset-0 w-full h-full object-cover outline-1 outline-white outline-offset-[-1px]"
                  />
              </div>
            ))}
          </div>
        </div>

        {/* ─── Right: Sticky Info ─── */}
        <div className="w-1/2">
          <div className="sticky top-0 min-h-screen flex flex-col pt-20 pb-8 pl-12 pr-32">
            {/* Top section — product identity (fixed, never shrinks) */}
            <div className="flex-shrink-0">
              {/* Product name */}
              <h1 className="text-[clamp(1.5rem,2.5vw,2.5rem)] font-zodiak font-medium text-black leading-[1.1] tracking-[0.01em]">
                {product.name}
              </h1>

              {/* Price + Save */}
              <div className="flex items-center justify-between mt-4">
                <div>
                  <p className="text-2xl font-switzer font-medium text-neutral-600">
                    {product.price}
                  </p>
                  <p className="mt-1 text-xs font-switzer font-normal text-neutral-400">
                    + tax. Free shipping on all orders.
                  </p>
                </div>
                <button
                  onClick={() => toggleSave(product.id)}
                  className="w-9 h-9 flex items-center justify-center"
                >
                  <Heart
                    size={18}
                    strokeWidth={1.2}
                    className={saved ? "fill-[#0d1b2a] stroke-[#0d1b2a]" : "text-neutral-600 stroke-neutral-600 hover:stroke-black transition-colors"}
                  />
                </button>
              </div>

              {/* Description — always visible */}
              <p className="mt-5 text-sm font-switzer font-normal text-neutral-600 leading-relaxed">
                {product.description}
              </p>

              {/* ─── Divider ─── */}
              <div className="w-full h-px bg-neutral-200 my-8" />

              {/* ─── Color Selector ─── */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-switzer font-medium text-black tracking-[0.05em] uppercase">
                    Color
                  </span>
                  <span className="text-xs font-switzer font-normal text-neutral-500">
                    {selectedColor}
                  </span>
                </div>
                <div className="flex gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`w-8 h-8 border-2 transition-all duration-200 ${
                        selectedColor === color.name
                          ? "scale-110"
                          : "border-neutral-200 hover:border-neutral-400"
                      }`}
                      style={{
                        backgroundColor: color.hex,
                        ...(selectedColor === color.name
                          ? { borderColor: color.hex }
                          : {}),
                      }}
                      aria-label={color.name}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>

              {/* ─── Size Selector ─── */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-switzer font-medium text-black tracking-[0.05em] uppercase">
                    Size
                  </span>
                  <button className="text-xs font-switzer font-normal text-neutral-500 underline underline-offset-2 decoration-[1px]">
                    Size Guide
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-11 h-11 flex items-center justify-center text-xs font-switzer font-medium border transition-all duration-200 bg-white text-black border-neutral-300`}
                      style={
                        selectedSize === size
                          ? { backgroundColor: sizeColors[size], borderColor: sizeColors[size], color: "#ffffff" }
                          : {}
                      }
                      onMouseEnter={(e) => {
                        if (selectedSize !== size) {
                          e.currentTarget.style.borderColor = navyColor;
                          e.currentTarget.style.color = navyColor;
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (selectedSize !== size) {
                          e.currentTarget.style.borderColor = "";
                          e.currentTarget.style.color = "";
                        }
                      }}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* ─── Quantity + Add to Cart ─── */}
              <div className="flex gap-3">
                {/* Quantity */}
                <div className="flex items-center border border-neutral-200">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2.5 text-sm font-switzer font-medium text-black/60 hover:text-black transition-colors select-none"
                  >
                    −
                  </button>
                  <span className="w-10 py-2.5 text-sm font-switzer font-medium text-black text-center select-none">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2.5 text-sm font-switzer font-medium text-black/60 hover:text-black transition-colors select-none"
                  >
                    +
                  </button>
                </div>

                {/* Add to Cart */}
                <button
                  onClick={() => {
                    if (!selectedSize) return;
                    addItem({
                      id: product.id,
                      slug: product.slug,
                      name: product.name,
                      price: product.price,
                      priceValue: parseFloat(product.price.replace("$", "")),
                      imageUrl: product.images[0],
                      size: selectedSize,
                      color: selectedColor,
                    });
                    setCartOpen(true);
                    setSelectedSize(null);
                    setSelectedColor(product.colors[0]?.name || "Ivory");
                  }}
                  className={`flex-1 py-2.5 text-sm font-switzer font-medium tracking-[0.1em] uppercase transition-all duration-300 ${
                    selectedSize
                      ? "bg-black text-white border border-black hover:bg-white hover:text-black"
                      : "bg-neutral-200 text-neutral-500 cursor-not-allowed"
                  }`}
                  disabled={!selectedSize}
                >
                  Add to Cart
                </button>
              </div>
              {!selectedSize && (
                <p className="mt-2 text-xs font-switzer font-normal text-neutral-400">
                  Please select a size to add to cart
                </p>
              )}
            </div>

            {/* ─── Fixed spacer ─── */}
            <div className="flex-shrink-0 h-20" />

            {/* Bottom section — accordion-style info */}
            <div className="space-y-0">
              {/* Details */}
              <details className="accordion-item group border-t border-neutral-200 py-4">
                <summary className="flex items-center justify-between cursor-pointer list-none text-xs font-switzer font-medium text-black tracking-[0.05em] uppercase">
                  Details
                  <span className="text-neutral-400 text-2xl group-open:rotate-45 transition-transform duration-300 select-none leading-none">
                    +
                  </span>
                </summary>
                <ul className="mt-3 space-y-2">
                  {product.details.map((detail, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm font-switzer font-normal text-neutral-600 leading-relaxed"
                    >
                      <span className="w-1 h-1 rounded-full bg-neutral-400 mt-[7px] flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </details>

              {/* Size & Fit */}
              <details className="accordion-item group border-t border-neutral-200 py-4">
                <summary className="flex items-center justify-between cursor-pointer list-none text-xs font-switzer font-medium text-black tracking-[0.05em] uppercase">
                  Size &amp; Fit
                  <span className="text-neutral-400 text-2xl group-open:rotate-45 transition-transform duration-300 select-none leading-none">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm font-switzer font-normal text-neutral-600 leading-relaxed">
                  {product.sizeFit}
                </p>
              </details>

              {/* Material & Care */}
              <details className="accordion-item group border-t border-neutral-200 py-4">
                <summary className="flex items-center justify-between cursor-pointer list-none text-xs font-switzer font-medium text-black tracking-[0.05em] uppercase">
                  Material &amp; Care
                  <span className="text-neutral-400 text-2xl group-open:rotate-45 transition-transform duration-300 select-none leading-none">
                    +
                  </span>
                </summary>
                <div className="mt-3 space-y-2">
                  <p className="text-sm font-switzer font-normal text-neutral-600 leading-relaxed">
                    <span className="font-medium text-black">Material:</span>{" "}
                    {product.material}
                  </p>
                  <p className="text-sm font-switzer font-normal text-neutral-600 leading-relaxed">
                    <span className="font-medium text-black">Care:</span>{" "}
                    {product.care}
                  </p>
                </div>
              </details>

              {/* Shipping & Returns */}
              <details className="accordion-item group border-t border-neutral-200 py-4">
                <summary className="flex items-center justify-between cursor-pointer list-none text-xs font-switzer font-medium text-black tracking-[0.05em] uppercase">
                  Shipping &amp; Returns
                  <span className="text-neutral-400 text-2xl group-open:rotate-45 transition-transform duration-300 select-none leading-none">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm font-switzer font-normal text-neutral-600 leading-relaxed">
                  {product.shipping}
                </p>
              </details>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
