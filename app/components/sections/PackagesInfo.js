import Link from "next/link";

const PackagesInfo = () => {
  return (
    <section className="bg-munsell h-[780px] px-5 pb-3">
      <h2 className="underline text-center font-bold text-3xl py-5">
        Monthly Packages
      </h2>
      <div className="grid grid-cols-2 px-[150px] my-5 text-onyx">
        {/*//* 1 */}
        <div className="bg-parchment text-right px-5 mt-5 pr-5 py-5 border border-black rounded-lg">
          <h3 className="text-4xl pb-5 font-bold drop-shadow-md">
            Brochure Site:
          </h3>
          <ul className="text-xl">
            <li>* initial build: $99</li>
            <li>Each site comes with:</li>
            <li>a call to action section</li>
            <li>an about section</li>
            <li>and a contact section</li>
          </ul>
        </div>
        {/*//* 2 */}
        <div className="bg-parchment text-left mt-5 pl-5 py-5 mx-5 my-3 border border-black rounded-lg">
          <h3 className="text-4xl pb-5 font-bold drop-shadow-md">
            Brochure Site w/ Monthly Services
          </h3>
          <ul className="text-xl">
            <li>* initial build: $99</li>
            <li>Each site comes with:</li>
            <li>a call to action section</li>
            <li>an about section</li>
            <li>and a contact section</li>
            <li>hosting</li>
            <li>domain set up</li>
            <li>* updates and maintenance: per mth-$20, per year- $240</li>
          </ul>
        </div>
      </div>
      {/*//* CTA */}
      <div className="text-center pt-5 text-lg">
        Need something else for you website?{" "}
        <span className="underline px-2 font-bold">
          <Link href="/contact">Contact</Link>
        </span>
        for a custom quote!
      </div>
      <div className="pt-1 text-onyx text-center pr-[50px] text-lg pb-5">
        * Startup Sale! Take advantage of these prices while you can!
      </div>
    </section>
  );
};

export default PackagesInfo;
