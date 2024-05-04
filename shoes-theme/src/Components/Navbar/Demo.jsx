import React from "react";
import { useSelector } from "react-redux";

import { Link,NavLink } from "react-router-dom";
import HeartIcon from "../../Pages/Homepage/CatgoeyBased/HeartIcon";
import Heartclick from "./Heartclick";

const Demo = () => {
  const CartItems = useSelector((state)=>state.Cart.items) || []
  const HeartItems = useSelector((state)=>state.wishlist.wishlistItems) || []

  const CartItemsCount = CartItems.reduce((total, item) => total + parseInt(item.quantity), 0);  
  const HeartItemsCount = HeartItems.length

  return (
    <>
       <nav className="navbar navbar-expand-lg navbar-light bg-light w-100 d-flex justify-content-between">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img  src="http://demo.roadthemes.com/james/wp-content/uploads/2015/12/logo.png" style={{width:'200px'}}/>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav gap-3 mx-auto">
                  <li className="nav-item">
                    <NavLink
                      to="/"
                      className="nav-link"
                      activeclassname="active"
                    >
                      HOME
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/shop"
                      className="nav-link"
                      activeclassname="active"
                    >
                      SHOP
                    </NavLink>
                  </li>
                
                  <li className="nav-item">
                    <NavLink
                      to="/about-us"
                      className="nav-link"
                      activeclassname="active"
                    >
                     About us
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/contact-us"
                      className="nav-link"
                      activeclassname="active"
                    >
                      Contact Us
                    </NavLink>
                  </li>
                </ul>

              <div className="row text-align-right">
                <div className="col-lg-12 col-md-10 d-flex">
                  <div className="mx-3 p-2 mt-2 ms-5">
                  <Link to="/add-wishlist">
                  <i className="fa-regular fa-heart fs-4 text-dark"></i>
                  <div
                        className=" translate-middle badge rounded-pill bg-dark"
                        style={{ fontSize: "0.75rem",width:'10xpx',height:'10xpx',borderRadius:'50%',transform:'translate(30px)' }}  
                      >
                        {HeartItemsCount}
                      </div>
                  </Link>

                  <i className="fa-solid fa-magnifying-glass fs-5 mx-5"></i>
                    <Link to="/add-to-cart">
                      <img
                        src="http://demo.roadthemes.com/james/wp-content/themes/james/images/icon-cart.png"
                        alt="/bag"
                        style={{ width: "20px" }}
                      />
                      <div
                        className=" translate-middle badge rounded-pill bg-dark"
                        style={{ fontSize: "0.75rem",width:'22xpx',height:'22xpx',borderRadius:'50%',transform:'translate(30px)' }}  
                      >
                        {CartItemsCount}
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
    </>
  );
};

export default Demo;
