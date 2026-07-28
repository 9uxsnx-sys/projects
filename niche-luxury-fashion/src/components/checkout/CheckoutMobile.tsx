"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useCart } from "@/contexts/CartContext";
import { ShoppingBag, ChevronLeft, Lock, ChevronDown } from "lucide-react";

const countries = [
  "United States", "United Kingdom", "UAE", "Oman", "France", "Italy",
  "Germany", "Spain", "Switzerland", "Saudi Arabia", "Qatar", "Kuwait",
  "Bahrain", "Japan", "South Korea", "China", "Singapore", "Australia", "Canada",
];

const inputClass =
  "w-full px-0 py-2.5 text-sm font-switzer font-normal text-black bg-transparent border-0 border-b border-neutral-200 focus:outline-none focus:border-neutral-900 transition-colors placeholder:text-neutral-300";

const labelClass =
  "block text-[10px] font-switzer font-medium text-neutral-400 tracking-[0.1em] uppercase mb-1.5";

export default function CheckoutMobile() {
  const { items, itemCount, subtotal } = useCart();
  const [placed, setPlaced] = useState(false);
  const [countryOpen, setCountryOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");

  if (placed) {
    return (
      <section className="bg-white min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-5">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#284468" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h1 className="text-lg font-switzer font-medium text-black mb-2 leading-tight">
            Order placed
          </h1>
          <p className="text-sm font-switzer font-normal text-neutral-500 mb-8 leading-relaxed">
            Thank you for your order. You will receive a confirmation email shortly.
          </p>
          <Link
            href="/"
            className="inline-block w-full py-3 text-sm font-switzer font-medium tracking-[0.1em] uppercase bg-[#284468] text-white hover:opacity-90 transition-opacity"
          >
            Continue Shopping
          </Link>
        </div>
      </section>
    );
  }

  if (items.length === 0) {
    return (
      <section className="bg-white min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <ShoppingBag size={40} className="text-neutral-200 mx-auto mb-4" strokeWidth={1} />
          <p className="text-sm font-switzer font-normal text-neutral-400 mb-6">
            Your bag is empty
          </p>
          <Link
            href="/"
            className="text-sm font-switzer font-medium text-black underline underline-offset-4 decoration-[1px] hover:text-neutral-500 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white min-h-screen">
      <div className="px-6 pt-10 pb-12">
        {/* Back + Title */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-1 text-sm font-switzer font-normal text-neutral-400 hover:text-black transition-colors"
          >
            <ChevronLeft size={16} strokeWidth={1.2} />
            Back
          </button>
          <span className="text-xs font-switzer font-normal text-neutral-400">
            {itemCount} item{itemCount !== 1 ? "s" : ""}
          </span>
        </div>

        <h1 className="text-xl font-switzer font-medium text-black leading-none mb-10">
          Checkout
        </h1>

        {/* ── Contact ── */}
        <div className="mb-8">
          <h2 className="text-[10px] font-switzer font-medium text-black/40 tracking-[0.15em] uppercase mb-5">
            Contact
          </h2>
          <div className="space-y-3">
            <div>
              <label className={labelClass}>Email</label>
              <input type="email" placeholder="your@email.com" className={inputClass} />
            </div>
            <label className="flex items-center gap-2.5 cursor-pointer group mt-2">
              <input type="checkbox" defaultChecked className="accent-[#284468] w-3 h-3" />
              <span className="text-[11px] font-switzer font-normal text-neutral-400 group-hover:text-neutral-600 transition-colors">
                Keep me updated on new arrivals and exclusive offers
              </span>
            </label>
          </div>
        </div>

        {/* ── Shipping ── */}
        <div className="mb-8">
          <h2 className="text-[10px] font-switzer font-medium text-black/40 tracking-[0.15em] uppercase mb-5">
            Shipping
          </h2>
          <div className="space-y-3">
            <div className="flex gap-3">
              <div className="flex-1">
                <label className={labelClass}>First name</label>
                <input type="text" placeholder="John" className={inputClass} />
              </div>
              <div className="flex-1">
                <label className={labelClass}>Last name</label>
                <input type="text" placeholder="Doe" className={inputClass} />
              </div>
            </div>
            <div>
              <label className={labelClass}>Address</label>
              <input type="text" placeholder="Street address" className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Apartment (optional)</label>
              <input type="text" placeholder="Apt, suite, etc." className={inputClass} />
            </div>
            <div className="flex gap-3">
              <div className="flex-1">
                <label className={labelClass}>City</label>
                <input type="text" placeholder="City" className={inputClass} />
              </div>
              <div className="flex-1">
                <label className={labelClass}>ZIP</label>
                <input type="text" placeholder="10001" className={inputClass} />
              </div>
            </div>
            <div>
              <label className={labelClass}>Country</label>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setCountryOpen((prev) => !prev)}
                  className="w-full flex items-center justify-between px-0 py-2.5 text-sm font-switzer font-normal text-left border-0 border-b border-neutral-200 focus:outline-none focus:border-neutral-900 transition-colors cursor-pointer bg-transparent"
                >
                  <span className={selectedCountry ? "text-black" : "text-neutral-300"}>
                    {selectedCountry || "Select country"}
                  </span>
                  <ChevronDown size={14} strokeWidth={1.2} className="text-neutral-300" />
                </button>
                {countryOpen && (
                  <>
                    <div className="fixed inset-0 z-10" onClick={() => setCountryOpen(false)} />
                    <div className="absolute left-0 right-0 top-full mt-1 bg-white border border-neutral-100 shadow-md z-20 max-h-44 overflow-y-auto scrollbar-hide">
                      {countries.map((c) => (
                        <button
                          key={c}
                          type="button"
                          onClick={() => { setSelectedCountry(c); setCountryOpen(false); }}
                          className={`w-full text-left px-4 py-2.5 text-sm font-switzer transition-colors ${
                            selectedCountry === c
                              ? "text-black bg-neutral-50"
                              : "text-neutral-500 hover:text-black hover:bg-neutral-50"
                          }`}
                        >
                          {c}
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ── Payment ── */}
        <div className="mb-10">
          <h2 className="text-[10px] font-switzer font-medium text-black/40 tracking-[0.15em] uppercase mb-5">
            Payment
          </h2>
          <div className="flex flex-wrap gap-4 mb-5">
            {["Credit Card", "PayPal", "Apple Pay"].map((method) => (
              <label key={method} className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="radio"
                  name="payment"
                  defaultChecked={method === "Credit Card"}
                  className="accent-[#284468] w-3 h-3"
                />
                <span className="text-xs font-switzer font-normal text-neutral-500 group-hover:text-black transition-colors">
                  {method}
                </span>
              </label>
            ))}
          </div>
          <div className="space-y-3">
            <div>
              <label className={labelClass}>Card number</label>
              <input type="text" placeholder="0000 0000 0000 0000" className={inputClass} />
            </div>
            <div className="flex gap-3">
              <div className="flex-1">
                <label className={labelClass}>Expiry</label>
                <input type="text" placeholder="MM / YY" className={inputClass} />
              </div>
              <div className="flex-1">
                <label className={labelClass}>CVC</label>
                <input type="text" placeholder="123" className={inputClass} />
              </div>
            </div>
            <div className="text-[10px] font-switzer font-normal text-neutral-300 pt-1">
              We accept Visa · Mastercard · Amex
            </div>
          </div>
        </div>

        {/* ── Order total ── */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-100">
          <span className="text-sm font-switzer font-medium text-black">Total</span>
          <span className="text-sm font-switzer font-medium text-black">{subtotal}</span>
        </div>

        {/* ── Place Order ── */}
        <button
          onClick={() => setPlaced(true)}
          className="w-full py-3 text-sm font-switzer font-medium tracking-[0.1em] uppercase bg-black text-white border border-black hover:bg-white hover:text-black transition-all duration-300"
        >
          Place Order
        </button>

        <p className="flex items-center justify-center gap-1.5 text-[10px] font-switzer font-normal text-neutral-400 mt-3">
          <Lock size={10} strokeWidth={1.5} />
          Secure checkout
        </p>
      </div>
    </section>
  );
}
