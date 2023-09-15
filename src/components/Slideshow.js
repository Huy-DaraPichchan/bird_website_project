import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../style/Slideshow.css";
import { dummyData } from "../dummyData";
import Rating from "./Rating";

function Slideshow() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slides = dummyData.slice(0, 5);

  return (
    <div className='slider-container bg-gray-100 px-6 py-8'>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className='slide-content bg-white p-2 rounded-lg shadow-md'
          >
            <div className='slide-image'>
              <img
                src={slide.image}
                alt={slide.name}
                className='max-w-full h-auto'
              />
            </div>
            <div className='slide-info p-4'>
              <h2 className='text-3xl font-semibold mb-2'>{slide.name}</h2>
              <div className='w-full flex justify-center pt-3 pb-6'>
                <Rating review={slide.review} />
              </div>
              <div className='w-full flex flex-col items-center justify-center '>
                <p className='w-3/4 text-base text-gray-600'>
                  {slide.description}
                </p>
              </div>
              <a
                href={slide.website}
                className='mt-4 inline-block bg-blackCustom text-white py-2 px-4 rounded-full text-lg font-bold hover:opacity-75 transition-opacity ease-in'
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Slideshow;
