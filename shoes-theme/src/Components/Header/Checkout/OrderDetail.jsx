import React from 'react'
import OrderDetailComp from './OrderDetailComp'

const OrderDetail = () => {

  return (
    <>
    <section className='order-detail'>
    <div className="box-heading">
    <h3 className='order-heading '>YOUR ORDER</h3>
    </div>
    <OrderDetailComp />
    </section>
    </>
  )
}

export default OrderDetail