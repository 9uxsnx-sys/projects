import Navbar from "@/components/layout/Navbar/Navbar";
import Hero from "@/components/sections/home-page/Hero/Hero";

export default function DevPage() {
  return (
    <main>
      {/* Dev Page: Use this for building and testing sections in isolation */}
      <Navbar />
      <Hero />

      {/* Spacer to enable scroll testing for Navbar mode switching */}
      <div className="min-h-[200vh] bg-white" />
    </main>
  );
}
