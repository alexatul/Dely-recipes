import "./StarReviews.css";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import StarReviewsLocalStorage from "./StarReviewsLocalStorage";

function StarReviews() {
  const { title } = useParams();

  const initialRatings = JSON.parse(
    localStorage.getItem(`ratings-${title}`) || "[]"
  );
  const [rating, setRating] = StarReviewsLocalStorage(`ratings-${title}`, []);
  const [hover, setHover] = useState(initialRatings);

  useEffect(() => {
    localStorage.setItem(`ratings-${title}`, JSON.stringify(rating));
  }, [rating, title]);

  const average = rating.reduce((a, b) => a + b, 0) / rating.length;
  let averageNumber = parseFloat(average).toFixed(2);

  return (
    <div className="stars-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
      {rating.length > 0 && <p>{averageNumber} / 5</p>}
    </div>
  );
}

export default StarReviews;
