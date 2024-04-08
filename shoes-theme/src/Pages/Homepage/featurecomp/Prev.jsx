import React from 'react'


const PreButton = (props) => { 
     const { className, style, onClick } = props;

  return (
    <>
   
    <div
      className={className}
      style={{ 
        ...style, 
        display: "block",
        background:'#fff',
        color:"#000", 
        position:"absolute",
        top:"-30px",
        left:"95%",
        width:'30px',
        height:"30px",
        border:"1px solid #ccc"
        }}
      
    />
        <i className="fa-solid fa-arrow-left fs-2 text-center" 
            style={{top:"-45px",position:'relative',left:"96%"}}
            onClick={onClick}
            ></i>
    </>
  )
}

export default PreButton