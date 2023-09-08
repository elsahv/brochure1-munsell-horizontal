import Link from "next/link";
import{ websites} from '@/constants/Websites'
import Image from "next/image";
 

// todo: CREATE POP UP IMAGES FOR EACH WEBSITE

const Websites = () => {
  return (
    <div className="pt-[150px] overflow-y-scroll absolute right-0 md:top-0 bottom-0  2xl:w-[1200px] w-[750px]">
    <div className="grid grid-cols-1 gap-y-12 lg:ml-[100px] ml-[450px]">
      {websites.map((item, index) => (
        <div key={index}>
          <Link target="_blank" href={item.url} className="">
            <div className="pr-5">
              <h2 className="text-2xl text-left font-bold p-2 text-onyx">{item.title}</h2>
                <Image className="2xl:w-full mr-5 dropshadow-2xl border-onyx border-2"
                 src={item.img}
                 alt=""
                />
                <div className="mb-5 pt-1 px-2 text-lg w-3/4 text-onyx">
                  {item.description}
                </div>
                </div>
          </Link>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Websites;
