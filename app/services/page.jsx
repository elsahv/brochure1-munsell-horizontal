//TODO: SANITY IMPLEMENTATION

const Work = () => {
  return (
    <div className="main_grid">
      {/* //todo left side */}
      <section className="left-sq">
        {/* //*step 1 */}
        <div className="mt-5 px-5">
          <h2 className="text-3xl font-bold">Services</h2>
          <p>how it works!</p>
          <h3 className="font-bold mt-5">Initial Consulation---</h3>

          <p>
            Starting with a phone interview, I take the time to get to know
            about your business, brand, and website needs. Book now!
          </p>
          <p>
            FOCUS: CTA, ABOUT, CONTACT... From here, we would discuss your
            website goals, needs, and ways to use your brand to provide value
          </p>
          <p>
            Some even found it overwhelming to think about- buying websites and
            maintaining an online presence.... all on top of everything else!
          </p>
          <p>
            {"Here's"} where I can help... With my services, you will never have
            to think about these things ever again!
          </p>
        </div>

        {/* //*step 2 */}
        <div className="mt-[100px] px-5">
          <h3 className="font-bold">Web Design/ UX Layout---</h3>
          <p>
            With your business needs in mind, I start designing a mockup layout.
          </p>
          <p>
            I like to focus on interesting layouts, colorful pages, UX/ UI
            design, mobile and mobile optimization.
          </p>
          <p>
            After finalizing the website design, I build the backbone of the
            site, using Javascript code.
          </p>
          <p>
            I use my own library of dynamic UI components to build out different
            sections and pages. Code is kept up to date, enabling quick loading
            times
          </p>
        </div>
      </section>

      {/* //todo right side */}
      <section className="right-sq">
        {/* //*step 3 */}
        <div className="mt-[100px] px-5">
          <h3 className="font-bold">Web Development---</h3>

          <p>The most exciting phase! Here, we have our final review and Q&A</p>
          <p>
            From here, I make your website live! I either assist with making
            site go live, or continue with the long-term-relationship package
          </p>

          <div className="">
            <h2 className="">-Tech Stack Used-</h2>
            <ul>
              <li>Frontend: Javascript, React, NextJS, Vite</li>
              <li>Backend: Node JS, Vercel</li>
              <li>Apis: Sanity.io</li>
              <li>Pre-code templates, ready for 100% custom styles React</li>
            </ul>
          </div>
        </div>

        {/* //*step 4 */}
        <div className="mt-[50px] px-5">
          <h3 className="font-bold">Launch to Live!---</h3>
          <p>The most exciting phase! Here, we have our final review and Q&A</p>
          <p>
            From here, I make your website live! I either assist with making
            site go live, or continue with the long-term-relationship package
          </p>
          <p>
            Unlimited content updates, your website evolves as your business
            evolves. You wont need to focus on building site, focus on own
            business instead
          </p>
        </div>
      </section>
    </div>
  );
};

export default Work;
