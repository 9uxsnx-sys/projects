"use client";

import { useEffect, useState } from "react";

export default function IntroMobile({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [logoVisible, setLogoVisible] = useState(false);
  const [slideUp, setSlideUp] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const logoTimeout = setTimeout(() => setLogoVisible(true), 400);
    const slideTimeout = setTimeout(() => setSlideUp(true), 2500);
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

      <div className="absolute inset-0 bg-black/20 z-10" />

      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <h1
          className={`text-white text-[clamp(6rem,26vw,16rem)] leading-[0.85] font-synonym font-bold tracking-[0.02em] select-none transition-opacity duration-[600ms] ${
            logoVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          snow
        </h1>
      </div>
    </div>
  );
}
