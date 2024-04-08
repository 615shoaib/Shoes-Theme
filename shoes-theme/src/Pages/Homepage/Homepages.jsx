import React from 'react'
import ImagesComp from '../../Components/ImagesComp/ImagesComp'
import Selling from './SellingComp/Selling'
import FetureComp from './featurecomp/FetureComp'
import NewComp from './NewComp/NewComp'
import Testimonial from './Testimonials/Testimonial'
import { BlogComp } from './BlogComp/BlogComp'
import Navbar from "../../Components/Navbar/Navbar"
import Slider from '../../Components/Slider/Slider'
import Demo from '../../Components/Navbar/Demo'

const Homepages = () => {
  return (
    <>
     {/* <Navbar /> */}
    {/* <Demo /> */}
    <Slider />
     <ImagesComp />
     <Selling />
     <FetureComp />
     <NewComp />
     <Testimonial />
     {/* <BlogComp /> */}
    </>
  )
}

export default Homepages