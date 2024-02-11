import { useState, useEffect, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import debounce from "lodash.debounce";
import { fetchSearchData } from "./Api";
import { useNavigate, useLocation } from "react-router-dom";
import { IconContext } from "react-icons";
import { CiSearch } from "react-icons/ci";

const SearchBar = ({ displayedGames, setDisplayedGames, searchQueryData, setSearchQueryData }) => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchedResultsHistory, setSearchedResultsHistory] = useState([]);
  const [shouldFetch, setShouldFetch] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const navigate = useNavigate();
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
      setTimeout(() => {
        setDisplayedGames(searchQuery.data);
      }, 500);
      

    }
  };

  const debouncedSetQuery = useMemo(
    () =>
      debounce(() => {
        setShouldFetch(true);
      }, 1000),
    [],
  );

  const handleChange = (event) => {
    setQuery(event.target.value);
    debouncedSetQuery();
  };

  useEffect(() => {
    if (searchQuery.isSuccess) {
      setSearchResults(searchQuery.data);
      console.log(searchQuery.data);
      setShouldFetch(false);
      setSearchQueryData((prevHistory) => {
        const newGames = searchQuery.data.filter(game => !prevHistory.some(prevGame => prevGame.id === game.id));
        return [...prevHistory, ...newGames];
      });
      console.log(searchQueryData)
    }
  }, [searchQuery.data, searchQuery.isSuccess, setSearchQueryData]);

  useEffect(() => {
    setSearchResults([]);
  }, [location.pathname]);

  let searchedGames = searchQuery.data;

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
          autocomplete="off"
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
        <div className=" scrollbar-thumb-slate-300 scrollbar-thin scrollbar-track-transparent absolute left-0 top-full z-50 max-h-60 w-full overflow-y-scroll rounded-md bg-slate-700">
          {searchQuery.data.slice(0, 8).map((game) => (
            <div
              className="flex items-center gap-4 p-2 text-slate-300 hover:bg-slate-600 hover:text-white"
              key={game.id}
            >
              <img
                className="h-16 w-24 rounded-md"
                src={game.background_image}
                alt={`${game.background_image} image`}
              />
              <p>{game.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
