import Header from "./Header";
import { Link } from "react-router-dom";
import { generatePrice } from "./PriceGenerator";
import { IconContext } from "react-icons";
import { StarRatingGame } from "./StarRating";

const ShoppingCartPage = ({ cartGames, removeFromCart, fetchedGames }) => {
  let totalPrice = cartGames
    .reduce((acc, game) => acc + game.price, 0)
    .toFixed(2);
  return (
    <div className="m-0 px-16 py-4">
      <Header
        cartGames={cartGames}
        removeFromCart={removeFromCart}
        fetchedGames={fetchedGames}
      />
      <hr className="border-slate-800 pb-12 font-bold" />
      {cartGames.length == 0 && (
        <div className="mx-16 flex flex-col items-center justify-center border border-solid border-slate-800 pb-12 pt-4 text-gray-300">
          <img
            className="p-8"
            src="green-empty-cart.png"
            alt="green sad empty cart"
          ></img>
          <div className="flex flex-col items-center justify-center gap-2">
            <h2 className="pb-2 text-3xl">
              Cart's feeling a bit empty. Time to fill it with gaming joy!
            </h2>
            <Link className="text-lg hover:text-white hover:underline" to="/">
              Shop for Games
            </Link>
          </div>
        </div>
      )}
      <div className="grid xl:grid-cols-[1fr_420px] gap-8 px-8 text-white">
        <section className="flex-1">
          {cartGames &&
            cartGames.map((cartGame) => {
              let matchedGame = fetchedGames.find(
                (fetchedGame) => fetchedGame.id === cartGame.id,
              );
              if (matchedGame) {
                // const price = generatePrice(
                //   new Date(matchedGame.released).getFullYear(),
                //   matchedGame.ratings_count,
                //   matchedGame.rating,
                // );
                return (
                  <article
                    key={matchedGame.id}
                    className="mb-4 flex h-36 w-full items-center justify-between gap-8 rounded-md bg-gray-900 p-8 py-1 text-sm text-white"
                  >
                    <div className="flex gap-8">
                    <Link to={`/game/${matchedGame.id}`}>
                    <img
                      src={matchedGame.background_image}
                      alt={matchedGame.name}
                      className="w-32 h-24"
                    />
                    </Link>
                    <div>
                    <Link to={`/game/${matchedGame.id}`}>
                      <p className="text-lg font-bold ">{matchedGame.name}</p>
                      </Link>
                      <span className="flex items-center text-sm">
                        <StarRatingGame rating={matchedGame.rating} size={12} />{" "}
                        {matchedGame.rating} ({matchedGame.ratings_count})
                      </span>
                      <p className="text-md">
                        {matchedGame.genres
                          .map((genre) => genre.name)
                          .join(", ")}
                      </p>
                    </div>
                    </div>
                    <div className="flex flex-col text-lg">
                    <span className="font-bold">${matchedGame.price}</span>
                    <button
                      className="text-gray-300 hover:text-white hover:underline"
                      onClick={() => removeFromCart(matchedGame.id)}
                    >
                      Remove
                    </button>
                    </div>
                  </article>
                );
              }
            })}
        </section>
        {cartGames.length > 0 && (
          <div className="flex flex-col gap-8">
            <section className="rounded-md items-center bg-gray-900 px-4 py-6">
              <h2 className="pb-8 text-center text-3xl">Games Summary</h2>
              <h3 className="flex justify-between pb-3 text-lg">
                Price <span>${totalPrice}</span>
              </h3>
              <h3 className="flex justify-between pb-3 text-lg">
                Taxes{" "}
                <span className="text-gray-300">Calculated at Checkout</span>
              </h3>
              <hr className="border-gray-700 pb-3" />
              <h3 className="flex justify-between pb-8 text-lg font-bold">
                Subtotal <span>${totalPrice}</span>
              </h3>
              <button className="self-center w-full rounded-md  bg-blue-600 p-4 text-center  hover:bg-blue-500">
                Check Out
              </button>
            </section>
            <section className="flex flex-col items-center rounded-md bg-slate-900 px-4 py-6">
              <h3 className="text-center">Insert a voucher for extra savings in your gaming cart.</h3>
              <input
                className="my-4  w-full rounded-md border-0 bg-gray-800 p-2  text-sm text-gray-300 focus:bg-gray-700 focus:outline-none"
                type="text"
              />
              <button className="w-full rounded-md bg-blue-600 p-4 text-center  hover:bg-blue-500">
                Apply Voucher
              </button>
            </section>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingCartPage;
