import {
  FaWindows,
  FaApple,
  FaXbox,
  FaPlaystation,
  FaSteam,
} from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";
import { SiOrigin, SiEpicgames, SiGogdotcom } from "react-icons/si";

const GameSortingSection = () => {
  return (
    <section className="col-span-full flex items-center  justify-between  rounded-md bg-gray-900 p-4 text-slate-200">
      <div className="flex flex-row gap-4">
        <ul className="flex items-center justify-center gap-2">
          <h3 className=" pr-4 text-xs font-bold tracking-wide">SYSTEM</h3>
          <li className="mr-2 flex size-9 items-center justify-center rounded-md bg-slate-950 transition duration-300 hover:bg-white  hover:text-black">
            <FaWindows className="size-6" />
          </li>
          <li className="mr-2 flex size-9 items-center justify-center rounded-md bg-slate-950 transition duration-300 hover:bg-white  hover:text-black">
            <FaPlaystation className="size-6" />
          </li>
          <li className="mr-2 flex size-9 items-center justify-center rounded-md bg-slate-950 transition duration-300 hover:bg-white  hover:text-black">
            <FaXbox className="size-6" />
          </li>
          <li className="mr-2 flex size-9 items-center justify-center rounded-md bg-slate-950 transition duration-300 hover:bg-white  hover:text-black">
            <FaApple className="size-6" />
          </li>
          <li className="mr-4 flex size-9 items-center justify-center rounded-md bg-slate-950 transition duration-300 hover:bg-white  hover:text-black">
            <IoLogoAndroid className="size-7" />
          </li>
        </ul>
        <ul className="flex flex-row items-center gap-2">
          <h3 className="pr-4 text-xs font-bold tracking-wide">LAUNCHER</h3>
          <li className="mr-2 flex size-9 items-center justify-center rounded-md bg-slate-950 transition duration-300 hover:bg-white  hover:text-black">
            <FaSteam className="size-6" />
          </li>
          <li className="mr-2 flex size-9 items-center justify-center rounded-md bg-slate-950 transition duration-300 hover:bg-white  hover:text-black">
            <SiOrigin className="size-6" />
          </li>
          <li className="mr-2 flex size-9 items-center justify-center rounded-md bg-slate-950 transition duration-300 hover:bg-white  hover:text-black">
            <SiEpicgames className="size-6" />
          </li>
          <li className="mr-2 flex size-9 items-center justify-center rounded-md bg-slate-950 transition duration-300 hover:bg-white  hover:text-black">
            <SiGogdotcom className="size-6" />
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
        >
          <option className="font-normal text-slate-300" value="popularity">
            Popularity
          </option>
          <option className="font-normal text-slate-300" value="release-date">
            Release Date
          </option>
          <option className="font-normal text-slate-300" value="rating">
            Rating
          </option>
          <option className="font-normal text-slate-300" value="name-a-to-z">
            Name: A to Z
          </option>
          <option className="font-normal text-slate-300" value="name-z-to-a">
            Name: Z to A
          </option>
        </select>
      </div>
    </section>
  );
};
export default GameSortingSection;
