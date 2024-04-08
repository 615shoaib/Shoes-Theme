

import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

export function Ratings() {
  const [rating, setRating] = useState(4)


  // Catch Rating value
  const handleRating = () => {
    setRating(rate)
  }

  const RatingDiv ={
    fontSize:"14px",
  }

  return (
    <div style={RatingDiv}>

      <Rating onClick={handleRating} initialValue={rating} size={15}/>
</div>
  )
}