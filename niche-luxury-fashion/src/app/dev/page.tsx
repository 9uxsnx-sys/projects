import Navbar from "@/components/layout/Navbar/Navbar";
import Hero from "@/components/sections/home-page/Hero/Hero";
import SeasonEdit from "@/components/sections/home-page/SeasonEdit/SeasonEdit";
import Collections from "@/components/sections/home-page/Collections/Collections";
import About from "@/components/sections/home-page/About/About";
import Brand from "@/components/sections/home-page/Brand/Brand";
import Philosophy from "@/components/sections/home-page/Philosophy/Philosophy";
import Categories from "@/components/sections/home-page/Categories/Categories";
import Footer from "@/components/sections/home-page/Footer/Footer";
import Intro from "@/components/sections/Intro/Intro";

export default function DevPage() {
  return (
    <Intro>
      <main>
        {/* Dev Page: Use this for building and testing sections in isolation */}
        <Navbar />
        <Hero />
        <SeasonEdit />
        <Collections />
        <About />
        <Brand />
        <Philosophy />
        <Categories />
        <Footer />
      </main>
    </Intro>
  );
}
