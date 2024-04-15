import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ImagesSlider = () => {

    var settings = {
       
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
       responsive: [
            {
                breakpoint:767,
                settings:{
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots:true,
                   

                }
            },
           
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots:true,
              arrows:true,
              autoplay:true
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll :1,
                dots:true,
                autoplay:true,
              },
            },
          ],
    }

  const imagesComp = [
    {
      images: `https://thethemedemo.com/sophie/wp-content/uploads/2018/05/5-2.jpg`,
      name:'Terry Soto',
      title:'CEO'
    },
    {
      images:
        "https://thethemedemo.com/sophie/wp-content/uploads/2018/05/3-5.jpg",
        name:'Justin Evans',
        title:'Developer'
    },
    {
        images:
          "https://thethemedemo.com/sophie/wp-content/uploads/2018/05/6-3.jpg",
          name:'Sarah',
          title:'Developer'
      },
      {
        images:
          "https://thethemedemo.com/sophie/wp-content/uploads/2018/05/4-3.jpg",
          name:'Maria Lane',
          title:'Marketer'
      },
      
  ];
  return(
    <>
     <Slider {...settings}>
    {
      
        imagesComp.map((image,index)=>(
            <div className=" item-images mb-5" key={index}>
                <div className="overlay"></div>
            <img src={image.images} alt="/" style={{maxWidth:'317px',height:'317px'}}  className="img-fluid item"/>
            <div className="text-team">
                <h3>{image.name}</h3>
                <p>{image.title}</p>
            </div>
            </div>
        ))
      
    }
    </Slider>
    </>
  );
};

export default ImagesSlider;
