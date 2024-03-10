import Header from "../../components/Header";
import { Link } from "react-router-dom";
import { StarRatingGame } from "../StorePage/StarRating";

const ShoppingCartPage = ({ cartGames, removeFromCart, fetchedGames }) => {
  let totalPrice = cartGames
    .reduce((acc, game) => acc + game.price, 0)
    .toFixed(2);
  return (
    <div className="m-0 p-4 md:px-16">
      <Header
        cartGames={cartGames}
        removeFromCart={removeFromCart}
        fetchedGames={fetchedGames}
      />
      <hr className="border-slate-800  pb-4 font-bold md:pb-12" />
      {cartGames.length == 0 && (
        <div className="mx-4 flex h-full flex-col items-center justify-center px-8 pb-12  pt-4 text-gray-300 md:mx-16">
          <img
            className="p-8"
            src="green-empty-cart.png"
            alt="green sad empty cart"
          ></img>
          <div className="flex flex-col items-center justify-center gap-2">
            <h2 className="pb-2 text-center text-xl text-white sm:text-2xl lg:text-3xl ">
              Cart's feeling a bit empty. Time to fill it with gaming joy!
            </h2>
            <Link
              className="text-sm text-white hover:text-white hover:underline sm:text-base md:text-gray-300 lg:text-lg"
              to="/"
            >
              Shop for Games
            </Link>
          </div>
        </div>
      )}
      <div className="grid gap-8 px-0 text-white xl:grid-cols-[1fr_420px]">
        <section className="flex-1">
          {cartGames &&
            cartGames.map((cartGame) => {
              return (
                <article
                  key={cartGame.id}
                  className="mb-4 flex h-36 w-full items-center justify-between gap-8 rounded-md bg-gray-900 p-4 py-1 text-sm text-white md:p-8"
                >
                  <div className="flex gap-4 md:gap-8">
                    <Link to={`/game/${cartGame.id}`}>
                      <img
                        src={cartGame.background_image}
                        alt={cartGame.name}
                        className="h-24 w-20 min-w-20 md:w-32"
                      />
                    </Link>
                    <div>
                      <Link to={`/game/${cartGame.id}`}>
                        <p className="text-md font-bold md:text-lg ">
                          {cartGame.name}
                        </p>
                      </Link>
                      <span className="flex items-center text-xs md:text-sm">
                        <StarRatingGame rating={cartGame.rating} size={12} />{" "}
                        {cartGame.rating} ({cartGame.ratings_count})
                      </span>
                      <p className="md:text-md text-xs">
                        {cartGame.genres.map((genre) => genre.name).join(", ")}
                      </p>
                    </div>
                  </div>
                  <div className="text-md flex flex-col md:text-lg">
                    <span className="font-bold">${cartGame.price}</span>
                    <button
                      className="text-gray-300 hover:text-white hover:underline"
                      onClick={() => removeFromCart(cartGame.id)}
                    >
                      Remove
                    </button>
                  </div>
                </article>
              );
            })}
        </section>
        {cartGames.length > 0 && (
          <div className="flex flex-col gap-8">
            <section className="items-center rounded-md bg-gray-900 px-4 py-6">
              <h2 className="pb-8 text-center text-2xl md:text-3xl">
                Games Summary
              </h2>
              <h3 className="text-md flex justify-between pb-3 md:text-lg">
                Price <span>${totalPrice}</span>
              </h3>
              <h3 className="text-md flex justify-between pb-3 md:text-lg">
                Taxes{" "}
                <span className="text-gray-300">Calculated at Checkout</span>
              </h3>
              <hr className="border-gray-700 pb-3" />
              <h3 className="text-md flex justify-between pb-8 font-bold md:text-lg">
                Subtotal <span>${totalPrice}</span>
              </h3>
              <button className="w-full self-center rounded-md  bg-blue-600 p-4 text-center  hover:bg-blue-500">
                Check Out
              </button>
            </section>
            <section className="flex flex-col items-center rounded-md bg-slate-900 px-4 py-6">
              <h3 className="text-center">
                Insert a voucher for extra savings in your gaming cart.
              </h3>
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
