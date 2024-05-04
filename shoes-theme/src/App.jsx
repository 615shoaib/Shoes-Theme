import "../src/cssFiles/Header.scss";
import { Route, Routes, useLocation } from "react-router-dom";
import Homepages from "./Pages/Homepage/Homepages";
import Shop from "./Pages/Shop/Shop";
import CartDetail from "./Components/Header/CartDetail";
import Contactus from "./Pages/ContactUs/Contact-us";
import Aboutus from "./Pages/Aboutus/Aboutus";
import Navbar from "./Components/Navbar/Navbar";
import Checkout from "./Components/Header/Checkout/Checkout";
import Demo from "./Components/Navbar/Demo";
import ProductDetail from "./Pages/Homepage/CartDetailpage/CartDetail";
import HeartData from "./Components/Navbar/HeartData";
import FooterComp from "./Components/Footer/FooterComp";
import ScrollTops from "./Components/ScrollTop/ScrollTop";
import OrderDone from "./Components/Header/Checkout/OrderDone";

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/order-done" && <Demo />}
      <Routes>
        <Route path="/" element={<Homepages />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/contact-us" element={<Contactus />} />
        <Route path="/view-cart/:id" element={<ProductDetail />} />
        <Route path="/add-to-cart" element={<CartDetail />} />
        <Route path="/check-out" element={<Checkout />} />
        <Route path="/add-wishlist" element={<HeartData />} />
        <Route path="/order-done" element={<OrderDone />} />
      </Routes>
      
      {location.pathname !== "/order-done" && <ScrollTops />}
      {location.pathname !== "/order-done" && <FooterComp />}
    </>
  );
}

export default App;
