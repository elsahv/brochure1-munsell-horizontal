import Image from "next/image";
import Coyote from "../../../public/coyote.png";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex 2xl:flex-row lg:flex-col md:flex-col sm:flex-col">
      {/* //*LEFT SIDE */}
      <section className="2xl:w-1/2 lg:w-full sm:w-full">
        <div className="2xl:w-full md:w-3/4 pt-5">
          <Image src={Coyote} alt="" className="mt-5 p-5" />
        </div>
      </section>

      {/* //*RIGHT SIDE */}
      <section className="2xl:w-1/2 lg:w-full sm:w-full border-onyx border-l-2">
        <div className=" m-5 p-5 2xl:mt-[150px] lg:mt-5">
          <div className="_textShadow text-cerulean font-bold text-4xl">
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
