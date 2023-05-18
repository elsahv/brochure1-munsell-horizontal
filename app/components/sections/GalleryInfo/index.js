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
      <div className="bg-munsell pb-[100px]">
        <section className="border-black border-l-2 bg-munsell flex flex-col px-2 pt-2 pb-[150px]">
          <div className=" mb-5 w-full drop-shadow-lg pl-5 pb-3">
            <h2 className="_textShadow font-bold text-2xl pt-[50px]">
              Gallery
            </h2>
            <div className="my-3 text-lg">
              <p>
                All small businesses should have a website. While social media
                is useful, it is important for small businesses to have its own
                home.
              </p>
              <div className="flex">
                <AiOutlineArrowDown className="mt-1 mr-2" />
                Scroll down to see various designs for...
              </div>
            </div>
          </div>
          <section className="grid grid-cols-2 gap-5">
            <>
              {content.map((item, index) => (
                <div className="" key={index}>
                  <h2 className="text-2xl">{item.title}</h2>
                  <Image
                    src={item.image}
                    alt=""
                    className="drop-shadow-lg border border-black"
                  />
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
