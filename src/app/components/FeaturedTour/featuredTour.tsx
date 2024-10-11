"use client";

import {
  useGetAvailableTourQuery,
  useGetUpcomingTourQuery,
} from "@/redux/api/tourApi";
import Link from "next/link";
import React from "react";
import { BiSolidTimeFive } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import Container from "../ui/Container";

const FeaturedTour = () => {
  const { data: tourData, isLoading } = useGetAvailableTourQuery(undefined);
  const { data: upcomingTours } = useGetUpcomingTourQuery(undefined);

  console.log(tourData);
  console.log(upcomingTours);

  return (
    <Container>
      <div className="py-12">
        <h2 className="max-w-lg mb-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
          <span className="inline-block mb-1 sm:mb-4">Featured Tour</span>
          <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
        </h2>

        <div className="mt-5 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tours Section */}
            <div className="md:col-span-2">
              {tourData?.map((tour: any) => (
                <div
                  key={tour.id}
                  className="flex flex-col md:flex-row mb-6 shadow-md bg-gray-100 border"
                >
                  <div className="md:w-1/3">
                    <img
                      src={tour.images[0]}
                      className="w-full h-full object-cover"
                      alt={tour.title}
                    />
                  </div>
                  <div className="grid grid-rows-3 p-4 md:w-2/3">
                    <div>
                      <p className="text-lg font-semibold">{tour.title}</p>
                      <p className="text-sm text-gray-600">{tour.duration}</p>
                    </div>
                    <div className="flex justify-between mt-2">
                      <p className="flex items-center text-sm">
                        <BiSolidTimeFive className="text-lg mr-2" />
                        <span>
                          Date <br />
                          {tour.starting_date}
                        </span>
                      </p>
                      <p className="flex items-center text-sm">
                        <FaLocationDot className="text-lg mr-2" />
                        <span>
                          Departure <br />
                          {tour.departure}
                        </span>
                      </p>
                      <p className="text-right">
                        <span className="text-xs">From</span> <br />
                        <span className="text-lg font-bold">{tour.price}</span>
                      </p>
                    </div>
                    <div className="mt-auto flex justify-end">
                      <Link
                        href={`/tour/${tour.id}`}
                        className="btn btn-sm btn-outline hover:bg-CC584A"
                      >
                        Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Upcoming Tours Section */}
            <div className="ml-0 md:ml-6">
              <h1 className="text-xl font-bold mb-3">Upcoming Tour</h1>
              <div>
                {upcomingTours?.map((dt: any) => (
                  <div key={dt.id} className="bg-gray-100 mb-6 shadow-md">
                    <img
                      className="w-full h-32 md:h-40 object-cover"
                      src={dt?.images[0]}
                      alt={dt.title}
                    />
                    <div className="flex justify-between p-3">
                      <div>
                        <p className="text-sm font-semibold">{dt.title}</p>
                        <p className="text-xs text-gray-500">{dt.duration}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-500">From</p>
                        <p className="font-semibold">{dt.price}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FeaturedTour;
