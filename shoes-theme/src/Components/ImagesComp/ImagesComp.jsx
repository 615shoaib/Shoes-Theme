import React from 'react';
import ImageOne from "../../Images/1.jpg"
import ImageTwo from "../../Images/jbanner-2.jpg"
import ImageThree from "../../Images/jbanner-3.jpg"
import ImageFour from "../../Images/jbanner-4.jpg"

const ImagesComp = () => {
  return (
    <div className='container '>
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div className='overflow'>
            <div className='overlay'></div>
            <div style={{ overflow: "hidden" }}>
              <img className='img-fluid' src={ImageOne} alt='/' />
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div className='overflow'>
            <div className='overlay'></div>
            <div style={{ overflow: "hidden" }}>
              <img className='img-fluid' src={ImageTwo} alt='/' />
            </div>
          </div>
        </div>
       
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4 ">
          <div className='overflow'>
            <div className='overlay'></div>
            <div style={{ overflow: "hidden" }}>
              <img className='img-fluid' src={ImageThree} alt='/' />
            </div>
          </div>
      
        <div className="col-lg-12 col-md-6 col-sm-12 mb-4 mt-4 ">
          <div className='overflow'>
            <div className='overlay'></div>
            <div style={{ overflow: "hidden" }}>
              <img className='img-fluid' src={ImageFour} alt='/' />
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ImagesComp;
