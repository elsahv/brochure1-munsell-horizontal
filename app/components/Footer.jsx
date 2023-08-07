"use client";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="w-full flex justify-center border-t-2 border-onyx bg-white relative bottom-0">
      <div className="flex p-3">
        <ul className="flex justify-between">
          <span className="font-bold mr-5">Copyright @2023</span>
          <span className="mr-5">Contact</span>
          <span className=" mr-5">Newsletter</span>
          <li className="mx-1">
            <a href="/">
              <AiFillGithub className="text-2xl text-onyx" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
