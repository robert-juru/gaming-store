import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";
import { IconContext } from "react-icons";

export const StarRatingGame = ({ rating, size }) => {
  const stars = [];
  let remainingStars = Math.floor(rating);
  let hasHalfStar = false;

  for (let i = 0; i < 5; i++) {
    if (remainingStars >= 1) {
      stars.push(
        <IconContext.Provider
          value={{ color: "gold", title: "star rating", size: `${size}px` }}
        >
          <IoMdStar key={i} />
        </IconContext.Provider>,
      );
      remainingStars--;
    } else {
      if (rating % 1 !== 0 && !hasHalfStar) {
        stars.push(
          <IconContext.Provider
            value={{ color: "gold", title: "half-star rating", size: `${size}px` }}
          >
            <IoMdStarHalf key={i} />
          </IconContext.Provider>,
        );
        hasHalfStar = true;
      } else {
        stars.push(
          <IconContext.Provider
            value={{
              color: "gray",
              title: "empty star rating",
              size: `${size}px`
            }}
          >
            <IoMdStarOutline key={i} />
          </IconContext.Provider>,
        );
      }
    }
  }

  return <div className="flex pr-2">{stars}</div>;
};
