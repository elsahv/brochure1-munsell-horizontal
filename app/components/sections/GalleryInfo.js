"use client";

import Image from "next/image";
import Eh from "../../../public/screenshots/eh.png";
import Roof from "../../../public/screenshots/hoveyroofing.png";
import Jungle from "../../../public/screenshots/jungle.png";
import Wtbh from "../../../public/screenshots/wtbh.png";
import Link from "next/link";
import { motion } from "framer-motion";

const Gallery = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1, duration: 0.5 }}
    >
      <div className="bg-munsell pb-[100px] text-center">
        {/* //todo LEFT SIDE */}

        <section className="h-full bg-munsell 2xl:w-1/2 lg:w-full 2xl:fixed 2xl:left-0 lg:relative">
          <div className="2xl:w-3/4 lg:w-full mt-5 2xl:ml-[70px] lg:ml-1 px-5 pb-3">
            <h2 className="_textShadow text-onyx text-center font-bold text-3xl pt-[70px] py-1">
              Monthly Packages
            </h2>
            {/*//* 1 */}
            <div className=" text-aquamarine pl-5 py-5 mx-5 my-3 drop-shadow-md border border-onyx bg-cerulean">
              <h3 className="_textShadow text-2xl font-bold ">
                Brochure Site:
              </h3>
              <ul className="text-lg">
                <li>* initial build: $99</li>
                <li>Each site comes with:</li>
                <li>a call to action section</li>
                <li>an about section</li>
                <li>and a contact section</li>
              </ul>
            </div>
            {/*//* 2 */}
            <div className=" text-aquamarine mt-5 pl-5 py-5 mx-5 my-3 drop-shadow-md border border-onyx bg-cerulean">
              <h3 className="_textShadow text-2xl font-bold ">
                Brochure Site w/ Monthly Services
              </h3>
              <ul className="text-lg">
                <li>* initial build: $99</li>
                <li>Each site comes with:</li>
                <li>a call to action section</li>
                <li>an about section</li>
                <li>and a contact section</li>
                <li>hosting</li>
                <li>domain set up</li>
                <li>* updates and maintenance: per mth-$20, per year- $240</li>
              </ul>
            </div>
            {/*//* 3 */}
            <div className="text-center pt-5 text-lg">
              Need something else for you website?{" "}
              <span className="underline px-2 font-bold">
                <Link href="/contact">Contact</Link>
              </span>
              for a custom quote!
            </div>
          </div>
          <div className="pt-1 text-onyx text-center pr-[50px] text-lg pb-5">
            * Startup Sale! Take advantage of these prices while you can!
          </div>
        </section>

        {/* //todo RIGHT SIDE */}
        <section className="border-black border-l-2 bg-munsell 2xl:w-1/2 lg:w-full 2xl:absolute right-0 lg:relative overflow-scroll flex flex-col px-2 pt-2 pb-[150px]">
          <div className="text-onyx mb-5 w-full drop-shadow-lg pl-3 pb-3">
            <h2 className="font-bold text-2xl pt-[50px]">Gallery</h2>
            <p className="my-3 text-lg">
              All small businesses should have a website. While social media is
              useful, it is important for small businesses to have its own home.
              Scroll down to see various designs for...
            </p>
          </div>
          {/* //*1 */}
          <div className=" mb-5 mx-5 drop-shadow-lg rounded-sm">
            <h2 className="py-3 text-xl text-onyx font-bold pl-1  ">
              ...Content Creators
            </h2>
            <Image src={Eh} alt="" className="border border-black" />
          </div>

          {/* //*2 */}
          <div className="mx-5 my-5 text-onyx drop-shadow-lg rounded-sm">
            <h2 className="py-2 text-xl font-bold pl-1">...Small Businesses</h2>
            <Image src={Roof} alt="" className="b-5 border border-black" />
          </div>

          {/* //*3 */}
          <div className="mx-5 my-5 drop-shadow-lg rounded-sm">
            <h2 className="py-3 text-xl text-onyx font-bold pl-1 pb-1">
              ...Artists
            </h2>
            <Image src={Wtbh} alt="" className="border border-black" />
          </div>

          {/* //*4 */}
          <div className="mx-5 my-5 drop-shadow-lg rounded-sm">
            <h2 className="py-5 text-xl text-onyx font-bold pl-1 pb-1">
              ...and much more!
            </h2>
            <Image src={Jungle} alt="" className="border border-black" />
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default Gallery;
