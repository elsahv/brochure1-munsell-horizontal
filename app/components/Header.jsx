"use client";
import Link from "next/link";
// import Hamburger from "./Hamburger";

const Header = () => {
  return (
    // <>
    <header className="fixed top-0 z-50 w-full flex justify-center border-b-2 border-onyx bg-white">
      <nav className="2xl:p-5 md:p-3 sm:shrink-0 pb-5">
        <ul className="2xl:flex lg:shrink-0">
          <Link href="/" className="mx-2 text-lg">
            <h1 className="font-bold text-2xl ml-3 pl-4 sm:ml-5 mr-0">
              Laughing Coyote
            </h1>
          </Link>
          <Link href="/services" className="mx-2 pt-1">
            Services
          </Link>

          {/* //todo MAKE VISIBLE WHEN READY... */}
          {/* <Link href="/work" className="mx-2">
            Work Process
          </Link> */}
          <Link href="/gallery" className="mx-2 pt-1">
            Gallery
          </Link>

          {/* //todo MAKE VISIBLE WHEN READY... */}
          {/* <Link href="/creative-projects" className="mx-2">
            Creative Projects
          </Link> */}
          <Link
            href="/contact"
            className="ml-5 pt-0.5 px-3 drop-shadow-lg border border-black bg-munsell hover:bg-aquamarine hover:text-munsell"
          >
            Contact
          </Link>
        </ul>
      </nav>
    </header>
    // </>
  );
};

export default Header;
