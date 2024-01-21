import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

export const HomePageMainSlider = () => {
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

  return (
    <div>
      <Slider {...settings}>
        <div className="justify-items flex h-96 items-center bg-blue-400 text-center text-5xl text-white">
          <h3>1</h3>
        </div>
        <div className="justify-items flex h-96 items-center bg-blue-400 text-center text-5xl text-white">
          <h3>2</h3>
        </div>
        <div className="justify-items flex h-96 items-center bg-blue-400 text-center text-5xl text-white">
          <h3>3</h3>
        </div>
        <div className="justify-items flex h-96 items-center bg-blue-400 text-center text-5xl text-white">
          <h3>4</h3>
        </div>
        <div className="justify-items flex h-96 items-center bg-blue-400 text-center text-5xl text-white">
          <h3>5</h3>
        </div>
        <div className="justify-items flex h-96 items-center bg-blue-400 text-center text-5xl text-white">
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
};

export const HomePageMostPlayedSlider = () => {
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
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <h2 className="mb-4 text-3xl text-white"> Most Played </h2>
      <Slider {...settings}>
        <div className="justify-items m-4 flex h-48 items-center bg-blue-400 text-center text-5xl text-white">
          <h3>1</h3>
        </div>
        <div className="justify-items m-4 flex h-48 items-center bg-blue-400 text-center text-5xl text-white">
          <h3>2</h3>
        </div>
        <div className="justify-items m-4 flex h-48 items-center bg-blue-400 text-center text-5xl text-white">
          <h3>3</h3>
        </div>
        <div className="justify-items m-4 flex h-48 items-center bg-blue-400 text-center text-5xl text-white">
          <h3>4</h3>
        </div>
        <div className="justify-items m-4 flex h-48 items-center bg-blue-400 text-center text-5xl text-white">
          <h3>5</h3>
        </div>
        <div className="justify-items m-4 flex h-48 items-center bg-blue-400 text-center text-5xl text-white">
          <h3>6</h3>
        </div>
        <div className="justify-items m-4 flex h-48 items-center bg-blue-400 text-center text-5xl text-white">
          <h3>7</h3>
        </div>
        <div className="justify-items m-4 flex h-48 items-center bg-blue-400 text-center text-5xl text-white">
          <h3>8</h3>
        </div>
      </Slider>
    </>
  );
};

export const HomePageNewReleasesSlider = () => {
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
        <div className="justify-items m-4 flex h-32 items-center bg-blue-400 text-center text-5xl text-white">
          <h3>1</h3>
        </div>
        <div className="justify-items m-4 flex h-32 items-center bg-blue-400 text-center text-5xl text-white">
          <h3>2</h3>
        </div>
        <div className="justify-items m-4 flex h-32 items-center bg-blue-400 text-center text-5xl text-white">
          <h3>3</h3>
        </div>
        <div className="justify-items m-4 flex h-32 items-center bg-blue-400 text-center text-5xl text-white">
          <h3>4</h3>
        </div>
        <div className="justify-items m-4 flex h-32 items-center bg-blue-400 text-center text-5xl text-white">
          <h3>5</h3>
        </div>
        <div className="justify-items m-4 flex h-32 items-center bg-blue-400 text-center text-5xl text-white">
          <h3>6</h3>
        </div>
        <div className="justify-items m-4 flex h-32 items-center bg-blue-400 text-center text-5xl text-white">
          <h3>7</h3>
        </div>
        <div className="justify-items m-4 flex h-32 items-center bg-blue-400 text-center text-5xl text-white">
          <h3>8</h3>
        </div>
      </Slider>
    </div>
  );
};
export const HomePageTopSellersSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    // fade:true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    lazyLoad: false,
  };
  return (
    <div>
      <h2 className="mb-4 text-3xl text-white"> Top Sellers </h2>
      <Slider {...settings}>
        <div className="justify-items m-4 flex h-96 items-center bg-blue-400 text-center text-5xl text-white">
          <h3>1</h3>
        </div>
        <div className="justify-items m-4 flex h-96 items-center bg-blue-400 text-center text-5xl text-white">
          <h3>2</h3>
        </div>
        <div className="box-border flex h-96 flex-1 m-4 flex-col">
          <div className="justify-items flex h-48 items-center bg-blue-400 text-center text-5xl text-white">
            <h3>3</h3>
          </div>
          <div className="justify-items flex h-48 items-center bg-blue-400 text-center text-5xl text-white">
            <h3>4</h3>
          </div>
        </div>
        <div className="justify-items m-4 flex h-96 items-center bg-blue-400 text-center text-5xl text-white">
          <h3>5</h3>
        </div>
        <div className="justify-items m-4 flex h-96 items-center bg-blue-400 text-center text-5xl text-white">
          <h3>6</h3>
        </div>
        <div className="box-border flex h-96 flex-1 m-4 flex-col">
          <div className="justify-items flex h-48 items-center bg-blue-400 text-center text-5xl text-white">
            <h3>7</h3>
          </div>
          <div className="justify-items flex h-48 items-center bg-blue-400 text-center text-5xl text-white">
            <h3>8</h3>
          </div>
        </div>
      </Slider>
    </div>
  );
};
