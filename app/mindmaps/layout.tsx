import Leftbar from "../components/Leftbar"
import Header from "../components/Header"
// import Footer from "../components/Footer"

export default function MindmapLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
        <Header />
          <Leftbar /> 
         <div className="bg-white">   
        {children}
        </div>
        {/* <Footer /> */}
      </section>
    )
  }