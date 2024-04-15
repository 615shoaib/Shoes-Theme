import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const CompanySlider = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4, 
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 320, // Add a breakpoint for 320px width
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const ComapyImages = [
    {
      image: "https://thethemedemo.com/sophie/wp-content/uploads/2018/05/2.png",
    },
    {
      image: "https://thethemedemo.com/sophie/wp-content/uploads/2018/05/4.png",
    },
    {
      image: "https://thethemedemo.com/sophie/wp-content/uploads/2018/05/3.png",
    },
    {
      image: "https://thethemedemo.com/sophie/wp-content/uploads/2018/05/5.png",
    },
    {
      image: "https://thethemedemo.com/sophie/wp-content/uploads/2018/05/1.png",
    },
  ];

  return (
    <>
      <Slider {...settings}>
        {ComapyImages.map((image, index) => (
          <div key={index} className="col-12">
            <div className="company__card d-flex mb-5">
              <img src={image.image} alt="" className="img-fluid"/>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default CompanySlider;
