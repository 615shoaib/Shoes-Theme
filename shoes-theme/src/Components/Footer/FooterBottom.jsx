import React from "react";

const FooterBottom = () => {
  return (
    <>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="widget-copyright">
                COPYRIGHT © 2016 <a href="#">ROADTHEMES.COM</a> ALL RIGHTS
                RESERVED{" "}
              </div>
            </div>
            <div className="col-sm-6 d-flex justify-content-end">
              <div className="widget-payment">
                <img
                  src="http://demo.roadthemes.com/james/wp-content/uploads/2015/12/payment.png"
                  alt="payment"
                />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterBottom;
