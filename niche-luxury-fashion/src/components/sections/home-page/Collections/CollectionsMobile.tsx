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

export default function CollectionsMobile() {
  return (
    <section className="w-full bg-white pt-12 pb-6 px-1">
      {/* Section Title */}
      <div className="mb-8">
        <h2 className="text-[clamp(2.5rem,12vw,4rem)] font-switzer font-medium text-black leading-none tracking-[0.01em] select-none">
          COLLECTIONS
        </h2>
      </div>

      {/* Category List — single column */}
      <div className="flex flex-col gap-4">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
}
