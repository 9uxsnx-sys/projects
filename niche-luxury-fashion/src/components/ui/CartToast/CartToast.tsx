"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function CartToast({ show }: { show: boolean }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (show) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [show]);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] px-4 pb-6 animate-slide-up">
      <div className="bg-white border border-neutral-200 shadow-xl px-5 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Checkmark circle */}
          <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center flex-shrink-0">
            <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
              <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span className="text-sm font-switzer font-medium text-black">
            Added to cart
          </span>
        </div>
        <Link
          href="/cart"
          className="text-xs font-switzer font-medium tracking-[0.1em] uppercase underline underline-offset-2 decoration-[1px] text-black hover:text-neutral-600 transition-colors"
        >
          View Cart
        </Link>
      </div>
    </div>
  );
}
