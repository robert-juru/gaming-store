import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GameCard from "./GameCard";

export const GamePagePhotoSlider = ({ images, name }) => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  let gameMediaDisplay = images.map((image, index) => {
    return (
      <div key={index} className="p-2">
        <img
          className=" w-full cursor-pointer rounded-md"
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
        slidesToShow={3}
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
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  console.log(mainGames);

  return (
    <div>
      <Slider {...settings}>
        {mainGames.map((game) => (
          <GameCard
            cartGames={cartGames}
            game={game}
            key={game.id}
            handleCart={() => handleCart(game)}
            isInCart={isInCart}
            cardHeight={96}
          />
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
  return (
    <>
      <h2 className="mb-4 text-3xl text-white"> Top Rated By Gamers </h2>
      <Slider {...settings}>
        {topRatedByCritics.map((game) => (
          <div key={game.id} className="p-4">
            <GameCard
              cartGames={cartGames}
              game={game}
              handleCart={() => handleCart(game)}
              isInCart={isInCart}
              cardHeight={96}
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
  return (
    <div>
      <h2 className="mb-4 text-3xl text-white">New Releases</h2>
      <Slider {...settings}>
        {newReleases.map((game) => (
          <div key={game.id} className="p-4">
            <GameCard
              cartGames={cartGames}
              game={game}
              handleCart={() => handleCart(game)}
              isInCart={isInCart}
              cardHeight={48}
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
  return (
    <div>
      <h2 className="mb-4 text-3xl text-white"> Top Sellers </h2>
      <Slider {...settings}>
        {topSellers.map((game) => (
          <div key={game.id} className="p-4">
            <GameCard
              cartGames={cartGames}
              game={game}
              handleCart={() => handleCart(game)}
              isInCart={isInCart}
              cardHeight={64}
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
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    responsive: [
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

  return (
    <div>
      <h2 className="mb-4 text-3xl text-white">Recently Updated</h2>
      <Slider {...settings}>
        {recentlyUpdated.map((game) => (
          <div key={game.id} className="p-4">
            <GameCard
              cartGames={cartGames}
              game={game}
              handleCart={() => handleCart(game)}
              isInCart={isInCart}
              cardHeight={96}
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
  return (
    <div>
      <h2 className="mb-4 text-3xl text-white">Top Rated by Gamers</h2>
      <Slider {...settings}>
        {topRatedByGamers
          .filter((game) => game.ratings_count > 100)
          .map((game) => (
            <GameCard
              cartGames={cartGames}
              game={game}
              key={game.id}
              handleCart={() => handleCart(game)}
              isInCart={isInCart}
              cardHeight={64}
            />
          ))}
      </Slider>
    </div>
  );
};
