import React from "react";
import MenuItem from "../Components/MenuItem";
import HeadingSection from "../Components/HeadingSection";

import { Data } from "../Data/MenuData";

function Menu() {
  return (
    <div className="bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 pt-20">
      <div className="pt-10">
        <HeadingSection topHeading="Our Menu" bottomHeading="Choose & Enjoy" />
      </div>

      <div className="flex mt-10 justify-center item ">
        <div className="flex flex-wrap justify-center xl:w-3/4">
          {Data.length > 0 &&
            Data.map((Item) => {
              return (
                <MenuItem
                  key={Item.id}
                  id={Item.id}
                  price={Item.price}
                  name={Item.name}
                  desc={Item.desc}
                  img={Item.img}
                  item={Item}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Menu;
