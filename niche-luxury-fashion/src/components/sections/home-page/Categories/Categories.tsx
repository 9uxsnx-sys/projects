"use client";

import { useEffect, useState } from "react";
import CategoriesDesktop from "./CategoriesDesktop";
import CategoriesMobile from "./CategoriesMobile";

export default function Categories() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile === null) return null;

  return isMobile ? <CategoriesMobile /> : <CategoriesDesktop />;
}
