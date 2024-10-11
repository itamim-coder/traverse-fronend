import React from "react";
import ReviewSlider from "../ui/Carousel/reviewSlider";
import Container from "../ui/Container";

const Review = () => {
  return (
    <Container>
      <div className="text-center mt-16">
        <p>Testimonial</p>
        <p className="text-4xl font-bold">Unforgettable Travel Experiences</p>
      </div>
      <ReviewSlider />
    </Container>
  );
};

export default Review;
