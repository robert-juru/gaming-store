import Header from "./Header";
import { Link } from "react-router-dom";
import ImageSlider from "./ImageSlider";
import {
  FaWindows,
  FaApple,
  FaXbox,
  FaPlaystation,
  FaSteam,
  FaItchIo,
  FaGooglePlay,
} from "react-icons/fa";
import { StarRatingGame } from "./StarRating";
import ReactPlayer from "react-player";
import GameReviews from "./GameReviews";

const GamePage = ({ cartGames, removeFromCart, fetchedGames }) => {
  let description = `<p>Rockstar Games went bigger, since their previous installment of the series. You get the complicated and realistic world-building from Liberty City of GTA4 in the setting of lively and diverse Los Santos, 
        from an old fan favorite GTA San Andreas. 561 different vehicles (including every transport you can operate) and the amount is rising with every update. <br />\nSimultaneous storytelling from three unique perspectives: <br />\nFollow Michael, ex-criminal living his life of leisure away from the past, Franklin, a kid that seeks the better future, and Trevor, the exact past Michael is trying to run away from. <br />\nGTA Online will provide a lot of additional challenge even for the experienced players, coming fresh from the story mode. Now you will have other players around that can help you just as likely as ruin your mission. Every GTA mechanic up to date can be experienced by players through the unique customizable character, and community content paired with the leveling system tends to keep everyone busy and engaged.`;
  let minRequirements =
    "Minimum:\nOS: Windows 7/Vista/XP PC (32 or 64 bit)\nProcessor: Dual Core 2.0GHz or equivalent processor\nMemory: 2GB System RAM\nHard Disk Space: 6GB free HDD Space\nVideo Card: Direct X 9.0c compliant video card with 512 MB of RAM\nSound: DirectX compatible sound card\n";

  const minRequirementsArray = minRequirements.split("\n");
  let minRequirementsDisplay = minRequirementsArray.map((line, index) => (
    <p key={index}>{line}</p>
  ));
  let recommendedRequirements =
    "Recommended:\nProcessor: Quad-core Intel or AMD CPU\nMemory: 4GB System RAM\nVideo Card: DirectX 9.0c compatible NVIDIA or AMD ATI video card with 1GB of RAM (Nvidia GeForce GTX 260 or higher; ATI Radeon 4890 or higher)\n";
  const recommReqArr = recommendedRequirements.split("\n");
  let recommReqDisplay = recommReqArr.map((line, index) => (
    <p key={index}>{line}</p>
  ));
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
              GTA V
            </Link>
          </span>
          <h1 className="pb-8 pt-2 text-4xl font-bold">Grand Theft Auto V</h1>
        </div>
        <div className="mb-16 gap-16 lg:grid lg:grid-cols-[minmax(0,2.5fr)_minmax(0,1fr)]">
          <section className="">
            <ImageSlider />
          </section>
          <section className="flex flex-col justify-between">
            <div>
              <img
                className="hidden rounded-md pb-4 lg:block"
                src="https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg"
                alt="GTA V icon"
              ></img>
              <div>
                <p>
                  <span className="tracking-wide ">TITLE: </span>{" "}
                  <span className="font-bold text-white">
                    Grand Theft Auto V
                  </span>
                </p>
                <p>
                  <span className="tracking-wide ">GENRE: </span>{" "}
                  <span className="font-bold text-white">
                    Action, Adventure
                  </span>
                </p>
                <p>
                  <span className="tracking-wide ">RELEASE DATE: </span>{" "}
                  <span className="font-bold text-white">17 Sep. 2013</span>
                </p>
                <p>
                  <span className="tracking-wide">DEVELOPER: </span>
                  <span className="font-bold text-white">
                    Rockstar Games, Rockstar North
                  </span>
                </p>
                <p>
                  <span className="tracking-wide">PUBLISHER: </span>
                  <span className="font-bold text-white">Rockstar Games</span>
                </p>
                <p>
                  <span className="tracking-wide">WEBSITE: </span>
                  <a
                    href="http://www.rockstargames.com/V/"
                    className="font-bold text-white"
                  >
                    http://www.rockstargames.com/V/
                  </a>
                </p>
                <p className="flex items-center gap-2 py-2">
                  <span className="tracking-wide">PLATFORMS: </span>
                  <span className="flex size-9 items-center justify-center rounded-md bg-slate-950 transition duration-300 hover:bg-white  hover:text-black">
                    <FaWindows className="size-6" />
                  </span>
                  <span className="flex size-9 items-center justify-center rounded-md bg-slate-950 transition duration-300 hover:bg-white  hover:text-black">
                    <FaPlaystation className="size-6" />
                  </span>
                  <span className="flex size-9 items-center justify-center rounded-md bg-slate-950 transition duration-300 hover:bg-white  hover:text-black">
                    <FaXbox className="size-6" />
                  </span>
                </p>
              </div>
            </div>
            <span className="my-8 flex items-center gap-4 rounded-md bg-black">
              <span className="flex h-full items-center bg-green-500 p-2 text-3xl font-bold text-white">
                87
              </span>
              <div className="flex flex-col items-center justify-center">
                <img
                  className="h-14 w-64"
                  src="/game-icons/metacritic-logo.png"
                ></img>
                <a
                  href="https://www.metacritic.com/game/pc/grand-theft-auto-v"
                  className="-mt-4 text-sm hover:text-white hover:underline"
                >
                  Read Critic Reviews
                </a>
              </div>
            </span>
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
        <section className="xl:px-48 lg:px-24">
          <h3 className="text-xl font-bold tracking-wide">ABOUT THIS GAME </h3>
          <hr className="my-2 border-slate-800" />
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </section>
        <div className="my-8 xl:px-64 lg:px-24">
          <ReactPlayer
            controls={true}
            width="100%"
            height="100%"
            url="https://steamcdn-a.akamaihd.net/steam/apps/256693661/movie480.mp4"
            alt="GTA V video presentation"
          ></ReactPlayer>
        </div>
        <section className="xl:px-48 lg:px-24">
          <GameReviews/>
        </section>
        <section className="xl:px-48 lg:px-24">
          <h3 className="mt-4 text-xl font-bold tracking-wide">
            SYSTEM REQUIREMENTS
          </h3>
          <hr className="my-2 border-slate-800" />
          <div className="grid grid-cols-2 gap-4">
            <div>{minRequirementsDisplay}</div>
            <div>{recommReqDisplay}</div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default GamePage;
