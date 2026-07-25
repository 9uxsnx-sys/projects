"use client";

import React from "react";
import ProductCard, { Product } from "@/components/ui/ProductCard/ProductCard";

const IMAGE_BASE =
  "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?image_size=portrait_4_3&prompt=";

const products: Product[] = [
  {
    id: 1,
    name: "Oversized Wool Coat",
    price: "$1,290",
    imageUrl: `${IMAGE_BASE}${encodeURIComponent("luxury oversized wool coat minimalist fashion editorial photography high-end streetwear, solid background")}`,
  },
  {
    id: 2,
    name: "Slim Fit Trousers",
    price: "$450",
    imageUrl: `${IMAGE_BASE}${encodeURIComponent("slim fit tailored trousers luxury fashion editorial photography minimalist, solid background")}`,
  },
  {
    id: 3,
    name: "Leather Bomber Jacket",
    price: "$2,100",
    imageUrl: `${IMAGE_BASE}${encodeURIComponent("luxury leather bomber jacket high-end streetwear fashion editorial minimalist, solid background")}`,
  },
  {
    id: 4,
    name: "Cashmere Rollneck",
    price: "$890",
    imageUrl: `${IMAGE_BASE}${encodeURIComponent("luxury cashmere rollneck sweater minimalist fashion editorial photography, solid background")}`,
  },
  {
    id: 5,
    name: "Wide Leg Denim",
    price: "$520",
    imageUrl: `${IMAGE_BASE}${encodeURIComponent("wide leg denim jeans luxury streetwear fashion editorial minimalist, solid background")}`,
  },
  {
    id: 6,
    name: "Structured Blazer",
    price: "$1,650",
    imageUrl: `${IMAGE_BASE}${encodeURIComponent("luxury structured blazer avant-garde fashion editorial photography minimalist, solid background")}`,
  },
  {
    id: 7,
    name: "Silk Shirt",
    price: "$680",
    imageUrl: `${IMAGE_BASE}${encodeURIComponent("luxury silk shirt minimalist fashion editorial high-end, solid background")}`,
  },
  {
    id: 8,
    name: "Technical Parka",
    price: "$1,440",
    imageUrl: `${IMAGE_BASE}${encodeURIComponent("luxury technical parka jacket high-end streetwear fashion editorial minimalist, solid background")}`,
  },
];

export default function SeasonEditDesktop() {
  return (
    <section className="w-full bg-white pt-24 pb-6 px-1">
      {/* Section Title */}
      <div className="flex items-center justify-between mb-12 pr-10">
        <h2 className="text-[clamp(3rem,8vw,8rem)] font-switzer font-medium text-black leading-none tracking-[0.01em] select-none">
          SELECTION
        </h2>
        <span className="text-xs md:text-sm font-switzer font-medium text-black tracking-[0.15em] uppercase select-none">
          DISCOVER MORE
        </span>
      </div>

      {/* Product Grid — 2 rows of 4, full width */}
      <div className="grid grid-cols-4 gap-x-1 gap-y-12">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
