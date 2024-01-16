import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchStoreData } from "./Api";
import GameStore from "./GameStore";
import ShoppingCartPage from "./ShoppingCartPage";
import { Route, Routes } from "react-router-dom";
import GamePage from "./GamePage";

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
  // if (gamesQuery.isLoading) return <h1 className="text-4xl text-white">Loading....</h1>;
  // if (gamesQuery.isError) return <h1 className="text-4xl text-white">Error loading data!!!</h1>;

  
  const [cartGames, setCartGames] = useState([]);
  const removeFromCart = (gameIdToRemove) => {
    const updatedCart = cartGames.filter((game) => game.id !== gameIdToRemove);
    setCartGames(updatedCart);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <GamePage
            fetchedGames={gamesQuery.data}
            cartGames={cartGames}
            removeFromCart={removeFromCart}
          />
        }
      />
      <Route
        path="/store"
        element={
          <GameStore
            gamesQuery={gamesQuery}
            cartGames={cartGames}
            setCartGames={setCartGames}
            removeFromCart={removeFromCart}
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
