"use client";

import { useState } from "react";
import IntroDesktop from "./IntroDesktop";

export default function Intro({ children }: { children: React.ReactNode }) {
  const [showIntro, setShowIntro] = useState(true);

  const handleComplete = () => {
    setShowIntro(false);
  };

  return (
    <>
      {showIntro && <IntroDesktop onComplete={handleComplete} />}
      {children}
    </>
  );
}
