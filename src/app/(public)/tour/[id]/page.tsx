"use client";

import React, { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
// or only core styles
import "@splidejs/splide/css/core";
import { useSingleTourQuery } from "@/redux/api/tourApi";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import { setTourBookingInfo } from "@/redux/Features/tourBookingSlice";
const TourDetails = ({ params }) => {
  console.log(params);
  const router = useRouter();
  const { data: tourData, isLoading } = useSingleTourQuery(params?.id);
  console.log(tourData);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    member: 1,
  });
  const handleOption = (name: any, operation: any) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  const totalAmount = tourData?.price * options.member;
  const dispatch = useAppDispatch();
  const handleBook = () => {
    const serializedOptions = {
      member: options.member,
    };
    console.log(serializedOptions);
    dispatch(
      setTourBookingInfo({
        tourInfo: tourData,
        totalAmount,
        options: serializedOptions,
      })
    );

    router.push(`/tour/${tourData.id}/booking`);
  };

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
          direction: "ttb",
          arrows: false,
          paginationDirection: "ttb",
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
          <div className=" flex w-full justify-between gap-3">
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
              <div className="bg-white p-12">
                <div className="flex justify-between">
                  {" "}
                  <p className="text-xl">Price</p>
                  <p className="text-xl">{tourData?.price} /Per Person</p>
                </div>
                <p className="text-center text-xl mt-3">Book Tours</p>

                <div className="w-full  flex items-center ">
                  <div className="relative w-full">
                    <span
                      onClick={() => setOpenOptions(!openOptions)}
                      className="block border cursor-pointer text-black px-4 py-3 rounded-sm focus:outline-none focus:ring focus:ring-blue-500 w-full text-center"
                    >
                      {`${options.member} Member`}
                    </span>
                    {openOptions && (
                      <div className="absolute left-0 mt-2 bg-white p-4 rounded-md shadow-md z-10 w-full">
                        <div className="mb-4 ">
                          {/* <span className="text-gray-700">Member</span> */}
                          <div className="flex bg-background justify-around space-x-4">
                            <button
                              disabled={options.member <= 1}
                              className="text-gray-700 hover:text-blue-500"
                              onClick={() => handleOption("member", "d")}
                            >
                              -
                            </button>
                            <span className="text-gray-700">
                              {options.member}
                            </span>
                            <button
                              className="text-gray-700 hover:text-blue-500"
                              onClick={() => handleOption("member", "i")}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-20 text-xl">Total Amount {totalAmount}</div>
                <div>
                  <button
                    onClick={handleBook}
                    className="flex justify-center btn btn-primary mt-4"
                  >
                    <p className="text-center">Book Now</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDetails;
