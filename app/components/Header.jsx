"use client";
import Link from "next/link";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillMail,
  AiOutlineInstagram,
} from "react-icons/ai";

export const MenuItems = [
  {
    menuItem: <AiFillLinkedin />,
    url: "https://linkedin.com",
  },
  {
    menuItem: <AiFillGithub />,
    url: "https://github.com",
  },
  // {
  //   menuItem: <AiOutlineInstagram />,            // todo: <-- MAKE VISIBLE WHEN READY
  //   url: "https://instagram.com",
  // },
  {
    menuItem: <AiFillMail />,
    url: "mailto: elsahvy@gmail.com",
  },
];

const Header = () => {
  return (
    <header className="w-full bg-white flex flex-row 2xl:justify-center justify-left border border-black">
      <nav className="2xl:py-5 md:pt-[25px] p-3">
        <div className="flex">
          <Link href="/">
            <h1 className="pr-4 mr-3 font-bold text-3xl md:ml-3 ml-0 lg:pl-4 pl-0 text-onyx">
              Elsa Hovey
            </h1>
          </Link>
          {/* //todo  */}
          <div className="flex pr-5">
            {MenuItems.map((item, index) => (
              <div key={index}>
                <div className="cursor-pointer text-2xl border border-black bg-munsell hover:text-aquamarine mx-1 px-2 py-1">
                  <a href={item.url}>{item.menuItem}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
