import React from "react";
import Rating from "react-rating-stars-component";
import {BsStarHalf, BsStarFill, BsStar} from "react-icons/bs"



const StarRating = ({ review }) => {
  return (
    <div>
      <Rating
        value={review}
        count={5}
        size={24}
        edit={false}
        activeColor="#FFD700" // Yellow color for filled stars
        color="#C0C0C0" // Grey color for unfilled stars
        isHalf={true}
        emptyIcon= {<BsStar/>}
        halfIcon= {<BsStarHalf/>}
        filledIcon= {<BsStarFill/>}
      />
    </div>
  );
};

export default StarRating;
