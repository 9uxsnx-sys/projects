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
      <div className="mb-10">
        <h2 className="text-[clamp(2.5rem,12vw,4rem)] font-switzer font-medium text-black leading-none tracking-[0.01em] select-none">
          CATEGORIES
        </h2>
      </div>

      {/* Category Rows — stacked */}
      <div className="flex flex-col gap-8">
        {categories.map((category) => (
          <div key={category.id} className="flex flex-col">
            {/* Big image */}
            <div className="relative aspect-square overflow-hidden bg-white">
              <img
                src={category.bigImage}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover border border-white"
              />
            </div>

            {/* Row of 2 small images */}
            <div className="grid grid-cols-2">
              {category.smallImages.map((url, i) => (
                <div
                  key={i}
                  className="relative aspect-square overflow-hidden bg-white"
                >
                  <img
                    src={url}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover border border-white"
                  />
                </div>
              ))}
            </div>

            {/* Category title below */}
            <div className="px-2 pt-3">
              <span className="text-black text-[clamp(1.8rem,7vw,3rem)] font-switzer font-medium leading-none tracking-[0.01em] select-none">
                {category.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
