import React, { useEffect } from "react";
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

  useEffect(() => {
    dispatch(fetchProductsAsync());
  }, [dispatch]);

  return (
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
                          <span>$75.00</span>
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
  );
};

export default FeatureSlider;
