import React from 'react'

const Heartclick = () => {
    
  
    const handleClick =()=>{
        console.log("clicked")
    }
  return (
    <>
    <button className='btn' onClick={()=>handleClick()}>
    <i className="fa-regular fa-heart fs-4"  ></i>
    </button>
    </>
  )
}

export default Heartclick