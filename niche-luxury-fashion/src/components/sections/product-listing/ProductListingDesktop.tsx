"use client";

import React, { useState, useEffect } from "react";
import ProductCard, { Product } from "@/components/ui/ProductCard/ProductCard";
import { ArrowUpDown, ChevronDown, SlidersHorizontal, X } from "lucide-react";

/* ─── Color data ─── */
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

/* ─── Collection / Category data ─── */
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

/* ─── Product data with category mapping ─── */
type ListingProduct = Product & { categorySlug: string };

const listingProducts: ListingProduct[] = [
  { id: 1, name: "Whispering Petals Wrap Midi Dress", price: "$68.00", imageUrl: "/assets/images/season-edit/product-1.jpg", href: "/products/whispering-petals-wrap-midi-dress", categorySlug: "dresses" },
  { id: 2, name: "Meadow Sweetheart Smocked Dress", price: "$74.50", imageUrl: "/assets/images/season-edit/product-2.jpg", href: "/products/meadow-sweetheart-smocked-dress", categorySlug: "dresses" },
  { id: 3, name: "Countryside Blossom Tiered Sundress", price: "$62.00", imageUrl: "/assets/images/season-edit/product-3.jpg", href: "/products/countryside-blossom-tiered-sundress", categorySlug: "dresses" },
  { id: 4, name: "Sun-Kissed Linen Tie-Front Mini", price: "$56.00", imageUrl: "/assets/images/season-edit/product-4.jpg", href: "/products/sun-kissed-linen-tie-front-mini", categorySlug: "dresses" },
];

function getCategoryCount(slug: string) {
  return listingProducts.filter((p) => p.categorySlug === slug).length;
}

type SortOption = "newest" | "price-low" | "price-high";

