const GameSorting = ({
  sortGamesByRatingAsc,
  sortGamesByRatingDesc,
  sortGamesByPopularity,
  sortGamesByLatest,
  sortGamesByPriceAsc,
  sortGamesByPriceDesc,
  sortingOption,
  setSortingOption,
  displayedGames,
}) => {
  const handleSortChange = (selectedValue) => {
    switch (selectedValue) {
      case "popularity":
        sortGamesByPopularity(displayedGames);
        setSortingOption(selectedValue);
        break;
      case "latest":
        sortGamesByLatest();
        setSortingOption(selectedValue);
        break;
      case "rating-asc":
        sortGamesByRatingAsc();
        setSortingOption(selectedValue);
        break;
      case "rating-desc":
        sortGamesByRatingDesc();
        setSortingOption(selectedValue);
        break;
      case "price-asc":
        sortGamesByPriceAsc();
        setSortingOption(selectedValue);
        break;
      case "price-desc":
        sortGamesByPriceDesc();
        setSortingOption(selectedValue);
        break;
    }
  };

  return (
    <div className="flex flex-1 md:flex-initial flex-col md:border-0 border border-1 border-slate-700 rounded-md items-center md:items-baseline justify-center h-12">
      <label className=" text-xs" htmlFor="sort-select">
        Sort by:
      </label>
      <select
        className="bg-slate-950 md:bg-gray-900 pb-1 items-center flex justify-center  text-white font-bold"
        name="sort"
        id="sort-select"
        value={sortingOption}
        onChange={(event) => handleSortChange(event.target.value)}
      >
        <option className="font-normal text-slate-300" value="popularity">
          Popularity
        </option>
        <option className="font-normal text-slate-300" value="latest">
          Latest
        </option>
        <option className="font-normal text-slate-300" value="rating-asc">
          Rating ↑
        </option>
        <option className="font-normal text-slate-300" value="rating-desc">
          Rating ↓
        </option>
        <option className="font-normal text-slate-300" value="price-asc">
          Price ↑
        </option>
        <option className="font-normal text-slate-300" value="price-desc">
          Price ↓
        </option>
      </select>
    </div>
  );
};
export default GameSorting;
