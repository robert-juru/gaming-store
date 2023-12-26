import { useQuery } from "@tanstack/react-query";
import { fetchData } from "./Api";
import GameCard from "./GameCard";
import Header from "./Header";
import GameFiltersSidebar from "./GameFiltersSidebar";
import GameSortingSection from "./GameSortingSection";

export default function App() {
  const gamesQuery = useQuery({
    queryKey: ["games"],
    queryFn: () => fetchData("games"),
  });

  console.log(gamesQuery.data);
  if (gamesQuery.isLoading) return <h1>Loading....</h1>;
  if (gamesQuery.isError) return <h1>Error loading data!!!</h1>;

  return (
    <div className="m-0 grid grid-cols-1 gap-4 p-4 md:grid-cols-[200px_1fr]">
      <Header />
      <GameFiltersSidebar />
      <div className="grid-row-[50px] grid gap-8">
        <GameSortingSection />
        <main className=" grid grid-cols-[repeat(auto-fit,minmax(375px,1fr))] gap-x-8 gap-y-6">
          {gamesQuery.data.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </main>
      </div>
    </div>
  );
}
