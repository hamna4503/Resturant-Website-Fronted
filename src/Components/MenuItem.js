import React from "react";
import AddtoCart from "./AddtoCart";
import { Link } from "react-router-dom";

function MenuItem(props) {
  const RouteToItemPage = () => {
    window.location.href = `/burger/${props.id}`;
  };
  return (
    <div
      className="flex flex-col justify-around m-10 mt-0"
      key={props.id}
      onClick={RouteToItemPage}
    >
      <div className="w-72 h-72">
        <img
          src={props.img}
          alt={props.name}
          className="w-72 h-72 object-contain transition transform hover:scale-110"
        />
      </div>

      <div className="text-center w-72">
        <h1 className="text-3xl font-bold p-2">{props.name}</h1>
        <p className="text-red-800 font-bold">Rs {props.price}</p>
        <p className="font-extralight p-1 pb-2">{props.desc}</p>
      </div>
    </div>
  );
}

export default MenuItem;
