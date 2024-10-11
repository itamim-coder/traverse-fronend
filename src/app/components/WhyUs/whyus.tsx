import React from "react";
import { WhyUsSlider } from "../ui/Carousel/whyUsSlider";
import Container from "../ui/Container";

const WhyUs = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("https://wpthemebooster.com/demo/themeforest/html/vacasky/images/main-slider/1.jpg")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <Container>
        <div className="text-neutral-content py-10">
          <div className="flex flex-col lg:flex-row justify-between space-y-8 lg:space-y-0 lg:space-x-12">
            {/* Slider Section */}
            <WhyUsSlider />

            {/* Text Section */}
            <div className="flex flex-col space-y-4 md:space-y-6">
              <p className="text-xl lg:text-2xl font-bold font-title">
                Adventure Travel
              </p>
              <p className="text-3xl lg:text-5xl font-bold">
                Embrace the Thrill of the Unknown
              </p>
              <p className="text-md lg:text-lg">
                Are you tired of the typical tourist destinations and looking to
                step out of your comfort zone? Adventure travel may be the
                perfect solution for you! Here are four reasons why you should
                book an adventure travel experience:
              </p>
              <div>
                <p className="text-lg">Connect with nature</p>
                <div className="border-b border-orange-400 my-2"></div>
              </div>
              <div>
                <p className="text-lg">Experience other cultures</p>
                <div className="border-b border-orange-400 my-2"></div>
              </div>
              <p className="text-lg">Create unforgettable memories</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WhyUs;
