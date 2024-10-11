"use client";
import { useCallback, useEffect, useState } from "react";

export const WhyUsSlider = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const sliderImages = [
    "https://travosy.vercel.app/static/media/1.f66fa632eaccba2c9d8f.jpg",
    "https://travosy.vercel.app/static/media/3.86227d75d7bec8381222.jpg",
    "https://envato.bdevs.net/tourigo/wp-content/uploads/2024/04/blog-image-2.png",
  ];

  const prevSlider = () => {
    setCurrentSlider((currentSlider) =>
      currentSlider === 0 ? sliderImages.length - 1 : currentSlider - 1
    );
  };

  const nextSlider = useCallback(() => {
    setCurrentSlider((currentSlider) =>
      currentSlider === sliderImages.length - 1 ? 0 : currentSlider + 1
    );
  }, [sliderImages.length]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlider();
    }, 3000);
    return () => clearInterval(intervalId);
  }, [nextSlider, currentSlider]);

  return (
    <div className="flex items-center justify-center mx-auto w-full max-w-md lg:max-w-lg space-x-4">
      {/* Previous Button */}
      <button onClick={prevSlider} className="h-8 w-8 lg:h-10 lg:w-10">
        <svg
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
        >
          <path
            fill="rgb(220, 128, 82)"
            d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
          ></path>
        </svg>
      </button>

      {/* Slider Images */}
      <div className="w-3/4 lg:w-2/3 max-w-[500px] overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentSlider * 100}%)` }}
        >
          {sliderImages.map((slide, inx) => (
            <img
              key={inx}
              src={slide}
              className="w-full rounded-lg object-cover"
              alt={`Slider - ${inx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Next Button */}
      <button onClick={nextSlider} className="h-8 w-8 lg:h-10 lg:w-10">
        <svg
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
          transform="rotate(180)"
        >
          <path
            fill="rgb(220, 128, 82)"
            d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
          ></path>
        </svg>
      </button>
    </div>
  );
};
