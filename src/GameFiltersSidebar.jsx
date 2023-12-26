import { IconContext } from "react-icons";
import { IoMdStar } from "react-icons/io";

const GameFiltersSidebar = () => {
  const gameCategories = [
    { name: "Action", icon: "/game-icons/action.svg" },
    { name: "Adventure", icon: "/game-icons/adventure.svg" },
    { name: "Puzzle", icon: "/game-icons/puzzle.svg" },
    { name: "Racing", icon: "game-icons/racing.svg" },
    { name: "RPG", icon: "game-icons/rpg.svg" },
    { name: "Shooter", icon: "game-icons/shooter.svg" },
    { name: "Sports", icon: "game-icons/sports.svg" },
    { name: "Strategy", icon: "game-icons/strategy.svg" },
  ];

  return (
    <aside className="hidden md:block">
      <nav className="rounded-md bg-gray-900 px-2 py-4  text-slate-200">
        <ul>
          <h3 className="pb-4 pl-2 text-xs font-bold tracking-wide">GENRE</h3>
          {gameCategories.map((category, index) => (
            <li
              key={index}
              className="flex cursor-pointer items-center gap-3 rounded-lg pb-1 hover:bg-gray-800"
            >
              <img
                className="my-1 ml-1 size-7 rounded-lg"
                src={category.icon}
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
          <h3 className="pb-4 pl-2 text-xs font-bold tracking-wide">MINIMUM RATING</h3>
          <li className="flex pb-1 items-center mx-2 px-2 hover:scale-105 hover:bg-gray-800 rounded-lg transition-all">
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
          <li className="flex pb-1 items-center mx-2 px-2 hover:scale-105 hover:bg-gray-800 rounded-lg transition-all">
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
          <li className="flex pb-1 items-center mx-2 px-2 hover:scale-105 hover:bg-gray-800 rounded-lg transition-all">
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
          <li className="flex pb-1 items-center mx-2 px-2 hover:scale-105 hover:bg-gray-800 rounded-lg transition-all">
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
          <li className="flex pb-1 items-center mx-2 px-2 hover:scale-105 hover:bg-gray-800 rounded-lg transition-all">
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
