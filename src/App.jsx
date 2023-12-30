import { useQuery } from "@tanstack/react-query";
import { fetchData } from "./Api";
import GameCard from "./GameCard";
import Header from "./Header";
import GameFiltersSidebar from "./GameFiltersSidebar";
import GameSortingSection from "./GameSortingSection";
import { useState, useEffect } from "react";

export default function App() {
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
  const [displayedGames, setDisplayedGames] = useState([]);

  useEffect(() => {
    if (gamesQuery.isSuccess) {
      const limitedGames = gamesQuery.data.slice(0, 100); // maximum display of 100
      setDisplayedGames(limitedGames);
    }
  }, [gamesQuery.isSuccess, gamesQuery.data]);

  const handleCart = (gameId) => {
    if (!cartGames.includes(gameId)) {
      setCartGames([...cartGames, gameId]);
    }
    console.log(cartGames);
  };

  const filterGamesByGenre = (gameGenre) => {
    const filteredGames = gamesQuery.data.filter((game) =>
      game.genres.some((genre) => genre.name === gameGenre),
    );
    const limitedGames = filteredGames.slice(0, 50);
    setDisplayedGames(limitedGames);
  };

  console.log(gamesQuery.data);
  if (gamesQuery.isLoading) return <h1>Loading....</h1>;
  if (gamesQuery.isError) return <h1>Error loading data!!!</h1>;

  return (
    <div className="m-0 grid grid-cols-1 gap-4 p-4 md:grid-cols-[200px_1fr]">
      <Header
        cartGames={cartGames}
        setCartGames={setCartGames}
        fetchedGames={gamesQuery.data}
      />
      <GameFiltersSidebar
        filterGamesByGenre={(genre) => filterGamesByGenre(genre)}
      />
      <div className="grid-row-[50px] grid gap-8">
        <GameSortingSection />
        <main className=" grid grid-cols-[repeat(auto-fit,minmax(375px,1fr))] gap-x-8 gap-y-6">
          {displayedGames.map((game) => (
            <GameCard
              cartGames={cartGames}
              key={game.id}
              game={game}
              handleCart={() => handleCart(game)}
            />
          ))}
        </main>
      </div>
    </div>
  );
}
