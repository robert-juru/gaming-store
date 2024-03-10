import Header from "../../components/Header";
import { Link } from "react-router-dom";
import { GamePagePhotoSlider } from "../HomePage/ImageSlider";
import PlatformIcons from "../StorePage/PlatformIcons";
import ReactPlayer from "react-player";
import GameReviews from "../GamePage/GameReviews";
import { useQuery } from "@tanstack/react-query";
import { fetchGamePageData } from "../../api/Api";
import { format, parseISO } from "date-fns";
import DOMPurify from "dompurify";
import LoadingPage from "../../components/LoadingPage";
import ErrorPage from "../../components/ErrorPage";
import { generatePrice } from "../../components/PriceGenerator";

const GamePage = ({
  cartGames,
  removeFromCart,
  fetchedGames,
  gameId,
  isInCart,
  handleCart,
  activeFilter,
}) => {
  const gamePageQuery = useQuery({
    queryKey: ["gamePage", gameId],
    queryFn: () => fetchGamePageData(gameId),
  });
  if (gamePageQuery.isLoading)
    return (
      <LoadingPage
        removeFromCart={removeFromCart}
        cartGames={cartGames}
        fetchedGames={fetchedGames}
      />
    );
  if (gamePageQuery.isError)
    return (
      <ErrorPage
        fetchedGames={storeGamesQuery.data}
        removeFromCart={removeFromCart}
        cartGames={cartGames}
      />
    );

  let gamePageData = gamePageQuery.data;
  let releaseDate;
  gamePageData.details.released
    ? (releaseDate = format(
        parseISO(gamePageData.details.released),
        "dd MMMM yyyy",
      ))
    : (releaseDate = "TBD");
  let metascore = gamePageData.details.metacritic;
  let gameDescription = gamePageData.details.description;
  const sanitizedGameDescription = DOMPurify.sanitize(gameDescription);
  const images = gamePageData.screenshots.results.map(
    (screenshot) => screenshot.image || "/no-image-available.jpg",
  );
  if (images.length === 0) {
    images.push("/no-image-available.jpg");
  }
  const pcPlatform = gamePageData.details.platforms.find(
    (platformObj) => platformObj.platform.name === "PC",
  );
  const createRequirementsList = (requirements) =>
    requirements &&
    requirements
      .split("\n")
      .map((requirement, index) => <p key={index}>{requirement}</p>);

  let minRequirements;
  let recommendedRequirements;

  if (pcPlatform) {
    minRequirements = createRequirementsList(pcPlatform.requirements.minimum);
    recommendedRequirements = createRequirementsList(
      pcPlatform.requirements.recommended,
    );
  }

  const price = generatePrice(
    new Date(gamePageData.details.released).getFullYear(),
    gamePageData.details.ratings_count,
    gamePageData.details.rating,
  );

  return (
    <div className="p-4 pb-0 md:px-16">
      <Header
        cartGames={cartGames}
        removeFromCart={removeFromCart}
        fetchedGames={fetchedGames}
      />
      <hr className="border-slate-800  pb-4  font-bold" />

      <div className="px-4 py-8 text-sm text-gray-300 md:px-8 md:text-base lg:px-16">
        <div>
          <span>
            <Link className="hover:text-white" to="/store">
              {activeFilter.length < 30 ? activeFilter : "Store"}
            </Link>
            <span> &gt;</span>
            <Link className="hover:text-white" to={`/game/${gameId}`}>
              {" "}
              {gamePageData.details.name || ""}
            </Link>
          </span>
          <h1 className="pb-8 pt-2 text-2xl font-bold sm:text-3xl md:text-4xl">
            {gamePageData.details.name || ""}
          </h1>
        </div>
        <div className="mb-16 gap-16 xl:grid xl:grid-cols-[minmax(0,2.5fr)_minmax(0,1fr)]">
          <section className="">
            <GamePagePhotoSlider
              images={images}
              name={gamePageData.details.name}
            />
          </section>
          <section className="flex flex-col justify-between">
            <div>
              {gamePageData.details.background_image && (
                <img
                  className="hidden rounded-md pb-4 xl:block"
                  src={gamePageData.details.background_image}
                  alt="GTA V icon"
                ></img>
              )}
              <div>
                <p>
                  <span className="tracking-wide ">TITLE: </span>{" "}
                  <span className="font-bold text-white">
                    {gamePageData.details.name}
                  </span>
                </p>
                {gamePageData.details.genres.length > 0 && (
                  <p>
                    <span className="tracking-wide ">GENRE: </span>{" "}
                    <span className="font-bold text-white">
                      {gamePageData.details.genres
                        .map((genre) => genre.name)
                        .join(", ")}
                    </span>
                  </p>
                )}
                {releaseDate && (
                  <p>
                    <span className="tracking-wide ">RELEASE DATE: </span>
                    <span className="font-bold text-white">{releaseDate}</span>
                  </p>
                )}
                <p>
                  <span className="tracking-wide">DEVELOPER: </span>
                  <span className="font-bold text-white">
                    {gamePageData.details.developers &&
                      gamePageData.details.developers
                        .map((developer) => developer.name)
                        .join(", ")}
                  </span>
                </p>
                {gamePageData.details.publishers.length > 0 && (
                  <p>
                    <span className="tracking-wide">PUBLISHER: </span>
                    <span className="font-bold text-white">
                      {gamePageData.details.publishers
                        .map((publisher) => publisher.name)
                        .join(", ")}
                    </span>
                  </p>
                )}
                {gamePageData.details.website && (
                  <p>
                    <span className="tracking-wide">WEBSITE: </span>
                    <a
                      href={gamePageData.details.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-white"
                    >
                      {gamePageData.details.website}
                    </a>
                  </p>
                )}
                <p className="flex items-center gap-2 py-2">
                  <span className="tracking-wide">PLATFORMS: </span>
                  <PlatformIcons
                    platforms={gamePageData.details.parent_platforms}
                  />
                </p>
              </div>
            </div>
            {metascore && (
              <span className="my-8 flex items-center justify-center gap-4 rounded-md bg-black">
                <span
                  className={` ${
                    metascore < 60
                      ? "bg-red-500"
                      : metascore < 80
                        ? "bg-yellow-500"
                        : "bg-green-500"
                  }  flex h-full items-center p-2 text-3xl font-bold text-white`}
                >
                  {metascore}
                </span>
                <div className="flex flex-col items-center justify-center">
                  <img
                    className="h-14 w-64"
                    src="/game-icons/metacritic-logo.png"
                  ></img>
                  <a
                    href={gamePageData.details.metacritic_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="-mt-4 text-sm hover:text-white hover:underline"
                  >
                    Read Critic Reviews
                  </a>
                </div>
              </span>
            )}
            <span className="flex gap-4">
              <span className="p-2 text-center text-3xl font-bold text-white md:text-4xl">
                ${price}
              </span>
              <button
                onClick={handleCart}
                disabled={isInCart(gameId)}
                className={`${
                  isInCart(gameId) ? "bg-blue-800" : ""
                } w-full self-center rounded-md bg-blue-500 p-4 text-center text-base text-white hover:bg-blue-800  md:text-lg`}
              >
                {isInCart(gameId) ? "In Cart" : "Add to cart"}
              </button>
            </span>
          </section>
        </div>
        <section className="mb-8 lg:px-24 xl:px-48">
          <h3 className="text-lg font-bold tracking-wide md:text-xl">
            ABOUT THIS GAME{" "}
          </h3>
          <hr className="my-2 border-slate-800" />
          <div dangerouslySetInnerHTML={{ __html: sanitizedGameDescription }} />
        </section>
        {gamePageData.movies.results[0] && (
          <div className="mb-8 lg:px-24 xl:px-48">
            <ReactPlayer
              controls={true}
              width="100%"
              height="100%"
              light={
                <img
                  src={gamePageData.movies.results[0].preview}
                  width="100%"
                  height="100%"
                />
              }
              url={
                gamePageData.movies.results[0].data.max ||
                gamePageData.movies.results[0].data.max480
              }
              alt="GTA V video presentation"
            ></ReactPlayer>
          </div>
        )}
        <section className="lg:px-24 xl:px-48">
          <GameReviews
            reviews={gamePageData.details.ratings}
            rating={gamePageData.details.rating}
            reviewsCount={gamePageData.details.ratings_count}
          />
        </section>
        {minRequirements && (
          <section className="lg:px-24 xl:px-48">
            <h3 className="mt-4 text-lg font-bold tracking-wide md:text-xl">
              SYSTEM REQUIREMENTS
            </h3>
            <hr className="my-2 border-slate-800" />
            <div
              className={`grid ${
                recommendedRequirements && "md:grid-cols-2"
              } gap-4`}
            >
              <div>{minRequirements}</div>
              {recommendedRequirements && <div>{recommendedRequirements}</div>}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default GamePage;
