"use client";
import Link from "next/link";
import Hamburger from "./Hamburger";

const Header = () => {
  return (
    <>
      {/* //todo  */}
      <div className="w-full 2xl:relative fixed bg-white top-0 z-50 flex justify-center border border-black">
        <div className="2xl:hidden">
          <Hamburger />
        </div>
        <header className="">
          <nav className="2xl:py-5 md:p-3 pb-0">
            <ul className="2xl:flex">
              <Link href="/" className="mx-2 text-lg">
                <h1 className=" pr-4 font-bold 2xl:text-2xl md:text-4xl text-3xl ml-3 pl-4 sm:ml-5 mr-0">
                  Elsa Hovey
                </h1>
              </Link>

              <Link
                className="hidden 2xl:block mx-3 pt-1 hover:text-cerulean"
                href="/services"
              >
                Illustrative Mindmaps
              </Link>

              <Link
                className="hidden 2xl:block ml-5 px-3 drop-shadow-lg border border-black bg-munsell hover:text-aquamarine mx-2 pt-1"
                href="/contact"
              >
                Featured Websites
              </Link>
            </ul>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Header;
