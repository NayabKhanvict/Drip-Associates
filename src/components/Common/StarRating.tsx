import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const StarRating = ({ rating }: any) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5;

  const starElements = [];

  for (let i = 0; i < fullStars; i++) {
    starElements.push(<FaStar key={i} color="gold" />);
  }

  if (halfStar) {
    starElements.push(<FaStarHalfAlt key="half" color="gold" />);
  }

  return <div>{starElements}</div>;
};

export default StarRating;
