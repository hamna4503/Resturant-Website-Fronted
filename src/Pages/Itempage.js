import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Data } from "../Data/MenuData";
import Navbar from "../Components/Navbar";
import AddtoCart from "../Components/AddtoCart";

function Itempage() {
  const { id } = useParams();
  const [Quantity, setQuantity] = useState(1);

  const minusQuantity = () => {
    if (Quantity > 1) setQuantity(Quantity - 1);
  };

  const plusQuantity = () => {
    if (Quantity < 20) setQuantity(Quantity + 1);
  };

  return (
    Data &&
    Data.map((Item) => {
      if (id == Item.id) {
        return (
          <div key={Item.id}>
            <Navbar />
            <div className="flex flex-row w-screen h-screen justify-center items-center align-middle">
              <div className="w-1/3 h-1/2">
                <img src={Item.img} className="object-contain w-full h-full" />
              </div>
              <div className="w-1/3">
                <div>
                  <p className="text-5xl font-extrabold py-2">{Item.name}</p>
                  <p className="text-2xl font-semibold py-1">Rs {Item.price}</p>
                  <p className="text-lg font-normal">{Item.desc}</p>
                </div>

                <div>
                  <div className="w-20 flex border-2 border-gray-700 rounded-sm">
                    <button
                      id="minus"
                      onClick={minusQuantity}
                      className="w-5 text-lg text-center font-semibold bg-gray-400"
                    >
                      −
                    </button>
                    <input
                      type="number"
                      value={Quantity}
                      id="input"
                      className="w-10 text-lg text-center font-semibold bg-gray-400"
                      disabled
                    />
                    <button
                      id="plus"
                      onClick={plusQuantity}
                      className="w-5 text-lg text-center font-semibold bg-gray-400"
                    >
                      +
                    </button>
                  </div>
                  <div className="mt-4">
                    <AddtoCart Quantity={Quantity} Item={Item} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
    })
  );
}

export default Itempage;
