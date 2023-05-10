import Image from "next/image";
import Eh from "../../../public/screenshots/eh.png";
import Roof from "../../../public/screenshots/hoveyroofing.png";
import Jungle from "../../../public/screenshots/jungle.png";
import Wtbh from "../../../public/screenshots/wtbh.png";
import Link from "next/link";

const Gallery = () => {
  return (
    <div className="bg-munsell pb-[100px]">
      {/* //todo LEFT SIDE */}

      <section className="h-full bg-munsell 2xl:w-1/2 lg:w-full 2xl:fixed 2xl:left-0 lg:relative">
        <div className="w-full mt-5 ml-5 px-5 pb-3 text-aquamarine">
          <h2 className="font-bold text-2xl pt-[20px] underline">
            Made it this far?
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut fuga
            rerum deleniti. Dolore sequi numquam distinctio est perferendis
            quasi sunt minima, illum quis suscipit eum nam excepturi ducimus
            culpa sit.
          </p>
          <Link href="/contact">Contact Cta</Link>
        </div>
      </section>

      {/* //todo RIGHT SIDE */}
      <section className="border-black border-l-2 bg-parchment 2xl:w-1/2 lg:w-full 2xl:absolute right-0 lg:relative overflow-scroll flex flex-col px-2 pt-2 pb-[150px]">
        <div className="text-onyx mb-5 w-full drop-shadow-lg pl-3 pb-3">
          <h2 className="font-bold text-2xl pt-[20px]">Gallery</h2>
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
  );
};

export default Gallery;
