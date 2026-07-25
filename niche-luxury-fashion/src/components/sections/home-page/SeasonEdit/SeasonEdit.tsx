"use client";

import { useEffect, useState } from "react";
import SeasonEditDesktop from "./SeasonEditDesktop";
import SeasonEditMobile from "./SeasonEditMobile";

export default function SeasonEdit() {
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

  return isMobile ? <SeasonEditMobile /> : <SeasonEditDesktop />;
}
