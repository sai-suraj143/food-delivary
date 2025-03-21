import React from "react";
import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import { HashRouter as Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/Placeorder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import LoginPop from "./components/Login/LoginPop";

function App() {
  const [Login, SetLogin] = useState(false);
  return (
    <div>
      {Login ? <LoginPop /> : <></>}
      <Navbar SetLogin={SetLogin} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
