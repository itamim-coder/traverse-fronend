"use client";

import { useHotelDetailsQuery } from "@/redux/api/hotelApi";
import { useAppDispatch } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { addHours, format } from "date-fns";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; //
import { setDateRange, setOption } from "@/redux/Features/searchSlice";
import Room from "@/app/components/Rooms/Rooms";
import Link from "next/link";

const HotelDetails = ({ params }: any) => {
  const { data: hotelData, isLoading: loading } = useHotelDetailsQuery(
    params?.id
  );

  const [openDate, setOpenDate] = useState(false);
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOption = (name: any, operation: any) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  const dispatch = useAppDispatch();
  // const { dispatch } = useContext(SearchContext);
  const router = useRouter();
  const handleSearch = () => {
    // const selectedLocation = locations.find(
    //   (location) => location.name === destination
    // );
    console.log(dates);
    const serializedDates = dates.map((dateRange) => ({
      startDate: new Date(dateRange.startDate).toISOString(), // Remove 'Z' to keep the original time zone offset
      endDate: new Date(dateRange.endDate).toISOString(), // Remove 'Z' to keep the original time zone offset
      key: dateRange.key,
    }));

    const serializedOptions = {
      adult: options.adult,
      children: options.children,
      room: options.room,
    };
    console.log(serializedDates);
    dispatch(
      setDateRange({
        dates: serializedDates,
      })
    );
    dispatch(
      setOption({
        options: serializedOptions,
      })
    );

    // router.push(`/hotel-list/${selectedLocation.id}`);
  };

  return (
    <div>
      <div className="p-20 bg-background">
        <div className="flex justify-between">
          <div>
            <div className="flex items-center">
              <p className="text-2xl">{hotelData?.name} </p>
              <span className="flex ml-3">
                {Array.from(
                  { length: hotelData?.average_rating },
                  (_, index) => (
                    <AiFillStar key={index} className="text-yellow-500" />
                  )
                )}
                {Array.from(
                  { length: 5 - hotelData?.average_rating },
                  (_, index) => (
                    <AiOutlineStar key={index} className="text-yellow-500" />
                  )
                )}
              </span>
            </div>
            <p>{hotelData?.address}</p>
          </div>
          <div>
            <p className="text-xl">From</p>
            <p className="text-right">{hotelData?.cheapest_price}</p>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap ">
          <div className="flex w-1/2 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={hotelData?.photos[0]}
              />
            </div>
          </div>
          <div className="flex w-1/2 flex-wrap">
            {hotelData?.photos.slice(1).map((pt: any) => (
              <>
                <div className="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src={pt}
                  />
                </div>
              </>
            ))}
          </div>
        </div>
        <div className="my-4 flex justify-between">
          <div className="w-3/5 ">
            <p className="text-xl mb-2">Overview</p>

            <p>
              You can directly book the best price if your travel dates are
              available, all discounts are already included. In the following
              house description you will find all information about our listing.
              2-room terraced house on 2 levels. Comfortable and cosy
              furnishings: 1 room with 1 french bed and radio. Shower, sep. WC.
              Upper floor: (steep stair) living/dining room with 1 sofabed (110
              cm, length 180 cm), TV. Exit to the balcony. Small kitchen (2 hot
              plates, oven,
            </p>
          </div>
          <div className="bg-white w-1.5/5 p-4">
            <div>
              <p className="text-center">Select Dates</p>
              <div className="w-full  mb-4">
                <div className="relative">
                  <span
                    onClick={() => setOpenDate(!openDate)}
                    className="block cursor-pointer border text-black px-4 py-3 rounded-sm focus:outline-none  focus:ring-blue-500"
                  >
                    {`${format(dates[0].startDate, "MM/dd/yyyy")} - ${format(
                      dates[0].endDate,
                      "MM/dd/yyyy"
                    )}`}
                  </span>
                  {openDate && (
                    <DateRange
                      editableDateInputs={true}
                      onChange={(item) => {
                        setDates([item.selection]);
                      }}
                      moveRangeOnFirstSelection={false}
                      ranges={dates}
                      className="absolute left-0 mt-2 bg-white p-2 rounded-md shadow-md z-10"
                      minDate={new Date()}
                    />
                  )}
                </div>
              </div>
              <div className="w-full  flex items-center ">
                <div className="relative">
                  <span
                    onClick={() => setOpenOptions(!openOptions)}
                    className="block border cursor-pointer text-black px-4 py-3 rounded-sm focus:outline-none focus:ring focus:ring-blue-500"
                  >
                    {`${options.adult} Adult · ${options.children} Children · ${options.room} Room`}
                  </span>
                  {openOptions && (
                    <div className="absolute left-0 mt-2 bg-white p-4 rounded-md shadow-md z-10 w-full">
                      <div className="mb-4 ">
                        <span className="text-gray-700">Adult</span>
                        <div className="flex justify-around space-x-4">
                          <button
                            disabled={options.adult <= 1}
                            className="text-gray-700 hover:text-blue-500"
                            onClick={() => handleOption("adult", "d")}
                          >
                            -
                          </button>
                          <span className="text-gray-700">{options.adult}</span>
                          <button
                            className="text-gray-700 hover:text-blue-500"
                            onClick={() => handleOption("adult", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="mb-4 ">
                        <span className="text-gray-700">Children</span>
                        <div className="flex justify-around items-center space-x-4">
                          <button
                            disabled={options.children <= 0}
                            className="text-gray-700 hover:text-blue-500"
                            onClick={() => handleOption("children", "d")}
                          >
                            -
                          </button>
                          <span className="text-gray-700">
                            {options.children}
                          </span>
                          <button
                            className="text-gray-700 hover:text-blue-500"
                            onClick={() => handleOption("children", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="">
                        <span className="text-gray-700">Room</span>
                        <div className="flex justify-around items-center space-x-4">
                          <button
                            disabled={options.room <= 1}
                            className="text-gray-700 hover:text-blue-500"
                            onClick={() => handleOption("room", "d")}
                          >
                            -
                          </button>
                          <span className="text-gray-700">{options.room}</span>
                          <button
                            className="text-gray-700 ml-2 hover:text-blue-500"
                            onClick={() => handleOption("room", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <button
                className="text-white items-center mt-3 bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-full hover:shadow-lg focus:outline-none focus:ring focus:ring-blue-500"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div>
          <p className="text-2xl">Available Rooms</p>

          {hotelData?.rooms.map((room) => (
            <>
              <div className="border my-2 p-5 bg-white rounded">
                <p className="text-xl mb-2">{room.name} </p>

                <div>
                  <table className="table">
                    {/* head */}
                    <thead className="overflow-x-auto bg-blue-900 text-white">
                      <tr>
                        <th>Room View</th>
                        <th>Sleeps</th>
                        <th>Per night price</th>
                        <th>Select Rooms</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="  ">
                            <img
                              className="h-48 w-64  mb-2"
                              src={room.photos[0]}
                              alt=""
                            />

                            <div className="flex gap-2">
                              <img
                                className="h-48 w-32"
                                src={room.photos[0]}
                                alt=""
                              />
                              <img
                                className="h-48 w-32"
                                src={room.photos[0]}
                                alt=""
                              />
                            </div>
                          </div>
                        </td>
                        <td>{room.maxPeople} Person</td>
                        <td> $ {room.price}</td>
                        <td>
                          <Room params={room}></Room>{" "}
                        </td>
                        <td> <button><Link href="/hotel/booking">reserve</Link></button></td>
                        <th>
                          {/* <button
                            onClick={handleClick}
                            className={`w-full py-3 rounded-lg text-white ${
                              selectedRooms.length === 0
                                ? "bg-gray-300 cursor-not-allowed"
                                : "bg-blue-500 hover:bg-blue-600"
                            }`}
                            disabled={selectedRooms.length === 0}
                          >
                            Reserve Now!
                          </button> */}
                        </th>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotelDetails;
