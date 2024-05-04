import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NextButton from "./NextButton";
import PreButton from "./Prev";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsAsync } from "../../../Redux/Reducer/Reducer";
import {Link} from "react-router-dom"
import AddtoCart from "../CatgoeyBased/AddTocart";
import { Ratings } from "../CatgoeyBased/Rating";
import { Skeleton } from '@mui/material';



const FeatureSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextButton />,
    prevArrow: <PreButton />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          nextArrow: false, 
          prevArrow: false,
        },
      },
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
          dots: true,
          nextArrow: false,
          prevArrow: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          nextArrow: false,
          prevArrow: false,
        
        },
      },
     
    ],
  };

  const dispatch = useDispatch();

  const { ProductsItems } = useSelector((state) => state.products);

  const [loading,setLoading]=useState(true)

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchProductsAsync());
      setLoading(false); 
    };
  
    fetchData();
  }, [dispatch]);
  

  return (
    <>
   {loading ? (
        <Container fluid>
          <Row>
            {Array.from({ length: 3 }).map((_, index) => (
              <Col key={index} lg={4} md={6} mb={4}>
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
              </Col>
            ))}
          </Row>
        </Container>
      )
      :
      (
          <Container fluid>
      <Row>
        <Col>
          <Slider {...settings} className="mb-5">
            {Array.isArray(ProductsItems) &&
              ProductsItems.map((product) => (
                <>
                  <div className="mx-3">
                    <div className="card">
                      {product.images && product.images.length > 0 && (
                        <img
                          src={product.images[0].src}
                          className="img-fluid"
                          alt="..."
                          style={{ width: "100%", height: "auto" }}
                        />
                      )}

                      <div className="d-flex">
                       <AddtoCart product={product}/>
                        <Link to={`/view-cart/${product.id}`} style={{textDecoration:'none'}}>
                        <button
                        type="button"
                        className="btn btn-dark"
                        id="btn-eye"
                        
                      >
                        <i className="fas fa-eye eye-icon"></i>
                      </button>
                    </Link>
                        <button className="btn btn-dark" id="heart-icon">
                          <i className="fas fa-heart heart-icon"></i>
                        </button>
                      </div>
                      <div className="card-body">
                        <h5 className="card-title" style={{ fontSize: "14px" }}>
                          {product.name}
                        </h5>
                        <div className="d-flex justify-content-between">
                          <span>RS.{product.price}</span>
                          <div>
                          </div>
                        </div>
                        <Ratings />
                      </div>
                    </div>
                  </div>
                </>
              ))}
          </Slider>
        </Col>
      </Row>
    </Container>
      )
    }
  
    </>
  );
};

export default FeatureSlider;
