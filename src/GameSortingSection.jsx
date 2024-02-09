import {
  FaWindows,
  FaApple,
  FaXbox,
  FaPlaystation,
  FaSteam,
  FaItchIo,
  FaGooglePlay,
  FaLinux,
} from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";
import { IoLogoAppleAppstore } from "react-icons/io5";
import { SiEpicgames, SiGogdotcom, SiNintendoswitch, SiMacos } from "react-icons/si";

const GameSortingSection = ({
  handleLauncherSelection,
  handlePlatformSelection,
  platformSelected,
  launcherSelected,
  sortGamesByRatingAsc,
  sortGamesByRatingDesc,
  sortGamesByPopularity,
  sortGamesByLatest,
  sortGamesByPriceAsc,
  sortGamesByPriceDesc,
  sortingOption,
  setSortingOption,
  displayedGames,
}) => {
  const handleSortChange = (selectedValue) => {
    switch (selectedValue) {
      case "popularity":
        sortGamesByPopularity(displayedGames);
        setSortingOption(selectedValue);
        break;
      case "latest":
        sortGamesByLatest();
        setSortingOption(selectedValue);
        break;
      case "rating-asc":
        sortGamesByRatingAsc();
        setSortingOption(selectedValue);
        break;
      case "rating-desc":
        sortGamesByRatingDesc();
        setSortingOption(selectedValue);
        break;
      case "price-asc":
        sortGamesByPriceAsc();
        setSortingOption(selectedValue);
        break;
      case "price-desc":
        sortGamesByPriceDesc();
        setSortingOption(selectedValue);
        break;
    }
  };
  return (
    <section className="col-span-full flex items-center  justify-between  rounded-md bg-gray-900 p-4 text-slate-200">
      <div className="flex  flex-col md:flex-row gap-8">
        <ul className="flex items-center justify-center gap-2">
          <h3 className=" pr-4 text-xs font-bold tracking-wide">PLATFORM</h3>
          <li
            onClick={() => handlePlatformSelection("PC")}
            className={`${
              platformSelected === "PC" && "bg-white text-black"
            } mr-2 flex size-9 items-center justify-center rounded-md bg-slate-950 transition duration-300 hover:bg-white  hover:text-black`}
          >
            <FaWindows className="size-6" />
          </li>
          <li
            onClick={() => handlePlatformSelection("PlayStation")}
            className={`${
              platformSelected === "PlayStation" && "bg-white text-black"
            } mr-2 flex size-9 items-center justify-center rounded-md bg-slate-950 transition duration-300 hover:bg-white  hover:text-black`}
          >
            <FaPlaystation className="size-6" />
          </li>
          <li
            onClick={() => handlePlatformSelection("Xbox")}
            className={`${
              platformSelected === "Xbox" && "bg-white text-black"
            } mr-2 flex size-9 items-center justify-center rounded-md bg-slate-950 transition duration-300 hover:bg-white  hover:text-black`}
          >
            <FaXbox className="size-6" />
          </li>
          <li
            onClick={() => handlePlatformSelection("iOS")}
            className={`${
              platformSelected === "iOS" && "bg-white text-black"
            } mr-2 flex size-9 items-center justify-center rounded-md bg-slate-950 transition duration-300 hover:bg-white  hover:text-black`}
          >
            <FaApple className="size-6" />
          </li>
          <li
            onClick={() => handlePlatformSelection("Android")}
            className={`${
              platformSelected === "Android" && "bg-white text-black"
            } mr-2 flex size-9 items-center justify-center rounded-md bg-slate-950 transition duration-300 hover:bg-white  hover:text-black`}
          >
            <IoLogoAndroid className="size-7" />
          </li>
          <li
            onClick={() => handlePlatformSelection("Nintendo")}
            className={`${
              platformSelected === "Nintendo" && "bg-white text-black"
            } mr-2 flex size-9 items-center justify-center rounded-md bg-slate-950 transition duration-300 hover:bg-white  hover:text-black`}
          >
            <SiNintendoswitch className="size-7" />
          </li>
          <li
            onClick={() => handlePlatformSelection("Linux")}
            className={`${
              platformSelected === "Linux" && "bg-white text-black"
            } mr-2 flex size-9 items-center justify-center rounded-md bg-slate-950 transition duration-300 hover:bg-white  hover:text-black`}
          >
            <FaLinux className="size-6" />
          </li>
          <li
            onClick={() => handlePlatformSelection("Apple Macintosh")}
            className={`${
              platformSelected === "Apple Macintosh" && "bg-white text-black"
            } mr-2 flex size-9 items-center justify-center rounded-md bg-slate-950 transition duration-300 hover:bg-white  hover:text-black`}
          >
            <SiMacos className="size-6" />
          </li>
        </ul>
        <ul className="flex flex-row items-center gap-2">
          <h3 className="pr-4 text-xs font-bold tracking-wide">LAUNCHER</h3>
          <li
            onClick={() => handleLauncherSelection("Steam")}
            className={`${
              launcherSelected === "Steam" && "bg-white text-black"
            } mr-2 flex size-9 items-center justify-center rounded-md bg-slate-950 transition duration-300 hover:bg-white  hover:text-black`}
          >
            <FaSteam className="size-6" />
          </li>
          <li
            onClick={() => handleLauncherSelection("itch.io")}
            className={`${
              launcherSelected === "itch.io" && "bg-white text-black"
            } mr-2 flex size-9 items-center justify-center rounded-md bg-slate-950 transition duration-300 hover:bg-white  hover:text-black`}
          >
            <FaItchIo className="size-6" />
          </li>
          <li
            onClick={() => handleLauncherSelection("Epic Games")}
            className={`${
              launcherSelected === "Epic Games" && "bg-white text-black"
            } mr-2 flex size-9 items-center justify-center rounded-md bg-slate-950 transition duration-300 hover:bg-white  hover:text-black`}
          >
            <SiEpicgames className="size-6" />
          </li>
          <li
            onClick={() => handleLauncherSelection("GOG")}
            className={`${
              launcherSelected === "GOG" && "bg-white text-black"
            } mr-2 flex size-9 items-center justify-center rounded-md bg-slate-950 transition duration-300 hover:bg-white  hover:text-black`}
          >
            <SiGogdotcom className="size-6" />
          </li>
          <li
            onClick={() => handleLauncherSelection("Google Play")}
            className={`${
              launcherSelected === "Google Play" && "bg-white text-black"
            } mr-2 flex size-9 items-center justify-center rounded-md bg-slate-950 transition duration-300 hover:bg-white  hover:text-black`}
          >
            <FaGooglePlay className="size-6" />
          </li>
          <li
            onClick={() => handleLauncherSelection("App Store")}
            className={`${
              launcherSelected === "App Store" && "bg-white text-black"
            } mr-2 flex size-9 items-center justify-center rounded-md bg-slate-950 transition duration-300 hover:bg-white  hover:text-black`}
          >
            <IoLogoAppleAppstore className="size-6" />
          </li>
        </ul>
      </div>
      <div className="flex flex-col">
        <label className="self-start text-xs" htmlFor="sort-select">
          Sort by:
        </label>
        <select
          className="bg-gray-900 pb-1 font-bold"
          name="sort"
          id="sort-select"
          value={sortingOption}
          onChange={(event) => handleSortChange(event.target.value)}
        >
          <option className="font-normal text-slate-300" value="popularity">
            Popularity
          </option>
          <option className="font-normal text-slate-300" value="latest">
            Latest
          </option>
          <option className="font-normal text-slate-300" value="rating-asc">
            Rating ↑
          </option>
          <option className="font-normal text-slate-300" value="rating-desc">
            Rating ↓
          </option>
          <option className="font-normal text-slate-300" value="price-asc">
            Price ↑
          </option>
          <option className="font-normal text-slate-300" value="price-desc">
            Price ↓
          </option>
        </select>
      </div>
    </section>
  );
};
export default GameSortingSection;
