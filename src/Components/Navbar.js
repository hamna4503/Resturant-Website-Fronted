import React from "react";
import logo from "./../Assets/images/logo/logo.png";

function Navbar() {
  return (
    <nav className="bg-transparent">
      <div className="flex justify-between align-middle flex-col sm:flex-row  text-white">
        <div className="flex justify-center ml-2 sm:text-lg">
          <img
            src={logo}
            alt="Logo"
            className="w-10 h-12 sm:mt-1 sm:w-12 sm:h-13"
          />
          <div className="text-center text-xl font-extralight pt-5 sm:ml-3 hover:text-yellow-500">
            BURGERO
          </div>
        </div>
        <ul className=" flex justify-around font-medium text-base sm:mr-3 sm:justify-evenly sm:w-2/3 md:w-1/2 lg:w-2/5">
          <a className="navOptions" href="/">
            New
          </a>
          <a className="navOptions" href="/Menu">
            Menu
          </a>
          <a className="navOptions" href="/Offers">
            Offers
          </a>
          <a className="navOptions" href="/About">
            About
          </a>
          <a className="navOptions" href="/Contact">
            Contact
          </a>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
