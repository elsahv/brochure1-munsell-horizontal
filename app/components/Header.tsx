"use client";
import Link from "next/link";
import {menuItems} from '@/constants/MenuItems'
 

const Header = () => {
  return (
    <header className="w-full bg-white flex flex-row 2xl:justify-center justify-left border border-black fixed z-20.">
      <nav className="2xl:py-5 md:pt-[25px] p-3">
        <div className="flex">
            <h1 className="pr-4 mr-3 font-bold text-3xl md:ml-3 ml-0 lg:pl-4 pl-0 text-onyx">
              Elsa Hovey
            </h1>
          <div className="flex items-center pr-5">
            <Link href="/" className="pt-1 pr-5 pl-3">Portfolio</Link>
            <Link href="/mindmaps" className="pt-1 pr-5 pl-3">About/ Mindmaps</Link>
            {menuItems.map((item, index) => (
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
