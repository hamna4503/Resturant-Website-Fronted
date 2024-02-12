import React from "react";
import Navbar from "../Components/Navbar";
// import BurgerHome from "../Assets/images/offers/offer 1.png";
import BurgerHome from "../Assets/images/home/homeBurger.png";

function Home() {
  return (
    <div className="bg-gradient-to-r from-red-900 via-red-700 to-red-400">
      <Navbar />
      <div className="flex flex-col md:flex-row align-middle justify-center mt-3">
        <div className="md:mt-10 md:pl-5">
          <h1 className="text-5xl md:text-7xl text-white font-extrabold text-center">
            THE SMOKEY BURGER
          </h1>
          {/* <p className="text-xl font-bold text-yellow-400 text-center">
            Very good burger this is some random text
          </p> */}
          <div className="flex mt-3">
            <p className="block w-24 h-20 text-center font-extrabold m-1 p-2 pt-3 text-red-700 border-blue-950 bg-yellow-400 rounded-full">
              NEW ARRIVAL
            </p>
            <span className="text-base font-bold text-yellow-400  p-1">
              Get free Fries by ordering the Smokey Burger before 11th April
              2024
            </span>
          </div>
        </div>
        <img
          src={BurgerHome}
          alt="burgerPic"
          className="mt-5 ml- 4 self-center md:w-1/2"
        />
      </div>
    </div>
  );
}

export default Home;
