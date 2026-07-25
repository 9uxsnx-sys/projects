"use client";

import React from "react";

const IMAGE_BASE =
  "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?image_size=square_hd&prompt=";

const categories = [
  {
    id: "men",
    name: "Men",
    bigImage: `${IMAGE_BASE}${encodeURIComponent("luxury menswear editorial fashion photography avant-garde minimalist, solid background")}`,
    smallImages: [
      `${IMAGE_BASE}${encodeURIComponent("luxury tailored suit jacket mens fashion editorial minimalist, solid background")}`,
      `${IMAGE_BASE}${encodeURIComponent("luxury men streetwear look fashion editorial minimalist, solid background")}`,
    ],
  },
  {
    id: "women",
    name: "Women",
    bigImage: `${IMAGE_BASE}${encodeURIComponent("luxury womenswear editorial fashion photography avant-garde minimalist, solid background")}`,
    smallImages: [
      `${IMAGE_BASE}${encodeURIComponent("luxury women evening gown fashion editorial minimalist, solid background")}`,
      `${IMAGE_BASE}${encodeURIComponent("luxury women streetwear look fashion editorial minimalist, solid background")}`,
    ],
  },
  {
    id: "accessories",
    name: "Accessories",
    bigImage: `${IMAGE_BASE}${encodeURIComponent("luxury accessories editorial fashion photography avant-garde minimalist, solid background")}`,
    smallImages: [
      `${IMAGE_BASE}${encodeURIComponent("luxury leather bag fashion editorial minimalist, solid background")}`,
      `${IMAGE_BASE}${encodeURIComponent("luxury sunglasses fashion editorial minimalist, solid background")}`,
    ],
  },
];

export default function CategoriesMobile() {
  return (
    <section className="w-full bg-white pt-12 pb-6 px-1">
      {/* Section Title */}
      <div className="mb-8">
        <h2 className="text-[clamp(2.5rem,12vw,4rem)] font-switzer font-medium text-black leading-none tracking-[0.01em] select-none">
          CATEGORIES
        </h2>
      </div>

      {/* Category Rows */}
      <div className="flex flex-col gap-8">
        {categories.map((category) => (
          <div key={category.id} className="flex flex-col gap-1">
            {/* Big image */}
            <div className="relative aspect-square overflow-hidden bg-neutral-900">
              <img
                src={category.bigImage}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3 z-10">
                <span className="text-white text-sm font-switzer font-medium tracking-[0.15em] uppercase">
                  {category.name}
                </span>
              </div>
            </div>

            {/* Row of 2 small images */}
            <div className="grid grid-cols-2 gap-1">
              {category.smallImages.map((url, i) => (
                <div
                  key={i}
                  className="relative aspect-square overflow-hidden bg-neutral-900"
                >
                  <img
                    src={url}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
