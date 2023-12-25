import { CiShoppingCart, CiSearch } from "react-icons/ci";
import { IconContext } from "react-icons";

const Header = () => {
    return (
  <header className="col-span-2 flex items-center justify-between gap-8">
    <div className="flex cursor-pointer items-center hover:scale-105">
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
    <IconContext.Provider
      value={{ color: "white", size: "36px", title: "shopping cart" }}
    >
      <CiShoppingCart className="cursor-pointer hover:scale-105" />
    </IconContext.Provider>
  </header>
    )
};

export default Header;
