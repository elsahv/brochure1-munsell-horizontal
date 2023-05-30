"use client";
import Image from "next/image";
import Coyote from "../../../public/coyote.png";
import Link from "next/link";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1, duration: 0.5 }}
    >
      <div className="main_grid">
        {/* //*LEFT SIDE */}
        <section className="left-sq">
          <div className="pb-5 2xl:w-3/4 md:w-3/4 sm:w-1/2 mb-[50px]">
            <Image
              src={Coyote}
              alt="laughing coyote logo"
              className="2xl:pt-5 pt-[180px]"
            />
          </div>
        </section>

        {/* //*RIGHT SIDE */}
        <section className="right-sq border-onyx border-l-1">
          <div className=" 2xl:m-5 p-5 sm:m-0 2xl:mt-[150px] lg:mt-5">
            <div className="_textShadow text-onyx font-bold text-4xl">
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
    </motion.div>
  );
};

export default Hero;
