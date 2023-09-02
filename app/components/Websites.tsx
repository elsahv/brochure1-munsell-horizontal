import Link from "next/link";
import { FaBattleNet } from "react-icons/fa";
import { MdRoofing } from "react-icons/md";
import { RiPlantFill } from "react-icons/ri";
import { CgGym } from "react-icons/cg";
import { FiArrowRight } from "react-icons/fi";



export const websites = [
  {
    id: 1,
    title: "Laughing Coyote Dev ",
    description:
      "Currently a freelancing landing page, revolving around web design service for small businesses and creatives.",
    url: "https://laughingcoyote.dev",
    icon: <FiArrowRight />,
  },
  // {
  //   id: 2,
  //   title: "The Indoor Jungle Project",
  //   description:
  //     "A future houseplant planner and tracker",
  //   url: "https://theindoorjungleproject.com",
  //   icon: <FiArrowRight />,
  // },
  {
    id: 3,
    title: "Writing to Better Health",   
    description:
    "A future blog about nutrition and mental wellness.",
    url: "https://writingtobetterhealth.com",
    icon: <FiArrowRight />,
  },
  {
    id: 4,
    title: "The Running Quail",   
    description:
      "A future Morongo Basin Community, CA.",            
    url: "https://therunningquail.com",
    icon: <FiArrowRight />,
  },
];

// todo: CREATE POP UP IMAGES FOR EACH WEBSITE

const Websites = () => {
  return (
    <div className="text-lg md:pl-3 pl-0 pr-5 grid md:grid-cols-1 grid-cols-1 gap-1 mt-[50px]">
      {websites.map((item, index) => (
        <div key={index}>
          <Link target="_blank" href={item.url} className="">
            <div className="p-1 mt-3 hover:text-onyx">
              <div className="flex items-center">
                {item.icon} |
                <h2 className="hover:underline font-bold text-lg">
                  {item.title}
                </h2>
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
