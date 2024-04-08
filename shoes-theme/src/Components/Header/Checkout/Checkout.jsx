import React from 'react'
import {BillingPage} from './BillingPage'
import { useSelector } from 'react-redux';
import OrderDetail from './OrderDetail';



const Checkout = () => {
   const cartItems = useSelector((state) => state.Cart.items);
   console.log(cartItems)
  return (
    <>
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <h2 className='checkout-heading'>Checkout</h2>
                <div className='border-bottoms mb-2'></div>
             </div>
             <div className="col-lg-6">
                <BillingPage />
             </div>
             <div className="col-lg-6">
               <OrderDetail />
             </div>
        </div>
    </div>
    </>
  )
}

export default Checkout