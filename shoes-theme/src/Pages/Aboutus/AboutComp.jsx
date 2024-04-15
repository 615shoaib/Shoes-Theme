import React from "react";

const AboutComp = () => {
  return (
    <>
      <div className="col-lg-6 col-12">
        <div className="left-about mt-2 mb-5">
          <h1>
            ABOUT <span>COMPANY</span>
          </h1>
          <p>
            There are many variations of passages of Lorem Ipsum available,
            majority have suffered alteration in some form, by injected humour,
            or randomised words which don't look even slightly kn je believable
            There are manations of passages of Lorem Ipsum available, but the
            majority ahave suffered ami tar cholnay vulbo na alte ration.
            majority have suffered alteration in
          </p>
          <button className="btn btn-dark">Our work </button>
        </div>
      </div>

      {/* video Comp */}
      <div className="col-lg-6 col-md-12">
        <div className="mt-3 mb-5">
        
        <iframe 
          height="300"  
          src="https://www.youtube.com/embed/JDPQfkIakTs" 
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="bg-dark w-100"
        ></iframe>
        </div>
      </div>
    </>
  );
};

export default AboutComp;