const sortOptions: { value: SortOption; label: string }[] = [
  { value: "newest", label: "Newest" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
];

const sortLabels: Record<SortOption, string> = {
  newest: "Newest",
  "price-low": "Price: Low to High",
  "price-high": "Price: High to Low",
};

export default function ProductListingDesktop() {
  const [selectedSort, setSelectedSort] = useState<SortOption>("newest");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [expandedCollection, setExpandedCollection] = useState<string>("women");
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");

  /* ── Body scroll lock when drawer is open ── */
  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  const filteredProducts = selectedCategories.length > 0
    ? listingProducts.filter((p) => selectedCategories.includes(p.categorySlug))
    : listingProducts;

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

  const clearSelection = () => {
    setSelectedCategories([]);
    setSelectedColors([]);
    setSelectedSizes([]);
  };
  const hasActiveCategory = selectedCategories.length > 0;

  const openDrawer = () => setDrawerOpen(true);
  const closeDrawer = () => setDrawerOpen(false);

  return (
    <section className="bg-white min-h-screen relative">
      <div className="px-1 pb-24">
        {/* ─── Top Bar ─── */}
        <div className="flex items-end justify-between pt-24 pb-0">
          <h1 className="text-[clamp(3.5rem,10vw,10rem)] font-switzer font-medium text-black leading-none tracking-[0.01em] select-none">
            Ready to Wear
          </h1>
          <div className="flex items-center gap-6 pb-2 pr-8">
            <button
              onClick={openDrawer}
              className="flex items-center gap-1.5 text-sm font-switzer font-normal text-black/50 hover:text-black transition-colors"
            >
              <SlidersHorizontal size={14} strokeWidth={1.2} />
              Filters
              {hasActiveCategory && (
                <span className="text-neutral-300 mx-0.5">·</span>
              )}
              {hasActiveCategory && (
                <span className="text-black/70">{selectedCategories.length}</span>
              )}
            </button>
            <button
              onClick={openDrawer}
              className="flex items-center gap-1.5 text-sm font-switzer font-normal text-black/50 hover:text-black transition-colors"
            >
              <ArrowUpDown size={14} strokeWidth={1.2} />
              Sort by
            </button>
          </div>
        </div>

        {/* ─── Product Count ─── */}
        <div className="flex items-center gap-4 mb-10">
          <p className="text-sm font-switzer font-normal text-neutral-400">
            {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"}
          </p>
          {hasActiveCategory && (
            <button
              onClick={clearSelection}
              className="text-xs font-switzer font-normal text-neutral-400 underline underline-offset-2 hover:text-black transition-colors"
            >
              Clear
            </button>
          )}
        </div>

        {/* ─── Product Grid ─── */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-4 gap-x-1 gap-y-14">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="py-24 text-center">
            <p className="text-sm font-switzer font-normal text-neutral-400 mb-2">No products in this category yet.</p>
            <button onClick={clearSelection} className="text-sm font-switzer font-medium text-black underline underline-offset-4 hover:text-neutral-500 transition-colors">
              View all products
            </button>
          </div>
        )}
      </div>

      {/* ─── Drawer Overlay ─── */}
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 transition-opacity duration-300"
          onClick={closeDrawer}
        />
      )}

      {/* ─── Filter Drawer (30% width, right-slide) ─── */}
      <div
        className={`fixed top-0 right-0 h-full bg-white z-50 shadow-2xl transition-transform duration-300 ease-in-out ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ width: "30vw", minWidth: "340px", maxWidth: "500px" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-neutral-100">
          <h2 className="text-sm font-switzer font-medium text-black tracking-[0.1em] uppercase">Filters</h2>
          <button
            onClick={closeDrawer}
            className="w-8 h-8 flex items-center justify-center text-neutral-400 hover:text-black transition-colors rounded-full hover:bg-neutral-50"
          >
            <X size={16} strokeWidth={1.5} />
          </button>
        </div>

        {/* Scrollable content */}
        <div className="overflow-y-auto h-[calc(100%-90px)] px-8 py-8 custom-scrollbar">
          {/* ─── Category Section ─── */}
          <div className="mb-10">
            <h3 className="text-[10px] font-switzer font-medium text-neutral-300 uppercase tracking-[0.15em] mb-6">
              Category
            </h3>

            {collections.map((col) => {
              const isExpanded = expandedCollection === col.slug;
              const totalInCol = col.categories.reduce((sum, cat) => sum + getCategoryCount(cat.slug), 0);

              return (
                <div key={col.slug} className="mb-3 last:mb-0">
                  <button
                    onClick={() => setExpandedCollection(isExpanded ? "" : col.slug)}
                    className="flex items-center justify-between w-full py-3 text-sm font-switzer font-medium text-black border-b border-neutral-100 hover:border-neutral-300 transition-colors"
                  >
                    {col.name}
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-switzer font-normal text-neutral-300">{totalInCol}</span>
                      <ChevronDown
                        size={12}
                        strokeWidth={1.5}
                        className={`text-neutral-300 transition-transform duration-200 ${
                          isExpanded ? "" : "-rotate-90"
                        }`}
                      />
                    </div>
                  </button>

                  {/* Sub-categories */}
                  <div
                    className={`overflow-hidden transition-all duration-200 ${
                      isExpanded ? "max-h-96 opacity-100 mt-0.5" : "max-h-0 opacity-0"
                    }`}
                  >
                    {col.categories.map((cat) => {
                      const count = getCategoryCount(cat.slug);
                      const isSel = selectedCategories.includes(cat.slug);
                      const clickable = count > 0;
                      return (
                        <button
                          key={cat.slug}
                          onClick={() => {
                            if (!clickable && !isSel) return;
                            toggleCategory(cat.slug);
                          }}
                          className={`w-full flex items-center justify-between px-4 py-2.5 text-sm font-switzer transition-colors rounded-sm ${
                            isSel
                              ? "text-black font-medium"
                              : clickable
                                ? "text-neutral-400 hover:text-black"
                                : "text-neutral-200 cursor-default"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span
                              className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                                isSel ? "bg-black" : "bg-transparent"
                              }`}
                            />
                            {cat.name}
                          </div>
                          <span className="text-[11px] font-switzer font-normal text-neutral-300">{count}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* ─── Color Section ─── */}
          <div className="mb-10">
            <h3 className="text-[10px] font-switzer font-medium text-neutral-300 uppercase tracking-[0.15em] mb-6">
              Colour
            </h3>
            <div className="flex flex-wrap items-baseline gap-x-2 gap-y-2">
              {colorOptions.map((c, i) => {
                const isSel = selectedColors.includes(c.name);
                return (
                  <React.Fragment key={c.name}>
                    {i > 0 && (
                      <span className="text-neutral-200 text-xs select-none">·</span>
                    )}
                    <button
                      onClick={() => toggleColor(c.name)}
                      className={`text-sm font-switzer transition-all duration-200 pb-0.5 ${
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

          {/* ─── Size Section (text row, multi-select) ─── */}
          <div className="mb-10">
            <h3 className="text-[10px] font-switzer font-medium text-neutral-300 uppercase tracking-[0.15em] mb-6">
              Size
            </h3>
            <div className="flex flex-wrap items-baseline gap-x-2 gap-y-2">
              {sizeOptions.map((s, i) => {
                const isSel = selectedSizes.includes(s);
                return (
                  <React.Fragment key={s}>
                    {i > 0 && (
                      <span className="text-neutral-200 text-xs select-none">·</span>
                    )}
                    <button
                      onClick={() => toggleSize(s)}
                      className={`text-sm font-switzer transition-all duration-200 pb-0.5 ${
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

          {/* ─── Price Range Section ─── */}
          <div className="mb-10">
            <h3 className="text-[10px] font-switzer font-medium text-neutral-300 uppercase tracking-[0.15em] mb-6">
              Price Range
            </h3>

            <div className="flex items-end gap-3">
              <div className="flex-1">
                <label className="block text-[10px] font-switzer text-neutral-400 mb-2 uppercase tracking-[0.1em]">Min</label>
                <div className="flex items-center border-b border-neutral-200 focus-within:border-black transition-colors pb-2">
                  <span className="text-sm text-neutral-400 font-switzer">$</span>
                  <input
                    type="number"
                    value={priceMin}
                    onChange={(e) => setPriceMin(e.target.value)}
                    placeholder="0"
                    className="w-full ml-1 text-sm font-switzer text-black outline-none bg-transparent placeholder:text-neutral-300 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  />
                </div>
              </div>

              <div className="pb-3">
                <span className="text-sm text-neutral-300">—</span>
              </div>

              <div className="flex-1">
                <label className="block text-[10px] font-switzer text-neutral-400 mb-2 uppercase tracking-[0.1em]">Max</label>
                <div className="flex items-center border-b border-neutral-200 focus-within:border-black transition-colors pb-2">
                  <span className="text-sm text-neutral-400 font-switzer">$</span>
                  <input
                    type="number"
                    value={priceMax}
                    onChange={(e) => setPriceMax(e.target.value)}
                    placeholder="999"
                    className="w-full ml-1 text-sm font-switzer text-black outline-none bg-transparent placeholder:text-neutral-300 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ─── Sort By Section ─── */}
          <div className="mb-10">
            <h3 className="text-[10px] font-switzer font-medium text-neutral-300 uppercase tracking-[0.15em] mb-6">
              Sort By
            </h3>
            <div className="space-y-0.5">
              {sortOptions.map((option) => {
                const isSel = selectedSort === option.value;
                return (
                  <button
                    key={option.value}
                    onClick={() => setSelectedSort(option.value)}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm font-switzer transition-colors rounded-sm ${
                      isSel ? "text-black font-medium" : "text-neutral-400 hover:text-black"
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                        isSel ? "bg-black" : "bg-transparent"
                      }`}
                    />
                    {option.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ─── Clear / Apply (inline, scrolls with content) ─── */}
          <div className="border-t border-neutral-100 pt-6">
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  clearSelection();
                  setPriceMin("");
                  setPriceMax("");
                }}
                className="flex-1 py-3 text-sm font-switzer font-normal text-neutral-400 border border-neutral-200 hover:border-neutral-400 hover:text-black transition-all"
              >
                Clear
              </button>
              <button
                onClick={closeDrawer}
                className="flex-1 py-3 text-sm font-switzer font-medium text-white bg-[#284468] hover:bg-[#1d3555] transition-colors"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
