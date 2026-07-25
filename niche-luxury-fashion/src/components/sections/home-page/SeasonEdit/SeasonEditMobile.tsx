"use client";

import React from "react";
import ProductCard from "@/components/ui/ProductCard/ProductCard";

const products = [
  {
    id: 1,
    name: "Oversized Wool Coat",
    price: "$1,290",
    imageUrl: `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?image_size=portrait_4_3&prompt=${encodeURIComponent("luxury oversized wool coat minimalist fashion editorial photography high-end streetwear, solid background")}`,
  },
  {
    id: 2,
    name: "Slim Fit Trousers",
    price: "$450",
    imageUrl: `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?image_size=portrait_4_3&prompt=${encodeURIComponent("slim fit tailored trousers luxury fashion editorial photography minimalist, solid background")}`,
  },
  {
    id: 3,
    name: "Leather Bomber Jacket",
    price: "$2,100",
    imageUrl: `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?image_size=portrait_4_3&prompt=${encodeURIComponent("luxury leather bomber jacket high-end streetwear fashion editorial minimalist, solid background")}`,
  },
  {
    id: 4,
    name: "Cashmere Rollneck",
    price: "$890",
    imageUrl: `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?image_size=portrait_4_3&prompt=${encodeURIComponent("luxury cashmere rollneck sweater minimalist fashion editorial photography, solid background")}`,
  },
  {
    id: 5,
    name: "Wide Leg Denim",
    price: "$520",
    imageUrl: `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?image_size=portrait_4_3&prompt=${encodeURIComponent("wide leg denim jeans luxury streetwear fashion editorial minimalist, solid background")}`,
  },
  {
    id: 6,
    name: "Structured Blazer",
    price: "$1,650",
    imageUrl: `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?image_size=portrait_4_3&prompt=${encodeURIComponent("luxury structured blazer avant-garde fashion editorial photography minimalist, solid background")}`,
  },
  {
    id: 7,
    name: "Silk Shirt",
    price: "$680",
    imageUrl: `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?image_size=portrait_4_3&prompt=${encodeURIComponent("luxury silk shirt minimalist fashion editorial high-end, solid background")}`,
  },
  {
    id: 8,
    name: "Technical Parka",
    price: "$1,440",
    imageUrl: `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?image_size=portrait_4_3&prompt=${encodeURIComponent("luxury technical parka jacket high-end streetwear fashion editorial minimalist, solid background")}`,
  },
];

export default function SeasonEditMobile() {
  return (
    <section className="w-full bg-white pt-16 pb-6 px-1">
      {/* Section Title */}
      <div className="flex items-center justify-between mb-8 px-1 pr-10">
        <h2 className="text-[clamp(2.5rem,12vw,4rem)] font-switzer font-medium text-black leading-none tracking-[0.01em] select-none">
          SELECTION
        </h2>
        <span className="text-xs font-switzer font-medium text-black tracking-[0.15em] uppercase select-none">
          DISCOVER MORE
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
