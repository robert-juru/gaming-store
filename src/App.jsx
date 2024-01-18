import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchStoreData } from "./Api";
import GameStore from "./GameStore";
import ShoppingCartPage from "./ShoppingCartPage";
import { Route, Routes } from "react-router-dom";
import GamePage from "./GamePage";
import LoadingPage from "./LoadingPage";
import { generatePrice } from "./PriceGenerator";

const App = () => {
  const gamesDataQuery = (endpoint, pageSize, limit) => {
    return useQuery({
      queryKey: [endpoint],
      queryFn: async () => {
        const allResults = [];
        for (let page = 1; page <= limit; page++) {
          const results = await fetchStoreData(endpoint, page, pageSize);
          allResults.push(...results);
        }
        return allResults;
      },
    });
  };

  const gamesQuery = gamesDataQuery("games", 40, 5);
  const [cartGames, setCartGames] = useState([]);


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

  if (gamesQuery.isLoading) return <LoadingPage fetchedGames={gamesQuery.data} removeFromCart={removeFromCart} cartGames={cartGames} />;
  if (gamesQuery.isError) return <h1 className="text-4xl text-white">Error loading data!!!</h1>;

  const gamesWithPrices = gamesQuery.data.map((game) => {
    const price = generatePrice(
      new Date(game.released).getFullYear(),
      game.ratings_count,
      game.rating,
    );
    return { ...game, price };
  });

  return (
    <Routes>
      {gamesWithPrices.map((game) => (
        <Route
          key={game.id}
          path={`game/${game.id}`}
          element={
            <GamePage
              gameId={game.id}
              fetchedGames={gamesQuery.data}
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
            gamesQuery={gamesQuery}
            cartGames={cartGames}
            gamesWithPrices={gamesWithPrices}
            setCartGames={setCartGames}
            removeFromCart={removeFromCart}
            handleCart={handleCart}
            isInCart={isInCart}
          />
        }
      />
      <Route
        path="/shopping-cart"
        element={
          <ShoppingCartPage
            fetchedGames={gamesQuery.data}
            cartGames={cartGames}
            removeFromCart={removeFromCart}
          />
        }
      />
    </Routes>
  );
};

export default App;
