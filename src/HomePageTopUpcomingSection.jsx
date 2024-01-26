import GameCard from "./GameCard";

const HomePageTopUpcomingSection = ({
  topUpcoming,
  isInCart,
  handleCart,
  cartGames,
}) => {
  return (
    <section className="md:px-18 px-8 pt-16 sm:px-12 lg:px-24 xl:px-48">
      <h2 className="mb-4 text-3xl text-white">Top Upcoming</h2>

      <div className="grid grid-cols-1">
        {topUpcoming.slice(0, 1).map((game) => (
          <div className="p-4" key={game.id}>
            <GameCard
              cartGames={cartGames}
              game={game}
              handleCart={() => handleCart(game)}
              isInCart={isInCart}
              cardHeight={96}
            />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 ">
        {topUpcoming.slice(1, 3).map((game) => (
          <div className="p-4" key={game.id}>
            <GameCard
              cartGames={cartGames}
              game={game}
              handleCart={() => handleCart(game)}
              isInCart={isInCart}
              cardHeight={80}
            />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
        {topUpcoming.slice(3, 6).map((game) => (
          <div className="p-4" key={game.id}>
            <GameCard
              cartGames={cartGames}
              game={game}
              handleCart={() => handleCart(game)}
              isInCart={isInCart}
              cardHeight={64}
            />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
        {topUpcoming.slice(6, 10).map((game) => (
          <div className="p-4" key={game.id}>
            <GameCard
              cartGames={cartGames}
              game={game}
              handleCart={() => handleCart(game)}
              isInCart={isInCart}
              cardHeight={48}
            />
          </div>
        ))}
      </div>

      {/* <div className="grid grid-cols-1">
        <div className="justify-items m-4  h-64 items-center bg-blue-400 text-center text-5xl text-white">
          <h3>1</h3>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 ">
        <div className="justify-items m-4  h-64 items-center bg-blue-400 text-center text-5xl text-white">
          <h3>1</h3>
        </div>
        <div className="justify-items m-4  h-64 items-center bg-blue-400 text-center text-5xl text-white">
          <h3>2</h3>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
        <div className="justify-items m-4  h-64 items-center bg-blue-400 text-center text-5xl text-white">
          <h3>1</h3>
        </div>
        <div className="justify-items m-4  h-64 items-center bg-blue-400 text-center text-5xl text-white">
          <h3>2</h3>
        </div>
        <div className="justify-items m-4  h-64 items-center bg-blue-400 text-center text-5xl text-white">
          <h3>3</h3>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
        <div className="justify-items m-4  h-64 items-center bg-blue-400 text-center text-5xl text-white">
          <h3>1</h3>
        </div>
        <div className="justify-items m-4  h-64 items-center bg-blue-400 text-center text-5xl text-white">
          <h3>2</h3>
        </div>
        <div className="justify-items m-4  h-64 items-center bg-blue-400 text-center text-5xl text-white">
          <h3>3</h3>
        </div>
        <div className="justify-items m-4  h-64 items-center bg-blue-400 text-center text-5xl text-white">
          <h3>4</h3>
        </div>
      </div> */}
    </section>
  );
};
export default HomePageTopUpcomingSection;
