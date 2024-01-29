import React, { useState } from "react";

const ReviewForm = ({ addReview }) => {
  const [reviewText, setReviewText] = useState("");

  // Event handler function triggered when the review text is changed
  const handleReviewChange = (event) => {
    setReviewText(event.target.value);
  };

  // Event handler function triggered when the form is submitted
  const handleSubmit = (event) => {
    event.preventDefault();
    // Check if the trimmed review text is not empty
    if (reviewText.trim() !== "") {
      // Call the addReview function with the current review text as an argument
      addReview(reviewText);
      setReviewText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={reviewText}
        onChange={handleReviewChange}
        placeholder="Write your review..."
      />
      <br></br>
      <button className="submit-btn" type="submit">
        Submit Review
      </button>
    </form>
  );
};

export default ReviewForm;
