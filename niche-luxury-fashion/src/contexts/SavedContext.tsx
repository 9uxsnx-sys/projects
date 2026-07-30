"use client";

import React, { createContext, useContext, useState, useCallback, useMemo, useEffect } from "react";

type SavedContextType = {
  savedIds: number[];
  savedCount: number;
  toggleSave: (id: number) => void;
  isSaved: (id: number) => boolean;
};

const SavedContext = createContext<SavedContextType | undefined>(undefined);

function loadSavedIds(): number[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem("niche-saved-ids");
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) return parsed;
    }
  } catch {
    // ignore
  }
  return [];
}

export function SavedProvider({ children }: { children: React.ReactNode }) {
  const [savedIds, setSavedIds] = useState<number[]>(loadSavedIds);

  // Persist to localStorage whenever savedIds changes
  useEffect(() => {
    localStorage.setItem("niche-saved-ids", JSON.stringify(savedIds));
  }, [savedIds]);

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
