import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Offers from "./Pages/Offers";
function App() {
  return (
    <BrowserRouter className="h-full">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offers" element={<Offers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
