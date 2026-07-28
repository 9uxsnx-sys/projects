"use client";

import React, { useState, useEffect } from "react";
import ProductCard, { Product } from "@/components/ui/ProductCard/ProductCard";
import { SlidersHorizontal, ArrowUpDown, X, ChevronDown } from "lucide-react";

/* ─── Data ─── */
const listingProducts: Product[] = [
  { id: 1, name: "Whispering Petals Wrap Midi Dress", price: "$68.00", imageUrl: "/assets/images/season-edit/product-1.jpg", href: "/products/whispering-petals-wrap-midi-dress" },
  { id: 2, name: "Meadow Sweetheart Smocked Dress", price: "$74.50", imageUrl: "/assets/images/season-edit/product-2.jpg", href: "/products/meadow-sweetheart-smocked-dress" },
  { id: 3, name: "Countryside Blossom Tiered Sundress", price: "$62.00", imageUrl: "/assets/images/season-edit/product-3.jpg", href: "/products/countryside-blossom-tiered-sundress" },
  { id: 4, name: "Sun-Kissed Linen Tie-Front Mini", price: "$56.00", imageUrl: "/assets/images/season-edit/product-4.jpg", href: "/products/sun-kissed-linen-tie-front-mini" },
];

const colorOptions: { name: string; hex: string }[] = [
  { name: "Black", hex: "#000000" },
  { name: "White", hex: "#ffffff" },
  { name: "Navy", hex: "#284468" },
  { name: "Beige", hex: "#e8dcc8" },
  { name: "Grey", hex: "#8c8c8c" },
  { name: "Burgundy", hex: "#6e1d2e" },
  { name: "Forest", hex: "#2d4a2e" },
  { name: "Camel", hex: "#c19a6b" },
];

const sizeOptions = ["XXS", "XS", "S", "M", "L", "XL", "XXL"];

type SortOption = "newest" | "price-low" | "price-high";

