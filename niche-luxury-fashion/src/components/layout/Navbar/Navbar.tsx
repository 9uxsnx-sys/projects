"use client";

import { useEffect, useRef, useState } from "react";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

export default function Navbar() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const [isPastHero, setIsPastHero] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const prevScrollY = useRef(0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsPastHero(currentScrollY >= window.innerHeight);

      if (currentScrollY > prevScrollY.current && currentScrollY > 80) {
        setIsVisible(false);
      } else if (currentScrollY < prevScrollY.current) {
        setIsVisible(true);
      }

      prevScrollY.current = currentScrollY;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (isMobile === null) return null;

  return isMobile ? (
    <NavbarMobile isPastHero={isPastHero} isVisible={isVisible} />
  ) : (
    <NavbarDesktop isPastHero={isPastHero} isVisible={isVisible} />
  );
}
