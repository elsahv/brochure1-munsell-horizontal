import Image from "next/image";
import JtLogo from "../public/jt-munsell.png";
import Websites from "./components/Websites";
import Link from "next/link";

 


export default function Home() {
  return (
    <div className="main_grid">
      {/* //*LEFT SIDE */}
      <section className="left-sq flex justify-start items-end">
        <Image src={JtLogo} alt="laughing coyote logo" className="w-full" />
      </section>

      {/* //*RIGHT SIDE */}
      <section className="right-sq border-onyx border-l-1">
        <div className="pl-1 md:mt-[150px] mt-[50px] font-bold text-cerulean text-4xl">
          Hi there, {"I'm"} Elsa.
        </div>
        <div className="text-aquamarine text-lg p-3 flex flex-col gap-5">
        <p>{"I'm"} a web developer based in Joshua Tree, CA. Over the last decade, {"I've"} hoarded and thought of many different and creative ideas.
        Since 2019, {"I've"} decided to learn how to bring these ideas to life through javascript progamming and frameworks.</p>
        <p>Listed below are some of my featured websites, all builds are currently in progress... You can view my coding progress through
           <Link href="https://github.com/elsahv" className="ml-1 hover:text-onyx underline"> 
           github.
           </Link>
           </p>
        </div>

        <Websites />
      </section>
    </div>
  );
}
