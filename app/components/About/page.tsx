import Image from "next/image";
import content from "./data";

const About = () => {
  return (
    <div id="about-section" className="pt-[50px]">
      <div className="flex lg:flex-row flex-col">
        <h2 className="text-4xl font-bold">About</h2>
      </div>
      <div className="text-black text-lg mb-[50px]">
        <p className="">
          -So why should you bother with a website? What can a website do for
          your business?
        </p>
        <p className="py-2">
          -A website provides a platform for small businesses to showcase their
          products or services to a wider audience.
        </p>
   
      </div>

      <div className="my-5">
        {content.map((item, index) => (
          <div key={index}>
            <h3 className="text-2xl text-onyx my-3 font-bold">
              {item.id}.{item.title}---
            </h3>
            {/* </div> */}
            <Image
              src={item.image}
              className="border border-onyx 2xl:w-1/2 w-3/4"
              alt=""
            />
            <div className="pt-3 mb-[150px] pl-3 pr-5 leading-6">
              <p className="pt-2">- {item.paragraph1}</p>
              <p className="py-5">- {item.paragraph2}</p>
              <p>- {item.paragraph3}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
