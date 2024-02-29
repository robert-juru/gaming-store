import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchStoreData, fetchHomePageData } from "./api/Api";
import GameStore from "./pages/StorePage/GameStore";
import ShoppingCartPage from "./pages/CartPage/ShoppingCartPage";
import { Route, Routes } from "react-router-dom";
import GamePage from "./pages/GamePage/GamePage";
import HomePage from "./pages/HomePage/HomePage";
import LoadingPage from "./components/LoadingPage";
import ErrorPage from "./components/ErrorPage";
import { generatePrice } from "./components/PriceGenerator";

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

  const [cartGames, setCartGames] = useState(
    JSON.parse(localStorage.getItem("cartGames")) || [],
  );

  useEffect(() => {
    localStorage.setItem("cartGames", JSON.stringify(cartGames));
  }, [cartGames]);

  const [displayedGames, setDisplayedGames] = useState([]);
  const [activeFilter, setActiveFilter] = useState("Most Popular");

  const isInCart = (gameId) => {
    return cartGames.some((cartGame) => cartGame.id === gameId);
  };

  const handleCart = (gameId) => {
    if (!cartGames.includes(gameId)) {
      setCartGames([...cartGames, gameId]);
    }
  };

  const removeFromCart = (gameIdToRemove) => {
    const updatedCart = cartGames.filter((game) => game.id !== gameIdToRemove);
    setCartGames(updatedCart);
  };

  if (storeGamesQuery.isLoading || homePageQuery.isLoading)
    return (
      <LoadingPage
        fetchedGames={storeGamesQuery.data}
        removeFromCart={removeFromCart}
        cartGames={cartGames}
      />
    );

  if (storeGamesQuery.isError || homePageQuery.isError)
    return (
      <ErrorPage
        fetchedGames={storeGamesQuery.data}
        removeFromCart={removeFromCart}
        cartGames={cartGames}
      />
    );

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

  const allGames = [
    ...new Set([
      ...storeGamesQuery.data,
      ...homePageGames,
      ...searchQueryData,
      ...cartGames,
    ]),
  ];
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
        path="/"
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
              activeFilter={activeFilter}
            />
          }
        />
      ))}
      <Route
        path="/store"
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
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
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
      <Route
        path="/*"
        element={
          <ErrorPage
            cartGames={cartGames}
            removeFromCart={removeFromCart}
            fetchedGames={allGamesWithPrices}
          />
        }
      />
    </Routes>
  );
};

export default App;
