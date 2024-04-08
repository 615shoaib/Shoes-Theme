import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../Header/Header";

const Navbar = () => {
  return (
    <>
      
    <div className="d-flex justify-content-arounf"></div>
      <div className="container-fluid ">
        <div className="row">
          {/* <nav className="navbar navbar-expand-lg bg-white"> */}
          <nav class="navbar navbar-expand-lg navbar-light bg-white">
            <div className="container-fluid mx-auto sm:px-6 lg:px-8">
              <NavLink to="/" className="navbar-brand">
                <img
                  src="http://demo.roadthemes.com/james/wp-content/uploads/2015/12/logo.png"
                  alt="Logo"
                  className="logo"
                  style={{
                    maxWidth: "100%",
                    width: "100%",
                    height: "auto",
                    position: "relative",
                    top: "-50px",
                    marginLeft: "30%",
                  }}
                />
              </NavLink>

              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav gap-3 mx-auto">
                  <li className="nav-item">
                    <NavLink
                      to="/"
                      className="nav-link"
                      activeClassName="active"
                    >
                      HOME
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/shop"
                      className="nav-link"
                      activeClassName="active"
                    >
                      SHOP
                    </NavLink>
                  </li>
                
                  <li className="nav-item">
                    <NavLink
                      to="/about-us"
                      className="nav-link"
                      activeClassName="active"
                    >
                     About us
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/contact-up"
                      className="nav-link"
                      activeClassName="active"
                    >
                      Contact Up
                    </NavLink>
                  </li>
                </ul>
                <Header />
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
  