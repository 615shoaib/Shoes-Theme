import React from 'react';

const NextButton = (props) => { 
  const { className, style, onClick } = props;

  return (
    <>
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          width: "30px",
          height: "30px",
          border: '1px solid #ccc',
          position: 'absolute',
          top: '-7%',  // Adjusted to a relative position from the top
          right: "-01%",  // Adjusted to a relative position from the right
          transform: 'translate(50%, -50%)', // Center horizontally and align top
        }}
        onClick={onClick}
      />
      <i
        className="fa-solid fa-arrow-right fs-2"
        style={{
          position: 'absolute',
          top: '-7%',  // Adjusted to a relative position from the top
          left: '100%',  // Adjusted to a relative position from the left
          cursor: 'pointer',
          transform: 'translate(-50%, -50%)', // Center horizontally and align top
        }}
        onClick={onClick}
      ></i>
    </>
  );
}

export default NextButton;
