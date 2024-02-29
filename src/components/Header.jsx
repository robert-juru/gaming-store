import Cart from "../pages/CartPage/Cart";
import { Link } from "react-router-dom";
import GameverseLogo from "./GameverseLogo";
import SearchBar from "../pages/StorePage/SearchBar";

const Header = ({
  cartGames,
  fetchedGames,
  removeFromCart,
  displayedGames,
  setDisplayedGames,
  searchQueryData,
  setSearchQueryData,
  setActiveFilter,
  sortGamesByPopularity,
  setSortingOption
}) => {
  return (
    <header className="col-span-2 flex items-center justify-between gap-8">
      <GameverseLogo />
      {location.pathname !== "/store" && (
        <div className="flex-0 m-0 flex items-center justify-center lg:gap-24 gap-6 md:gap-12 text-xs">
          <Link
            className="md:text-lg font-bold tracking-wide text-gray-300 hover:text-white "
            to="/store"
          >
            Store
          </Link>
          <Link
            className="md:text-lg font-bold tracking-wide text-gray-300 hover:text-white "
            to={location.pathname}
          >
            FAQ
          </Link>
          <Link
            className="md:text-lg font-bold tracking-wide text-gray-300 hover:text-white "
            to={location.pathname}
          >
            About us
          </Link>
        </div>
      )}

      {location.pathname === "/store" && (
        
        <SearchBar className="hidden"
          displayedGames={displayedGames}
          setDisplayedGames={setDisplayedGames}
          searchQueryData={searchQueryData}
          setSearchQueryData={setSearchQueryData}
          setActiveFilter={setActiveFilter}
          sortGamesByPopularity={sortGamesByPopularity}
          setSortingOption={setSortingOption}
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
