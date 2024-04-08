import React from 'react'


const NextButton = (props) => { 
     const { className, style, onClick } = props;

  return (
    <>
   
        <div
        className={className}
        style={{ ...style, display: "block",width:"30px",height:"30px",border:'1px solid #ccc',position:'absolute',top:'-7%',right:"-40px" }}
        />
        <i className="fa-solid fa-arrow-right fs-2"  
         style={{position:'absolute',top:'-11%',left:'100%'}}
         onClick={onClick}

        ></i>
    </>
  )
}

export default NextButton