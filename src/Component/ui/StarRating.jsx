import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const RatingStars = ({ rating }) => {
  // Round down to nearest half-star
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex">
      {/* Full stars */}
      {[...Array(fullStars)].map((_, index) => (
        <FaStar key={index} className="text-yellow-400 font-light" />
      ))}
      {/* Half star */}
      {halfStar && <FaStarHalfAlt className="text-yellow-400" />}
      {/* Empty stars */}
      {[...Array(emptyStars)].map((_, index) => (
        <FaRegStar key={index} className="text-yellow-400" />
      ))}
    </div>
  );
};

export default RatingStars;
