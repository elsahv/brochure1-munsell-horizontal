"use client";

import Image from "next/image";
import { AiOutlineArrowDown } from "react-icons/ai";
import content from "./data";
import { motion } from "framer-motion";

const Gallery = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1, duration: 0.5 }}
    >
      <div id="gallery" className="bg-munsell pb-[100px]">
        <section className="bg-munsell flex flex-col pb-[150px]">
          <div className="bg-cerulean mb-5 w-full drop-shadow-lg border-onyx border-b-2 pl-5 pb-3">
            <h2 className="_textShadow font-bold text-4xl pt-[50px] pb-5">
              Featured Websites
            </h2>
          </div>
          {/* //todo SANITY IMPLEMENT */}
          {/*//todo IMPLEMENT HORIZONTAL SCROLL AT DESKTOP */}
          <section className="mt-5 pt-5 px-3 grid 2xl:grid-cols-2 sm:grid-cols-1 gap-5">
            <>
              {content.map((item, index) => (
                <div className="px-5" key={index}>
                  <h2 className="text-2xl text-onyx drop-shadow-lg p-2">
                    {item.title}
                  </h2>
                  <Image
                    src={item.image}
                    alt=""
                    className="drop-shadow-lg border border-black"
                  />
                  <p className="text-onyx drop-shadow-lg p-2">
                    {item.paragraph1}
                  </p>
                </div>
              ))}
            </>
          </section>
        </section>
      </div>
    </motion.div>
  );
};

export default Gallery;