const sortOptions: { value: SortOption; label: string }[] = [
  { value: "newest", label: "Newest" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
];

/* ─── Category data ─── */
type Category = { name: string; slug: string };
type Collection = { name: string; slug: string; categories: Category[] };

const collections: Collection[] = [
  {
    name: "Women",
    slug: "women",
    categories: [
      { name: "Dresses", slug: "dresses" },
      { name: "Blouses & Tops", slug: "blouses-tops" },
      { name: "Trousers & Pants", slug: "trousers-pants" },
      { name: "Outerwear & Coats", slug: "outerwear-coats" },
      { name: "Suits", slug: "suits" },
      { name: "Accessories", slug: "accessories" },
    ],
  },
  {
    name: "Men",
    slug: "men",
    categories: [
      { name: "T-Shirts & Polos", slug: "tshirts-polos" },
      { name: "Shirts", slug: "shirts" },
      { name: "Trousers & Pants", slug: "trousers-pants" },
      { name: "Outerwear & Coats", slug: "outerwear-coats" },
      { name: "Suits", slug: "suits" },
      { name: "Accessories", slug: "accessories" },
    ],
  },
];

export default function ProductListingMobile({
  onFilterChange,
}: {
  onFilterChange?: (open: boolean) => void;
}) {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [expandedCollection, setExpandedCollection] = useState("women");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");
  const [selectedSort, setSelectedSort] = useState<SortOption>("newest");

  const filteredProducts = selectedCategories.length > 0
    ? listingProducts.filter((p) => {
        const catMap: Record<number, string> = {
          1: "dresses", 2: "dresses", 3: "dresses", 4: "dresses",
        };
        return selectedCategories.includes(catMap[p.id]);
      })
    : listingProducts;

  const openOverlay = () => {
    setIsOverlayOpen(true);
    onFilterChange?.(true);
  };

  const closeOverlay = () => {
    setIsOverlayOpen(false);
    onFilterChange?.(false);
  };

  const toggleCategory = (slug: string) => {
    setSelectedCategories((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    );
  };

  const toggleColor = (name: string) => {
    setSelectedColors((prev) =>
      prev.includes(name) ? prev.filter((s) => s !== name) : [...prev, name]
    );
  };

  const toggleSize = (size: string) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  const clearAll = () => {
    setSelectedCategories([]);
    setSelectedColors([]);
    setSelectedSizes([]);
    setPriceMin("");
    setPriceMax("");
  };

  const hasActiveFilters = selectedCategories.length > 0 || selectedColors.length > 0 || selectedSizes.length > 0;

  // Body scroll lock
  useEffect(() => {
    if (isOverlayOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOverlayOpen]);

  return (
    <>
      <section className="w-full bg-white min-h-screen pt-24 pb-16 px-1">
        {/* Title */}
        <div className="mb-4 px-5">
          <h1 className="text-[clamp(3.5rem,10vw,10rem)] font-switzer font-medium text-black leading-none tracking-[0.01em] select-none">
            Ready to Wear
          </h1>
        </div>

        {/* Product count + Filters + Sort by — single row */}
        <div className="flex items-center justify-between px-5 mb-8">
          <p className="text-sm font-switzer font-normal text-neutral-400">
            {filteredProducts.length} products
          </p>
          <div className="flex items-center gap-6">
            <button
              onClick={openOverlay}
              className="flex items-center gap-1.5 text-xs font-switzer font-normal text-black/50 hover:text-black transition-colors"
            >
              <SlidersHorizontal size={12} strokeWidth={1.2} />
              Filters
              {hasActiveFilters && (
                <span className="ml-1 text-[10px] font-switzer font-medium text-black bg-neutral-100 rounded-full w-4 h-4 flex items-center justify-center">
                  {selectedCategories.length + selectedColors.length + selectedSizes.length}
                </span>
              )}
            </button>
            <button
              onClick={openOverlay}
              className="flex items-center gap-1.5 text-xs font-switzer font-normal text-black/50 hover:text-black transition-colors"
            >
              <ArrowUpDown size={12} strokeWidth={1.2} />
              Sort by
            </button>
            {hasActiveFilters && (
              <button
                onClick={clearAll}
                className="text-[10px] font-switzer font-normal text-neutral-400 underline underline-offset-2 hover:text-black transition-colors"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-1 gap-y-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="py-24 text-center px-5">
            <p className="text-sm font-switzer font-normal text-neutral-400 mb-2">No products in this category yet.</p>
            <button onClick={clearAll} className="text-sm font-switzer font-medium text-black underline underline-offset-4 hover:text-neutral-500 transition-colors">
              View all products
            </button>
          </div>
        )}
      </section>

      {/* ─── Filter Overlay (full-screen, below navbar) ─── */}
      <div
        className={`fixed inset-x-0 top-8 bottom-0 z-50 bg-white overflow-y-auto scrollbar-hide transition-all duration-300 ease-out ${
          isOverlayOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Close button */}
        <div className="sticky top-0 z-10 bg-white flex items-center justify-between px-6 py-4 border-b border-neutral-100">
          <h2 className="text-sm font-switzer font-medium text-black tracking-[0.1em] uppercase">Filters</h2>
          <button
            onClick={closeOverlay}
            className="w-8 h-8 rounded-full hover:bg-neutral-50 flex items-center justify-center transition-colors duration-200 text-black -mr-2"
          >
            <X size={16} strokeWidth={1.5} />
          </button>
        </div>

        <div className="px-6 pb-6">
          {/* ─── Category ─── */}
          <div className="py-6 border-b border-neutral-100">
            <h3 className="text-[10px] font-switzer font-medium text-neutral-300 uppercase tracking-[0.15em] mb-4">
              Category
            </h3>
            {collections.map((col) => {
              const isExpanded = expandedCollection === col.slug;
              return (
                <div key={col.slug} className="mb-2 last:mb-0">
                  <button
                    onClick={() => setExpandedCollection(isExpanded ? "" : col.slug)}
                    className="flex items-center justify-between w-full py-2.5 text-xs font-switzer font-medium text-black"
                  >
                    {col.name}
                    <ChevronDown
                      size={12}
                      strokeWidth={1.5}
                      className={`text-neutral-300 transition-transform duration-200 ${
                        isExpanded ? "" : "-rotate-90"
                      }`}
                    />
                  </button>
                  {isExpanded && (
                    <div className="pl-4 mt-1 space-y-1">
                      {col.categories.map((cat) => {
                        const isSel = selectedCategories.includes(cat.slug);
                        return (
                          <button
                            key={cat.slug}
                            onClick={() => toggleCategory(cat.slug)}
                            className="flex items-center gap-3 w-full py-1.5 text-[10px] tracking-[1.5px] uppercase font-switzer font-normal text-black hover:text-black/60 transition-colors"
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full transition-all duration-200 flex-shrink-0 ${
                                isSel ? "bg-black" : "bg-transparent"
                              }`}
                            />
                            {cat.name}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* ─── Colour ─── */}
          <div className="py-6 border-b border-neutral-100">
            <h3 className="text-[10px] font-switzer font-medium text-neutral-300 uppercase tracking-[0.15em] mb-4">
              Colour
            </h3>
            <div className="flex flex-wrap items-baseline gap-x-2 gap-y-2">
              {colorOptions.map((c, i) => {
                const isSel = selectedColors.includes(c.name);
                return (
                  <React.Fragment key={c.name}>
                    {i > 0 && <span className="text-neutral-200 text-xs select-none">·</span>}
                    <button
                      onClick={() => toggleColor(c.name)}
                      className={`text-xs font-switzer transition-all duration-200 pb-0.5 ${
                        isSel
                          ? "text-black border-b border-black font-medium"
                          : "text-neutral-400 border-b border-transparent hover:text-black hover:border-black"
                      }`}
                    >
                      {c.name}
                    </button>
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          {/* ─── Size ─── */}
          <div className="py-6 border-b border-neutral-100">
            <h3 className="text-[10px] font-switzer font-medium text-neutral-300 uppercase tracking-[0.15em] mb-4">
              Size
            </h3>
            <div className="flex flex-wrap items-baseline gap-x-2 gap-y-2">
              {sizeOptions.map((s, i) => {
                const isSel = selectedSizes.includes(s);
                return (
                  <React.Fragment key={s}>
                    {i > 0 && <span className="text-neutral-200 text-xs select-none">·</span>}
                    <button
                      onClick={() => toggleSize(s)}
                      className={`text-xs font-switzer transition-all duration-200 pb-0.5 ${
                        isSel
                          ? "text-black border-b border-black font-medium"
                          : "text-neutral-400 border-b border-transparent hover:text-black hover:border-black"
                      }`}
                    >
                      {s}
                    </button>
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          {/* ─── Price Range ─── */}
          <div className="py-6 border-b border-neutral-100">
            <h3 className="text-[10px] font-switzer font-medium text-neutral-300 uppercase tracking-[0.15em] mb-4">
              Price Range
            </h3>
            <div className="flex items-end gap-3">
              <div className="flex-1">
                <label className="block text-[10px] font-switzer text-neutral-400 mb-2 uppercase tracking-[0.1em]">Min</label>
                <div className="flex items-center border-b border-neutral-200 focus-within:border-black transition-colors pb-1.5">
                  <span className="text-xs text-neutral-400 font-switzer">$</span>
                  <input
                    type="number"
                    value={priceMin}
                    onChange={(e) => setPriceMin(e.target.value)}
                    placeholder="0"
                    className="w-full ml-1 text-xs font-switzer text-black outline-none bg-transparent placeholder:text-neutral-300 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  />
                </div>
              </div>
              <div className="pb-1.5">
                <span className="text-xs text-neutral-300">—</span>
              </div>
              <div className="flex-1">
                <label className="block text-[10px] font-switzer text-neutral-400 mb-2 uppercase tracking-[0.1em]">Max</label>
                <div className="flex items-center border-b border-neutral-200 focus-within:border-black transition-colors pb-1.5">
                  <span className="text-xs text-neutral-400 font-switzer">$</span>
                  <input
                    type="number"
                    value={priceMax}
                    onChange={(e) => setPriceMax(e.target.value)}
                    placeholder="999"
                    className="w-full ml-1 text-xs font-switzer text-black outline-none bg-transparent placeholder:text-neutral-300 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ─── Sort By ─── */}
          <div className="py-6 border-b border-neutral-100">
            <h3 className="text-[10px] font-switzer font-medium text-neutral-300 uppercase tracking-[0.15em] mb-4">
              Sort By
            </h3>
            <div className="space-y-1">
              {sortOptions.map((option) => {
                const isSel = selectedSort === option.value;
                return (
                  <button
                    key={option.value}
                    onClick={() => setSelectedSort(option.value)}
                    className="flex items-center gap-3 w-full py-2 text-[10px] tracking-[1.5px] uppercase font-switzer font-normal text-black hover:text-black/60 transition-colors"
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-200 flex-shrink-0 ${
                        isSel ? "bg-black" : "bg-transparent"
                      }`}
                    />
                    {option.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ─── Clear / Apply ─── */}
          <div className="mt-6 flex items-center gap-3">
            <button
              onClick={() => {
                clearAll();
              }}
              className="flex-1 py-3 text-xs font-switzer font-normal text-neutral-400 border border-neutral-200 hover:border-neutral-400 hover:text-black transition-all"
            >
              Clear
            </button>
            <button
              onClick={closeOverlay}
              className="flex-1 py-3 text-xs font-switzer font-medium text-white bg-black hover:bg-neutral-800 transition-colors"
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
