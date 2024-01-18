import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = ({images, name}) => {
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
