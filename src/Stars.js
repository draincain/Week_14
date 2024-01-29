import React, { useState } from "react";

const Stars = () => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
  };
  
// Functional component named Stars
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          onClick={() => handleStarClick(i)}
          style={{ cursor: "pointer", color: i <= rating ? "gold" : "gray" }}
        >
          &#9733;
        </span>
      );
    }
    return stars;
  };

  return <div>{renderStars()}</div>;
};

export default Stars;
