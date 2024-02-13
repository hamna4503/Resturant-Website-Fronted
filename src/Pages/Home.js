import React from "react";
import Navbar from "../Components/Navbar";
// import BurgerHome from "../Assets/images/offers/offer 1.png";
// import BurgerHome from "../Assets/images/home/png-image (2).png";

import BurgerHome from "../Assets/images/home/homeBurger.png";
import Offers from "./Offers";

function Home() {
  return (
    <div className="bg-gradient-to-r from-red-900 via-red-700 to-red-400">
      <Navbar />
      <div className="flex flex-col  p-3 align-middle justify-center sm:mt-8 mt-3 md:flex-row md:mt-4">
        <div className="md:pl-5">
          <h1 className="text-5xl text-white font-extrabold text-center sm:text-7xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:mt-20">
            THE SMOKEY BURGER
          </h1>
          <div className="flex mt-3 sm:align-middle sm:justify-center 2xl:pt-20">
            <p className="block w-24 h-24 text-center text-lg font-extrabold ml-1 mt-2 p-3 pt-4 -rotate-12 text-red-700 bg-yellow-400 rounded-full sm:w-32 sm:h-32 sm:text-2xl sm:pt-5 2xl:w-40 2xl:h-40 2xl:text-3xl 2xl:pt-7">
              NEW ARRIVAL
            </p>
            <span className="mt-0.5 font-bold pl-3 pr-5 pt-4 text-yellow-300 sm:text-2xl sm:pt-10 md:text-xl md:pb-13 lg:pt-12 xl:text-3xl xl:pt-8 2xl:text-4xl 2xl:pt-12">
              Grab the Smokey Burger for only Rs 799/-
            </span>
          </div>
        </div>
        <img
          src={BurgerHome}
          alt="burgerPic"
          className="mt-5 ml-4 self-center md:w-1/2"
        />
      </div>
      <Offers/>
    </div>
  );
}

export default Home;
