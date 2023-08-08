"use client";
import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";

export const MenuItems = [
  {
    menuItem: <AiFillLinkedin />,
    url: "https://linkedin.com",
  },
  {
    menuItem: <AiFillGithub />,
    url: "https://github.com",
  },
  {
    menuItem: <AiFillMail />,
    url: "mailto: elsahvy@gmail.com",
  },
];

const Header = () => {
  return (
    <header className="w-full 2xl:relative fixed bg-white top-0 z-50 flex justify-center border border-black">
      <nav className="2xl:py-5 md:p-3 pb-0">
        <div className="flex">
          <h1 className="pr-4 mr-3 font-bold text-3xl ml-3 pl-4 text-onyx">
            Elsa Hovey
          </h1>
          {/* //todo  */}
          <div className="flex">
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
