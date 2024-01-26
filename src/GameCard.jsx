import { StarRatingGame } from "./StarRating";
import { FaCartShopping } from "react-icons/fa6";
import { IconContext } from "react-icons";
import { generatePrice } from "./PriceGenerator";
import { Link } from "react-router-dom";

const GameCard = ({ game, handleCart, isInCart, cardHeight }) => {
  
  const price = generatePrice(
    new Date(game.released).getFullYear(),
    game.ratings_count,
    game.rating,
  );

  return (
    <div className="relative transition duration-300 hover:scale-105">
      <Link to={`/game/${game.id}`}>
        <img
          className={`block w-full rounded-lg border-2 border-solid border-black h-${cardHeight}`}
          src={game.background_image}
          alt={game.name + "background image"}
        />
      </Link>
      <div className="absolute h-[110px] w-full -translate-y-full bg-gradient-to-r from-gray-700 via-gray-900 to-black  opacity-95"></div>
      <div className="absolute mt-[2px] w-full -translate-y-full p-2 text-white ">
        <span className="flex items-center justify-between ">
          <Link to={`/game/${game.id}`}>
            <h1 className="inline text-lg font-bold">{game.name}</h1>
          </Link>
          <span className=" inline-block h-8 w-8 rounded-full border-[3px] border-solid border-green-600 text-center font-bold">
            {game.metacritic}
          </span>
        </span>
        <span className="flex items-center text-sm">
          <StarRatingGame rating={game.rating} size={12} /> {game.rating} (
          {game.ratings_count})
        </span>
        <p className="text-xs">
          {game.genres.map((genre) => genre.name).join(", ")}
        </p>
        <div className="flex items-center justify-between">
          <p className="text-md font-bold">${price}</p>
          <button
            onClick={handleCart}
            className={`mr-2 flex items-center gap-1 self-start rounded-md ${
              isInCart(game.id) ? "bg-white" : "bg-gray-700 hover:bg-gray-500"
            } px-2 py-1 text-sm `}
            disabled={isInCart(game.id)}
          >
            <IconContext.Provider
              value={{
                color: `${isInCart(game.id) ? "black" : "white"}`,
                size: "20px",
                title: "shopping cart",
                className: "mr-2",
              }}
            >
              <FaCartShopping />
            </IconContext.Provider>
            {isInCart(game.id) ? (
              <span className="font-bold text-black">In cart </span>
            ) : (
              <span className="font-bold text-white">Add to cart </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
export default GameCard;
