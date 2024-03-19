import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../Contexts/CartContext";
import Trash from "../Assets/images/Cart/trash.png";
function Cart() {
  const { items, RemoveItems, EmptyCart, total } = useContext(CartContext);
  const [CartItems, setCartItems] = useState(null);

  const Checkout = () => {
    EmptyCart();
    window.location.href = "/";
  };
  return (
    <div className="pt-20 w-screen h-screen flex flex-col items-center">
      {items.length > 0 ? (
        <>
          <h1 className="text-center w-full p-5 text-2xl font-bold">CART</h1>
          <table className="w-3/5 mt-5">
            <tr className="text-xl p-0 h-10">
              <th></th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th></th>
            </tr>
            {items.map((Item) => {
              return (
                <tr className="text-center h-24 border-b-2 border-red-700 text-lg">
                  <td className="w-20">
                    <img src={Item.img} className="w-20 h-20" />
                  </td>
                  <td>{Item.name}</td>
                  <td>{Item.price}</td>
                  <td>{Item.quantity}</td>
                  <td>
                    <button
                      onClick={() => {
                        RemoveItems(Item.id);
                      }}
                    >
                      <img src={Trash} className="w-8 h-8" />
                    </button>
                  </td>
                </tr>
              );
            })}
            <tr className="text-center text-xl ">
              <td className="font-bold p-3">Total</td>
              <td></td>
              <td></td>
              <td></td>
              <td className="font-bold">Rs {total}</td>
            </tr>
          </table>
          <div className="flex w-3/5 justify-end">
            <button
              className="bg-red-600 rounded-lg p-2 w-full"
              onClick={Checkout}
            >
              <p className="font-bold text-lg text-white">Checkout</p>
            </button>
          </div>
          <div className="w-full flex justify-center items-center mt-4">
            <p>Want to Start Over?</p>
            <button
              className="block bg-yellow-500 rounded-lg p-1"
              onClick={() => {
                EmptyCart();
              }}
            >
              EmptyCart
            </button>
          </div>
        </>
      ) : (
        <p className="flex w-full h-full justify-center items-center text-3xl text-black font-bold">
          No Items yet
        </p>
      )}
    </div>
  );
}

export default Cart;
