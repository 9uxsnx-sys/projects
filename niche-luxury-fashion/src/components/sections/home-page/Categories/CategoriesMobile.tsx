"use client";

import React from "react";

const BASE = "/assets/images/categories-new/";

const categories = [
  {
    id: "women-outerwear",
    name: "Women's Outerwear & Blazers",
    bigImage: `${BASE}women-outerwear-big.png`,
    smallImages: [
      `${BASE}women-outerwear-small-1.png`,
      `${BASE}women-outerwear-small-2.png`,
    ],
  },
  {
    id: "blouses-tops",
    name: "Blouses & Tops",
    bigImage: `${BASE}blouses-tops-big.png`,
    smallImages: [
      `${BASE}blouses-tops-small-1.png`,
      `${BASE}blouses-tops-small-2.png`,
    ],
  },
  {
    id: "skirts-matching",
    name: "Skirts & Matching Sets",
    bigImage: `${BASE}skirts-matching-big.png`,
    smallImages: [
      `${BASE}skirts-matching-small-1.png`,
      `${BASE}skirts-matching-small-2.png`,
    ],
  },
  {
    id: "dresses-gowns",
    name: "Dresses & Gowns",
    bigImage: `${BASE}dresses-gowns-big.png`,
    smallImages: [
      `${BASE}dresses-gowns-small-1.png`,
      `${BASE}dresses-gowns-small-2.png`,
    ],
  },
  {
    id: "evening-leisure",
    name: "Evening & Leisure Wear",
    bigImage: `${BASE}evening-leisure-big.png`,
    smallImages: [
      `${BASE}evening-leisure-small-1.png`,
      `${BASE}evening-leisure-small-2.png`,
    ],
  },
  {
    id: "men-outerwear",
    name: "Men's Outerwear & Coats",
    bigImage: `${BASE}men-outerwear-big.png`,
    smallImages: [
      `${BASE}men-outerwear-small-1.png`,
      `${BASE}men-outerwear-small-2.png`,
    ],
  },
];

export default function CategoriesMobile() {
  return (
    <section className="w-full bg-white pt-12 pb-6 px-1">
      {/* Section Title */}
      <div className="mb-10 flex justify-between items-center">
        <h2 className="text-[clamp(2rem,10vw,3.5rem)] font-switzer font-medium text-black leading-none tracking-[0.01em] select-none">
          CATEGORIES
        </h2>
        <span className="text-black/60 text-[clamp(0.7rem,3vw,1rem)] font-switzer font-medium tracking-[0.15em] uppercase select-none leading-none underline underline-offset-4 decoration-[1px]">
          MORE
        </span>
      </div>

      {/* Category Rows — stacked */}
      <div className="flex flex-col gap-8">
        {categories.map((category) => (
          <div key={category.id} className="flex flex-col">
            {/* Big image */}
            <div className="relative aspect-square overflow-hidden bg-neutral-900">
              <img
                src={category.bigImage}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover outline-1 outline-white outline-offset-[-1px]"
              />
            </div>

            {/* Row of 2 small images */}
            <div className="grid grid-cols-2">
              {category.smallImages.map((url, i) => (
                <div
                  key={i}
                  className="relative aspect-square overflow-hidden bg-neutral-900"
                >
                  <img
                    src={url}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover outline-1 outline-white outline-offset-[-1px]"
                  />
                </div>
              ))}
            </div>

            {/* Category title below */}
            <div className="px-2 pt-3 text-center">
              <span className="text-black text-[clamp(2.5rem,6vw,6rem)] font-switzer font-medium leading-[1]">
                {category.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
