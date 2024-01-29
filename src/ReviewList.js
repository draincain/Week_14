import React from "react";
import Review from "./Review";

const ReviewList = ({ reviews }) => {
  return (
    <div>
      <h3>Reviews:</h3>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map((review, index) => (
            <Review key={index} text={review} />
          ))}
        </ul>
      ) : (
        // If there are no reviews, display a message
        <p>No reviews available.</p>
      )}
    </div>
  );
};

export default ReviewList;
