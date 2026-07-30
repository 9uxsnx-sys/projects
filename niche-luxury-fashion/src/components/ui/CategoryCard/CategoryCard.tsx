"use client";

import React from "react";

export type Category = {
  id: number;
  name: string;
  imageUrl: string;
};

export default function CategoryCard({ category }: { category: Category }) {
  return (
    <div className="group cursor-pointer relative w-full pt-[133.33%] bg-neutral-900 overflow-hidden">
      {/* Image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={category.imageUrl}
        alt={category.name}
        loading="lazy"
        width={800}
        height={800}
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* 10% Black Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/10" />

      {/* DISCOVER — bottom-right */}
       <span className="absolute bottom-4 right-4 z-10 text-white text-[clamp(0.75rem,1.5vw,1.25rem)] font-switzer font-light tracking-[0.15em] uppercase select-none">
        DISCOVER
      </span>

      {/* Category name — bottom-left */}
      <div className="absolute bottom-4 left-4 z-10">
        <h3 className="text-white text-[clamp(1.8rem,4vw,3.5rem)] font-switzer font-medium leading-none tracking-[0.01em] uppercase select-none">
          {category.name}
        </h3>
      </div>
    </div>
  );
}
