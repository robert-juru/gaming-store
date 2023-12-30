import { IconContext } from "react-icons";
import { IoMdStar } from "react-icons/io";
import { useState } from "react";

const GameFiltersSidebar = ({ filterGamesByGenre }) => {
  const [isCategorySelected, setIsCategorySelected] = useState(null);
  const handleCategorySelect = (categoryIndex, categoryName) => {
    setIsCategorySelected(categoryIndex);
    filterGamesByGenre(categoryName);
  };

  const gameCategories = [
    {
      index: 0,
      name: "Action",
      icon: "/game-icons/action.svg",
      iconfocus: "/game-icons/action-focus.svg",
    },
    {
      index: 1,
      name: "Adventure",
      icon: "/game-icons/adventure.svg",
      iconfocus: "/game-icons/adventure-focus.svg",
    },
    {
      index: 2,
      name: "Indie",
      icon: "game-icons/indie.svg",
      iconfocus: "game-icons/indie-focus.svg",
    },
    {
      index: 3,
      name: "Massively Multiplayer",
      icon: "game-icons/multiplayer.svg",
      iconfocus: "game-icons/multiplayer-focus.svg",
    },
    {
      index: 4,
      name: "Puzzle",
      icon: "/game-icons/puzzle.svg",
      iconfocus: "/game-icons/puzzle-focus.svg",
    },

    {
      index: 5,
      name: "RPG",
      icon: "game-icons/rpg.svg",
      iconfocus: "game-icons/rpg-focus.svg",
    },
    {
      index: 6,
      name: "Shooter",
      icon: "game-icons/shooter.svg",
      iconfocus: "game-icons/shooter-focus.svg",
    },
    {
      index: 7,
      name: "Strategy",
      icon: "game-icons/strategy.svg",
      iconfocus: "game-icons/strategy-focus.svg",
    },
  ];

  return (
    <aside className="hidden md:block">
      <nav className="rounded-md bg-gray-900 px-2 py-4  text-slate-200">
        <ul>
          <h3 className="pb-4 pl-2 text-xs font-bold tracking-wide">GENRE</h3>
          {gameCategories.map((category, index) => (
            <li
              key={index}
              onClick={() =>
                handleCategorySelect(category.index, category.name)
              }
              className={`${
                isCategorySelected === category.index
                  ? "bg-gray-800 font-bold"
                  : ""
              } flex cursor-pointer items-center gap-3 rounded-lg pb-1 hover:bg-gray-800`}
            >
              <img
                className="my-1 ml-1 size-7 rounded-lg"
                src={
                  isCategorySelected === category.index
                    ? category.iconfocus
                    : category.icon
                }
                alt={category.name}
              />
              {category.name}
            </li>
          ))}
          <hr className="mb-4 mt-3 border-slate-600" />
        </ul>
        <ul>
          <h3 className="pb-4 pl-2 text-xs font-bold tracking-wide">YEAR</h3>
          <li className="flex cursor-pointer items-center gap-3 rounded-lg pb-1 hover:bg-gray-800">
            <img
              className="my-1 ml-1 size-7 rounded-lg"
              src="/game-icons/year.svg"
              alt="calendar"
            ></img>
            1990-2000
          </li>
          <li className="flex cursor-pointer items-center gap-3 rounded-lg pb-1 hover:bg-gray-800">
            {" "}
            <img
              className="my-1 ml-1 size-7 rounded-lg"
              src="/game-icons/year.svg"
              alt="calendar"
            ></img>
            2000-2010
          </li>
          <li className="flex cursor-pointer items-center gap-3 rounded-lg pb-1 hover:bg-gray-800">
            {" "}
            <img
              className="my-1 ml-1 size-7 rounded-lg"
              src="/game-icons/year.svg"
              alt="calendar"
            ></img>
            2010-2020
          </li>
          <li className="flex cursor-pointer items-center gap-3 rounded-lg pb-1 hover:bg-gray-800">
            {" "}
            <img
              className="my-1 ml-1 size-7 rounded-lg"
              src="/game-icons/year.svg"
              alt="calendar"
            ></img>
            2020-Now
          </li>
          <hr className="mb-4 mt-3 border-slate-600" />
        </ul>
        <ul>
          <h3 className="pb-4 pl-2 text-xs font-bold tracking-wide">
            MINIMUM RATING
          </h3>
          <li className="mx-2 flex items-center rounded-lg px-2 pb-1 transition-all hover:scale-105 hover:bg-gray-800">
            <IconContext.Provider
              value={{ color: "gold", title: "star rating", size: "24px" }}
            >
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
            </IconContext.Provider>
          </li>
          <li className="mx-2 flex items-center rounded-lg px-2 pb-1 transition-all hover:scale-105 hover:bg-gray-800">
            <IconContext.Provider
              value={{ color: "gold", title: "star rating", size: "24px" }}
            >
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
            </IconContext.Provider>
            <IconContext.Provider
              value={{ color: "#CCCCCC", title: "star rating", size: "24px" }}
            >
              <IoMdStar />
            </IconContext.Provider>
          </li>
          <li className="mx-2 flex items-center rounded-lg px-2 pb-1 transition-all hover:scale-105 hover:bg-gray-800">
            <IconContext.Provider
              value={{ color: "gold", title: "star rating", size: "24px" }}
            >
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
            </IconContext.Provider>
            <IconContext.Provider
              value={{ color: "#CCCCCC", title: "star rating", size: "24px" }}
            >
              <IoMdStar />
              <IoMdStar />
            </IconContext.Provider>
          </li>
          <li className="mx-2 flex items-center rounded-lg px-2 pb-1 transition-all hover:scale-105 hover:bg-gray-800">
            <IconContext.Provider
              value={{ color: "gold", title: "star rating", size: "24px" }}
            >
              <IoMdStar />
              <IoMdStar />
            </IconContext.Provider>
            <IconContext.Provider
              value={{ color: "#CCCCCC", title: "star rating", size: "24px" }}
            >
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
            </IconContext.Provider>
          </li>
          <li className="mx-2 flex items-center rounded-lg px-2 pb-1 transition-all hover:scale-105 hover:bg-gray-800">
            <IconContext.Provider
              value={{ color: "gold", title: "star rating", size: "24px" }}
            >
              <IoMdStar />
            </IconContext.Provider>
            <IconContext.Provider
              value={{ color: "#CCCCCC", title: "star rating", size: "24px" }}
            >
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
            </IconContext.Provider>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
export default GameFiltersSidebar;
