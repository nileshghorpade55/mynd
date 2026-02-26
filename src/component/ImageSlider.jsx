import React from "react";
import Slider from "react-slick";
import slide1 from "../assets/image/slide1.png";
import slide2 from "../assets/image/slide2.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImageSlider.css";

export default function ImageSlider() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  const slides = [slide1, slide2];

  return (
    <Slider {...settings}>
      {slides.map((img, index) => (
        <div key={index}>
          <img src={img} alt="slide" className="slider-img" />
        </div>
      ))}
    </Slider>
  );
}