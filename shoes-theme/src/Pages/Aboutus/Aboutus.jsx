import React from 'react'
import AboutComp from './AboutComp'
import Team from './Team'
import ImagesSlider from './ImagesSlider'
import CompanySlider from './CompanySlider'

const Aboutus = () => {
  return (
    <>
    <div className="container">
        <div className="row">
            <AboutComp />
        </div>
        <div className="row">
            <div className="col-lg-12 col-12">
                <Team />
            </div>
        </div>
        <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
                <ImagesSlider />
            </div>
        </div>
        <div className="row">
            <div className="col-lg-12 col-md-12">
                <CompanySlider />
            </div>
        </div>
    </div>
    </>
  ) 
}

export default Aboutus