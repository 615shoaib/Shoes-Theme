import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DecrementFuncation, IncremesntFuncation, removeAllOrder, removeSingleCart } from "../../Redux/Reducer/Cart";
import { Link } from "react-router-dom";

const CartDetail = () => {
  const cartItems = useSelector((state) => state.Cart.items) || [];
  const dispatch = useDispatch();

  const handleRemoveAll = () => {
    dispatch(removeAllOrder());
  };

  const handleSingleOrder = (id,orderId) => {
    dispatch(removeSingleCart({id: id, orderId }));
  };


  const handleClick = (itemId) => {
    dispatch(IncremesntFuncation({ id: itemId }));
  };

  const handleDecrement = (itemId) => {
    console.log(itemId)
    dispatch(DecrementFuncation({ id: itemId }));
  };

  const totalPrice = cartItems.reduce((acc,item)=>acc+(item.price * item.quantity),0)
  
  return (
    <div className="d-flex justify-content-center align-items-center ">
      <div className="container">
        {cartItems.length > 0 ? (
          <div className="row">
            <div className="col-lg-12">
              <h2>Shopping Cart</h2>
              <table className="table mb-5 table-resposnive">
                <thead>
                  <tr>
                    <th>Product Image</th>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                  </tr>
                </thead>
                {Array.isArray(cartItems) &&
                  cartItems.map((cartItem) => (
                    <tbody key={cartItem.id}>
                      <tr>
                        <td>
                          <button className="btn " onClick={() => handleSingleOrder(cartItem.id)}>
                            <i className=" fa fa-close"></i>
                          </button>
                          {cartItem.images && cartItem.images.length > 0 && (
                            <img
                              src={cartItem ? cartItem.images[0].src : null}
                              alt="Product"
                              style={{ width: "50px" }}
                            />
                          )}
                        </td>
                        <td>{cartItem.name}</td>
                        <td>
                          <button onClick={() => handleClick(cartItem.id, cartItem.orderId)} className="btn">+</button>
                          {cartItem.quantity}
                          <button onClick={() => handleDecrement(cartItem.id)} className="btn">-</button>
                        </td>
                        <td>{cartItem.price}</td>
                      </tr>
                    </tbody>
                  ))}
              </table>
              <div className="d-flex justify-content-around mb-2">
                <button className="btn btn-dark mb-2 rounded-0">Continue Shopping</button>
                <h1 className="product">Total Price : <span style={{color:'#388396'}}>${totalPrice.toFixed(2)}</span></h1>
              </div>
              <div className="d-flex justify-content-around">
                <div>
                  <button className="btn btn-dark mb-2" onClick={handleRemoveAll}>
                    Remove All Products
                  </button>
                </div>
                <div>
                  <Link to="/check-out">
                    <button className="btn btn-primary">Checkout Out</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="d-flex justify-content-center align-items-center mt-3">
            <i className="fa-solid fa-cart-shopping mb-5" style={{ fontSize: '130px' }}></i>
            <h3>No Cart Item Here</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDetail;
