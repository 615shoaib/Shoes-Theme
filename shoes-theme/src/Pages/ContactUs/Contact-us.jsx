import React from 'react'
import FormComp from './Form'
import RightContact from './RightContact'
import MapComp from './MapComp'

const Contactus = () => {
  return (
    <>
    <section>
      <div>
        <h1 className='text-center contact-page pt-4 pb-0'>Contact Us page</h1>
      </div>
    <div className="container">
        <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
                <FormComp />
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
                <RightContact />
            </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <MapComp />
          </div>
        </div>
    </div>
    </section>
    </>
  )
}

export default Contactus