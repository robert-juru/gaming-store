import Header from "./Header";
import { Link } from "react-router-dom";
import ImageSlider from "./ImageSlider";
import PlatformIcons from "./PlatformIcons";
import ReactPlayer from "react-player";
import GameReviews from "./GameReviews";
import { useQuery } from "@tanstack/react-query";
import { fetchGamePageData } from "./Api";
import { format, parseISO } from "date-fns";
import DOMPurify from "dompurify";

const GamePage = ({ cartGames, removeFromCart, fetchedGames }) => {
  let gameId = 3498;
  const gamePageQuery = useQuery({
    queryKey: ["gamePage"],
    queryFn: () => fetchGamePageData(gameId),
  });

  if (gamePageQuery.isLoading)
    return <h1 className="text-4xl text-white">Loading....</h1>;
  if (gamePageQuery.isError)
    return <h1 className="text-4xl text-white">Error loading data!!!</h1>;

  console.log(gamePageQuery.data);
  let gamePageData = gamePageQuery.data;
  let releaseDate = format(
    parseISO(gamePageData.details.released),
    "dd MMMM yyyy",
  );
  let metascore = gamePageData.details.metacritic;
  let gameDescription = gamePageData.details.description;
  const sanitizedGameDescription = DOMPurify.sanitize(gameDescription);
  const images = gamePageData.screenshots.results.map(
    (screenshot) => screenshot.image,
  );
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

  return (
    <div className="m-0 p-4">
      <Header
        cartGames={cartGames}
        removeFromCart={removeFromCart}
        fetchedGames={fetchedGames}
      />
      <div className="px-16 py-8 text-gray-300">
        <div>
          <span>
            <Link className="hover:text-white" to="/store">
              All Games{" "}
            </Link>
            <span>&gt;</span>
            <Link className="hover:text-white" to="/action">
              {" "}
              Action Games{" "}
            </Link>
            <span>&gt;</span>
            <Link className="hover:text-white" to="/game">
              {" "}
              {gamePageData.details.name}
            </Link>
          </span>
          <h1 className="pb-8 pt-2 text-4xl font-bold">
            {gamePageData.details.name}
          </h1>
        </div>
        <div className="mb-16 gap-16 lg:grid lg:grid-cols-[minmax(0,2.5fr)_minmax(0,1fr)]">
          <section className="">
            <ImageSlider images={images} name={gamePageData.details.name} />
          </section>
          <section className="flex flex-col justify-between">
            <div>
              {gamePageData.details.background_image && (
                <img
                  className="hidden rounded-md pb-4 lg:block"
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
              <span className="my-8 flex items-center gap-4 rounded-md bg-black">
                <span
                  className={`${metascore < 60 && "bg-red-500"} ${
                    metascore < 80 && "bg-yellow-500"
                  } flex h-full items-center bg-green-500 p-2 text-3xl font-bold text-white`}
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
                    className="-mt-4 text-sm hover:text-white hover:underline"
                  >
                    Read Critic Reviews
                  </a>
                </div>
              </span>
            )}
            <span className="flex gap-4">
              <span className="p-2 text-center text-4xl font-bold text-white">
                $35.99
              </span>
              <button className="w-full self-center rounded-md bg-blue-600  p-4 text-center text-lg font-bold text-white  hover:bg-blue-500">
                ADD TO CART
              </button>
            </span>
          </section>
        </div>
        <section className="mb-8 lg:px-24 xl:px-48">
          <h3 className="text-xl font-bold tracking-wide">ABOUT THIS GAME </h3>
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
        {gamePageData.details.ratings.length > 0 && (
          <section className="lg:px-24 xl:px-48">
            <GameReviews
              reviews={gamePageData.details.ratings}
              rating={gamePageData.details.rating}
              reviewsCount={gamePageData.details.ratings_count}
            />
          </section>
        )}
        {pcPlatform && (
          <section className="lg:px-24 xl:px-48">
            <h3 className="mt-4 text-xl font-bold tracking-wide">
              SYSTEM REQUIREMENTS
            </h3>
            <hr className="my-2 border-slate-800" />
            <div
              className={`grid ${
                recommendedRequirements && "grid-cols-2"
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
