"use client";

import React from "react";
import ProductCard from "@/components/ui/ProductCard/ProductCard";

const products = [
  {
    id: 1,
    name: "Whispering Petals Wrap Midi Dress",
    price: "$68.00",
    imageUrl: "/assets/images/season-edit/product-1.webp",
    href: "/products/whispering-petals-wrap-midi-dress",
  },
  {
    id: 2,
    name: "Meadow Sweetheart Smocked Dress",
    price: "$74.50",
    imageUrl: "/assets/images/season-edit/product-2.webp",
    href: "/products/meadow-sweetheart-smocked-dress",
  },
  {
    id: 3,
    name: "Countryside Blossom Tiered Sundress",
    price: "$62.00",
    imageUrl: "/assets/images/season-edit/product-3.webp",
    href: "/products/countryside-blossom-tiered-sundress",
  },
  {
    id: 4,
    name: "Sun-Kissed Linen Tie-Front Mini",
    price: "$56.00",
    imageUrl: "/assets/images/season-edit/product-4.webp",
    href: "/products/sun-kissed-linen-tie-front-mini",
  },
];

export default function SeasonEditMobile() {
  return (
    <section className="w-full bg-white pt-16 pb-6 px-1">
      {/* Section Title */}
      <div className="mb-8 flex justify-between items-center">
        <h2 className="text-[clamp(2rem,10vw,3.5rem)] font-switzer font-medium text-black leading-none tracking-[0.01em] select-none">
          Featured
        </h2>
        <span className="text-black/60 text-[clamp(0.7rem,3vw,1rem)] font-switzer font-medium tracking-[0.15em] uppercase select-none leading-none underline underline-offset-4 decoration-[1px]">
          MORE
        </span>
      </div>

      {/* Product List — single column */}
      <div className="flex flex-col gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
