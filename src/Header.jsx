import { CiSearch } from "react-icons/ci";
import { IconContext } from "react-icons";
import Cart from "./Cart";
import { Link } from "react-router-dom";
import GameverseLogo from "./GameverseLogo";

const Header = ({ cartGames, fetchedGames, removeFromCart }) => {
  return (
    <header className="col-span-2 flex items-center justify-between gap-8">
      <GameverseLogo />
      <div className="relative flex flex-1">
        <input
          className="flex-1 rounded-md border-0 bg-slate-800 p-2 pl-8 text-sm text-gray-300 placeholder:text-gray-300 focus:bg-slate-700 focus:outline-none"
          type="search"
          name="search"
          id="search"
          placeholder="Search store"
        />
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
          <IconContext.Provider
            value={{ color: "white", size: "18px", title: "search" }}
          >
            <CiSearch />
          </IconContext.Provider>
        </div>
      </div>
      <Cart
        cartGames={cartGames}
        fetchedGames={fetchedGames}
        removeFromCart={removeFromCart}
      />
    </header>
  );
};

export default Header;
