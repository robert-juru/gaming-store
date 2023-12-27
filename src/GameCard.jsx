import { StarRatingGame } from "./StarRating";
import { FaCartShopping } from "react-icons/fa6";
import { IconContext } from "react-icons";
import { useState } from "react";
const GameCard = ({ game, handleCart }) => {
  const [inCart, setInCart] = useState(false);

  const handleAddToCart = () => {
    if (!inCart) {
      setInCart(true);
      handleCart(game.id)
    }
  };

  return (
    <div className="relative transition duration-300 hover:scale-105">
      <img
        className="block w-full rounded-lg border-2 border-solid border-black lg:h-72"
        src={game.background_image}
        alt={game.name + "background image"}
      />
      <div className="absolute h-[110px] w-full -translate-y-full bg-gradient-to-r from-gray-700 via-gray-900 to-black  opacity-95"></div>
      <div className="absolute mt-[2px] w-full -translate-y-full p-2 text-white ">
        <span className="flex items-center justify-between ">
          <h1 className="inline text-lg font-bold">{game.name}</h1>
          <span className=" inline-block h-8 w-8 rounded-full border-[3px] border-solid border-green-600 text-center font-bold">
            {game.metacritic}
          </span>
        </span>
        <span className="flex items-center text-sm">
          <StarRatingGame rating={game.rating} /> {game.rating} (
          {game.ratings_count})
        </span>
        <p className="text-xs">
          {game.genres.map((genre) => genre.name).join(", ")}
        </p>
        <div className="flex items-center justify-between">
          <p className="text-md font-bold">$25.99</p>
          <button
            onClick={handleAddToCart}
            className={`mr-2 flex items-center gap-1 self-start rounded-md ${
              inCart ? "bg-gray-500" : "bg-gray-700"
            } px-2 py-1 text-sm hover:bg-gray-500`}
            disabled={inCart}
          >
            <IconContext.Provider
              value={{
                color: "white",
                size: "20px",
                title: "shopping cart",
                className: "mr-2",
              }}
            >
              <FaCartShopping />
            </IconContext.Provider>
            {inCart ? "In cart" : "Add to cart"}
          </button>
        </div>
      </div>
    </div>
  );
};
export default GameCard;
