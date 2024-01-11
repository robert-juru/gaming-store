import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "./Api";
import GameStore from "./GameStore";
import ShoppingCartPage from "./ShoppingCartPage";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const useMultiplePagesQuery = (endpoint, pageSize, limit) => {
    return useQuery({
      queryKey: [endpoint],
      queryFn: async () => {
        const allResults = [];
        for (let page = 1; page <= limit; page++) {
          const results = await fetchData(endpoint, page, pageSize);
          allResults.push(...results);
        }
        return allResults;
      },
    });
  };

  const gamesQuery = useMultiplePagesQuery("games", 40, 5);
  const [cartGames, setCartGames] = useState([]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <GameStore
            gamesQuery={gamesQuery}
            cartGames={cartGames}
            setCartGames={setCartGames}
          />
        }
      />
      <Route
        path="/shopping-cart"
        element={
          <ShoppingCartPage
            fetchedGames={gamesQuery.data}
            cartGames={cartGames}
            setCartGames={setCartGames}
          />
        }
      />
    </Routes>
  );
};

export default App;
