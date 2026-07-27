"use client";

import React from "react";
import ProductCard, { Product } from "@/components/ui/ProductCard/ProductCard";

const suggestedProducts: Product[] = [
  {
    id: 5,
    name: "Silk Cowl Neck Blouse",
    price: "$120.00",
    imageUrl: "/assets/images/season-edit/product-1.jpg",
  },
  {
    id: 6,
    name: "Linen Blend Wide-Leg Trousers",
    price: "$89.00",
    imageUrl: "/assets/images/season-edit/product-2.jpg",
  },
  {
    id: 7,
    name: "Structured Canvas Tote",
    price: "$145.00",
    imageUrl: "/assets/images/season-edit/product-3.jpg",
  },
  {
    id: 8,
    name: "Leather Ankle Boots",
    price: "$210.00",
    imageUrl: "/assets/images/season-edit/product-4.jpg",
  },
];

export default function SuggestedProducts() {
  return (
    <section className="w-full bg-white pt-24 pb-16 px-1">
      {/* Section Title */}
      <div className="mb-12 flex justify-between items-center">
        <h2 className="text-[clamp(2.5rem,6vw,6rem)] font-switzer font-medium text-black leading-none tracking-[0.01em] select-none">
          You May Also Like
        </h2>
      </div>

      {/* Product Grid — single row of 4, full width */}
      <div className="grid grid-cols-4 gap-x-1">
        {suggestedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
