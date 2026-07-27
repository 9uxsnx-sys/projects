"use client";

import { useEffect, useRef, useState } from "react";
import NavbarDesktop from "@/components/layout/Navbar/NavbarDesktop";
import NavbarMobile from "@/components/layout/Navbar/NavbarMobile";
import CheckoutDesktop from "@/components/checkout/CheckoutDesktop";

export default function CheckoutPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const prevScrollY = useRef(0);

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024);

    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY.current && currentScrollY > 80) {
        setIsVisible(false);
      } else if (currentScrollY < prevScrollY.current) {
        setIsVisible(true);
      }

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main>
      {isMobile ? (
        <NavbarMobile isPastHero={true} isVisible={isVisible} />
      ) : (
        <NavbarDesktop isPastHero={true} isVisible={isVisible} />
      )}
      <CheckoutDesktop />
    </main>
  );
}
