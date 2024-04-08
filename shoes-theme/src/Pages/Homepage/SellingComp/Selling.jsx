import React from "react";

import Main from "../CatgoeyBased/Main";

const Selling = () => {
  const DivSTYLE = {
    fontFamily: " Montserrat, Arial, Helvetica, sans-serif",
    fontSize: "20px",
    lineHeight: "27px",
    textTransform: "uppercase",
    color: "#333333",
    padding: "1px 10px 5px 30px",
  };

  const ProductsDiv = {
    fontFamily: " Montserrat, Arial, Helvetica, sans-serif",
    fontSize: "35px",
    fontWeight: "700",
    lineHeight: "48px",
    color: "#999999",
    textTransform: "uppercase",
    paddingLeft: "10px",
  };

  const BorderDiv = {
    borderLeft: "3px solid #000",
    padding: "0 0px",
    borderBottom: "none",
    borderRight: "none",
    borderTop: "1px solid #ccc",
    paddingTop: "10px",
  };

  return (
    <div className="container">
      <div className="row mb-5">
        <div className="col-lg-12 col-md-10">
          <div style={BorderDiv} className="mb-5">
            <h3 style={DivSTYLE}>Best SELLER</h3>
            <div>
              <h1 style={ProductsDiv}>Products</h1>
            </div>
          </div>
        </div>
    <Main />
      </div>
    </div>
  );
};

export default Selling;
