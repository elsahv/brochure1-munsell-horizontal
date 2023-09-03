import Link from "next/link";
import{ websites} from '@/constants/Websites'
 

// todo: CREATE POP UP IMAGES FOR EACH WEBSITE

const Websites = () => {
  return (
    <div className="text-lg md:pl-3 pl-0 pr-5 grid md:grid-cols-1 grid-cols-1 gap-1 mt-[50px]">
      {websites.map((item, index) => (
        <div key={index}>
          <Link target="_blank" href={item.url} className="">
            <div className="p-1 mt-3 hover:text-onyx">
              <div className="flex items-center">
                {item.icon} |
                <h2 className="hover:underline font-bold text-lg">
                  {item.title}
                </h2>
              </div>
              <p className="text-onyx pl-1">{item.description}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Websites;
