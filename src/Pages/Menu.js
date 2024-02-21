import React from "react";
import MenuItem from "../Components/MenuItem";
import HeadingSection from "../Components/HeadingSection";
import item1 from "../Assets/images/home/png-image (1).png"
import item2 from "../Assets/images/home/png-image (2).png";
import item3 from "../Assets/images/home/homeBurger.png";
import item4 from "../Assets/images/home/png-image.png"
import item5 from "../Assets/images/home/pngegg (2).png"
import item6 from "../Assets/images/home/pngegg (3).png"

function Menu() {
  return (
    <div className="bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300">
    
    <div className="pt-10">
    <HeadingSection topHeading="Our Menu" bottomHeading="Choose & Enjoy"/>
    </div>

    <div className="flex mt-20 justify-center">
      <div className="flex flex-wrap lg:w-3/4 justify-center ">
        <MenuItem price="650" name="Beef Burger" img={item1} desc="Topped with crisp lettuce, ripe tomato slices, and zesty pickles."/>
        <MenuItem price="750" name="Pepperoni Burger" img={item2} desc="Topped with crisp pepperoni, cheese slices, and onions."/>
        <MenuItem price="799" name="Smoky Burger" img={item3} desc="Topped with crisp lettuce, ripe tomato slices, and zesty pickles."/>
        <MenuItem price="700" name="Chicken Burger" img={item4} desc="Topped with crisp lettuce, ripe tomato slices, and zesty pickles."/>
        <MenuItem price="750" name="Beef Mac" img={item5} desc="Topped with crisp pepperoni, cheese slices, and onions."/>
        <MenuItem price="600" name="Veggie Burger" img={item6} desc="Topped with crisp lettuce, ripe tomato slices, and zesty pickles."/>
      </div>
    </div>
    
    </div>
  );
}

export default Menu;
