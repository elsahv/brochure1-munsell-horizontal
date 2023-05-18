import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

const Hamburger = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <div className="h-1/2 pt-5 pl-3">
      <div className="text-2xl p-5 text-munsell">
        <GiHamburgerMenu onClick={showSidebar} />
      </div>
      <div>
        <div className={sidebar ? "nav-menu active" : "nav-menu"}>
          <div onClick={showSidebar}>
            <div className="pl-5 pt-5 ">
              <GrClose />
            </div>
            <ul className="p-5 text-2xl ">
              <li>
                <a href="/#services">Services</a>
              </li>

              <li>
                <a href="/#packages">Packages</a>
              </li>

              <li>
                <a href="/#gallery">Gallery</a>
              </li>

              <li>
                <a href="/#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
