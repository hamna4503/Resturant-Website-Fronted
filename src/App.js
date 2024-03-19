import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Offers from "./Pages/Offers";
import Outlets from "./Pages/Outlets";
import Menu from "./Pages/Menu";
import NewArrivals from "./Pages/NewArrivals";
import Reviews from "./Pages/Reviews";
import Footer from "./Components/Footer";
import CartState from "./Contexts/CartState";
import Itempage from "./Pages/Itempage";
import Cart from "./Pages/Cart";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div className="bg-gradient-to-r from-red-900 via-red-700 to-red-400 top-0 overflow-x-hidden select-none">
              <div id="newArrivals">
                <NewArrivals />
              </div>

              <div id="offers">
                <Offers />
              </div>
              <CartState>
                <div id="menu">
                  <Menu />
                </div>
                <div id="outlet">
                  <Outlets />
                </div>
              </CartState>

              <Footer />
            </div>
          }
        />

        <Route
          path="/burger/:id"
          element={
            <CartState>
              <Itempage />
            </CartState>
          }
        />
        <Route
          path="/cart"
          element={
            <CartState>
              <Cart />
            </CartState>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
