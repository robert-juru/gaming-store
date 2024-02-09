import { CiSearch } from "react-icons/ci";
import { IconContext } from "react-icons";
import Cart from "./Cart";
import { Link } from "react-router-dom";
import GameverseLogo from "./GameverseLogo";
import SearchBar from "./SearchBar";

const Header = ({
  cartGames,
  fetchedGames,
  removeFromCart,
  displayedGames,
  setDisplayedGames,
}) => {
  return (
    <header className="col-span-2 flex items-center justify-between gap-8">
      <GameverseLogo />
      {location.pathname !== "/" && (
        <div className="flex-0 m-0 flex items-center justify-center gap-24 p-0">
          <Link
            className="hover:text-white text-lg font-bold tracking-wide text-gray-300 "
            to="/"
          >
            Store
          </Link>
          <Link
            className="hover:text-white text-lg font-bold tracking-wide text-gray-300 "
            to="/faq"
          >
            FAQ
          </Link>
          <Link
            className="hover:text-white text-lg font-bold tracking-wide text-gray-300 "
            to="/"
          >
            About us
          </Link>
        </div>
      )}

      {location.pathname === "/" && (
        <SearchBar
          displayedGames={displayedGames}
          setDisplayedGames={setDisplayedGames}
        />
      )}
      <Cart
        cartGames={cartGames}
        fetchedGames={fetchedGames}
        removeFromCart={removeFromCart}
      />
    </header>
  );
};

export default Header;
