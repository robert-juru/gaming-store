import { StarRatingGame } from "./StarRating";
import { IoMdStar } from "react-icons/io";

const RatingBar = ({ rating, percentage, color, reviewCount }) => {
  return (
    <span className="flex items-center">
      {rating}
      <IoMdStar className="text-yellow-400" />
      <div
        className="relative ml-2 h-3 w-48 rounded-full bg-gray-200 lg:w-56 xl:w-72"
      >
        <div style={{ width: `${percentage}%` }}
          className={`absolute bottom-0 left-0 top-0 h-full rounded-l-full ${color}`}
        ></div>
      </div>
      <span className="pl-2">{reviewCount} reviews</span>
    </span>
  );
};

const RatingSection = ({ reviews }) => (
  <>
    <RatingBar
      rating={5}
      percentage={reviews[0]?.percent ?? 0}
      color="bg-green-600"
      reviewCount={reviews[0]?.percent ?? 0}
    />
    <RatingBar
      rating={4}
      percentage={reviews[1]?.percent ?? 0}
      color="bg-lime-400"
      reviewCount={reviews[1]?.percent ?? 0}
    />
    <RatingBar
      rating={3}
      percentage={0}
      color="bg-yellow-500"
      reviewCount={0}
    />
    <RatingBar
      rating={2}
      percentage={reviews[2]?.percent ?? 0}
      color="bg-orange-400"
      reviewCount={reviews[2]?.percent ?? 0}
    />
    <RatingBar
      rating={1}
      percentage={reviews[3]?.percent ?? 0}
      color="bg-red-600"
      reviewCount={reviews[3]?.percent ?? 0}
    />
  </>
);

const GameReviews = ({ reviews, rating, reviewsCount }) => {
  return (
    <>
      <div>
        <span className="flex items-center">
          <h3 className="pr-2 text-xl font-bold tracking-wide">REVIEWS</h3>
          <StarRatingGame rating={4.67} size={24} />
          <span className="text-xl font-bold">{rating}</span>
          <span className="ml-2 min-w-6 text-center rounded-md bg-green-500 p-[3px] text-xs font-bold  text-white">
            {reviewsCount}
          </span>
        </span>
        <hr className="my-2 border-slate-800" />
      </div>
      <div className="flex gap-12 py-8">
        <div className="flex flex-col items-center">
          <h4 className="text-4xl font-bold">{rating} of 5 stars</h4>
          <StarRatingGame rating={rating} size={48} />
          <h4 className="text-xl">{reviewsCount} reviews</h4>
        </div>
        <div>
          <RatingSection reviews={reviews} rating={rating}  />
        </div>
      </div>
    </>
  );
};
export default GameReviews;
