import React from "react";
import BlogTestimonials from "./BlogTestimonials";

export const BlogComp = () => {
  const BlogDiv = {
    borderTop: "1px solid #EAEAEA",
    maxWidth: "1170px",
    width: "100%",
    padding: "20px 0 0 0",
    lineHeight: "20px",
  };

  const TextBlog = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "center",
  };
  const formStyle = {
    fontSize: "24px",
    fontWeight: "700",
    color: "#999999",
    lineHeight: "32px",
    fontFamily: "Montserrat, Arial, Helvetica, sans-serif",
    textTransform: "uppercase",
  };
  const blogStyle = {
    fontSize: "30px",
    fontFamily: "Montserrat, Arial, Helvetica, sans-serif",
    fontWeight: "700",
    color: "#333333",
    textAlign: "center",
    textTransform: "uppercase",
  };
  return (
    <>
      <div className="container mb-5">
        <div className="row">
          <div className="col-lg-12 col-md-6 ">
            <div style={BlogDiv} className="mb-2">
              <div style={TextBlog}>
                <h4 style={formStyle}>Form</h4>
                <h3 style={blogStyle}>THE BLOG</h3>
              </div>
            </div>

           <BlogTestimonials />
          </div> 
          
        </div>
      </div>
    </>
  );
};
