import React from "react";
import Search from "./search";

const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://creativelayers.net/themes/gotrip-html/img/masthead/1/bg.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="text-center text-neutral-content">
        <div className="">
          <div>
            <h1 className="mb-5 text-5xl font-semibold">
              Explore the World with Traverse
            </h1>
            <p className="mb-5">
              Find the best deals on hotels and plan your dream vacation.
            </p>
          </div>
          <div className="w-full">
            <Search />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
