import { useQuery } from "@tanstack/react-query";
import { fetchData } from "./Api";
import GameCard from "./GameCard";

export default function App() {
  const gamesQuery = useQuery({
    queryKey: ["games"],
    queryFn: () => fetchData("games"),
  });

  console.log(gamesQuery.data);
  if (gamesQuery.isLoading) return <h1>Loading....</h1>;
  if (gamesQuery.isError) return <h1>Error loading data!!!</h1>;

  return (
    <div>
      <header></header>
      <aside>
        <nav></nav>
      </aside>
      <main>
        <div className="flex flex-wrap justify-around gap-8">
          {gamesQuery.data.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </main>
    </div>
  );
}
