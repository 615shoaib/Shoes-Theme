import React from "react";

const Footer = () => {
  const LiStyle = {
    display: "flex",
    background: "#383838",
    margin: "0 0 15px 0",
    color: "#A8A8A8",
    listStyle: "none",
    lineHeight: "25px",
    flexDirection: "column",
    marginBottom: "20px",
  };

  return (
    <>
      <div className="footer">
        <div className="footer-top">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-12">
                <img
                  src="http://demo.roadthemes.com/james/wp-content/uploads/2015/12/logo-1.png"
                  alt="logo"
                  className="mb-3 mx-auto d-block"
                  style={{ maxWidth: "200px" }}
                />
                   <ul>
                <li style={LiStyle}>
                  <span className="d-flex align-items-center">
                    <i className="fa fa-fax">&nbsp;</i>
                    <span> (800) 123 456 789</span>
                  </span>
                </li>
                <li style={LiStyle}>
                  <span className="d-flex align-items-center">
                    <i className="fa fa-phone">&nbsp;</i>
                    <span> (800) 123 456 789</span>
                  </span>
                </li>

                <li style={LiStyle}>
                  <span className="d-flex align-items-center">
                    <i className="fa fa-phone">&nbsp;</i>
                    <span> (800) 123 456 789</span>
                  </span>
                </li>
              </ul>
              </div>

               <div className="col-lg-3 col-md-6 col-12">
            <h3 className="footer-h3 text-center">LATEST TWEETS</h3>
            <p className="text-center" style={{ color: "#A8A8A8", fontSize: "12px" }}>
              <span className="d-flex"> 
              <i className="fa-brands fa-twitter fs-5 mx-1"></i>
              Twitter error code: 32 - Could not authenticate you.
              </span>
            </p>
          </div>

              

<div className="col-lg-3 col-md-6 col-12">
            <h3 className="footer-h3 text-center">OUR SERVICES</h3>
            <ul id="menu-our-services" className="nav_menu">
                      <li
                        id="menu-item-3761"
                        className="menu-item menu-item-type-custom menu-item-object-custom first menu-item-3761"
                      >
                        <a href="#">Shipping &amp; Returns</a>
                      </li>
                      <li
                        id="menu-item-3762"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3762"
                      >
                        <a href="#">Secure Shopping</a>
                      </li>
                      <li
                        id="menu-item-3763"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3763"
                      >
                        <a href="#">International Shipping</a>
                      </li>
                      <li
                        id="menu-item-3764"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3764"
                      >
                        <a href="#">Affiliates</a>
                      </li>
                      <li
                        id="menu-item-4007"
                        className="menu-item menu-item-type-post_type menu-item-object-page last menu-item-4007"
                      >
                        <a href="http://demo.roadthemes.com/james/contact/">
                          Contact
                        </a>
                      </li>
                    </ul>
          </div>


           

<div className="col-lg-3 col-md-6 col-12">
            <h3 className="footer-h3 text-center">INFOMATIO</h3>
            <ul id="menu-our-services" className="nav_menu">
                      <li
                        id="menu-item-3761"
                        className="menu-item menu-item-type-custom menu-item-object-custom first menu-item-3761"
                      >
                        <a href="#">Shipping &amp; Returns</a>
                      </li>
                      <li
                        id="menu-item-3762"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3762"
                      >
                        <a href="#">Secure Shopping</a>
                      </li>
                      <li
                        id="menu-item-3763"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3763"
                      >
                        <a href="#">International Shipping</a>
                      </li>
                      <li
                        id="menu-item-3764"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3764"
                      >
                        <a href="#">Affiliates</a>
                      </li>
                      <li
                        id="menu-item-4007"
                        className="menu-item menu-item-type-post_type menu-item-object-page last menu-item-4007"
                      >
                        <a href="http://demo.roadthemes.com/james/contact/">
                          Contact
                        </a>
                      </li>
                    </ul>
          </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
