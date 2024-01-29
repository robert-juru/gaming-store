import GameCard from "./GameCard";
import Header from "./Header";
import GameFiltersSidebar from "./GameFiltersSidebar";
import GameSortingSection from "./GameSortingSection";
import { useState, useEffect } from "react";
import { generatePrice } from "./PriceGenerator";

export default function GameStore({
  cartGames,
  handleCart,
  gamesQuery,
  removeFromCart,
  isInCart,
  gamesWithPrices,
  displayedGames,
  setDisplayedGames,
  allGames
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
  const handlePlatformSelection = (platformSelected) => {
    setPlatformSelected(platformSelected);
    setLauncherSelected(null);
    setGenreSelected(null);
    setReleaseYearSelected(null);
    setMinimumRatingSelected(null);
    filterGamesByPlatform(platformSelected);
    setSortingOption("popularity");
  };
  const [launcherSelected, setLauncherSelected] = useState(null);
  const handleLauncherSelection = (launcherSelected) => {
    setLauncherSelected(launcherSelected);
    setPlatformSelected(null);
    setGenreSelected(null);
    setReleaseYearSelected(null);
    setMinimumRatingSelected(null);
    filterGamesByLauncher(launcherSelected);
    setSortingOption("popularity");
  };
  const [genreSelected, setGenreSelected] = useState(null);
  const handleGenreSelection = (genreId, genreName) => {
    setGenreSelected(genreId);
    filterGamesByGenre(genreName);
    setReleaseYearSelected(null);
    setMinimumRatingSelected(null);
    setLauncherSelected(null);
    setPlatformSelected(null);
    setSortingOption("popularity");
  };
  const [releaseYearSelected, setReleaseYearSelected] = useState(null);
  const handleReleaseYearSelection = (
    releaseYearId,
    minReleaseYear,
    maxReleaseYear,
  ) => {
    setReleaseYearSelected(releaseYearId);
    filterGamesByReleaseYear(minReleaseYear, maxReleaseYear);
    setGenreSelected(null);
    setMinimumRatingSelected(null);
    setLauncherSelected(null);
    setPlatformSelected(null);
    setSortingOption("popularity");
  };
  const [minimumRatingSelected, setMinimumRatingSelected] = useState(null);
  const handleRatingSelection = (minimumRating) => {
    setMinimumRatingSelected(minimumRating);
    filterGamesByMinimumRating(minimumRating);
    setReleaseYearSelected(null);
    setGenreSelected(null);
    setLauncherSelected(null);
    setPlatformSelected(null);
    setSortingOption("popularity");
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

  // if (gamesQuery.isLoading) return <LoadingPage fetchedGames={fetchedGames} removeFromCart={removeFromCart} cartGames={cartGames} />;
  // if (gamesQuery.isError) return <h1>Error loading data!!!</h1>;

  return (
    <div className="m-0 grid grid-cols-1 gap-4 p-4 md:grid-cols-[200px_1fr]">
      <Header
        removeFromCart={removeFromCart}
        cartGames={cartGames}
        fetchedGames={allGames}
      />
      <GameFiltersSidebar
        handleGenreSelection={handleGenreSelection}
        handleReleaseYearSelection={handleReleaseYearSelection}
        handleRatingSelection={handleRatingSelection}
        genreSelected={genreSelected}
        releaseYearSelected={releaseYearSelected}
        minimumRatingSelected={minimumRatingSelected}
      />
      <div className="grid grid-rows-[64px] gap-8">
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
        <main className=" grid grid-cols-[repeat(auto-fit,minmax(375px,1fr))] gap-x-8 gap-y-6">
          {gamesWithPrices.map((game) => (
            <GameCard
              game={game}
              handleCart={() => handleCart(game)}
              isInCart={isInCart}
              cardHeight={"h-64"}
              overlayHeight={"h-[110px]"}
            />
          ))}
        </main>
      </div>
    </div>
  );
}
