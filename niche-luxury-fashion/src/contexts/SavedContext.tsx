"use client";

import React, { createContext, useContext, useState, useCallback, useMemo } from "react";

type SavedContextType = {
  savedIds: number[];
  savedCount: number;
  toggleSave: (id: number) => void;
  isSaved: (id: number) => boolean;
};

const SavedContext = createContext<SavedContextType | undefined>(undefined);

export function SavedProvider({ children }: { children: React.ReactNode }) {
  const [savedIds, setSavedIds] = useState<number[]>([]);

  const toggleSave = useCallback((id: number) => {
    setSavedIds((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id],
    );
  }, []);

  const isSaved = useCallback((id: number) => savedIds.includes(id), [savedIds]);

  const savedCount = useMemo(() => savedIds.length, [savedIds]);

  const value = useMemo(
    () => ({ savedIds, savedCount, toggleSave, isSaved }),
    [savedIds, savedCount, toggleSave, isSaved],
  );

  return <SavedContext.Provider value={value}>{children}</SavedContext.Provider>;
}

export function useSaved() {
  const ctx = useContext(SavedContext);
  if (!ctx) throw new Error("useSaved must be used within a SavedProvider");
  return ctx;
}
