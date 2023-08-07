import Hero from "./components/sections/Hero";
import Services from "./components/sections/ServicesInfo";
import Contact from "./components/sections/ContactInfo";
import Gallery from "./components/sections/GalleryInfo";

export default function Home() {
  return (
    <div className="bg-munsell">
      <Hero />
      {/* //todo: PUT TOOLS ICONS BELOW*/}
      <div className="2xl:hidden lg:relative">
        <Services />
        <Gallery />
        <Contact />
      </div>
    </div>
  );
}
