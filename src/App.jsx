import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchStoreData, fetchHomePageData, fetchSearchData } from "./Api";
import GameStore from "./GameStore";
import ShoppingCartPage from "./ShoppingCartPage";
import { Route, Routes } from "react-router-dom";
import GamePage from "./GamePage";
import HomePage from "./HomePage";
import LoadingPage from "./LoadingPage";
import { generatePrice } from "./PriceGenerator";

const App = () => {
  const [searchQueryData, setSearchQueryData] = useState([]);
  const storeGamesQuery = useQuery({
    queryKey: ["games"],
    queryFn: async () => {
      const allResults = [];
      for (let page = 1; page <= 5; page++) {
        const results = await fetchStoreData("games", page, 40);
        allResults.push(...results);
      }
      return allResults;
    },
  });

  const homePageQuery = useQuery({
    queryKey: ["homePage"],
    queryFn: fetchHomePageData,
  });

  const [cartGames, setCartGames] = useState([]);
  const [displayedGames, setDisplayedGames] = useState([]);

  const isInCart = (gameId) => {
    return cartGames.some((cartGame) => cartGame.id === gameId);
  };

  const handleCart = (gameId) => {
    if (!cartGames.includes(gameId)) {
      setCartGames([...cartGames, gameId]);
    }
    console.log(cartGames);
  };

  const removeFromCart = (gameIdToRemove) => {
    const updatedCart = cartGames.filter((game) => game.id !== gameIdToRemove);
    setCartGames(updatedCart);
  };

  if (
    storeGamesQuery.isLoading ||
    homePageQuery.isLoading 
  )
    return (
      <LoadingPage
        fetchedGames={storeGamesQuery.data}
        removeFromCart={removeFromCart}
        cartGames={cartGames}
      />
    );

  if (storeGamesQuery.isError || homePageQuery.isError)
    return <h1 className="text-4xl text-white">Error loading data!!!</h1>;

 
  const storeGamesWithPrices = displayedGames.map((game) => {
    const price = generatePrice(
      new Date(game.released).getFullYear(),
      game.ratings_count,
      game.rating,
    );
    return { ...game, price };
  });

  let homePageData = homePageQuery.data;
  const homePageGames = [
    ...homePageData.mostPopular.results,
    ...homePageData.topSellers.results,
    ...homePageData.newReleases.results,
    ...homePageData.topUpcoming.results,
    ...homePageData.recentlyUpdated.results,
    ...homePageData.topRatedByCritics.results,
    ...homePageData.topRatedByGamers.results,
  ];

  const allGames = [...new Set([...storeGamesQuery.data, ...homePageGames, ...searchQueryData])];
  console.log(allGames)
  const allGamesWithPrices = allGames.map((game) => {
    const price = generatePrice(
      new Date(game.released).getFullYear(),
      game.ratings_count,
      game.rating,
    );
    return { ...game, price };
  });

  return (
    <Routes>
      <Route
        path="/home"
        element={
          <HomePage
            fetchedGames={allGamesWithPrices}
            cartGames={cartGames}
            removeFromCart={removeFromCart}
            isInCart={isInCart}
            handleCart={handleCart}
            homePageData={homePageData}
          />
        }
      />
      {allGamesWithPrices.map((game) => (
        <Route
          key={game.id}
          path={`game/${game.id}`}
          element={
            <GamePage
              gameId={game.id}
              fetchedGames={allGamesWithPrices}
              cartGames={cartGames}
              setCartGames={setCartGames}
              removeFromCart={removeFromCart}
              handleCart={() => handleCart(game)}
              isInCart={isInCart}
            />
          }
        />
      ))}
      <Route
        path="/"
        element={
          <GameStore
            gamesQuery={storeGamesQuery}
            displayedGames={displayedGames}
            setDisplayedGames={setDisplayedGames}
            cartGames={cartGames}
            gamesWithPrices={storeGamesWithPrices}
            allGames={allGamesWithPrices}
            setCartGames={setCartGames}
            removeFromCart={removeFromCart}
            handleCart={handleCart}
            isInCart={isInCart}
            searchQueryData={searchQueryData}
            setSearchQueryData={setSearchQueryData}
            // query={query}
            // setQuery={setQuery}
          />
        }
      />
      <Route
        path="/shopping-cart"
        element={
          <ShoppingCartPage
            fetchedGames={allGamesWithPrices}
            cartGames={cartGames}
            removeFromCart={removeFromCart}
          />
        }
      />
    </Routes>
  );
};

export default App;
