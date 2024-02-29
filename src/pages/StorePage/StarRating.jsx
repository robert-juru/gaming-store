import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";
import { IconContext } from "react-icons";

export const StarRatingGame = ({ rating, size }) => {
  const stars = [];
  let remainingStars = Math.floor(rating);
  let hasHalfStar = false;

  const iconContextValue = {
    color: "gold",
    title: "star rating",
    size: `${size}px`,
  };

  for (let i = 0; i < 5; i++) {
    if (remainingStars >= 1) {
      stars.push(
        <IconContext.Provider key={i} value={iconContextValue}>
          <IoMdStar />
        </IconContext.Provider>,
      );
      remainingStars--;
    } else {
      if (rating % 1 !== 0 && !hasHalfStar) {
        stars.push(
          <IconContext.Provider key={i} value={iconContextValue}>
            <IoMdStarHalf />
          </IconContext.Provider>,
        );
        hasHalfStar = true;
      } else {
        stars.push(
          <IconContext.Provider key={i} value={iconContextValue}>
            <IoMdStarOutline />
          </IconContext.Provider>,
        );
      }
    }
  }

  return <div className="flex pr-2">{stars}</div>;
};
