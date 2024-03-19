import React, { useContext, useEffect } from "react";
import { CartContext } from "./CartContext";
import { useState } from "react";

const CartState = ({ children }) => {
  const [CartItems, setCartItems] = useState(
    localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
  );
  const [CartTotal, setCartTotal] = useState(1);

  useEffect(() => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (cart) {
      setCartItems(cart);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(CartItems));
    let cart = localStorage.getItem("cart");
    updateTotal();
    console.log(cart);
  }, [CartItems]);

  const AddItem = (itemToAdd, quantity) => {
    let found = false;
    const newArr = CartItems.map((Item) => {
      if (Item.id === itemToAdd.id) {
        found = true;
        return { ...Item, quantity: parseInt(Item.quantity) + quantity };
      } else {
        return Item;
      }
    });
    // console.log(CartItems);
    setCartItems(newArr);
    if (!found) {
      setCartItems([...CartItems, { ...itemToAdd, quantity: quantity }]);
      // console.log(CartItems);
    }
  };

  const RemoveItems = (id) => {
    let tempCart = CartItems.filter((Item) => {
      if (id != Item.id) {
        return Item;
      }
    });
    setCartItems(tempCart);
  };

  const EmptyCart = () => {
    setCartItems([]);
  };

  const updateTotal = () => {
    let total = 0;
    CartItems.map((Item) => {
      total += parseInt(Item.price) * parseInt(Item.quantity);
      console.log(total);
    });
    setCartTotal(total);
  };

  return (
    <CartContext.Provider
      value={{
        items: CartItems,
        total: CartTotal,
        AddItem,
        RemoveItems,
        EmptyCart,
        updateTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartState;
