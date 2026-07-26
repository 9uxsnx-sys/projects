"use client";

import { useEffect, useState } from "react";
import IntroDesktop from "./IntroDesktop";
import IntroMobile from "./IntroMobile";

export default function Intro({ children }: { children: React.ReactNode }) {
  const [showIntro, setShowIntro] = useState(true);
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleComplete = () => {
    setShowIntro(false);
  };

  if (isMobile === null) return <>{children}</>;

  return (
    <>
      {showIntro &&
        (isMobile ? (
          <IntroMobile onComplete={handleComplete} />
        ) : (
          <IntroDesktop onComplete={handleComplete} />
        ))}
      {children}
    </>
  );
}
