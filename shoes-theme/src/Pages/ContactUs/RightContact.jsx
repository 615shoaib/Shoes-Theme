import React from "react";

const RightContact = () => {
  return (
    <>
      <section className="right-box mt-2  " >
        <div className="commiunation-text d-flex mb-4">
          <div className="commiunation-icon">
            <i className="fa-solid fa-house-chimney"></i>
          </div>

          <div className="commiunation-info">
            <h3 className="ms-2 mt-2">Address : </h3>
            <p className="ms-2 mt-2">Miata 309 S Main St,Stafford, KS 67578</p>
          </div>
        </div>

        <div className="commiunation-text d-flex mb-4">
          <div className="commiunation-icon">
            <i className="fa-solid fa-phone-flip"></i>
          </div>
          <div className="commiunation-info">
            <h3 className="ms-2 mt-2">PHONE: : </h3>
            <p className="ms-2 mt-2">0123 456 789 - 15 2368 4597</p>
          </div>
        </div>

        <div className="commiunation-text d-flex mb-4">
          <div className="commiunation-icon">
            <i className="fa-solid fa-fax"></i>
          </div>
          <div className="commiunation-info">
            <h3 className="ms-2 mt-2">FAX: </h3>
            <p className="ms-2 mt-2">0123 456 789 - 15 2368 4597</p>
          </div>
        </div>

        <div className="commiunation-text d-flex mb-5">
          <div className="commiunation-icon">
            <i className="fa-solid fa-envelope"></i>
          </div>
          <div className="commiunation-info">
            <h3 className="ms-2 mt-2">EMAIL:</h3>
            <p className="ms-2 mt-2">example@gmail.com</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default RightContact;
