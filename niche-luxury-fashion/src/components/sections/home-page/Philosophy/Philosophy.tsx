"use client";

import { useEffect, useState } from "react";
import PhilosophyDesktop from "./PhilosophyDesktop";
import PhilosophyMobile from "./PhilosophyMobile";

export default function Philosophy() {
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

  return isMobile ? <PhilosophyMobile /> : <PhilosophyDesktop />;
}
