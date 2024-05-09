import React from "react";

interface ReviewProps {
  rating: number | undefined;
  isStar?: boolean;
  totalReview?: number;
}

const Review: React.FC<ReviewProps> = ({
  rating = 0,
  isStar = true,
  totalReview,
}) => {
  const stars = [];

  const ratingNumber = parseFloat(rating.toString());
  const formattedRating = Number.isInteger(ratingNumber)
    ? ratingNumber.toFixed(1)
    : ratingNumber.toString();

  for (let i = 0; i < Math.floor(ratingNumber); i++) {
    stars.push(<i key={i} className="fa fa-star !text-yellow-500" />);
  }

  if (ratingNumber % 1 !== 0) {
    stars.push(
      <i
        key={stars.length}
        className="fa fa-star-half-stroke !text-yellow-500"
      />
    );
  }

  while (stars.length < 5) {
    stars.push(
      <i key={stars.length} className="far fa-star !text-yellow-500" />
    );
  }

  return (
    <React.Fragment>
      <ul className="flex items-center">
        {isStar &&
          stars.map((star, index) => (
            <li
              key={index}
              className="inline-block font-normal text-sm mr-2 text-warning"
            >
              {star}
            </li>
          ))}
        <li className="inline-flex items-center font-normal text-base mr-2 text-black dark:text-white">
          {formattedRating}
          {isStar && "/5.0"}{" "}
          {!isStar && <i className="fa fa-star text-warning ml-1" />}{" "}
          {!isStar && totalReview && (
            <p className="ml-1 text-sm text-bodyColor">{`(${totalReview})`}</p>
          )}
        </li>
      </ul>
    </React.Fragment>
  );
};

export default Review;
