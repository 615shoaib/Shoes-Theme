import React, { useState, useEffect } from "react";
import Images from "../../Images/top.png"

const ScrollTops = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsVisible(scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={`scroll-to-top ${isVisible ? "visible" : ""}`}>
      <button onClick={scrollToTop} title="bottom To Top">
        <img src={Images} alt="Go to Top" style={{width:'50px'}}/>
      </button>
    </div>
  );
};

export default ScrollTops;
