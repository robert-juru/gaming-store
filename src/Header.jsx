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
  searchQueryData,
  setSearchQueryData,
}) => {
  return (
    <header className="col-span-2 flex items-center justify-between gap-8">
      <GameverseLogo />
      {location.pathname !== "/" && (
        <div className="flex-0 m-0 flex items-center justify-center lg:gap-24 gap-8 text-xs">
          <Link
            className="md:text-lg font-bold tracking-wide text-gray-300 hover:text-white "
            to="/"
          >
            Store
          </Link>
          <Link
            className="md:text-lg font-bold tracking-wide text-gray-300 hover:text-white "
            to="/faq"
          >
            FAQ
          </Link>
          <Link
            className="md:text-lg font-bold tracking-wide text-gray-300 hover:text-white "
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
          searchQueryData={searchQueryData}
          setSearchQueryData={setSearchQueryData}
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
