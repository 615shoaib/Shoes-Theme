import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Image from "../../Images/banner7-1.jpg";
import Imageone from "../../Images/banner7-2.jpg";

const divStyle = {
  display: "flex",
  alignItems: "start",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "400px",
  width: "100%",
  padding: "10px 130px",
  flexDirection: "column",
  backgroundRepeat: "no-repeat",
  maxWidth: "100%",
  maxHeight: "50%",
  backgroundPosition: 'center',
};

const slideImages = [
  {
    url: Image,
    caption: "Sale Products",
    title: "NIke Api Max 2015",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    url: Image,
    caption: "Sale Products",
    title: "NIke Api Max 2015",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    url: Imageone,
    caption: "Sale Products",
    title: "NIke Api Max 2015",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

const Slider = () => {
  return (
    <>
    <div className="row">
      <div className="col-lg-12">
        
      </div>
    </div>
      <div className="slide-container mb-5">
        <Slide style={{ background: "red" }}>
          {slideImages.map((slideImage, index) => (
            <div key={index} className="col-sm-12 col-md-12 col-lg-12 col-sm-3">
                <div
                  style={{
                    ...divStyle,
                    backgroundImage: `url(${slideImage.url})`,
                   
                  }}
                >
                  <div className="text-sm-center">
                  <span className="slidercaption">{slideImage.caption}</span>
                  </div>
                  <span className="slidertitle">{slideImage.title}</span>
                  <span className="sliderDesc mb-3">{slideImage.des}</span>
                  <button className="btn-slider mb-3">Shop Now</button>
                 
                </div>
            </div>
          ))}
        </Slide>
      </div>
    </>
  );
};

export default Slider;
