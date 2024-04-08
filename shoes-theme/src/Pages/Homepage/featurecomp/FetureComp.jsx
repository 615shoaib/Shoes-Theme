import React from 'react'
import FeatureSlider from './FeatureSlider'
import NextButton from './NextButton'

const FetureComp = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <h1 className='feat-comp'>FEATURED PRODUCTS</h1>
          <NextButton />
        </div>
      </div>
      
          <FeatureSlider />
        
    </div>
  )
}

export default FetureComp
