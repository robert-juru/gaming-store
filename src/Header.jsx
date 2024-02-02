import { CiSearch } from "react-icons/ci";
import { IconContext } from "react-icons";
import Cart from "./Cart";
import { Link } from "react-router-dom";
import GameverseLogo from "./GameverseLogo";
import SearchBar from "./SearchBar";

const Header = ({ cartGames, fetchedGames, removeFromCart, displayedGames, setDisplayedGames }) => {
  return (
    <header className="col-span-2 flex items-center justify-between gap-8">
      <GameverseLogo />
      <Link className="text-lg tracking-wide text-gray-300 lg:px-24" to="/">
        STORE
      </Link>
      <div className="relative flex flex-1">
        <SearchBar />
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
