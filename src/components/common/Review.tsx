import React, { useMemo } from "react";

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
  const stars = useMemo(() => {
    const starsArray = [];
    const ratingNumber = parseFloat(rating.toString());
    const formattedRating = Number.isInteger(ratingNumber)
      ? ratingNumber.toFixed(1)
      : ratingNumber.toString();

    for (let i = 0; i < Math.floor(ratingNumber); i++) {
      starsArray.push(
        <i key={`star-${i}`} className="fa fa-star !text-yellow-500" />
      );
    }

    if (ratingNumber % 1 !== 0) {
      starsArray.push(
        <i
          key={`star-half`}
          className="fa fa-star-half-stroke !text-yellow-500"
        />
      );
    }

    while (starsArray.length < 5) {
      starsArray.push(
        <i
          key={`star-empty-${starsArray.length}`}
          className="far fa-star !text-yellow-500"
        />
      );
    }

    return starsArray;
  }, [rating]);

  const formattedRating = useMemo(() => {
    const ratingNumber = parseFloat(rating.toString());
    return Number.isInteger(ratingNumber)
      ? ratingNumber.toFixed(1)
      : ratingNumber.toString();
  }, [rating]);

  return (
    <React.Fragment>
      <ul className="flex items-center">
        {isStar &&
          stars.map((star, index) => (
            <li
              key={`star-item-${index}`}
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
