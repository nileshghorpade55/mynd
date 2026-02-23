import { useState, useEffect } from "react";
import "./ImageSlider.css";
import slide1 from "../assets/image/slide1.jpg";
import slide2 from "../assets/image/slide2.jpg";
import slide3 from "../assets/image/slide3.jpg";
import slide4 from "../assets/image/slide4.jpg";

function ImageSlider() {
  return (
    <div id="laundryCarousel" className="carousel slide" data-bs-ride="carousel">
      
      {/* Indicators */}
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#laundryCarousel" data-bs-slide-to="0" className="active"></button>
        <button type="button" data-bs-target="#laundryCarousel" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#laundryCarousel" data-bs-slide-to="2"></button>
         <button type="button" data-bs-target="#laundryCarousel" data-bs-slide-to="3"></button>
      </div>

      {/* Slides */}
      <div className="carousel-inner">

        <div className="carousel-item active">
          <img src={slide1} className="d-block w-100" alt="Slide 1" />
        
        </div>

        <div className="carousel-item">
          <img src={slide2} className="d-block w-100" alt="Slide 2" />
          
        </div>

        <div className="carousel-item">
          <img src={slide3} className="d-block w-100" alt="Slide 3" />
          
        </div>

    <div className="carousel-item">
              <img src={slide4} className="d-block w-100" alt="Slide 4" />
              
            </div>
      </div>

      {/* Controls */}
      <button className="carousel-control-prev" type="button" data-bs-target="#laundryCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </button>

      <button className="carousel-control-next" type="button" data-bs-target="#laundryCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
      </button>

    </div>
  );
}

export default ImageSlider;