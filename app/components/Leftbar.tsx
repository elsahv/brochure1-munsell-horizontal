import About from "./About/page"
import Services from "./Services"



const Leftbar = () => {
  return (
    <div className="bg-munsell border-black border-r-2 w-[620px] h-screen z-10 absolute left-0 top-0">
      <ul>
        <li>leftbar header</li>

        <About />
        {/* <li>services</li> */}
        <Services />
        <li>contact</li>
      </ul>
      </div>
  )
}

export default Leftbar