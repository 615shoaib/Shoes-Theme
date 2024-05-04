import React from "react";
import { Link } from "react-router-dom";
import ProductDetail from "./CartDetail";

const ViewCart = ({ product }) => {
  return (
    <>
      <Link to={`/view-cart/${product.id}`} style={{ textDecoration: "none" }}>
        <button type="button" className="btn btn-dark" id="btn-eye">
          <i className="fas fa-eye eye-icon"></i>
        </button>
      </Link>
    </>
  );
};

export default ViewCart;
