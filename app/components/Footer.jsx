"use client";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="w-full flex justify-center border-t-2 border-onyx bg-white relative bottom-0">
      <div className="flex p-3">
        <span className="font-bold mr-5">
          Copyright @2023 |
          <a
            className="pl-1 hover:text-cerulean"
            href="mailto: elsahvy@gmail.com"
          >
            contact- elsahvy@gmail.com
          </a>
        </span>
        <Link className="underline" href="/about">
          About
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
