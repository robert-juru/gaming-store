import GameCard from "../../components/GameCard";
import Header from "../../components/Header";
import GameFiltersSidebar from "./GameFiltersSidebar";
import GameSortingSection from "./GameSortingSection";
import MobileFilterAndSortSection from "./MobileFilterAndSortSection";
import { useState, useEffect } from "react";

export default function GameStore({
  cartGames,
  handleCart,
  gamesQuery,
  removeFromCart,
  isInCart,
  gamesWithPrices,
  displayedGames,
  setDisplayedGames,
  allGames,
  searchQueryData,
  setSearchQueryData,
  activeFilter,
  setActiveFilter,
}) {
  useEffect(() => {
    if (displayedGames.length === 0) {
      const limitedGames = gamesQuery.data.slice(0, 100); // maximum display of 100
      sortGamesByPopularity(limitedGames);
    }
  }, []);

  const filterGamesByGenre = (gameGenre) => {
    const filteredGames = gamesQuery.data.filter((game) =>
      game.genres.some((genre) => genre.name === gameGenre),
    );
    const limitedGames = filteredGames.slice(0, 50);
    sortGamesByPopularity(limitedGames);
  };

  const filterGamesByReleaseYear = (minReleaseYear, maxReleaseYear) => {
    const filteredGames = gamesQuery.data.filter(
      (game) =>
        minReleaseYear <= new Date(game.released).getFullYear() &&
        maxReleaseYear > new Date(game.released).getFullYear(),
    );
    const limitedGames = filteredGames.slice(0, 50);
    sortGamesByPopularity(limitedGames);
  };

  const filterGamesByMinimumRating = (minimumRating) => {
    const filteredGames = gamesQuery.data.filter(
      (game) => Math.floor(game.rating * 2) / 2 >= minimumRating,
    );
    const limitedGames = filteredGames.slice(0, 50);
    sortGamesByPopularity(limitedGames);
  };

  const filterGamesByPlatform = (gamePlatform) => {
    const filteredGames = gamesQuery.data.filter((game) =>
      game.parent_platforms.some(
        (parent_platform) => parent_platform.platform.name === gamePlatform,
      ),
    );
    const limitedGames = filteredGames.slice(0, 50);
    sortGamesByPopularity(limitedGames);
  };
  const filterGamesByLauncher = (gameLauncher) => {
    const filteredGames = gamesQuery.data.filter((game) =>
      game.stores.some((launcher) => launcher.store.name === gameLauncher),
    );
    const limitedGames = filteredGames.slice(0, 50);
    sortGamesByPopularity(limitedGames);
  };

  const [platformSelected, setPlatformSelected] = useState(null);
  const handlePlatformSelection = (platform) => {
    setPlatformSelected(platform);
    setActiveFilter(platform);
    setLauncherSelected(null);
    setGenreSelected(null);
    setReleaseYearSelected(null);
    setMinimumRatingSelected(null);
    filterGamesByPlatform(platform);
    setSortingOption("popularity");
    if (platformSelected == platform) {
      setPlatformSelected(null);
      const limitedGames = gamesQuery.data.slice(0, 100); // maximum display of 100
      sortGamesByPopularity(limitedGames);
      setActiveFilter("Most Popular");
    }
  };
  const [launcherSelected, setLauncherSelected] = useState(null);
  const handleLauncherSelection = (launcher) => {
    setLauncherSelected(launcher);
    setPlatformSelected(null);
    setReleaseYearSelected(null);
    setMinimumRatingSelected(null);
    filterGamesByLauncher(launcher);
    setActiveFilter(launcher);
    setSortingOption("popularity");
    if (launcherSelected == launcher) {
      setLauncherSelected(null);
      const limitedGames = gamesQuery.data.slice(0, 100); 
      sortGamesByPopularity(limitedGames);
      setActiveFilter("Most Popular");
    }
  };
  const [genreSelected, setGenreSelected] = useState(null);
  const handleGenreSelection = (genreId, genreName) => {
    setGenreSelected(genreId);
    filterGamesByGenre(genreName);
    setActiveFilter(genreName);
    setReleaseYearSelected(null);
    setMinimumRatingSelected(null);
    setLauncherSelected(null);
    setPlatformSelected(null);
    setSortingOption("popularity");
    if (genreSelected == genreId) {
      setGenreSelected(null);
      const limitedGames = gamesQuery.data.slice(0, 100); 
      sortGamesByPopularity(limitedGames);
      setActiveFilter("Most Popular");
    }
  };
  const [releaseYearSelected, setReleaseYearSelected] = useState(null);
  const handleReleaseYearSelection = (
    releaseYearId,
    minReleaseYear,
    maxReleaseYear,
  ) => {
    setReleaseYearSelected(releaseYearId);
    filterGamesByReleaseYear(minReleaseYear, maxReleaseYear);
    setActiveFilter(`Released in ${minReleaseYear}-${maxReleaseYear}`);
    setGenreSelected(null);
    setMinimumRatingSelected(null);
    setLauncherSelected(null);
    setPlatformSelected(null);
    setSortingOption("popularity");
    if (releaseYearSelected == releaseYearId) {
      setReleaseYearSelected(null);
      const limitedGames = gamesQuery.data.slice(0, 100); 
      sortGamesByPopularity(limitedGames);
      setActiveFilter("Most Popular");
    }
  };
  const [minimumRatingSelected, setMinimumRatingSelected] = useState(null);
  const handleRatingSelection = (minimumRating) => {
    setMinimumRatingSelected(minimumRating);
    filterGamesByMinimumRating(minimumRating);
    setActiveFilter(`Min rating: ${minimumRating} ⭐`);
    setReleaseYearSelected(null);
    setGenreSelected(null);
    setLauncherSelected(null);
    setPlatformSelected(null);
    setSortingOption("popularity");
    if (minimumRatingSelected == minimumRating) {
      setMinimumRatingSelected(null);
      const limitedGames = gamesQuery.data.slice(0, 100); 
      sortGamesByPopularity(limitedGames);
      setActiveFilter("Most Popular");
    }
  };

  const [sortingOption, setSortingOption] = useState("popularity");

  const sortGamesByRatingAsc = () => {
    const gamesByRatingAsc = [...displayedGames].sort(
      (a, b) => a.rating - b.rating,
    );
    setDisplayedGames(gamesByRatingAsc);
  };

  const sortGamesByRatingDesc = () => {
    const gamesByRatingDesc = [...displayedGames].sort(
      (a, b) => b.rating - a.rating,
    );
    setDisplayedGames(gamesByRatingDesc);
  };

  const sortGamesByPopularity = (games) => {
    const gamesByPopularity = [...games].sort(
      (a, b) => b.ratings_count - a.ratings_count,
    );
    setDisplayedGames(gamesByPopularity);
  };

  const sortGamesByLatest = () => {
    const gamesByLatest = [...displayedGames].sort(
      (a, b) => new Date(b.released) - new Date(a.released),
    );
    setDisplayedGames(gamesByLatest);
  };

  const sortGamesByPriceAsc = () => {
    const gamesByPriceAsc = [...gamesWithPrices].sort(
      (a, b) => a.price - b.price,
    );
    setDisplayedGames(gamesByPriceAsc);
  };

  const sortGamesByPriceDesc = () => {
    const gamesByPriceDesc = [...gamesWithPrices].sort(
      (a, b) => b.price - a.price,
    );
    setDisplayedGames(gamesByPriceDesc);
  };

  return (
    <div className="m-0 grid grid-cols-1 gap-4 p-4 md:grid-cols-[200px_1fr] md:px-4 lg:px-8 xl:px-16">
      <Header
        removeFromCart={removeFromCart}
        cartGames={cartGames}
        fetchedGames={allGames}
        displayedGames={displayedGames}
        setDisplayedGames={setDisplayedGames}
        searchQueryData={searchQueryData}
        setSearchQueryData={setSearchQueryData}
        setActiveFilter={setActiveFilter}
        sortGamesByPopularity={sortGamesByPopularity}
        setSortingOption={setSortingOption}
      />
      <div className="hidden md:block">
        <GameFiltersSidebar
          handleGenreSelection={handleGenreSelection}
          handleReleaseYearSelection={handleReleaseYearSelection}
          handleRatingSelection={handleRatingSelection}
          genreSelected={genreSelected}
          releaseYearSelected={releaseYearSelected}
          minimumRatingSelected={minimumRatingSelected}
        />
      </div>
      <div className=" gap-8">
        <div className="md:hidden">
          <h2 className="px-4 text-center text-4xl font-bold text-white md:text-6xl">
            {activeFilter}
          </h2>
        </div>
        <GameSortingSection
          handleLauncherSelection={handleLauncherSelection}
          handlePlatformSelection={handlePlatformSelection}
          platformSelected={platformSelected}
          launcherSelected={launcherSelected}
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
        <MobileFilterAndSortSection
          handleLauncherSelection={handleLauncherSelection}
          handlePlatformSelection={handlePlatformSelection}
          handleGenreSelection={handleGenreSelection}
          handleReleaseYearSelection={handleReleaseYearSelection}
          handleRatingSelection={handleRatingSelection}
          genreSelected={genreSelected}
          releaseYearSelected={releaseYearSelected}
          minimumRatingSelected={minimumRatingSelected}
          platformSelected={platformSelected}
          launcherSelected={launcherSelected}
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
        <div className="hidden py-10 md:block">
          <h2 className="px-4 pb-4 text-3xl font-bold text-white md:text-start md:text-4xl">
            {activeFilter}
          </h2>
          <hr className="border-slate-700 font-bold" />
        </div>
        <main className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-x-8 gap-y-6">
          {gamesWithPrices.map((game) => (
            <GameCard
              key={game.id}
              game={game}
              handleCart={() => handleCart(game)}
              isInCart={isInCart}
              cardHeight={"h-64"}
              overlayHeight={"h-[110px]"}
              hoverScale={"hover:scale-[102%]"}
            />
          ))}
        </main>
      </div>
    </div>
  );
}
