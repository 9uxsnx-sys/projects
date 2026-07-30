"use client";

import React from "react";

const BASE = "/assets/images/categories-new/";

const categories = [
  {
    id: "women-outerwear",
    name: "Women's Outerwear & Blazers",
    bigImage: `${BASE}women-outerwear-big.webp`,
    smallImages: [
      `${BASE}women-outerwear-small-1.webp`,
      `${BASE}women-outerwear-small-2.webp`,
    ],
  },
  {
    id: "blouses-tops",
    name: "Blouses & Tops",
    bigImage: `${BASE}blouses-tops-big.webp`,
    smallImages: [
      `${BASE}blouses-tops-small-1.webp`,
      `${BASE}blouses-tops-small-2.webp`,
    ],
  },
  {
    id: "skirts-matching",
    name: "Skirts & Matching Sets",
    bigImage: `${BASE}skirts-matching-big.webp`,
    smallImages: [
      `${BASE}skirts-matching-small-1.webp`,
      `${BASE}skirts-matching-small-2.webp`,
    ],
  },
  {
    id: "dresses-gowns",
    name: "Dresses & Gowns",
    bigImage: `${BASE}dresses-gowns-big.webp`,
    smallImages: [
      `${BASE}dresses-gowns-small-1.webp`,
      `${BASE}dresses-gowns-small-2.webp`,
    ],
  },
  {
    id: "evening-leisure",
    name: "Evening & Leisure Wear",
    bigImage: `${BASE}evening-leisure-big.webp`,
    smallImages: [
      `${BASE}evening-leisure-small-1.webp`,
      `${BASE}evening-leisure-small-2.webp`,
    ],
  },
  {
    id: "men-outerwear",
    name: "Men's Outerwear & Coats",
    bigImage: `${BASE}men-outerwear-big.webp`,
    smallImages: [
      `${BASE}men-outerwear-small-1.webp`,
      `${BASE}men-outerwear-small-2.webp`,
    ],
  },
];

export default function CategoriesDesktop() {
  return (
    <section className="w-full bg-white pt-16 pb-6 px-1">
      {/* Section Title */}
      <div className="mb-12 flex justify-between items-center">
        <h2 className="text-[clamp(3.5rem,10vw,10rem)] font-switzer font-medium text-black leading-none tracking-[0.01em] select-none">
          CATEGORIES
        </h2>
        <span className="text-black/60 text-[clamp(0.7rem,1.2vw,1rem)] font-switzer font-semibold tracking-[0.15em] uppercase select-none leading-none mr-8 underline underline-offset-4 decoration-[1px]">
          SEE MORE
        </span>
      </div>

      {/* Category Rows — alternating pattern */}
      <div className="flex flex-col">
        {categories.map((category, index) => {
          const bigLeft = index % 2 === 0;
          const big = (
            <div className="relative aspect-square overflow-hidden bg-white group">
              <img
                src={category.bigImage}
                alt={category.name}
                width={800}
                height={800}
                className="absolute inset-0 w-full h-full object-cover outline-1 outline-white outline-offset-[-1px]"
              />
            </div>
          );
          const small = (
            <div className="flex flex-col">
              <div className="grid grid-cols-2">
                {category.smallImages.map((url, i) => (
                  <div
                    key={i}
                    className="relative aspect-square overflow-hidden bg-white group"
                  >
                    <img
                      src={url}
                      alt=""
                      width={800}
                      height={800}
                      className="absolute inset-0 w-full h-full object-cover outline-1 outline-white outline-offset-[-1px]"
                    />
                  </div>
                ))}
              </div>
              {/* Category title below small images */}
              <div className="flex flex-col items-start px-2 py-4">
                <span className="text-black text-[clamp(3rem,7vw,7rem)] font-switzer font-medium leading-[1]">
                  {category.name}
                </span>
              </div>
            </div>
          );
          return (
            <div key={category.id} className="grid grid-cols-2">
              {bigLeft ? (
                <>{big}{small}</>
              ) : (
                <>{small}{big}</>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
