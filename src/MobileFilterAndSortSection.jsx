import GameSorting from "./GameSorting";
import MobileFiltersButton from "./MobileFiltersButton";

const MobileFilterAndSortSection = ({
  handleLauncherSelection,
  handlePlatformSelection,
  platformSelected,
  launcherSelected,
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
  return (
    <section className="col-span-full flex items-center justify-between  gap-4 rounded-md text-slate-200 md:hidden">
      <MobileFiltersButton />
      <GameSorting
        sortGamesByRatingAsc={sortGamesByRatingAsc}
        sortGamesByRatingDesc={sortGamesByRatingDesc}
        sortGamesByPopularity={sortGamesByPopularity}
        sortGamesByLatest={sortGamesByLatest}
        sortGamesByPriceAsc={sortGamesByPriceAsc}
        sortGamesByPriceDesc={sortGamesByPriceDesc}
        sortingOption={sortingOption}
        setSortingOption={setSortingOption}
        displayedGames={displayedGames}
      />
    </section>
  );
};

export default MobileFilterAndSortSection;
