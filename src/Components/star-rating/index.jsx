import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const starRating = ({ noOfStar = 5 }) => {
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
    <div className="star-aing">
      {[...Array(noOfStar)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            size={40}
          />
        );
      })}
    </div>
  );
};

export default starRating;
