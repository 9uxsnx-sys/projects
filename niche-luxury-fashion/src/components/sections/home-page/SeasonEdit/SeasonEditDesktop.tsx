"use client";

import React from "react";
import ProductCard, { Product } from "@/components/ui/ProductCard/ProductCard";

const products: Product[] = [
  {
    id: 1,
    name: "Whispering Petals Wrap Midi Dress",
    price: "$68.00",
    imageUrl: "/assets/images/season-edit/product-1.jpg",
    href: "/products/whispering-petals-wrap-midi-dress",
  },
  {
    id: 2,
    name: "Meadow Sweetheart Smocked Dress",
    price: "$74.50",
    imageUrl: "/assets/images/season-edit/product-2.jpg",
    href: "/products/meadow-sweetheart-smocked-dress",
  },
  {
    id: 3,
    name: "Countryside Blossom Tiered Sundress",
    price: "$62.00",
    imageUrl: "/assets/images/season-edit/product-3.jpg",
    href: "/products/countryside-blossom-tiered-sundress",
  },
  {
    id: 4,
    name: "Sun-Kissed Linen Tie-Front Mini",
    price: "$56.00",
    imageUrl: "/assets/images/season-edit/product-4.jpg",
    href: "/products/sun-kissed-linen-tie-front-mini",
  },
];

export default function SeasonEditDesktop() {
  return (
    <section className="w-full bg-white pt-24 pb-6 px-1">
      {/* Section Title */}
      <div className="mb-12 flex justify-between items-center">
        <h2 className="text-[clamp(3.5rem,10vw,10rem)] font-switzer font-medium text-black leading-none tracking-[0.01em] select-none">
          Featured
        </h2>
        <span className="text-black/60 text-[clamp(0.7rem,1.2vw,1rem)] font-switzer font-semibold tracking-[0.15em] uppercase select-none leading-none mr-8 underline underline-offset-4 decoration-[1px]">
          SEE MORE
        </span>
      </div>

      {/* Product Grid — single row of 4, full width */}
      <div className="grid grid-cols-4 gap-x-1">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
