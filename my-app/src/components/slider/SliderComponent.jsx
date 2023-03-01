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
          <img src="assets/julia2.jpeg" alt="Slider Item" />
        </div>
        <div className="slider-item">
          <img src="assets/julia3.jpeg" alt="Slider Item" />
        </div>
        <div className="slider-item">
          <img src="assets/julia4.jpeg" alt="Slider Item" />
        </div>
        <div className="slider-item">
          <img src="assets/julia5.jpeg" alt="Slider Item" />
        </div>
        <div className="slider-item">
          <img src="assets/julia6.jpeg" alt="Slider Item" />
        </div>
        <div className="slider-item">
          <img src="assets/julia7.jpeg" alt="Slider Item" />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComponent;
