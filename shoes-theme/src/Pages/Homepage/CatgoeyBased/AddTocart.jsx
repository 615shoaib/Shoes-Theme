import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTocart } from '../../../Redux/Reducer/Cart';
import axios from 'axios'; 

const AddtoCart = ({ product }) => {
  const cartItems = useSelector((state) => state.Cart.items) || [];
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(addTocart(product)); 
    }

    return (
        <>
            
            <button className="btn btn-dark w-100" id="btn" title="cart" onClick={handleClick}>
                Add to cart
            </button>
        </>
    );
};

export default AddtoCart;


