import React from "react";
import Search from "./search";

const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://plus.unsplash.com/premium_photo-1676550901098-ef91a54010af?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="">
          <div>
            <h1 className="mb-5 text-5xl font-bold">
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
