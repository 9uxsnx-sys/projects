"use client";

import { useEffect, useState } from "react";
import BrandDesktop from "./BrandDesktop";
import BrandMobile from "./BrandMobile";

export default function Brand() {
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

  return isMobile ? <BrandMobile /> : <BrandDesktop />;
}
