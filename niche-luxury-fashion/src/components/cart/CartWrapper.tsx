"use client";

import React from "react";
import { CartProvider } from "@/contexts/CartContext";
import { SavedProvider } from "@/contexts/SavedContext";
import CartDrawer from "./CartDrawer";

export default function CartWrapper({ children }: { children: React.ReactNode }) {
  return (
    <SavedProvider>
      <CartProvider>
        {children}
        <CartDrawer />
      </CartProvider>
    </SavedProvider>
  );
}
