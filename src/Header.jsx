import { CiSearch } from "react-icons/ci";
import { IconContext } from "react-icons";
import { MdOutlineExpandMore } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
const Header = ( {cartGamesCount}) => {
  return (
    <header className="col-span-2 flex items-center justify-between gap-8">
      <div className="flex cursor-pointer items-center transition-all hover:scale-105">
        <img
          className="h-16"
          src="/gameverse-logo-no-text.png"
          alt="gameverse logo"
        />
        <h1 className="hidden text-lg font-bold tracking-widest text-white md:block">
          GAMEVERSE
        </h1>
      </div>
      <div className="relative flex flex-1">
        <input
          className="flex-1 rounded-md border-0 bg-slate-800 p-2 pl-8 text-sm text-gray-300 placeholder:text-gray-300 focus:bg-slate-700 focus:outline-none"
          type="search"
          name="search"
          id="search"
          placeholder="Search store"
        />
        <div className="pointer-events-none absolute inset-y-0 left-0 flex  items-center pl-2">
          <IconContext.Provider
            value={{ color: "white", size: "18px", title: "search" }}
          >
            <CiSearch />
          </IconContext.Provider>
        </div>
      </div>
      <div className="flex cursor-pointer items-center gap-1">
        <div className="relative flex items-center">
          <span className="absolute  -left-2 -top-2 box-content w-4 rounded-full border-2 border-green-600 bg-green-700 text-center text-xs font-bold text-white">
            {cartGamesCount}
          </span>
          <IconContext.Provider
            value={{
              color: "white",
              size: "24px",
              title: "shopping cart",
              className: "mr-2",
            }}
          >
            <FaCartShopping />
          </IconContext.Provider>
          <h3 className="text-lg text-white ">Cart</h3>
          <IconContext.Provider
            value={{ color: "white", size: "18px", title: "expand more" }}
          >
            <MdOutlineExpandMore />
          </IconContext.Provider>
        </div>
      </div>
    </header>
  );
};

export default Header;
