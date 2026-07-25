import Navbar from "@/components/layout/Navbar/Navbar";
import Hero from "@/components/sections/home-page/Hero/Hero";
import SeasonEdit from "@/components/sections/home-page/SeasonEdit/SeasonEdit";
import Collections from "@/components/sections/home-page/Collections/Collections";
import About from "@/components/sections/home-page/About/About";

export default function DevPage() {
  return (
    <main>
      {/* Dev Page: Use this for building and testing sections in isolation */}
      <Navbar />
      <Hero />
      <SeasonEdit />
      <Collections />
      <About />
    </main>
  );
}
