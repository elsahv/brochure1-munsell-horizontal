import Link from "next/link"
import About from "./About/page"
import Services from "./Services"
import Image from "next/image";
import Self from "../../public/self.jpg";
import JtLogo from "../../public/jt-logo.png";


const Leftbar = () => {
  return (
    <div className="bg-white border-black border-r-2 h-screen overflow-y-scroll overflow-x-hidden
     2xl:w-[680px] md:w-1/3 w-full lg:fixed z-50">
        <div className="text-lg flex flex-col gap-5">
          <div className="grid 2xl:grid-cols-2 grid-cols-1">
      <Image className="border border-black"
       src={Self}
       alt=""
      /> 
      
        <div className-="">
          <p className="flex items-end pl-5 h-full">Hi there, {"I'm"} Elsa. <br />{"I'm"} a web developer based in Joshua Tree, CA.</p>
         </div>
        </div>

        <div className="grid 2xl:grid-cols-2 grid-cols-1">
        <p className="pt-5">Over the last decade, {"I've"} hoarded and thought of many different and creative ideas.
       Since 2019, {"I've"} decided to learn how to bring these ideas to life through javascript progamming and frameworks.</p>
       <div>
       <Image src={JtLogo} alt="laughing coyote logo" className="w-full" />
       </div>
       </div>
      
      
      
        <p>
                 My days are spent working on
                my websites, and freelance projects. I am also very interested
                in working with other developers to gain team building
                experience, and build up a network to bounce ideas off of.
              </p>

        <p className="">Listed are some of my featured websites, all builds are currently in progress... You can view my coding progress through
           <Link href="https://github.com/elsahv" className="ml-1 hover:text-onyx underline"> 
           github.
           </Link>
           and my portfolio
           <Link href="https://elsahovey.com/mindmaps" className="ml-1 hover:text-onyx underline"> 
            here
            </Link>           
           
           </p>
       
         
        </div>
      <div className="px-5"> 
          {/* <About />
          <Services /> */}
      </div>
   

      </div>
  )
}

export default Leftbar