import dynamic from "next/dynamic";
import { Suspense } from "react";
import Navbar from "@/components/layout/Navbar/Navbar";
import Hero from "@/components/sections/home-page/Hero/Hero";
import Brand from "@/components/sections/home-page/Brand/Brand";
import SeasonEdit from "@/components/sections/home-page/SeasonEdit/SeasonEdit";
import Collections from "@/components/sections/home-page/Collections/Collections";
import Intro from "@/components/sections/Intro/Intro";

const Categories = dynamic(
  () => import("@/components/sections/home-page/Categories/Categories"),
  {
    loading: () => <div className="w-full h-screen bg-white animate-pulse" />,
  }
);

const Philosophy = dynamic(
  () => import("@/components/sections/home-page/Philosophy/Philosophy"),
  {
    loading: () => <div className="w-full h-96 bg-white animate-pulse" />,
  }
);

const About = dynamic(
  () => import("@/components/sections/home-page/About/About"),
  {
    loading: () => <div className="w-full h-screen bg-white animate-pulse" />,
  }
);

const Footer = dynamic(
  () => import("@/components/sections/home-page/Footer/Footer"),
  {
    loading: () => <div className="w-full h-40 bg-black" />,
  }
);

export default function Home() {
  return (
    <Intro>
      <main>
        <Navbar />
        <Hero />
        <Brand />
        <SeasonEdit />
        <Collections />
        <Suspense fallback={<div className="w-full h-screen bg-white animate-pulse" />}>
          <Categories />
        </Suspense>
        <Suspense fallback={<div className="w-full h-96 bg-white animate-pulse" />}>
          <Philosophy />
        </Suspense>
        <Suspense fallback={<div className="w-full h-screen bg-white animate-pulse" />}>
          <About />
        </Suspense>
        <Suspense fallback={<div className="w-full h-40 bg-black" />}>
          <Footer />
        </Suspense>
      </main>
    </Intro>
  );
}
