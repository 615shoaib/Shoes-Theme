import React from "react";

const MapComp = () => {
  return (
    <>
      <div style={{ opacity: "0.7" }} className="mt-3">
        <iframe
          className="mb-5"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317716.60645421536!2d-0.43124416199480503!3d51.52860701284128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2s!4v1711608736717!5m2!1sen!2s"
          height="400px"
          style={{
            width: "100%",

            border: "none",
          }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default MapComp;
