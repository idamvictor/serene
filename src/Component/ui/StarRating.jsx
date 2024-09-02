import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";

const RatingStars = ({ rating }) => {
  // Round down to nearest half-star
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex gap-2">
      {/* Full stars */}
      {[...Array(fullStars)].map((_, index) => (
        <IoIosStar key={index} className="text-yellow-300 font-light" />
      ))}
      {/* Half star */}
      {halfStar && <IoIosStarHalf className="text-yellow-300" />}
      {/* Empty stars */}
      {[...Array(emptyStars)].map((_, index) => (
        <IoIosStarOutline key={index} className="text-yellow-300" />
      ))}
    </div>
  );
};

export default RatingStars;
