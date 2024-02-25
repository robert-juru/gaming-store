import { IconContext } from "react-icons";
import { IoMdStar, IoMdStarHalf } from "react-icons/io";

const GameFiltersSidebar = ({
  handleGenreSelection,
  handleRatingSelection,
  handleReleaseYearSelection,
  genreSelected,
  minimumRatingSelected,
  releaseYearSelected,
}) => {
  const gameGenres = [
    {
      id: 0,
      name: "Action",
      icon: "/game-icons/action.svg",
      iconfocus: "/game-icons/action-focus.svg",
    },
    {
      id: 1,
      name: "Adventure",
      icon: "/game-icons/adventure.svg",
      iconfocus: "/game-icons/adventure-focus.svg",
    },
    {
      id: 2,
      name: "Indie",
      icon: "game-icons/indie.svg",
      iconfocus: "game-icons/indie-focus.svg",
    },
    {
      id: 3,
      name: "Massively Multiplayer",
      icon: "game-icons/multiplayer.svg",
      iconfocus: "game-icons/multiplayer-focus.svg",
    },
    {
      id: 4,
      name: "Puzzle",
      icon: "/game-icons/puzzle.svg",
      iconfocus: "/game-icons/puzzle-focus.svg",
    },

    {
      id: 5,
      name: "RPG",
      icon: "game-icons/rpg.svg",
      iconfocus: "game-icons/rpg-focus.svg",
    },
    {
      id: 6,
      name: "Shooter",
      icon: "game-icons/shooter.svg",
      iconfocus: "game-icons/shooter-focus.svg",
    },
    {
      id: 7,
      name: "Strategy",
      icon: "game-icons/strategy.svg",
      iconfocus: "game-icons/strategy-focus.svg",
    },
  ];

  const gameReleaseYears = [
    {
      id: 0,
      minReleaseYear: 1990,
      maxReleaseYear: 2000,
      icon: "/game-icons/year.svg",
      iconfocus: "/game-icons/year-focus.svg",
    },
    {
      id: 1,
      minReleaseYear: 2000,
      maxReleaseYear: 2010,
      icon: "/game-icons/year.svg",
      iconfocus: "/game-icons/year-focus.svg",
    },
    {
      id: 2,
      minReleaseYear: 2010,
      maxReleaseYear: 2020,
      icon: "/game-icons/year.svg",
      iconfocus: "/game-icons/year-focus.svg",
    },
    {
      id: 3,
      minReleaseYear: 2020,
      maxReleaseYear: new Date().getFullYear(),
      icon: "/game-icons/year.svg",
      iconfocus: "/game-icons/year-focus.svg",
    },
  ];

  return (
    <aside>
      <nav className="rounded-md bg-gray-900 px-2 py-4  text-slate-200">
        <ul>
        <h1 className="md:hidden text-2xl text-white pb-4">Filter games</h1>
        <hr className="border-slate-700  pb-4  font-bold md:hidden" />
          <h3 className="pb-4 pl-2 text-xs font-bold tracking-wide">GENRE</h3>
          {gameGenres.map((genre) => (
            <li
              key={genre.id}
              onClick={() => handleGenreSelection(genre.id, genre.name)}
              className={`${
                genreSelected === genre.id ? "bg-gray-800 font-bold" : ""
              } flex cursor-pointer items-center gap-3 rounded-lg pb-1 hover:bg-gray-800`}
            >
              <img
                className="my-1 ml-1 size-7 rounded-lg"
                src={genreSelected === genre.id ? genre.iconfocus : genre.icon}
                alt={genre.name}
              />
              {genre.name}
            </li>
          ))}
          <hr className="mb-4 mt-3 border-slate-600" />
        </ul>
        <ul>
          <h3 className="pb-4 pl-2 text-xs font-bold tracking-wide">YEAR</h3>
          {gameReleaseYears.map((release) => (
            <li
              key={release.id}
              onClick={() =>
                handleReleaseYearSelection(
                  release.id,
                  release.minReleaseYear,
                  release.maxReleaseYear,
                )
              }
              className={`${
                releaseYearSelected === release.id
                  ? "bg-gray-800 font-bold"
                  : ""
              } flex cursor-pointer items-center gap-3 rounded-lg pb-1 hover:bg-gray-800`}
            >
              <img
                className="my-1 ml-1 size-7 rounded-lg"
                src={
                  releaseYearSelected === release.id
                    ? release.iconfocus
                    : release.icon
                }
                alt="calendar"
              ></img>
              {release.minReleaseYear + "-" + release.maxReleaseYear}
            </li>
          ))}

          <hr className="mb-4 mt-3 border-slate-600" />
        </ul>
        <ul>
          <h3 className="pb-4 pl-2 text-xs font-bold tracking-wide">
            MIN AVG RATING
          </h3>
          <li
            onClick={() => handleRatingSelection(4.5)}
            className={`${
              minimumRatingSelected === 4.5 && "scale-105 bg-gray-800"
            } "mx-2 flex items-center rounded-lg px-2 pb-1 transition-all  hover:bg-gray-800`}
          >
            <IconContext.Provider
              value={{ color: "gold", title: "star rating", size: "24px" }}
            >
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <IoMdStarHalf />
            </IconContext.Provider>
          </li>
          <li
            onClick={() => handleRatingSelection(4)}
            className={`${
              minimumRatingSelected === 4 && "scale-105 bg-gray-800"
            } "mx-2 flex items-center rounded-lg px-2 pb-1 transition-all  hover:bg-gray-800`}
          >
            <IconContext.Provider
              value={{ color: "gold", title: "star rating", size: "24px" }}
            >
              <IoMdStar
                className={`${
                  minimumRatingSelected === 4 && "scale-105 bg-gray-800"
                }`}
              />
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
          <li
            onClick={() => handleRatingSelection(3)}
            className={`${
              minimumRatingSelected === 3 && "scale-105 bg-gray-800"
            } "mx-2 flex items-center rounded-lg px-2 pb-1 transition-all  hover:bg-gray-800`}
          >
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
          <li
            onClick={() => handleRatingSelection(2)}
            className={`${
              minimumRatingSelected === 2 && "scale-105 bg-gray-800"
            } "mx-2 flex items-center rounded-lg px-2 pb-1 transition-all  hover:bg-gray-800`}
          >
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
          <li
            onClick={() => handleRatingSelection(1)}
            className={`${
              minimumRatingSelected === 1 && "scale-105 bg-gray-800"
            } "mx-2 flex items-center rounded-lg px-2 pb-1 transition-all  hover:bg-gray-800`}
          >
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
          <hr className="mb-4 mt-3 border-slate-600 md:hidden" />
        </ul>
      </nav>
    </aside>
  );
};
export default GameFiltersSidebar;
