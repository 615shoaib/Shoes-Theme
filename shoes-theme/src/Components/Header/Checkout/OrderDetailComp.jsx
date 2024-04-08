import React from "react";
import { useSelector } from "react-redux";

const OrderDetailComp = () => {
  const cartItems = useSelector((state) => state.Cart.items);

  const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <>
      <table className="table">
        <thead>
          <tr style={{ borderBottom: "2px solid #cccc" }}>
            <th className="text-center product-name">PRODUCT</th>
            <th className="text-center product-name">TOTAL</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
              <tr style={{ borderBottom: "2px solid #cccc" }} key={item.id}>
                <td className="text-center product-name">
                  {item.name}
                  <div>{item.quantity}</div>
                </td>
                <td className="text-center product-name">${(item.price * item.quantity).toFixed(2)}</td>
              </tr>
           
          ))}
          <tr style={{ borderBottom: "2px solid #cccc" }}>
            <td className="text-center product">TOTAL</td>
            <td className="text-center product" style={{color:'#388396'}}>${totalPrice.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default OrderDetailComp;
