"use client";

import React from "react";
import { motion } from "framer-motion";

export default function HeroMobile() {
  return (
    <section className="relative min-h-[100dvh] bg-white overflow-hidden flex flex-col items-center justify-center p-6 text-center">
      {/* Mobile-specific layout for VANTAGE */}
      <motion.h1 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-black text-5xl font-light tracking-[0.2em] uppercase mb-4"
      >
        Vantage
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-zinc-500 text-[10px] tracking-[0.4em] uppercase italic"
      >
        Mobile Edition — Compact Luxury
      </motion.p>
    </section>
  );
}
