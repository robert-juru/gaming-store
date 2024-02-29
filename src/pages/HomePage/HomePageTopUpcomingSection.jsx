import GameCard from "../../components/GameCard";
import { generatePrice } from "../../components/PriceGenerator";

const HomePageTopUpcomingSection = ({
  topUpcoming,
  isInCart,
  handleCart,
  cartGames,
}) => {
  const topUpcomingWithPrices = topUpcoming.map((game) => {
    const price = generatePrice(
      new Date(game.released).getFullYear(),
      game.ratings_count,
      game.rating,
    );
    return { ...game, price };
  });
  return (
    <section className="md:px-18 px-8 pt-4 sm:pt-8 md:pt-8 lg:pt-16 sm:px-12 lg:px-24 xl:px-48">
      <h2 className="mb-4 text-3xl text-white">Top Upcoming</h2>
      <div className="grid grid-cols-1">
        {topUpcomingWithPrices.slice(0, 1).map((game) => (
          <div className="p-4" key={game.id}>
            <GameCard
              cartGames={cartGames}
              game={game}
              handleCart={() => handleCart(game)}
              isInCart={isInCart}
              cardHeight={"md:h-96"}
              overlayHeight={"h-[110px]"}
              hoverScale={"hover:scale-105"}
            />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 ">
        {topUpcomingWithPrices.slice(1, 3).map((game) => (
          <div className="p-4" key={game.id}>
            <GameCard
              cartGames={cartGames}
              game={game}
              handleCart={() => handleCart(game)}
              isInCart={isInCart}
              cardHeight={"md:h-80"}
              overlayHeight={"h-[110px]"}
              hoverScale={"hover:scale-105"}
            />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
        {topUpcomingWithPrices.slice(3, 6).map((game) => (
          <div className="p-4" key={game.id}>
            <GameCard
              cartGames={cartGames}
              game={game}
              handleCart={() => handleCart(game)}
              isInCart={isInCart}
              cardHeight={"md:h-64"}
              overlayHeight={"h-[110px]"}
              hoverScale={"hover:scale-105"}
            />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
        {topUpcomingWithPrices.slice(6, 10).map((game) => (
          <div className="p-4" key={game.id}>
            <GameCard
              cartGames={cartGames}
              game={game}
              handleCart={() => handleCart(game)}
              isInCart={isInCart}
              cardHeight={"md:h-64"}
              overlayHeight={"h-[110px]"}
              hoverScale={"hover:scale-105"}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
export default HomePageTopUpcomingSection;
