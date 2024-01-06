import { IconContext } from "react-icons";
import { IoMdStar } from "react-icons/io";
import { useState } from "react";

const GameFiltersSidebar = ({
  filterGamesByGenre,
  filterGamesByReleaseYear,
}) => {
  const [genreSelected, setGenreSelected] = useState(null);
  const handleGenreSelect = (genreId, genreName) => {
    setGenreSelected(genreId);
    filterGamesByGenre(genreName);
    setReleaseYearSelected(null)
  };
  const [releaseYearSelected, setReleaseYearSelected] = useState(null);
  const handleReleaseYearSelect = (
    releaseYearId,
    minReleaseYear,
    maxReleaseYear,
  ) => {
    setReleaseYearSelected(releaseYearId);
    filterGamesByReleaseYear(minReleaseYear, maxReleaseYear);
    setGenreSelected(null);
  };

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

  console.log("isReleaseYearSelected" + releaseYearSelected)

  return (
    <aside className="hidden md:block">
      <nav className="rounded-md bg-gray-900 px-2 py-4  text-slate-200">
        <ul>
          <h3 className="pb-4 pl-2 text-xs font-bold tracking-wide">GENRE</h3>
          {gameGenres.map((genre) => (
            <li
              key={genre.id}
              onClick={() => handleGenreSelect(genre.id, genre.name)}
              className={`${
                genreSelected === genre.id ? "bg-gray-800 font-bold" : ""
              } flex cursor-pointer items-center gap-3 rounded-lg pb-1 hover:bg-gray-800`}
            >
              <img
                className="my-1 ml-1 size-7 rounded-lg"
                src={
                  genreSelected === genre.id ? genre.iconfocus : genre.icon
                }
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
                handleReleaseYearSelect(
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
