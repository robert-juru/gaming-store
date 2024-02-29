import { useState, useEffect, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import debounce from "lodash.debounce";
import { fetchSearchData } from "../../api/Api";
import { useLocation, Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { CiSearch } from "react-icons/ci";

const SearchBar = ({
  setSearchQueryData,
  setActiveFilter,
  sortGamesByPopularity,
  setSortingOption,
}) => {
  const [query, setQuery] = useState("");
  const [searchedGames, setSearchedGames] = useState([]);
  const [shouldFetch, setShouldFetch] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const location = useLocation();

  const searchQuery = useQuery({
    queryKey: ["search"],
    queryFn: () => (query ? fetchSearchData(query) : []),
    enabled: shouldFetch && !!query,
  });

  const handleEnterKey = (event) => {
    setIsFocused(true);
    if (event.key === "Enter") {
      setIsFocused(false);
      setActiveFilter(
        `Search results for: ${query} (${searchQuery.data.length} games)`,
      );
      setSortingOption("popularity");
      setTimeout(() => {
        sortGamesByPopularity(searchQuery.data);
      }, 0);
    }
  };

  const debouncedSetQuery = useMemo(
    () =>
      debounce(() => {
        setShouldFetch(true);
      }, 300),
    [],
  );

  const handleChange = (event) => {
    setQuery(event.target.value);
    debouncedSetQuery();
  };

  useEffect(() => {
    if (searchQuery.isSuccess) {
      setSearchedGames(searchQuery.data);
      setShouldFetch(false);
      setSearchQueryData((prevHistory) => {
        const newGames = searchQuery.data.filter(
          (game) => !prevHistory.some((prevGame) => prevGame.id === game.id),
        );
        return [...prevHistory, ...newGames];
      });
    }
  }, [searchQuery.data, searchQuery.isSuccess, setSearchQueryData]);

  useEffect(() => {
    setSearchedGames([]);
    setShouldFetch(false);
  }, [location.pathname]);

  return (
    <div className="relative flex flex-1 flex-col gap-4">
      <div className="peer relative flex flex-1">
        <input
          className=" my-2 w-full rounded-md border-0 bg-slate-700 p-2 pl-8 text-sm text-gray-300 placeholder:text-gray-300 focus:bg-slate-600 focus:outline-none"
          type="search"
          value={query}
          onChange={handleChange}
          onKeyDown={handleEnterKey}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          name="search"
          id="search"
          placeholder="Search store"
          autoComplete="off"
          required={true}
        />
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
          <IconContext.Provider
            value={{ color: "white", size: "18px", title: "search" }}
          >
            <CiSearch />
          </IconContext.Provider>
        </div>
      </div>
      {searchQuery.data && isFocused && (
        <div className=" absolute left-0 top-full z-50 max-h-60 w-full overflow-y-scroll rounded-md bg-slate-700 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-slate-300">
          {searchedGames.slice(0, 8).map((game) => (
            <div key={game.id} onClick={(e) => e.stopPropagation()}>
              <Link to={`/game/${game.id}`}>
                <div
                  className=" flex w-full items-center  gap-4 p-2 text-slate-300 hover:bg-slate-600 hover:text-white"
                  onMouseDown={(e) => e.preventDefault()}
                >
                  <img
                    className="h-12 w-16 min-w-16 rounded-md sm:h-16 sm:w-24"
                    src={game.background_image || "/no-image-available.jpg"}
                    alt={`${game.background_image} image`}
                  />
                  <p className="text-xs sm:text-sm md:text-base">{game.name}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
