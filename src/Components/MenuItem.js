import React from "react";

function MenuItem(props) {
  return (
    <div className="flex flex-col justify-around m-10 mt-0">
      <div className="w-72 h-72">
        <img src={props.img} alt={props.name}className="w-72 h-72 object-contain transition transform hover:scale-110"/>
      </div>

      <div className="text-center w-72">
        <h1 className="text-3xl font-bold p-2">{props.name}</h1>
        <p className="text-red-800 font-bold">Rs {props.price}</p>
        <p className="font-extralight p-1 pb-2">{props.desc}</p>
      </div>

      <button className="text-center w-10 h-10 bg-red-700 rounded-full text-white font-extrabold text-3xl ml-32 pb-5 hover:bg-red-600">+</button>
    </div>
  );
}

export default MenuItem;
