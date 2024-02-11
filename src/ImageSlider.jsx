import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GameCard from "./GameCard";
import { generatePrice } from "./PriceGenerator";

export const GamePagePhotoSlider = ({ images, name }) => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  let gameMediaDisplay = images.map((image, index) => {
    return (
      <div key={index} className="p-2">
        <img
          className="h-auto max-h-[480px] w-full cursor-pointer rounded-md"
          src={image}
          alt={`${name} image ${index + 1}`}
        />
      </div>
    );
  });

  return (
    <>
      <Slider
        asNavFor={nav2}
        autoplay={true}
        autoplaySpeed={7000}
        ref={(slider1) => setNav1(slider1)}
      >
        {gameMediaDisplay}
      </Slider>
      <Slider
        asNavFor={nav1}
        ref={(slider2) => setNav2(slider2)}
        slidesToShow={4}
        swipeToSlide={true}
        focusOnSelect={true}
      >
        {gameMediaDisplay}
      </Slider>
    </>
  );
};

export const HomePageMainSlider = ({
  mainGames,
  cartGames,
  handleCart,
  isInCart,
}) => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const mainGamesWithPrices = mainGames.map((game) => {
    const price = generatePrice(
      new Date(game.released).getFullYear(),
      game.ratings_count,
      game.rating,
    );
    return { ...game, price };
  });

  return (
    <div>
      <Slider {...settings}>
        {mainGamesWithPrices.map((game) => (
          <div className="" key={game.id}>
            <GameCard
              cartGames={cartGames}
              game={game}
              handleCart={() => handleCart(game)}
              isInCart={isInCart}
              cardHeight={"h-96"}
              overlayHeight={"h-[110px]"}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export const HomePageTopRatedByCriticsSlider = ({
  topRatedByCritics,
  cartGames,
  handleCart,
  isInCart,
}) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const topRatedByCriticsWithPrices = topRatedByCritics.map((game) => {
    const price = generatePrice(
      new Date(game.released).getFullYear(),
      game.ratings_count,
      game.rating,
    );
    return { ...game, price };
  });
  return (
    <>
      <h2 className="mb-4 text-3xl text-white"> Top Rated By Critics </h2>
      <Slider {...settings}>
        {topRatedByCriticsWithPrices.slice(0, 16).map((game) => (
          <div key={game.id} className="p-4">
            <GameCard
              cartGames={cartGames}
              game={game}
              handleCart={() => handleCart(game)}
              isInCart={isInCart}
              cardHeight={"h-72"}
              overlayHeight={"h-[110px]"}
            />
          </div>
        ))}
      </Slider>
    </>
  );
};

export const HomePageNewReleasesSlider = ({
  newReleases,
  cartGames,
  handleCart,
  isInCart,
}) => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
  };
  const newReleasesWithPrices = newReleases.map((game) => {
    const price = generatePrice(
      new Date(game.released).getFullYear(),
      game.ratings_count,
      game.rating,
    );
    return { ...game, price };
  });
  return (
    <div>
      <h2 className="mb-4 text-3xl text-white">New Releases</h2>
      <Slider {...settings}>
        {newReleasesWithPrices.slice(0, 8).map((game) => (
          <div key={game.id} className="p-4">
            <GameCard
              cartGames={cartGames}
              game={game}
              handleCart={() => handleCart(game)}
              isInCart={isInCart}
              cardHeight={"h-48"}
              overlayHeight={"h-[110px]"}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
export const HomePageTopSellersSlider = ({
  topSellers,
  cartGames,
  handleCart,
  isInCart,
}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {},
    ],
  };
  const topSellersWithPrices = topSellers.map((game) => {
    const price = generatePrice(
      new Date(game.released).getFullYear(),
      game.ratings_count,
      game.rating,
    );
    return { ...game, price };
  });
  return (
    <div>
      <h2 className="mb-4 text-3xl text-white"> Top Sellers </h2>
      <Slider {...settings}>
        {topSellersWithPrices.map((game) => (
          <div key={game.id} className="p-4">
            <GameCard
              cartGames={cartGames}
              game={game}
              handleCart={() => handleCart(game)}
              isInCart={isInCart}
              cardHeight={"h-64"}
              overlayHeight={"h-[110px]"}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export const HomePageRecentlyUpdatedSlider = ({
  recentlyUpdated,
  cartGames,
  handleCart,
  isInCart,
}) => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 500,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const recentlyUpdatedWithPrices = recentlyUpdated.map((game) => {
    const price = generatePrice(
      new Date(game.released).getFullYear(),
      game.ratings_count,
      game.rating,
    );
    return { ...game, price };
  });
  return (
    <div>
      <h2 className="mb-4 text-3xl text-white">Recently Updated</h2>
      <Slider {...settings}>
        {recentlyUpdatedWithPrices.map((game) => (
          <div key={game.id} className="p-4">
            <GameCard
              cartGames={cartGames}
              game={game}
              handleCart={() => handleCart(game)}
              isInCart={isInCart}
              cardHeight={"h-64"}
              overlayHeight={"h-[110px]"}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
export const HomePageTopRatedByGamersSlider = ({
  topRatedByGamers,
  cartGames,
  handleCart,
  isInCart,
}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const topRatedByGamersWithPrices = topRatedByGamers.map((game) => {
    const price = generatePrice(
      new Date(game.released).getFullYear(),
      game.ratings_count,
      game.rating,
    );
    return { ...game, price };
  });
  return (
    <div>
      <h2 className="mb-4 text-3xl text-white">Top Rated by Gamers</h2>
      <Slider {...settings}>
        {topRatedByGamersWithPrices
          .filter((game) => game.ratings_count > 100)
          .map((game) => (
            <div key={game.id} className="p-4">
              <GameCard
                cartGames={cartGames}
                game={game}
                key={game.id}
                handleCart={() => handleCart(game)}
                isInCart={isInCart}
                cardHeight={"h-64"}
                overlayHeight={"h-[110px]"}
              />
            </div>
          ))}
      </Slider>
    </div>
  );
};
