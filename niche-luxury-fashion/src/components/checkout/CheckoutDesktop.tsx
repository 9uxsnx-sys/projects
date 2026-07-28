"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useCart } from "@/contexts/CartContext";
import { ShoppingBag, ChevronLeft, Lock, ChevronDown } from "lucide-react";

export default function CheckoutDesktop() {
  const { items, itemCount, subtotal } = useCart();
  const [placed, setPlaced] = useState(false);
  const [countryOpen, setCountryOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");

  const countries = [
    { value: "US", label: "United States" },
    { value: "UK", label: "United Kingdom" },
    { value: "AE", label: "UAE" },
    { value: "OM", label: "Oman" },
    { value: "FR", label: "France" },
    { value: "IT", label: "Italy" },
    { value: "DE", label: "Germany" },
    { value: "ES", label: "Spain" },
    { value: "CH", label: "Switzerland" },
    { value: "SA", label: "Saudi Arabia" },
    { value: "QA", label: "Qatar" },
    { value: "KW", label: "Kuwait" },
    { value: "BH", label: "Bahrain" },
    { value: "JP", label: "Japan" },
    { value: "KR", label: "South Korea" },
    { value: "CN", label: "China" },
    { value: "SG", label: "Singapore" },
    { value: "AU", label: "Australia" },
    { value: "CA", label: "Canada" },
  ];

  if (placed) {
    return (
      <section className="bg-white min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-6">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#284468" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h1 className="text-3xl font-switzer font-medium text-black mb-3">
            Order placed
          </h1>
          <p className="text-sm font-switzer font-normal text-neutral-500 mb-8 leading-relaxed">
            Thank you for your order. You will receive a confirmation email shortly.
          </p>
          <Link
            href="/"
            className="inline-block px-8 py-3 text-sm font-switzer font-medium tracking-[0.1em] uppercase bg-[#284468] text-white hover:opacity-90 transition-opacity"
          >
            Continue Shopping
          </Link>
        </div>
      </section>
    );
  }

  if (items.length === 0) {
    return (
      <section className="bg-white min-h-screen flex items-center justify-center px-6 pt-10">
        <div className="text-center">
          <ShoppingBag size={48} className="text-neutral-200 mx-auto mb-4" strokeWidth={1} />
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

  const inputClass =
    "w-full px-0 py-2.5 text-sm font-switzer font-normal text-black bg-transparent border-0 border-b border-neutral-200 focus:outline-none focus:border-neutral-900 transition-colors placeholder:text-neutral-300";

  const labelClass =
    "block text-xs font-switzer font-medium text-neutral-500 tracking-[0.05em] uppercase mb-1";

  return (
    <section className="bg-white min-h-screen pt-10">
      <div className="flex">
        {/* ─── Left: Form ─── */}
        <div className="w-3/5 min-h-screen px-12 pt-16 pb-24">
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-1.5 text-sm font-switzer font-normal text-neutral-400 hover:text-black transition-colors mb-16"
          >
            <ChevronLeft size={16} strokeWidth={1.2} />
            Back
          </button>

          <div className="max-w-lg">
            <h1 className="text-[clamp(1.8rem,3.5vw,3rem)] font-switzer font-medium text-black leading-none tracking-[0.01em] mb-16">
              Checkout
            </h1>

            {/* ── Contact ── */}
            <div className="mb-14">
              <h2 className="text-xs font-switzer font-medium text-black tracking-[0.1em] uppercase mb-6">
                Contact
              </h2>
              <div className="space-y-5">
                <div>
                  <label className={labelClass}>Email</label>
                  <input type="email" placeholder="your@email.com" className={inputClass} />
                </div>
                <label className="flex items-center gap-2.5 cursor-pointer group">
                  <input type="checkbox" defaultChecked className="accent-[#284468] w-3.5 h-3.5" />
                  <span className="text-xs font-switzer font-normal text-neutral-400 group-hover:text-neutral-600 transition-colors">
                    Keep me updated on new arrivals and exclusive offers
                  </span>
                </label>
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-neutral-100 mb-14" />

            {/* ── Shipping ── */}
            <div className="mb-14">
              <h2 className="text-xs font-switzer font-medium text-black tracking-[0.1em] uppercase mb-6">
                Shipping
              </h2>
              <div className="space-y-5">
                <div className="flex gap-6">
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
                <div className="flex gap-6">
                  <div className="flex-1">
                    <label className={labelClass}>City</label>
                    <input type="text" placeholder="City" className={inputClass} />
                  </div>
                  <div className="w-28">
                    <label className={labelClass}>ZIP</label>
                    <input type="text" placeholder="10001" className={inputClass} />
                  </div>
                </div>
                <div>
                  <label className={labelClass}>Country / Region</label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setCountryOpen((prev) => !prev)}
                      className="w-full flex items-center justify-between px-0 py-2.5 text-sm font-switzer font-normal text-left border-0 border-b border-neutral-200 focus:outline-none focus:border-neutral-900 transition-colors cursor-pointer bg-transparent"
                    >
                      <span className={selectedCountry ? "text-black" : "text-neutral-300"}>
                        {selectedCountry || "Select country"}
                      </span>
                      <ChevronDown
                        size={14}
                        strokeWidth={1.2}
                        className={`text-neutral-300 transition-all duration-200 ${
                          countryOpen ? "rotate-180 text-neutral-900" : ""
                        }`}
                      />
                    </button>
                    {countryOpen && (
                      <>
                        <div
                          className="fixed inset-0 z-10"
                          onClick={() => setCountryOpen(false)}
                        />
                        <div className="absolute left-0 right-0 top-full mt-1 bg-white border border-neutral-100 shadow-lg z-20 max-h-48 overflow-y-auto custom-scrollbar">
                          {countries.map((c) => (
                            <button
                              key={c.value}
                              type="button"
                              onClick={() => {
                                setSelectedCountry(c.label);
                                setCountryOpen(false);
                              }}
                              className={`w-full text-left px-4 py-3 text-sm font-switzer transition-colors ${
                                selectedCountry === c.label
                                  ? "text-black bg-neutral-50"
                                  : "text-neutral-500 hover:text-black hover:bg-neutral-50"
                              }`}
                            >
                              {c.label}
                            </button>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-neutral-100 mb-14" />

            {/* ── Payment ── */}
            <div className="mb-14">
              <h2 className="text-xs font-switzer font-medium text-black tracking-[0.1em] uppercase mb-6">
                Payment
              </h2>

              {/* Payment method selector */}
              <div className="flex gap-4 mb-6">
                {["Credit Card", "PayPal", "Apple Pay"].map((method) => (
                  <label
                    key={method}
                    className="flex items-center gap-2 cursor-pointer group"
                  >
                    <input
                      type="radio"
                      name="payment"
                      defaultChecked={method === "Credit Card"}
                      className="accent-[#284468] w-3.5 h-3.5"
                    />
                    <span className="text-sm font-switzer font-normal text-neutral-500 group-hover:text-black transition-colors">
                      {method}
                    </span>
                  </label>
                ))}
              </div>

              <div className="space-y-5">
                <div>
                  <label className={labelClass}>Card number</label>
                  <input type="text" placeholder="0000 0000 0000 0000" className={inputClass} />
                </div>
                <div className="flex gap-6">
                  <div className="flex-1">
                    <label className={labelClass}>Expiry</label>
                    <input type="text" placeholder="MM / YY" className={inputClass} />
                  </div>
                  <div className="flex-1">
                    <label className={labelClass}>CVC</label>
                    <input type="text" placeholder="123" className={inputClass} />
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs font-switzer font-normal text-neutral-300">
                  <span className="text-[10px] font-switzer font-medium tracking-[0.1em] uppercase">We accept</span>
                  <span className="ml-1 text-neutral-300">Visa</span>
                  <span className="text-neutral-300">·</span>
                  <span className="text-neutral-300">Mastercard</span>
                  <span className="text-neutral-300">·</span>
                  <span className="text-neutral-300">Amex</span>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-neutral-100 mb-10" />

            {/* ── Place Order ── */}
            <button
              onClick={() => setPlaced(true)}
              className="w-full py-4 text-sm font-switzer font-medium tracking-[0.1em] uppercase bg-black text-white border border-black hover:bg-white hover:text-black transition-all duration-300 mb-5"
            >
              Place Order — {subtotal}
            </button>

            <p className="flex items-center justify-center gap-1.5 text-xs font-switzer font-normal text-neutral-400">
              <Lock size={12} strokeWidth={1.5} />
              Secure checkout — your information is encrypted
            </p>
          </div>
        </div>

        {/* ─── Right: Order Summary ─── */}
        <div className="w-2/5 min-h-screen bg-white pt-16 pb-24 px-12 border-l border-neutral-100">
          <h2 className="text-xs font-switzer font-medium text-black tracking-[0.1em] uppercase mb-8">
            Order Summary ({itemCount})
          </h2>

          <div className="space-y-6">
            {items.map((item) => (
              <div key={`${item.id}-${item.size}-${item.color}`} className="flex gap-4 pb-6 border-b border-neutral-100 last:border-0 last:pb-0">
                {/* Image */}
                <div className="w-16 h-20 bg-neutral-900 overflow-hidden flex-shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-switzer font-medium text-black leading-tight truncate">
                    {item.name}
                  </p>
                  <p className="mt-0.5 text-xs font-switzer font-normal text-neutral-400">
                    {item.size} / {item.color}
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs font-switzer font-normal text-neutral-400">
                      Qty: {item.quantity}
                    </span>
                    <span className="text-sm font-switzer font-medium text-black">
                      ${(item.priceValue * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Totals */}
          <div className="mt-8 space-y-3 pt-6 border-t border-neutral-200">
            <div className="flex justify-between">
              <span className="text-sm font-switzer font-normal text-neutral-500">
                Subtotal
              </span>
              <span className="text-sm font-switzer font-medium text-black">
                {subtotal}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm font-switzer font-normal text-neutral-500">
                Shipping
              </span>
              <span className="text-sm font-switzer font-medium text-green-700">
                Free
              </span>
            </div>
            <div className="flex justify-between pt-4 border-t border-neutral-200">
              <span className="text-base font-switzer font-medium text-black">
                Total
              </span>
              <span className="text-lg font-switzer font-medium text-black">
                {subtotal}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
