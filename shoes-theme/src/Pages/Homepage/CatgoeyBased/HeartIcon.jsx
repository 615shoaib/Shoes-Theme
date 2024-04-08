import React from "react";
import HeartData from "../../../Components/Navbar/HeartData";
import { addToWishlistById } from "../../../Redux/Reducer/Whishlist";
import { useDispatch } from "react-redux";

const HeartIcon = ({product}) => {
    const dispatch = useDispatch();

    const handleAddToWishlist = () => {
   dispatch(addToWishlistById(product))
    };
    
  return (
    <>
           <button className="btn btn-dark" id="heart-icon" onClick={()=>handleAddToWishlist()}>
        <i className="fas fa-heart heart-icon"></i>
      </button>
    </>
  );
};

export default HeartIcon;



