"use client";

import React from "react";
import Link from "next/link";
import { Heart } from "lucide-react";
import { useSaved } from "@/contexts/SavedContext";

export type Product = {
  id: number;
  name: string;
  price: string;
  imageUrl: string;
  href?: string;
};

export default function ProductCard({ product }: { product: Product }) {
  const { toggleSave, isSaved } = useSaved();
  const saved = isSaved(product.id);

  const card = (
    <>
      {/* Image container — 3:4 aspect ratio */}
      <div className="relative w-full pt-[133.33%] bg-neutral-900 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.imageUrl}
          alt={product.name}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        {/* Save heart — appears on hover */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleSave(product.id);
          }}
          className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100"
        >
          <Heart
            size={20}
            strokeWidth={1.5}
            className="text-[#0d1b2a]"
            fill={saved ? "#0d1b2a" : "none"}
          />
        </button>
      </div>

      {/* Product info — left-aligned */}
      <div className="mt-3 leading-none">
        <p className="text-base font-switzer font-normal text-neutral-900 tracking-wide">
          {product.name}
        </p>
        <p className="text-base font-switzer font-light text-neutral-600">
          {product.price}
        </p>
      </div>
    </>
  );

  if (product.href) {
    return (
      <Link href={product.href} className="group cursor-pointer block">
        {card}
      </Link>
    );
  }

  return <div className="group cursor-pointer">{card}</div>;
}
