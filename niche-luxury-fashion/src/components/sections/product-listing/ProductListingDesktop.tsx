"use client";

import React, { useState, useEffect, useRef } from "react";
import ProductCard, { Product } from "@/components/ui/ProductCard/ProductCard";
import { products as detailProducts } from "@/data/products";
import { X, SlidersHorizontal, ChevronDown } from "lucide-react";

/* ─── Listing data ─── */
const listingProducts: Product[] = detailProducts.map((p) => ({
  id: p.id,
  name: p.name,
  price: p.price,
  imageUrl: p.images[0],
  href: `/products/${p.slug}`,
}));

type SortOption = "newest" | "price-low" | "price-high";

const sortOptions: { value: SortOption; label: string }[] = [
  { value: "newest", label: "Newest" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
];

const allSizes = ["XS", "S", "M", "L", "XL"];
const allColors = [
  { name: "Ivory", hex: "#F5F0E8" },
  { name: "Blush", hex: "#E8C4C0" },
  { name: "Sage", hex: "#B8C4B0" },
  { name: "Navy", hex: "#284468" },
];

export default function ProductListingDesktop() {
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState<SortOption>("newest");
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);

  const sortRef = useRef<HTMLDivElement>(null);

  /* Close sort dropdown on outside click */
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (sortRef.current && !sortRef.current.contains(e.target as Node)) {
        setSortOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  /* Lock body scroll when filter drawer is open */
  useEffect(() => {
    if (filterOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [filterOpen]);

  const toggleSize = (size: string) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size],
    );
  };

  const toggleColor = (color: string) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color],
    );
  };

  const clearFilters = () => {
    setSelectedSizes([]);
    setSelectedColors([]);
  };

  const hasActiveFilters = selectedSizes.length > 0 || selectedColors.length > 0;

  return (
    <>
      {/* ─── Filter Drawer Overlay ─── */}
      {filterOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={() => setFilterOpen(false)}
        />
      )}

      {/* ─── Filter Drawer ─── */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white z-50 shadow-2xl transition-transform duration-300 ease-out ${
          filterOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-16 pb-4 border-b border-neutral-100">
          <h3 className="text-lg font-switzer font-medium text-black">
            Filters
          </h3>
          <button
            onClick={() => setFilterOpen(false)}
            className="hover:opacity-60 transition-opacity"
          >
            <X size={18} className="text-neutral-500" />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-6 overflow-y-auto h-[calc(100%-170px)]">
          {/* ── Size ── */}
          <div className="mb-10">
            <h4 className="text-xs font-switzer font-medium text-black tracking-[0.1em] uppercase mb-4">
              Size
            </h4>
            <div className="flex flex-wrap gap-2">
              {allSizes.map((size) => (
                <button
                  key={size}
                  onClick={() => toggleSize(size)}
                  className={`w-12 h-10 text-sm font-switzer font-medium border transition-all duration-200 ${
                    selectedSizes.includes(size)
                      ? "bg-[#284468] text-white border-[#284468]"
                      : "bg-white text-black border-neutral-200 hover:border-neutral-400"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* ── Color ── */}
          <div className="mb-10">
            <h4 className="text-xs font-switzer font-medium text-black tracking-[0.1em] uppercase mb-4">
              Color
            </h4>
            <div className="flex flex-wrap gap-3">
              {allColors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => toggleColor(color.name)}
                  className={`w-8 h-8 rounded-full border-2 transition-all duration-200 ${
                    selectedColors.includes(color.name)
                      ? "scale-110"
                      : "border-neutral-200 hover:border-neutral-400"
                  }`}
                  style={{
                    backgroundColor: color.hex,
                    ...(selectedColors.includes(color.name)
                      ? { borderColor: color.hex }
                      : {}),
                  }}
                  title={color.name}
                />
              ))}
            </div>
          </div>

          {/* ── Price Range ── */}
          <div className="mb-10">
            <h4 className="text-xs font-switzer font-medium text-black tracking-[0.1em] uppercase mb-4">
              Price Range
            </h4>
            <div className="space-y-4">
              {[
                { label: "Under $50", value: "under-50" },
                { label: "$50 – $100", value: "50-100" },
                { label: "Over $100", value: "over-100" },
              ].map((range) => (
                <label
                  key={range.value}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <input
                    type="radio"
                    name="price"
                    value={range.value}
                    defaultChecked={range.value === "50-100"}
                    className="accent-[#284468] w-4 h-4"
                  />
                  <span className="text-sm font-switzer font-normal text-neutral-600 group-hover:text-black transition-colors">
                    {range.label}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 px-6 py-5 border-t border-neutral-100 bg-white">
          <button
            onClick={clearFilters}
            className="w-full py-3 text-sm font-switzer font-medium text-neutral-400 hover:text-black underline underline-offset-4 transition-colors"
          >
            Clear all filters
          </button>
        </div>
      </div>

      {/* ─── Main Content ─── */}
      <section className="bg-white min-h-screen">
        <div className="px-1 pb-24">
          {/* Top Bar */}
          <div className="flex items-end justify-between pt-24 pb-0">
            <h1 className="text-[clamp(3.5rem,10vw,10rem)] font-switzer font-medium text-black leading-none tracking-[0.01em] select-none">
              Dresses
            </h1>
            <div className="flex items-center gap-8 pb-2">
              {/* Filter Trigger */}
              <button
                onClick={() => setFilterOpen(true)}
                className="flex items-center gap-2 text-sm font-switzer font-normal text-black/50 hover:text-black transition-colors"
              >
                <SlidersHorizontal size={15} strokeWidth={1.2} />
                Filter
                {hasActiveFilters && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#284468]" />
                )}
              </button>

              {/* Sort Trigger */}
              <div className="relative" ref={sortRef}>
                <button
                  onClick={() => setSortOpen((prev) => !prev)}
                  className="flex items-center gap-1.5 text-sm font-switzer font-normal text-black/50 hover:text-black transition-colors"
                >
                  Sort by
                  <ChevronDown
                    size={14}
                    strokeWidth={1.2}
                    className={`transition-transform duration-200 ${
                      sortOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {sortOpen && (
                  <div className="absolute right-0 top-full mt-3 w-48 bg-white border border-neutral-200 shadow-xl z-30">
                    {sortOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => {
                          setSelectedSort(option.value);
                          setSortOpen(false);
                        }}
                        className={`w-full text-left px-5 py-3.5 text-sm font-switzer transition-colors ${
                          selectedSort === option.value
                            ? "text-black bg-neutral-50"
                            : "text-neutral-500 hover:text-black hover:bg-neutral-50"
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Product Count */}
          <p className="mt-6 mb-10 text-sm font-switzer font-normal text-neutral-400">
            {listingProducts.length} products
          </p>

          {/* Product Grid */}
          <div className="grid grid-cols-4 gap-x-1 gap-y-14">
            {listingProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
