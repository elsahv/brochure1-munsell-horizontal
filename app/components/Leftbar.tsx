import About from "./About/page"
import Services from "./Services"



const Leftbar = () => {
  return (
    <div className="bg-munsell border-black border-r-2 2xl:w-[620px] w-[400px] h-screen fixed z-20 left-0 top-0 overflow-y-scroll overflow-x-hidden">
      <div className="px-5"> 
        <About />
        <Services />
      </div>
      </div>
  )
}

export default Leftbar