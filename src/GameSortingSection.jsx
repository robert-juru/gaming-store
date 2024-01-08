import {
  FaWindows,
  FaApple,
  FaXbox,
  FaPlaystation,
  FaSteam,
  FaItchIo,
  FaGooglePlay,
} from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";
import { IoLogoAppleAppstore } from "react-icons/io5";
import { SiEpicgames, SiGogdotcom, SiNintendoswitch } from "react-icons/si";
import { useState } from "react";

const GameSortingSection = ({
  handleLauncherSelected,
  handlePlatformSelected,
  platformSelected,
  launcherSelected,
}) => {
  return (
    <section className="col-span-full flex items-center  justify-between  rounded-md bg-gray-900 p-4 text-slate-200">
      <div className="flex flex-row gap-4">
        <ul className="flex items-center justify-center gap-2">
          <h3 className=" pr-4 text-xs font-bold tracking-wide">PLATFORM</h3>
          <li
            onClick={() => handlePlatformSelected("PC")}
            className={`${
              platformSelected === "PC" && "bg-white text-black"
            } mr-2 flex size-9 items-center justify-center rounded-md bg-slate-950 transition duration-300 hover:bg-white  hover:text-black`}
          >
            <FaWindows className="size-6" />
          </li>
          <li
            onClick={() => handlePlatformSelected("PlayStation")}
            className={`${
              platformSelected === "PlayStation" && "bg-white text-black"
            } mr-2 flex size-9 items-center justify-center rounded-md bg-slate-950 transition duration-300 hover:bg-white  hover:text-black`}
          >
            <FaPlaystation className="size-6" />
          </li>
          <li
            onClick={() => handlePlatformSelected("Xbox")}
            className={`${
              platformSelected === "Xbox" && "bg-white text-black"
            } mr-2 flex size-9 items-center justify-center rounded-md bg-slate-950 transition duration-300 hover:bg-white  hover:text-black`}
          >
            <FaXbox className="size-6" />
          </li>
          <li
            onClick={() => handlePlatformSelected("iOS")}
            className={`${
              platformSelected === "iOS" && "bg-white text-black"
            } mr-2 flex size-9 items-center justify-center rounded-md bg-slate-950 transition duration-300 hover:bg-white  hover:text-black`}
          >
            <FaApple className="size-6" />
          </li>
          <li
            onClick={() => handlePlatformSelected("Android")}
            className={`${
              platformSelected === "Android" && "bg-white text-black"
            } mr-2 flex size-9 items-center justify-center rounded-md bg-slate-950 transition duration-300 hover:bg-white  hover:text-black`}
          >
            <IoLogoAndroid className="size-7" />
          </li>
          <li
            onClick={() => handlePlatformSelected("Nintendo")}
            className={`${
              platformSelected === "Nintendo" && "bg-white text-black"
            } mr-2 flex size-9 items-center justify-center rounded-md bg-slate-950 transition duration-300 hover:bg-white  hover:text-black`}
          >
            <SiNintendoswitch className="size-7" />
          </li>
        </ul>
        <ul className="flex flex-row items-center gap-2">
          <h3 className="pr-4 text-xs font-bold tracking-wide">LAUNCHER</h3>
          <li
            onClick={() => handleLauncherSelected("Steam")}
            className={`${
              launcherSelected === "Steam" && "bg-white text-black"
            } mr-2 flex size-9 items-center justify-center rounded-md bg-slate-950 transition duration-300 hover:bg-white  hover:text-black`}
          >
            <FaSteam className="size-6" />
          </li>
          <li
            onClick={() => handleLauncherSelected("itch.io")}
            className={`${
              launcherSelected === "itch.io" && "bg-white text-black"
            } mr-2 flex size-9 items-center justify-center rounded-md bg-slate-950 transition duration-300 hover:bg-white  hover:text-black`}
          >
            <FaItchIo className="size-6" />
          </li>
          <li
            onClick={() => handleLauncherSelected("Epic Games")}
            className={`${
              launcherSelected === "Epic Games" && "bg-white text-black"
            } mr-2 flex size-9 items-center justify-center rounded-md bg-slate-950 transition duration-300 hover:bg-white  hover:text-black`}
          >
            <SiEpicgames className="size-6" />
          </li>
          <li
            onClick={() => handleLauncherSelected("GOG")}
            className={`${
              launcherSelected === "GOG" && "bg-white text-black"
            } mr-2 flex size-9 items-center justify-center rounded-md bg-slate-950 transition duration-300 hover:bg-white  hover:text-black`}
          >
            <SiGogdotcom className="size-6" />
          </li>
          <li
            onClick={() => handleLauncherSelected("Google Play")}
            className={`${
              launcherSelected === "Google Play" && "bg-white text-black"
            } mr-2 flex size-9 items-center justify-center rounded-md bg-slate-950 transition duration-300 hover:bg-white  hover:text-black`}
          >
            <FaGooglePlay className="size-6" />
          </li>
          <li
            onClick={() => handleLauncherSelected("App Store")}
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
