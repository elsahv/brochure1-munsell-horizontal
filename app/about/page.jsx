import Image from "next/image";
import JtLogo from "../../public/self.jpg";

const page = () => {
  return (
    <div className="main_grid">
      {/*//* LEFT SQ */}
      <section className="flex justify-end">
        <div className="text-center">grid</div>
        <div className="w-1/2 h-1/2">
          <Image
            src={JtLogo}
            alt="laughing coyote logo"
            className="drop-shadow-lg border border-black"
          />
        </div>
      </section>

      {/* //*RIGHT SQ */}
      <section id="right-sq" className="right-sq">
        <h2 className="pt-[50px] font-bold text-3xl pr-3">About</h2>

        <div className="h-3/4 flex flex-col">
          <p className="pt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            numquam, aliquid illum iusto nemo non rem earum fuga. Provident,
            atque voluptates impedit ut beatae repudiandae corporis eum
            perferendis est architecto. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Sint numquam, aliquid illum iusto nemo non rem
            earum fuga. Provident, atque voluptates impedit ut beatae
            repudiandae corporis eum perferendis est architecto.
          </p>
          <p className="pt-5 mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            numquam, aliquid illum iusto nemo non rem earum fuga. Provident,
            atque voluptates impedit ut beatae repudiandae corporis eum
            perferendis est architecto.
          </p>
        </div>
      </section>
    </div>
  );
};

export default page;
