import { StarRatingGame } from "./StarRating";
import { IoMdStar } from "react-icons/io";

const RatingBar = ({ rating, percentage, color, reviewCount }) => (
  <span className="flex items-center">
    {rating}
    <IoMdStar className="text-yellow-400" />
    <div
      className={`relative ml-2 h-3 w-48 rounded-full bg-gray-200 lg:w-56 xl:w-72`}
    >
      <div
        className={`absolute bottom-0 left-0 top-0 h-full w-[${percentage}%] rounded-l-full ${color}`}
      ></div>
    </div>
    <span className="pl-2">{reviewCount} reviews</span>
  </span>
);

const RatingSection = () => (
  <>
    <RatingBar
      rating={5}
      percentage={59.11}
      color="bg-green-600"
      reviewCount={4013}
    />
    <RatingBar
      rating={4}
      percentage={32.66}
      color="bg-lime-400"
      reviewCount={2217}
    />
    <RatingBar
      rating={3}
      percentage={0}
      color="bg-yellow-500"
      reviewCount={0}
    />
    <RatingBar
      rating={2}
      percentage={6.39}
      color="bg-orange-400"
      reviewCount={434}
    />
    <RatingBar
      rating={1}
      percentage={1.84}
      color="bg-red-600"
      reviewCount={125}
    />
  </>
);

const GameReviews = () => {
  return (
    <>
      <div>
        <span className="flex items-center">
          <h3 className="pr-2 text-xl font-bold tracking-wide">REVIEWS</h3>
          <StarRatingGame rating={4.67} size={24} />
          <span className="text-xl font-bold">4.67</span>
          <span className="ml-2 rounded-md bg-green-500 p-[3px] text-xs font-bold  text-white">
            6792
          </span>
        </span>
        <hr className="my-2 border-slate-800" />
      </div>
      <div className="flex gap-12 py-8">
        <div className="flex flex-col items-center">
          <h4 className="text-4xl font-bold">4.67 of 5 stars</h4>
          <StarRatingGame rating={4.65} size={48} />
          <h4 className="text-xl">6792 reviews</h4>
        </div>
        <div>
          <RatingSection />
        </div>
      </div>
    </>
  );
};
export default GameReviews;
