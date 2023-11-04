"use client";

import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
// or only core styles
import "@splidejs/splide/css/core";
import { useSingleTourQuery } from "@/redux/api/tourApi";
const TourDetails = ({ params }) => {
  console.log(params);

  const { data: tourData, isLoading } = useSingleTourQuery(params?.id);
  console.log(tourData);
  return (
    <div className="">
      <Splide
        // hasTrack={false}
        options={{
          type: "loop",
          rewind: true,
          width: "100%",
          autoplay: true,
          heightRatio: 0.35,
          //   autoHeight: true,
          //   gap: "1rem",
        }}
        aria-label="My Favorite Images"
      >
        <SplideSlide>
          <img
            className="object-cover w-full h-full  opacity-50"
            src={tourData?.images[0]}
            alt="Image 1"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            className="object-cover w-full h-full opacity-50"
            src={tourData?.images[0]}
            alt="Image 1"
          />
        </SplideSlide>
      </Splide>

      <div className="px-20 bg-gray-100">
        <div className="flex justify-between py-10 ">
          <div>
            <p>{tourData?.title}</p>
            <p>{tourData?.price} /Per Person</p>
          </div>
          <div>
            <p>{tourData?.duration}</p>
            <p>{tourData?.starting_date}</p>
          </div>
        </div>

        <div className="">
          <div className=" flex w-full justify-between">
            <div className="w-3/5 ">
              <p className="text-2xl font-bold mb-5">Overview</p>
              <p>
                Lorem ipsum available isn but the majority have suffered
                alteratin in some or form injected simply free text used by
                copytyping refreshing. Neque porro est qui dolorem ipsum quia
                quaed inventore veritatis et quasi architecto beatae vitae dicta
                sunt explicabo. Lorem ipsum is simply free text used by
                copytyping refreshing. Neque porro est qui dolorem ipsum quia
                quaed inventore veritatis et quasi architecto beatae vitae dicta
                sunt explicabo. Aelltes port lacus quis enim var sed efficitur
                turpis gilla sed sit amet finibus eros.
              </p>
            </div>
            <div className="w-2/5 ">
              <p>Book Tours</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDetails;
