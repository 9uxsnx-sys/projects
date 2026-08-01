"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import dynamic from "next/dynamic";

const IntroDesktop = dynamic(() => import("./IntroDesktop"));
const IntroMobile = dynamic(() => import("./IntroMobile"));
import { shouldPlayIntro, markIntroPlayed } from "./introSession";

export default function Intro({ children }: { children: React.ReactNode }) {
  const [showIntro, setShowIntro] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [canSkip, setCanSkip] = useState(false);
  // Guards against React StrictMode double-invoking effects in development,
  // so the module flag is only evaluated on a genuine mount.
  const effectRanRef = useRef(false);

  useEffect(() => {
    if (effectRanRef.current) return;
    effectRanRef.current = true;

    setIsMobile(window.innerWidth < 1024);

    // Play only on the initial full page load — not on client-side
    // navigation back to the home page (logo click, back button, …).
    if (!shouldPlayIntro()) {
      setShowIntro(false);
      return;
    }
    markIntroPlayed();

    const skipTimer = setTimeout(() => setCanSkip(true), 1000);
    return () => clearTimeout(skipTimer);
  }, []);

  const handleComplete = useCallback(() => setShowIntro(false), []);
  const handleSkip = useCallback(() => setShowIntro(false), []);

  return (
    <>
      {showIntro && (
        <div>
          {isMobile ? (
            <IntroMobile onComplete={handleComplete} />
          ) : (
            <IntroDesktop onComplete={handleComplete} />
          )}
          {canSkip && (
            <button
              onClick={handleSkip}
              className="fixed top-4 right-4 z-[10000] text-white/60 text-sm underline hover:text-white transition-colors"
            >
              Skip
            </button>
          )}
        </div>
      )}
      {/* Children are NOT hidden during the intro — the intro itself covers them
          because it's `fixed inset-0 z-[9999]`. When the intro slides up, children
          are smoothly revealed underneath, with no black flash. */}
      {children}
    </>
  );
}
