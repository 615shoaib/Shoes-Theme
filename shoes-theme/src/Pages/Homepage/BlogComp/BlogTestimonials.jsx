import React from "react";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const BlogTestimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    rows: 2,
    responsive: [
     
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
          rows: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, 
          slidesToScroll: 1,
          rows: 1,
        },
      },
    ],
  };


  const blogLink = {
    fontSize: "14px",
    fontWeight: "700",
    fontFamily: "Montserrat, Arial, Helvetica, sans-serif",
    lineHeight: "19px",
    textTransform: "uppercase",
    textDecoration: "none",
    color: "#252525",
    cursor: "pointer",
  };

  const images = [
    "http://demo.roadthemes.com/james/wp-content/uploads/2015/11/2-570x350.jpg",
    "http://demo.roadthemes.com/james/wp-content/uploads/2015/11/4-570x350.jpg",
    "http://demo.roadthemes.com/james/wp-content/uploads/2015/11/5-570x350.jpg",
    "http://demo.roadthemes.com/james/wp-content/uploads/2015/11/3-570x350.jpg",
  ];

  return (
    <div className="container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="col-lg-12 col-md-12 mb-2 d-flex">
            <div className="post-wrapper gap-5">
              <div className="post-thumb">
                <Link to="/">
                  <img
                    width="160"
                    height="99"
                    src={image}
                    className="attachment-sozo-post-thumbwide size-sozo-post-thumbwide wp-post-image"
                    alt={`Image ${index + 1}`}
                  />
                </Link>
              </div>
              <div className="post-info">
                <h3 className="post-title">
                  <Link to="#" className="post-title-a" style={blogLink}>
                    Blog image post
                  </Link>
                </h3>
                <span className="post-date">
                  <span className="day">10</span>
                  <span className="month mx-1">Mar</span>
                </span>
                <div className="post-excerpt">
                  <p className="blog-para">
                    Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras
                    pretium arcu ex. Aenean posuere libero eu augue
                    condimentum rhoncus. Praesent
                  </p>
                </div>
                <Link className="readmore btn" to="#">
                  read more
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BlogTestimonials;
