import Image from "next/image";
import Coyote from "../../../public/coyote.png";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="main_grid">
      {/* //*LEFT SIDE */}
      <section className="left-sq">
        <div className="2xl:w-full md:w-3/4 pt-5">
          <Image src={Coyote} alt="laughing coyote logo" className="mt-5 p-5" />
        </div>
      </section>

      {/* //*RIGHT SIDE */}
      <section className="right-sq border-onyx border-l-2">
        <div className=" m-5 p-5 2xl:mt-[150px] lg:mt-5">
          <div className="_textShadow text-cerulean font-bold text-5xl">
            A
            <Link className="underline px-3" href="/services">
              web design
            </Link>
            service for small businesses owners and creatives.
          </div>
          <p className="text-aquamarine mt-1 mb-5 mx-1 text-2xl pt-2">
            Welcome! Laughing Coyote Development is a digital studio which
            brings small businesses online.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Hero;