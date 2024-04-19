import React from 'react'
import ImagesComp from '../../Components/ImagesComp/ImagesComp'
import Selling from './SellingComp/Selling'
import FetureComp from './featurecomp/FetureComp'
import NewComp from './NewComp/NewComp'
import Testimonial from './Testimonials/Testimonial'
import Slider from '../../Components/Slider/Slider'


const Homepages = () => {
  return (
    <>
    <Slider />
     <ImagesComp />
     <Selling />
     <FetureComp />
     <NewComp />
     <Testimonial />
    
    </>
  )
}

export default Homepages