import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Slicktestimonials = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const testimonials = [
    {
      name: "Katherine Sullivan",
      title: "Manager",
      text: "Integer tincidunt nisi libero, sed aliquet ipsum fermentum eu. Duis porta egestas tellus sed vestibulum. Nam euismod elit id dolor aliquet, ut blandit massa egestas",
      image:
        "http://demo.roadthemes.com/james/wp-content/uploads/2014/10/blog01-150x150.jpg",
    },
    {
      name: "Jenify Brown",
      title: "Manager",
      text: "Integer tincidunt nisi libero, sed aliquet ipsum fermentum eu. Duis porta egestas tellus sed vestibulum. Nam euismod elit id dolor aliquet, ut blandit massa egestas",
      image:
        "http://demo.roadthemes.com/james/wp-content/uploads/2014/10/blog02-150x150.jpg",
    },
    {
      name: "Kathy Young",
      title: "Manager",
      text: "Integer tincidunt nisi libero, sed aliquet ipsum fermentum eu. Duis porta egestas tellus sed vestibulum. Nam euismod elit id dolor aliquet, ut blandit massa egestas",
      image:
        "http://demo.roadthemes.com/james/wp-content/uploads/2014/10/blog03-150x150.jpg",
    },
  ];

  const testimonialStyle = {
    textAlign: "center",
    color: "#ffffff",
    marginTop: "20px",
  };

  const imageStyle = {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    marginBottom: "10px",
  };

  const TitleStyle ={
    fontSize:'13px',
    lineHeight:'20px',
    textAlign:'center',
    color:'#ffffff',
    display:'block'
  }


  const NameStyle ={
    fontSize:'13px',
    lineHeight:'20px',
    textAlign:'center',
    color:'#ffffff',
    display:'block'
  }


  return (
    <>
      <div className="container mb-5">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <Slider {...settings}>
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  style={testimonialStyle}
                  className="quote first slick-slide slick-active"
                >
                  <blockquote>{testimonial.text}</blockquote>
                  <div className="d-flex justify-content-center flex-column align-items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      style={imageStyle}
                    />
                    <p style={NameStyle}>{testimonial.name}</p>
                    <p style={TitleStyle}>{testimonial.title}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slicktestimonials;
