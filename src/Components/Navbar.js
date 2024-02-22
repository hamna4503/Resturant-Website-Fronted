import React from "react";
import logo from "./../Assets/images/logo/logo.png";

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-red-900 via-red-700 to-red-400 fixed p-0 top-0 w-screen z-50">
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
          <a
            className="navOptions"
            onClick={() => {
              const section = document.querySelector("#newArrivals");
              section.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
          >
            New
          </a>
          <a
            className="navOptions"
            onClick={() => {
              const section = document.querySelector("#offers");
              section.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
          >
            Offers
          </a>
          <a
            className="navOptions"
            onClick={() => {
              const section = document.querySelector("#menu");
              section.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
          >
            Menu
          </a>
          <a
            className="navOptions"
            onClick={() => {
              const section = document.querySelector("#reviews");
              section.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
          >
            Reviews
          </a>
          <a
            className="navOptions"
            onClick={() => {
              const section = document.querySelector("#outlet");
              section.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
          >
            Outlets
          </a>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
