import Link from "next/link";
import React from "react";




export const mindMaps = [
  {
    id: 1,
    title: "Journal Demo",
    // image: Temp1,
    // paragraph:"- view website for small business, located in San Bernardino CA.",
    // categories: "categories",
    // url: "https://google.com",
  },
  {
    id: 2,
    title: "Horizontal Layout Demo",
    // image: Temp2,
    // paragraph: "- view website for small business, located in Redlands CA. rporis aut autem porro saepe modi atque voluptates expedita! ",
    // categories: "categories",
    // url: "https://hoveyroofing.com",
  },
  {
    id: 3,
    title: "Blog-Right Sidebar Demo",
    // image: Temp3,
    // paragraph: "-  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio corporis, illo aliquam vitae nisi perferendis suscipit quam neque, ea soluta distinctio tempore quo et dicta.",
    // categories: "categories",
    // url: "https://lc-blog-right-sidebar-demo.vercel.app/",
  },
  {
    id: 4,
    title: "Business Hero Demo!",
    // image: Temp4,
    // paragraph: "- view website for small business, located in Redlands CA.",
    // categories: "categories",
    // url: "https://hoveyroofing.com",
  },
  {
    id: 5,
    title: "Plants Blog Demo",
    // image: Temp5,
    // paragraph:"-  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio corporis, illo aliquam vitae nisi perferendis suscipit quam neque, ea soluta distinctio tempore quo et dicta.",
    // categories: "categories",
    // url: "https://google.com",
  },

  {
    id: 6,
    title: "Photography Layout Demo",
    // image: Temp6,
    // paragraph: "- view website for small business, located in Redlands CA. rporis aut autem porro saepe modi atque voluptates expedita! ",
    // categories: "categories",
    // url: "https://photography-demo-xi.vercel.app/",
  },
];


const Mindmaps = () => {
  return (
        <section id="right-side" className="w">
        {mindMaps.map((mindMap) => (
            <div key={mindMap.title}>
              <h2>{mindMap.title}</h2>
            </div>
          ))}
        </section>
  );
};

export default Mindmaps;