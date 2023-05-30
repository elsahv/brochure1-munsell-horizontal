"use client";
import Link from "next/link";
import Hamburger from "./Hamburger";

const Header = () => {
  return (
    <>
      <div className="w-full 2xl:relative fixed bg-white top-0 z-50 flex justify-center border border-black">
        <div className="2xl:hidden">
          <Hamburger />
        </div>
        <header className="">
          <nav className="2xl:py-5 md:p-3 pb-0">
            <ul className="2xl:flex">
              <Link href="/" className="mx-2 text-lg">
                <h1 className=" pr-4 font-bold 2xl:text-2xl md:text-4xl text-3xl ml-3 pl-4 sm:ml-5 mr-0">
                  Laughing Coyote
                </h1>
              </Link>
              <Link
                href="/services"
                className="hidden 2xl:block mx-3 pt-1 hover:text-cerulean"
              >
                Services
              </Link>

              {/* //todo MAKE VISIBLE WHEN READY */}
              {/* <Link
                href="/work"
                className="hidden 2xl:block mx-3 pt-1 hover:text-cerulean"
              >
                Work Process
              </Link> */}
              <Link
                href="/packages"
                className="hidden 2xl:block mx-3 pt-1 hover:text-cerulean"
              >
                Packages
              </Link>

              <Link
                href="/creative-projects"
                className="hidden 2xl:block mx-3 pt-1 hover:text-cerulean"
              >
                Creative Projects
              </Link>
              {/* //todo SUBMENU: 1.TEMPLATES, 2.WEBSITE GALLERY, 3.BLOG */}

              <Link
                href="/contact"
                className="hidden 2xl:block ml-5 px-3 drop-shadow-lg border border-black bg-munsell hover:text-aquamarine mx-2 pt-1"
              >
                Contact
              </Link>
            </ul>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Header;
