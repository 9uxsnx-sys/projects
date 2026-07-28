"use client";

import { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import NavbarDesktop from "@/components/layout/Navbar/NavbarDesktop";
import NavbarMobile from "@/components/layout/Navbar/NavbarMobile";
import Footer from "@/components/sections/home-page/Footer/Footer";
import ProductDetailDesktop from "@/components/sections/product-detail/ProductDetailDesktop";
import ProductDetailMobile from "@/components/sections/product-detail/ProductDetailMobile";
import SuggestedProducts from "@/components/sections/product-detail/SuggestedProducts";
import { getProductBySlug } from "@/data/products";

export default function ProductPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = getProductBySlug(slug);

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

  if (!product) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-white">
        <p className="font-switzer text-neutral-500">Product not found.</p>
      </main>
    );
  }

  return (
    <main>
      {isMobile ? (
        <NavbarMobile isPastHero={true} isVisible={isVisible} />
      ) : (
        <NavbarDesktop isPastHero={true} isVisible={isVisible} />
      )}
      {isMobile ? (
        <ProductDetailMobile product={product} />
      ) : (
        <ProductDetailDesktop product={product} />
      )}
      <SuggestedProducts />
      <Footer />
    </main>
  );
}
