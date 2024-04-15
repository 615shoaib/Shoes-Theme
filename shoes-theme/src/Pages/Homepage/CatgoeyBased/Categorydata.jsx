import React, { useEffect } from 'react';
import { Skeleton } from '@mui/material';
import AddtoCart from './AddTocart';
import { Ratings } from './Rating';
import ViewCart from '../CartDetailpage/ViewCart';
import HeartIcon from './HeartIcon';

const Categorydata = ({ products, loading }) => {
  const priceDiv = {
    fontSize: '16px',
    lineHeight: '20px',
    color: '#F25862',
    fontFamily: 'Montserrat, Arial, Helvetica, sans-serif',
  };

  const titleStyle = {
    fontSize: '13px',
    fontWeight: '500',
    lineHeight: '18px',
    textTransform: 'uppercase',
    fontFamily: 'Montserrat, Arial, Helvetica, sans-serif',
    color: 'red',
  };


 

  return (
    <div className="container">
      <div className="row">
        {loading ? (
          Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <div className="card px-4">
                <Skeleton variant="rectangular" width={300} height={200} animation="wave" />
                <div className="card-body">
                  <h5 className="card-title">
                    <Skeleton variant="text" width={200} animation="wave" />
                  </h5>
                  <p className="card-text">
                    <Skeleton variant="text" width={150} animation="wave" />
                  </p>
                  <p className="card-text">
                    <Skeleton variant="text" width={180} animation="wave" />
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          Array.isArray(products) &&
          products.map(product => (
            <div key={product.id} className="col-lg-4 col-md-6 mb-4">
              <div className="card">
                <img
                  src={product.images && product.images.length > 0 ? product.images[0].src : ''}
                  className="card-img-top"
                  alt="Product"
                />
                <div className="card-body">
                  <div className="d-flex">
                    <AddtoCart product={product} />
                    <ViewCart product={product} />
                    <HeartIcon product={product} />
                  </div>
                  <h5 className="card-title" style={titleStyle}>
                    {product.name}
                  </h5>
                  <div className="d-flex justify-content-between align-items-center mb-5">
                    <span style={priceDiv}>£{product.price}</span>
                    <div>
                      <Ratings />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Categorydata;
