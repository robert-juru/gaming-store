const GameCard = ({ game }) => {
  return (
    <div className="relative h-[236px] w-[420px] hover:scale-105">
      <img
        className="block h-full w-full rounded-lg border-2 border-solid border-black"
        src={game.background_image}
        alt={game.name + "background image"}
      />
      <div className="absolute h-1/3 w-full -translate-y-full bg-gradient-to-r from-gray-700 via-gray-900 to-black  opacity-95"></div>
      <div className="absolute mt-[2px] w-full -translate-y-full p-2 text-white">
        <span className="flex items-center justify-between ">
          <h1 className="inline text-lg font-bold">{game.name}</h1>
          <span className=" inline-block h-8 w-8 rounded-full border-2 border-solid border-green-600 text-center">
            {game.metacritic}
          </span>
        </span>
        <p className="text-xs">
          {game.genres.map((genre) => genre.name).join(", ")}
        </p>
        <p className="text-sm font-bold">$25.99</p>
      </div>
    </div>
  );
};
export default GameCard;
