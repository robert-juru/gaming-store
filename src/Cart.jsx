import { MdOutlineExpandMore } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { IoIosClose } from "react-icons/io";
import { IconContext } from "react-icons";

const Cart = ({ cartGames, fetchedGames, setCartGames }) => {
  const removeFromCart = (gameIdToRemove) => {
    const updatedCart = cartGames.filter((game) => game.id !== gameIdToRemove);
    setCartGames(updatedCart);
  };

  return (
    <div className="flex  items-center gap-1">
      <div className="group  relative flex items-center">
        <span className="absolute -left-2  -top-2 box-content w-4 cursor-pointer rounded-full border-2 border-green-600 bg-green-700 text-center text-xs font-bold text-white">
          {cartGames.length}
        </span>
        <IconContext.Provider
          value={{
            color: "white",
            size: "24px",
            title: "shopping cart",
            className: "mr-2 cursor-pointer",
          }}
        >
          <FaCartShopping />
        </IconContext.Provider>
        <h3 className="cursor-pointer text-lg text-white ">Cart</h3>
        <IconContext.Provider
          value={{
            color: "white",
            size: "18px",
            title: "expand more cursor-pointer",
          }}
        >
          <MdOutlineExpandMore />
        </IconContext.Provider>
        <div className="relative">
          <div
            id="cart"
            className=" invisible absolute right-0 top-8 z-10 flex max-h-96 translate-y-10 transform flex-col
            overflow-y-auto overflow-x-hidden rounded-md bg-gray-600 p-2
          opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 lg:group-hover:visible  "
          >
            {cartGames.length == 0 && (
              <span className="flex w-96 items-center justify-center gap-2 px-2 pb-3 pt-2  text-sm text-white">
                Cart's feeling a bit empty. Time to fill it with gaming joy!
              </span>
            )}
            {cartGames.map((cartGame) => {
              let matchedGame = fetchedGames.find(
                (fetchedGame) => fetchedGame.id === cartGame.id,
              );
              if (matchedGame) {
                return (
                  <>
                    <li
                      key={matchedGame.id}
                      className="flex w-96 items-center justify-between gap-2 py-1 pl-2 pr-4 text-sm text-white"
                    >
                      <img
                        src={matchedGame.background_image}
                        alt={matchedGame.name}
                        className="size-14"
                      />
                      <span className="w-[26ch]">{matchedGame.name}</span>
                      <span>$25.99</span>
                      <IconContext.Provider
                        value={{
                          size: "24px",
                          title: "delete game",
                          className: "",
                        }}
                      >
                        <IoIosClose
                          onClick={() => removeFromCart(matchedGame.id)}
                        />
                      </IconContext.Provider>
                    </li>
                    <hr className="mb-1 mt-1 border-gray-500" />
                  </>
                );
              }
              return null;
            })}
            {cartGames.length > 0 && (
              <div className="flex items-center justify-between px-4 py-4 text-lg  font-bold text-white">
                <span className=" flex items-center justify-start ">
                  TOTAL: {cartGames.length}{" "}
                  {cartGames.length > 1 ? "games" : "game"}
                </span>
                <span>$124.95</span>
              </div>
            )}
            <button
              className={`m-2 mr-2 flex items-center gap-1  self-center 
             rounded-md
             bg-gray-100 px-2 py-1 text-lg hover:bg-gray-300`}
            >
              <IconContext.Provider
                value={{
                  color: "black",
                  size: "32px",
                  title: "shopping cart",
                  className: "mr-2",
                }}
              >
                <FaCartShopping />
              </IconContext.Provider>
              Go to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
