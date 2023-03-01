import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="slide" id="slide">
      <Slider {...settings}>
        <div className="slider-item">
          <img src="assets/julia2.png" alt="Slider Item" />
        </div>
        <div className="slider-item">
          <img src="assets/julia3.png" alt="Slider Item" />
        </div>
        <div className="slider-item">
          <img src="assets/julia4.png" alt="Slider Item" />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComponent;
