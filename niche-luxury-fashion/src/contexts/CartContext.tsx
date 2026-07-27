"use client";

import React, { createContext, useContext, useState, useCallback, useMemo } from "react";

export type CartItem = {
  id: number;
  slug: string;
  name: string;
  price: string;
  priceValue: number;
  imageUrl: string;
  size: string;
  color: string;
  quantity: number;
};

type CartContextType = {
  items: CartItem[];
  itemCount: number;
  subtotal: string;
  isCartOpen: boolean;
  setCartOpen: (open: boolean) => void;
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (id: number, size: string, color: string) => void;
  updateQuantity: (id: number, size: string, color: string, qty: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setCartOpen] = useState(false);

  const addItem = useCallback((newItem: Omit<CartItem, "quantity">) => {
    setItems((prev) => {
      const key = `${newItem.id}-${newItem.size}-${newItem.color}`;
      const existing = prev.find(
        (i) => `${i.id}-${i.size}-${i.color}` === key,
      );
      if (existing) {
        return prev.map((i) =>
          `${i.id}-${i.size}-${i.color}` === key
            ? { ...i, quantity: i.quantity + 1 }
            : i,
        );
      }
      return [...prev, { ...newItem, quantity: 1 }];
    });
  }, []);

  const removeItem = useCallback((id: number, size: string, color: string) => {
    setItems((prev) =>
      prev.filter((i) => !(i.id === id && i.size === size && i.color === color)),
    );
  }, []);

  const updateQuantity = useCallback(
    (id: number, size: string, color: string, qty: number) => {
      if (qty < 1) return;
      setItems((prev) =>
        prev.map((i) =>
          i.id === id && i.size === size && i.color === color
            ? { ...i, quantity: qty }
            : i,
        ),
      );
    },
    [],
  );

  const clearCart = useCallback(() => setItems([]), []);

  const itemCount = useMemo(
    () => items.reduce((sum, i) => sum + i.quantity, 0),
    [items],
  );

  const subtotal = useMemo(() => {
    const total = items.reduce((sum, i) => sum + i.priceValue * i.quantity, 0);
    return `$${total.toFixed(2)}`;
  }, [items]);

  const value = useMemo(
    () => ({
      items,
      itemCount,
      subtotal,
      isCartOpen,
      setCartOpen,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
    }),
    [items, itemCount, subtotal, isCartOpen, addItem, removeItem, updateQuantity, clearCart],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
