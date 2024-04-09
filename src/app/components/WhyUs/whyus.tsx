import React from "react";
import { WhyUsSlider } from "../ui/Carousel/whyUsSlider";

const WhyUs = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1622139976830-3c0cbd1dcb02?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="  text-neutral-content">
        <div className="flex justify-between">
          <WhyUsSlider />
          <div className="flex flex-col space-y-8">
            <p className="text-2xl font-bold font-title">Adventure Travel</p>
            <p className="text-5xl font-bold">
              Embrace the Thrill of the Unknown
            </p>
            <p className="text-lg text-wrap">
              Are you tired of the typical tourist destinations and looking to
              step out of your comfort zone? Adventure travel may be the perfect
              solution for you! Here are four reasons why you should book an
              adventure travel experience :
            </p>
            <p className="text-lg">Connect with nature</p>
            <div className="border-b border-orange-400 my-2"></div>
            <p className="text-lg">Experience other cultures</p>
            <div className="border-b border-orange-400 my-2"></div>
            <p className="text-lg">Create unforgettable memories</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
