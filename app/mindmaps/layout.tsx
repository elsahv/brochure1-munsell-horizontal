import Leftbar from "../components/Leftbar"
import TestHeader from "../components/TestHeader"

export default function MindmapLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
        <TestHeader />
          <Leftbar /> 
         <div className="bg-white">   
        {children}
        </div>
      </section>
    )
  }