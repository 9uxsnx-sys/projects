"use client";

import { useEffect, useState } from "react";
import CollectionsDesktop from "./CollectionsDesktop";
import CollectionsMobile from "./CollectionsMobile";

export default function Collections() {
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

  return isMobile ? <CollectionsMobile /> : <CollectionsDesktop />;
}
