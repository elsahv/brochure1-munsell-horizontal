import Link from "next/link";
import React from "react";

const Creativeposts = () => {
  return (
    <div className="main_grid">
      <section className="left-sq text-center">
        <h2 className="text-cerulean underline pt-[90px] text-4xl py-5">
          Creative posts
        </h2>
        <ul className="">
          <li className="text-aquamarine text-3xl bg-teal mt-5 hover:text-white cursor-pointer">
            <Link href="/">Website Case Studies</Link>
          </li>
          <li className="text-aquamarine text-3xl py-5 mt-5 hover:text-white cursor-pointer">
            <Link href="/">Blog</Link>
          </li>
        </ul>
      </section>
      <section className="right-sq text-center">
        <h2 className="text-cerulean underline pt-[90px] text-4xl py-5">
          Other Websites
        </h2>
        <ul className="">
          <li className="text-aquamarine text-3xl my-5 hover:text-white cursor-pointer">
            <a href="https://elsahovey.com">View developer portfolio</a>
          </li>
          <li className="text-aquamarine text-3xl py-5 mt-5 hover:text-white cursor-pointer">
            <Link href="/">The Running Quail</Link>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Creativeposts;
