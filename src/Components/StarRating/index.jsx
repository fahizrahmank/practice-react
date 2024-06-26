import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ noOfStars = 5 }) => {
  const [rating, setRaing] = useState(0);
  const [hover, setHover] = useState(0);
  function handleClick(getCurrentIndex) {
    console.log(getCurrentIndex);
  }
  function handleMouseEnter(getCurrentIndex) {
    console.log(getCurrentIndex);

  }
  function handleMouseLeave(getCurrentIndex) {
    console.log(getCurrentIndex);

  }
  return (
    <div className="star-raing">
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            size={50}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
