import React from "react";
import offer1 from "../../src/Assets/images/offers/offer2.jpg";
import offer2 from "../../src/Assets/images/offers/offer3.jpg";
import offer3 from "../../src/Assets/images/offers/offer4.jpg";

function Offers() {
  return (
    <div>
      <div className="flex flex-col w-screen md:flex-row bg-gray-600">
        <div className="w-screen h-3/4 md:w-1/2 md:h-screen relative mr-0.5">
          <img
            src={offer3}
            alt="Offer1"
            className="w-full opacity-60 hover:opacity-55 md:h-screen h-1/2 object-cover"
          />
          <div className="absolute bottom-1/4 font-extrabold text-6xl text-gray-200 p-4 pl-6">
            <h1 className="font-bold text-3xl">Deal of the day</h1>
            <h1>Quinoa Burger</h1>
            <button className="font-normal text-lg bg-red-800 px-4 py-2 rounded-lg hover:bg-red-700">
              Order Now
            </button>
          </div>
        </div>

        <div className="flex flex-col h-screen w-screen md:w-1/2">
          <div className="h-1/2 relative mb-0.5">
            <img
              src={offer2}
              alt="Offer1"
              className="opacity-65 hover:opacity-55 h-full w-full object-cover"
            />
            <div className="absolute bottom-1/3 font-extrabold text-5xl text-gray-200 p-4 pl-6">
              <h1 className="font-bold text-3xl">Buy 1 Get One</h1>
              <h1>Potato Wedges</h1>
              <button className="font-normal text-lg bg-red-800 px-4 py-2 rounded-lg hover:bg-red-700">
                Order Now
              </button>
            </div>
          </div>
          <div className="h-1/2 w-full relative overflow-hidden">
            <img
              src={offer1}
              alt="Offer1"
              className="w-full opacity-65 h-full object-center object-cover hover:opacity-55"
            />
            <div className="absolute bottom-20 font-extrabold text-5xl text-gray-200 pl-6">
              <p className="font-bold text-3xl">Weekly Deal</p>
              <h1>Supreme Burger</h1>
              <button className="font-normal text-lg bg-red-800 px-4 py-2 rounded-lg hover:bg-red-700">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offers;
