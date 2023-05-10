import Hero from "./components/sections/Hero";
import Services from "./components/sections/ServicesInfo";
import Gallery from "./components/sections/GalleryInfo";
import Contact from "./components/sections/ContactInfo";

export default function Home() {
  return (
    <div className="bg-munsell">
      <Hero />
      <div className="2xl:hidden lg:relative">
        <Services />
        <Gallery />
        <Contact />
      </div>
    </div>
  );
}
