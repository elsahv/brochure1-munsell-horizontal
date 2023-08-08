import Link from "next/link";
import { FaBattleNet } from "react-icons/fa";
import { MdRoofing } from "react-icons/md";
import { RiPlantFill } from "react-icons/ri";

export const websites = [
  {
    id: 0,
    title: "Laughing Coyote Dev ",
    description:
      "Currently a freelancing landing page, revolving around web design service for small businesses and creatives.",
    url: "https://laughingcoyote.dev",
    icon: <FaBattleNet />,
  },
  {
    id: 1,
    title: "The Indoor Jungle Project",
    description:
      "A future blog about working from home, and finding creativity through houseplant projects.",
    url: "https://theindoorjungleproject.com",
    icon: <RiPlantFill />,
  },
  {
    id: 2,
    title: "HoveyRoofing",
    description: "A website for small business, HoveyRoofing from Redlands, CA",
    url: "https://hoveyroofing.com",
    icon: <MdRoofing />,
  },
  // {
  //   id: 3,
  //   title: "Writing to Better Health",
  //   url: "https://writingtobetterhealth.com",
  // },
  // {
  //   id: 4.,
  //   title: "The Running Quail",
  //   url: "https://therunningquail.com",
  // },
];

const Websites = () => {
  return (
    <div className="text-lg pl-3 pr-5">
      {websites.map((item, index) => (
        <div key={index}>
          <Link target="_blank" href={item.url} className="">
            <div className="p-1 mt-3 hover:text-onyx">
              <div className="flex items-center">
                {item.icon} |
                <h2 className="font-bold text-lg pl-1">{item.title}</h2>
              </div>
              <p className="text-onyx pl-1">{item.description}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Websites;
