import React from "react";
import { FaWindows, FaPlaystation, FaXbox, FaLinux, FaApple } from "react-icons/fa";
import { SiNintendoswitch, SiMacos } from "react-icons/si";
import { IoLogoAndroid } from "react-icons/io";

const PlatformIcons = ({ platforms }) => {
  const platformIconMap = {
    pc: <FaWindows className="size-6" />,
    playstation: <FaPlaystation className="size-6" />,
    xbox: <FaXbox className="size-6" />,
    nintendo: <SiNintendoswitch className="size-6" />,
    linux: <FaLinux className="size-6" />,
    "apple macintosh": <SiMacos className="size-6" />,
    ios:<FaApple className="size-6" />,
    android:<IoLogoAndroid className="size-6" />
  };

  const renderIcons = () => {
    return platforms.map((parentPlatform, index) => {
      const platformName = parentPlatform.platform.name.toLowerCase();
      const icon = platformIconMap[platformName];

      if (icon) {
        return (
          <span
            key={index}
            className="flex size-9 items-center justify-center rounded-md bg-slate-950 transition duration-300 hover:bg-white hover:text-black"
          >
            {icon}
          </span>
        );
      }

      return null; // Return null for unknown platforms or handle accordingly
    });
  };

  return <>{renderIcons()}</>;
};

export default PlatformIcons;
