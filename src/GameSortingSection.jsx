import GameFiltersLauncherPlatform from "./GameFiltersLauncherPlatform";
import GameSorting from "./GameSorting";
const GameSortingSection = ({
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
    <section className="max-h-32 col-span-full hidden items-center justify-between  gap-4 rounded-md bg-gray-900 p-4 text-slate-200 md:flex lg:gap-8">
      <GameFiltersLauncherPlatform
        handleLauncherSelection={handleLauncherSelection}
        handlePlatformSelection={handlePlatformSelection}
        platformSelected={platformSelected}
        launcherSelected={launcherSelected}
      />
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
export default GameSortingSection;
