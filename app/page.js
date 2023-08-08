import Image from "next/image";
import Coyote from "../public/jt-munsell.png";
import Link from "next/link";

export const websites = [
  {
    id: 0,
    title: "Laughing Coyote Dev",
    url: "https://laughingcoyote.dev",
  },
  {
    id: 1,
    title: "The Running Quail",
    url: "https://therunningquail.com",
  },
  {
    id: 2,
    title: "Writing to Better Health",
    url: "https://writingtobetterhealth.com",
  },
  {
    id: 3,
    title: "The Indoor Jungle Project",
    url: "https://theindoorjungleproject.com",
  },
];

export default function Home() {
  return (
    <div className="bg-munsell">
      <div className="main_grid">
        {/* //*LEFT SIDE */}
        <section className="left-sq flex justify-start items-end">
          <Image src={Coyote} alt="laughing coyote logo" className="w-full" />
        </section>

        {/* //*RIGHT SIDE */}
        <section className="right-sq border-onyx border-l-1">
          <div className=" 2xl:m-5 p-5 sm:m-0 2xl:mt-[150px] lg:mt-5">
            <div className="font-bold text-cerulean font-bold text-4xl">
              Hi there, {"I'm"} Elsa...
            </div>
            <p className="text-aquamarine mt-1 mb-5 mx-1 text-2xl pt-2">
              {"I'm"} a web developer based in Joshua Tree, CA. Listed below are
              some websites {"I've"} created
              {/* I create niche websites and solutions for small business owners and creatives. */}
            </p>

            <div className="text-lg">
              {websites.map((item, index) => (
                <div key={index}>
                  <Link
                    href={item.url}
                    className="hover:text-white hover:underline"
                  >
                    <h2>- {item.title}</h2>
                  </Link>
                </div>
              ))}
            </div>
            <div className="text-onyx mt-1 mb-5 mx-1 text-2xl pt-2">
              <span className="pr-2">Contact me at</span>
              <a className="hover:underline" href="mailto: elsahvy@gmail.com">
                elsahvy@gmail.com
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
