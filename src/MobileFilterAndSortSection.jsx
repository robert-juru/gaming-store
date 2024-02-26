import GameSorting from "./GameSorting";
import MobileFiltersButton from "./MobileFiltersButton";
import GameFiltersSidebar from "./GameFiltersSidebar";
import { useState } from "react";
import GameFiltersLauncherPlatform from "./GameFiltersLauncherPlatform";

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
  handleGenreSelection,
  handleReleaseYearSelection,
  handleRatingSelection,
  genreSelected,
  releaseYearSelected,
  minimumRatingSelected,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.classList.add("overflow-hidden");
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.classList.remove("overflow-hidden");
  };

  return (
    <section className="col-span-full flex items-center justify-between py-8 gap-4 rounded-md text-slate-200 md:hidden">
      <MobileFiltersButton openModal={openModal} />
      {isModalOpen && (
        <div
          onClick={closeModal}
          className="fixed left-0 top-0 z-50 h-full w-full overflow-auto bg-black  bg-opacity-50"
        >
          <div
            className={`w-full rounded-lg shadow-lg ${
              isModalOpen ? "animate-slideFromLeft" : "animate-slideToLeft"
            }`}
          >
            <button
              onClick={closeModal}
              className="absolute right-2 top-2 size-8 text-2xl text-gray-100 active:text-gray-300"
            >
              &times;
            </button>
            <div className="bg-gray-900 p-4">
              <GameFiltersSidebar
                handleGenreSelection={handleGenreSelection}
                handleReleaseYearSelection={handleReleaseYearSelection}
                handleRatingSelection={handleRatingSelection}
                genreSelected={genreSelected}
                releaseYearSelected={releaseYearSelected}
                minimumRatingSelected={minimumRatingSelected}
              />
              <GameFiltersLauncherPlatform
                handleLauncherSelection={handleLauncherSelection}
                handlePlatformSelection={handlePlatformSelection}
                platformSelected={platformSelected}
                launcherSelected={launcherSelected}
              />
            </div>
          </div>
        </div>
      )}
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
