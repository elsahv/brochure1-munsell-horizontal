import Image from "next/image";
import content from "./data";
import Link from "next/link";

const Services = () => {
  return (
    <div id="services" className="main_grid">
      {/* //*LEFT SQ */}
      <section className="left-sq pt-[80px] bg-parchment text-onyx border-onyx border-r-2">
        <div className="mb-[50px] 2xl:mx-5 2xl:px-5 sm:px-1 sm:mx-1">
          <h2 className="font-bold text-2xl mb-5">
            So why should you bother with a website? What can a website do for
            your business?
          </h2>

          <p className="text-lg pl-1 py-2">
            -A website provides a platform for small businesses to showcase
            their products or services to a wider audience.
          </p>
          <p className="text-lg py-2">
            -Why should you prefer a custom-made website, when you can simply
            use wix or wordpress? Because a custom website fits your business,
            personality, goals... and you alone.
          </p>
          <p className="text-lg pl-1 py-2">
            -Because each and every page and code was made with you in mind.
            Either you fit the website, or the website fits you!
          </p>
          <p className="text-lg pl-1 py-2 pb-[50px]">
            -Laughing Coyote Dev was created to simplify the process of bringing
            your business online. Each site build comes with multiple services,
            leaving your more time to focus on your business instead!
          </p>

          <Link
            className="text-lg bg-munsell py-2 px-3 border border-cerulean rounded-sm"
            href="/gallery"
          >
            View Website Designs/ Quotes
          </Link>
        </div>
      </section>

      {/* //*RIGHT SQ */}
      <section className="right-sq">
        <div className="py-5b ">
          <h2 className="font-bold text-2xl mt-5 text-center underline ">
            Services Offered:
          </h2>
          <div className="grid 2xl:grid-cols-3 gap-2 md:grid-cols-2 sm:grid-cols-1 px-5 mt-5 ">
            {content.map((item, index) => (
              <div key={index} className="rounded-lg bg-onyx">
                <h3 className="text-center font-bold text-parchment pt-3">
                  {item.title}
                </h3>
                <div className="flex justify-center py-2">
                  <Image
                    src={item.image}
                    alt=""
                    id="border"
                    className="rounded-2xl w-16 p-3 bg-parchment border border-onyx"
                  />
                </div>
                <p className="px-2 pt-1 pb-3 text-md text-center text-aquamarine">
                  {item.paragraph1}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
