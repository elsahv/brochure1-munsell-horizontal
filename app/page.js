import Image from "next/image";
import JtLogo from "../public/jt-munsell.png";
import Websites from "./components/Websites";
import Link from "next/link";

export default function Home() {
  return (
    <div className="main_grid">
      {/* //*LEFT SIDE */}
      <section className="left-sq border-r-2 border-black flex justify-start items-end">
        <Image src={JtLogo} alt="laughing coyote logo" className="w-full" />
      </section>

      {/* //*RIGHT SIDE */}
      <section className="right-sq border-onyx border-l-1">
        <div className="pl-1 md:mt-[150px] mt-[50px] font-bold text-cerulean md:text-4xl text-3xl">
          Hi there, {"I'm"}
          <Link className="underline pl-3" href="/about">
            Elsa.
          </Link>
        </div>
        <p className="text-aquamarine mt-1 mb-5 mx-1 text-2xl pt-2 pl-1">
          {"I'm"} a web developer based in Joshua Tree, CA. Listed below are
          some websites {"I've"} created:
          {/* I create niche websites and solutions for small business owners and creatives. */}
        </p>
        <Websites />
      </section>
    </div>
  );
}
