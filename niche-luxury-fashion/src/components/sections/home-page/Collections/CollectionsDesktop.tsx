"use client";

import React from "react";
import CategoryCard from "@/components/ui/CategoryCard/CategoryCard";

const categories = [
  {
    id: 1,
    name: "Men",
    imageUrl: "/assets/images/categories/men.jpg",
  },
  {
    id: 2,
    name: "Women",
    imageUrl: "/assets/images/categories/women.jpg",
  },
  {
    id: 3,
    name: "Accessories",
    imageUrl: "/assets/images/categories/accessories.jpg",
  },
];

export default function CollectionsDesktop() {
  return (
    <section className="w-full bg-white pt-16 pb-6 px-1">
      {/* Section Title */}
      <div className="mb-12">
        <h2 className="text-[clamp(2.5rem,8vw,8rem)] font-switzer font-medium text-black leading-none tracking-[0.01em] select-none">
          COLLECTIONS
        </h2>
      </div>

      {/* Category Grid — 3 columns */}
      <div className="grid grid-cols-3 gap-1">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
}
