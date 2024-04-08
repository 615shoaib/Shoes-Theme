import React from "react";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const images = [
  "image1.jpg",
  "image2.jpg",
  "image3.jpg",
  "image4.jpg",
  "image5.jpg",
  "image6.jpg",
  // Add more image URLs as needed
];

var settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows:false,
    rows:2,
  };
const BlogTestimonials = () => {
  return (
    <div className="container">
      <div className="row">
        <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="col-md-6">
            <div className="post-wrapper">
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
                  <Link
                    to="#"
                    className="post-title-a"
                  >
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
    </div>
  );
};

export default BlogTestimonials;
