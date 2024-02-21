
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Offers from "./Pages/Offers";
import Outlets from "./Pages/Outlets";
import Menu from "./Pages/Menu";
import NewArrivals from "./Pages/NewArrivals";
import Reviews from "./Pages/Reviews";
function App() {
  return (
    <div className="bg-gradient-to-r from-red-900 via-red-700 to-red-400 top-0 overflow-hidden select-none">
      <Navbar/>
      
      <div id="newArrivals">
      <NewArrivals/>
      </div>
      
      <div id="offers">
      <Offers />
      </div>

      <div id="menu">
      <Menu/>
      </div>

      <div id="reviews">
        <Reviews/>
      </div>
      <div id="outlet">
      <Outlets/>
      </div>
    </div>
  );
}

export default App;
