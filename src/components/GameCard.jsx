import { StarRatingGame } from "../pages/StorePage/StarRating";
import { FaCartShopping } from "react-icons/fa6";
import { IconContext } from "react-icons";
import { generatePrice } from "./PriceGenerator";
import { Link } from "react-router-dom";

const GameCard = ({
  game,
  handleCart,
  isInCart,
  cardHeight,
  overlayHeight,
  hoverScale,
  isMainImage,
}) => {
  const price = generatePrice(
    new Date(game.released).getFullYear(),
    game.ratings_count,
    game.rating,
  );

  //change the resolution of the photos to make them weigh less
  const modifyImageUrl = (imageUrl) => {
    if (!imageUrl) {
      return null;
    }
    const urlSegments = imageUrl.split("/");
    const gamesIndex = urlSegments.findIndex(
      (segment) => segment === "games" || segment === "screenshots",
    );
    urlSegments.splice(gamesIndex, 0, "crop/600/400");
    return urlSegments.join("/");
  };

  const nameLength = game.name.length;
  const gameCardModifiedUrl = modifyImageUrl(game.background_image);

  return (
    <div className={`relative transition duration-300 ${hoverScale}`}>
      <Link to={`/game/${game.id}`}>
        <img
          className={`block h-64 w-full rounded-lg border-2 border-solid border-black ${cardHeight}`}
          src={isMainImage ? game.background_image : gameCardModifiedUrl || "/no-image-available.jpg"}
          alt={game.name + "background image"}
        />
      </Link>
      <div
        className={`absolute ${overlayHeight} w-full -translate-y-full bg-gradient-to-r from-gray-700 via-gray-900 to-black opacity-95`}
      ></div>
      <div
        className={`absolute w-full -translate-y-full ${
          nameLength > 20 ? "p-2" : "p-3"
        } text-white `}
      >
        <span className="flex items-center justify-between">
          <Link to={`/game/${game.id}`}>
            <h1
              className={` ${
                nameLength > 30
                  ? "text-sm"
                  : nameLength > 18
                    ? "text-md"
                    : "text-lg"
              }  inline font-bold`}
            >
              {game.name}{" "}
            </h1>
          </Link>
          {game.metacritic && (
            <span
              className={`inline-block min-h-8 min-w-8 rounded-full border-[3px] border-solid text-center font-bold ${
                game.metacritic < 60
                  ? "border-red-500"
                  : game.metacritic < 80
                    ? "border-yellow-500"
                    : "border-green-500"
              }`}
            >
              {game.metacritic}
            </span>
          )}
        </span>
        <span className="flex items-center text-xs">
          <StarRatingGame rating={game.rating} size={8} /> {game.rating} (
          {game.ratings_count})
        </span>
        <p className="pb-1 text-[10px]">
          {game.genres.map((genre) => genre.name).join(", ")}
        </p>
        <div className="flex items-center justify-between">
          <p className="text-sm font-bold">${price}</p>
          <button
            onClick={handleCart}
            className={`mr-2 flex items-center gap-1 self-start rounded-md ${
              isInCart(game.id) ? "bg-white" : "bg-gray-700 hover:bg-gray-500"
            } px-2 py-1 text-xs `}
            disabled={isInCart(game.id)}
          >
            <IconContext.Provider
              value={{
                color: `${isInCart(game.id) ? "black" : "white"}`,
                size: "16px",
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
