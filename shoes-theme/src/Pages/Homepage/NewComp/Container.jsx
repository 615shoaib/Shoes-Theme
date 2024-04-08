import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const ContainerDiv = () => {
  const btnBorder = {
    border: "1px solid #2F2F2F",
    width: "132px",
    height: "32px",
    fontSize: "12px",
    fontWeight: "700",
    textAlign: "center",
    textTransform: "uppercase",
    padding: "5px 10px",
    color: "#2F2F2F",
    whiteSpace: "nowrap",
    borderRadius: "0",
  };

  const ShopDiv = {
    color: "#F25862",
    lineHeight: "24.3px",
    fontSize: "18px",
    textTransform: "uppercase",
    fontFamily: "Montserrat, Arial, Helvetica",
  };

  const headingDiv = {
    fontSize: "35px",
    lineHeight: "42px",
    fontWeight: "700",
    textAlign: "center",
    textTransform: "uppercase",
    fontFamily: "Montserrat, Arial, Helvetica",
    margin: "0 0 5px 0",
    color: "#333333",
    marginBottom: "25px",
  };

  const btnTheme = {
    border: "1px solid #F25862",
    height: "32px",
    width: "156px",
    lineHeight: "20px",
    fontSize: "13px",
    fontWeight: "700",
    color: "#F25862",
    padding: "5px 10px",
    textTransform: "uppercase",
    whiteSpace: "nowrap",
    borderRadius: "0",
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-12">
        <div className="des-banner text-center">
            <p className="des-1 btn mb-2" style={btnBorder}>
              online&amp;in-store
            </p>
            <h4 style={ShopDiv} className="mb-2">
              sport shoes collection
            </h4>
            <h2 style={headingDiv} className="mb-4">
              entire shoes purchase
              <br />
              save up to $70
            </h2>
            <button className="btn btn-hover" style={btnTheme}>
              see the collection
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerDiv;
