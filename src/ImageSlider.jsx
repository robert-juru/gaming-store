import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = ({images, name}) => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  const imagess = [
    {
      type: "image",
      url: "https://media.rawg.io/media/screenshots/a7c/a7c43871a54bed6573a6a429451564ef.jpg",
    },
    {
      type: "image",
      url: "https://media.rawg.io/media/screenshots/cf4/cf4367daf6a1e33684bf19adb02d16d6.jpg",
    },
    {
      type: "image",
      url: "https://media.rawg.io/media/screenshots/f95/f9518b1d99210c0cae21fc09e95b4e31.jpg",
    },
    {
      type: "image",
      url: "https://media.rawg.io/media/screenshots/a5c/a5c95ea539c87d5f538763e16e18fb99.jpg",
    },
  ];


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
      <Slider asNavFor={nav2} autoplay={true} autoplaySpeed={7000} ref={(slider1) => setNav1(slider1)}>
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

export default ImageSlider;
