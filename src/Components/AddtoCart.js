import React, { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";

function AddtoCart(props) {
  const { items, AddItem } = useContext(CartContext);
  const AddItemToCart = () => {
    AddItem(props.Item, parseInt(props.Quantity));
    console.log(items);
    window.location.href = "/";
  };

  return (
    <button
      className="text-center bg-red-700 text-white font-bold text-xl p-2 hover:bg-red-600 w-full rounded-lg"
      onClick={AddItemToCart}
    >
      Add to Cart
    </button>
  );
}

export default AddtoCart;
