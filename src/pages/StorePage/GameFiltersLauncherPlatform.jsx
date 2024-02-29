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
import {
  SiEpicgames,
  SiGogdotcom,
  SiNintendoswitch,
  SiMacos,
} from "react-icons/si";

const GameFiltersLauncherPlatform = ({
  handleLauncherSelection,
  handlePlatformSelection,
  platformSelected,
  launcherSelected,
}) => {
  return (
    <div className="flex flex-col flex-wrap gap-4 px-4 md:px-0 lg:gap-8 xl:flex-row">
      <ul className="flex flex-wrap items-center gap-2 lg:gap-2">
        <h3 className=" pr-4 text-xs font-bold tracking-wide">PLATFORM</h3>
        <div className="flex flex-wrap gap-1 lg:gap-2">
          <li
            onClick={() => handlePlatformSelection("PC")}
            className={`${
              platformSelected === "PC" && "bg-white text-black"
            }  mr-1 flex size-9  items-center justify-center rounded-md bg-slate-950 transition duration-300 hover:bg-white hover:text-black  lg:mr-2`}
          >
            <FaWindows className="size-6" />
          </li>
          <li
            onClick={() => handlePlatformSelection("PlayStation")}
            className={`${
              platformSelected === "PlayStation" && "bg-white text-black"
            } mr-1 flex size-9  items-center justify-center rounded-md bg-slate-950 transition duration-300 hover:bg-white hover:text-black  lg:mr-2`}
          >
            <FaPlaystation className="size-6" />
          </li>
          <li
            onClick={() => handlePlatformSelection("Xbox")}
            className={`${
              platformSelected === "Xbox" && "bg-white text-black"
            } mr-1 flex size-9  items-center justify-center rounded-md bg-slate-950 transition duration-300 hover:bg-white hover:text-black  lg:mr-2`}
          >
            <FaXbox className="size-6" />
          </li>
          <li
            onClick={() => handlePlatformSelection("iOS")}
            className={`${
              platformSelected === "iOS" && "bg-white text-black"
            } mr-1 flex size-9  items-center justify-center rounded-md bg-slate-950 transition duration-300 hover:bg-white hover:text-black  lg:mr-2`}
          >
            <FaApple className="size-6" />
          </li>
          <li
            onClick={() => handlePlatformSelection("Android")}
            className={`${
              platformSelected === "Android" && "bg-white text-black"
            } mr-1 flex size-9  items-center justify-center rounded-md bg-slate-950 transition duration-300 hover:bg-white hover:text-black  lg:mr-2`}
          >
            <IoLogoAndroid className="size-6" />
          </li>
          <li
            onClick={() => handlePlatformSelection("Nintendo")}
            className={`${
              platformSelected === "Nintendo" && "bg-white text-black"
            } mr-1 flex size-9  items-center justify-center rounded-md bg-slate-950 transition duration-300 hover:bg-white hover:text-black  lg:mr-2`}
          >
            <SiNintendoswitch className="size-6" />
          </li>
          <li
            onClick={() => handlePlatformSelection("Linux")}
            className={`${
              platformSelected === "Linux" && "bg-white text-black"
            } mr-1 flex size-9  items-center justify-center rounded-md bg-slate-950 transition duration-300 hover:bg-white hover:text-black  lg:mr-2`}
          >
            <FaLinux className="size-6" />
          </li>
          <li
            onClick={() => handlePlatformSelection("Apple Macintosh")}
            className={`${
              platformSelected === "Apple Macintosh" && "bg-white text-black"
            } mr-1 flex size-9  items-center justify-center rounded-md bg-slate-950 transition duration-300 hover:bg-white hover:text-black  lg:mr-2`}
          >
            <SiMacos className="size-6" />
          </li>
        </div>
      </ul>
      <ul className="flex flex-row flex-wrap items-center gap-1 lg:gap-2">
        <h3 className="pr-4 text-xs font-bold tracking-wide pb-1">LAUNCHER</h3>
        <div className="flex flex-wrap gap-1 lg:gap-2">
          <li
            onClick={() => handleLauncherSelection("Steam")}
            className={`${
              launcherSelected === "Steam" && "bg-white text-black"
            } mr-1 flex size-9  items-center justify-center rounded-md bg-slate-950 transition duration-300 hover:bg-white hover:text-black  lg:mr-2`}
          >
            <FaSteam className="size-7" />
          </li>
          <li
            onClick={() => handleLauncherSelection("itch.io")}
            className={`${
              launcherSelected === "itch.io" && "bg-white text-black"
            } mr-1 flex size-9  items-center justify-center rounded-md bg-slate-950 transition duration-300 hover:bg-white hover:text-black  lg:mr-2`}
          >
            <FaItchIo className="size-7" />
          </li>
          <li
            onClick={() => handleLauncherSelection("Epic Games")}
            className={`${
              launcherSelected === "Epic Games" && "bg-white text-black"
            } mr-1 flex size-9  items-center justify-center rounded-md bg-slate-950 transition duration-300 hover:bg-white hover:text-black  lg:mr-2`}
          >
            <SiEpicgames className="size-6" />
          </li>
          <li
            onClick={() => handleLauncherSelection("GOG")}
            className={`${
              launcherSelected === "GOG" && "bg-white text-black"
            } mr-1 flex size-9  items-center justify-center rounded-md bg-slate-950 transition duration-300 hover:bg-white hover:text-black  lg:mr-2`}
          >
            <SiGogdotcom className="size-6" />
          </li>
          <li
            onClick={() => handleLauncherSelection("Google Play")}
            className={`${
              launcherSelected === "Google Play" && "bg-white text-black"
            } mr-1 flex size-9  items-center justify-center rounded-md bg-slate-950 transition duration-300 hover:bg-white hover:text-black  lg:mr-2`}
          >
            <FaGooglePlay className="size-6" />
          </li>
          <li
            onClick={() => handleLauncherSelection("App Store")}
            className={`${
              launcherSelected === "App Store" && "bg-white text-black"
            } mr-1 flex size-9  items-center justify-center rounded-md bg-slate-950 transition duration-300 hover:bg-white hover:text-black  lg:mr-2`}
          >
            <IoLogoAppleAppstore className="size-6" />
          </li>
        </div>
      </ul>
    </div>
  );
};
export default GameFiltersLauncherPlatform;
