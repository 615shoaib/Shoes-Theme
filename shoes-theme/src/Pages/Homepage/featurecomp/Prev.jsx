import React from 'react';

const PreButton = (props) => { 
  const { className, style, onClick } = props;

  return (
    <>
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: '#fff',
          color: "#000",
          position: "absolute",
          top: "-7%",  
          left: "95%",  
          width: '30px',
          height: "30px",
          border: "1px solid #ccc",
          transform: 'translate(-100%, -50%)', 
        }}
        onClick={onClick}
      />
      <i
        className="fa-solid fa-arrow-left fs-2 text-center"
        style={{
          position: 'absolute',
          top: '-7%', 
          left: '95%', 
          cursor: 'pointer',
          transform: 'translate(-50%, -50%)',
        }}
        onClick={onClick}
      ></i>
    </>
  );
}

export default PreButton;
