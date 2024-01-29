import React from "react";
import Stars from "./Stars";
import ReviewList from "./ReviewList";
import ReviewForm from "./ReviewForm";

// Functional component named Movie with  props as parameters
const Movie = ({ title, image, synopsis, reviews, addReview }) => {
  return (
    // Root container div
    <div className="movie-container">
      <h2>{title}</h2>
      <img src={image} alt={title} className="movie-image" />
      <p>{synopsis}</p>
      <Stars />
      <ReviewList reviews={reviews} />
      <ReviewForm addReview={addReview} />
    </div>
  );
};

export default Movie;
