"use client";

import { useEffect, useState } from "react";

export default function IntroDesktop({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [logoVisible, setLogoVisible] = useState(false);
  const [slideUp, setSlideUp] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Fade logo in after a short pause
    const logoTimeout = setTimeout(() => setLogoVisible(true), 400);

    // Slide the curtain up after ~2.5s
    const slideTimeout = setTimeout(() => setSlideUp(true), 2500);

    // Unmount after slide completes (1000ms slide + buffer)
    const unmountTimeout = setTimeout(() => {
      setDone(true);
      onComplete();
    }, 3600);

    return () => {
      clearTimeout(logoTimeout);
      clearTimeout(slideTimeout);
      clearTimeout(unmountTimeout);
    };
  }, [onComplete]);

  if (done) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-black overflow-hidden transition-transform duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
        slideUp ? "translate-y-[-100%]" : "translate-y-0"
      }`}
    >
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/assets/images/video-poster.jpg"
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/assets/videos/intro-bg.mp4" type="video/mp4" />
      </video>

      {/* Subtle overlay for readability */}
      <div className="absolute inset-0 bg-black/20 z-10" />

      {/* Centered BABIL logo — Plein Bold, same as Footer */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <h1
          className={`text-white text-[clamp(6rem,22vw,20rem)] leading-[0.85] font-synonym font-bold tracking-[0.02em] select-none transition-opacity duration-[600ms] ${
            logoVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          babil
        </h1>
      </div>
    </div>
  );
}
