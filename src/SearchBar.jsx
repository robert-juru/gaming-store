import { useState, useEffect, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import debounce from "lodash.debounce";
import { fetchSearchData } from "./Api";

const SearchBar = ({displayedGames, setDisplayedGames}) => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [shouldFetch, setShouldFetch] = useState(false);

  const searchQuery = useQuery({
    queryKey: ["search"],
    queryFn: () => (query ? fetchSearchData(query) : []),
    enabled: shouldFetch && !!query,
  });

  const debouncedSetQuery = useMemo(
    () =>
      debounce(() => {
        setShouldFetch(true);
      }, 1000), 
    []
  );

  const handleChange = (event) => {
    setQuery(event.target.value);
    debouncedSetQuery();
  };

  useEffect(() => {
    if (searchQuery.isSuccess) {
      setSearchResults(searchQuery.data);
      console.log(searchQuery.data)
      setShouldFetch(false);
    }
  }, [searchQuery.data, searchQuery.isSuccess]);

  let searchedGames=searchQuery.data;

  return (
    <input
      className="flex-1 rounded-md border-0 bg-slate-800 p-2 pl-8 text-sm text-gray-300 placeholder:text-gray-300 focus:bg-slate-700 focus:outline-none"
      type="search"
      value={query}
      onChange={handleChange}
      name="search"
      id="search"
      placeholder="Search store"
    />
  );
};

export default SearchBar;
