"use client";
import Room from "@/app/components/Rooms/Rooms";
import { useHotelDetailsQuery } from "@/redux/api/hotelApi";
import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const HotelDetails = ({ params }: any) => {
  const { data: hotelData, isLoading: loading } = useHotelDetailsQuery(
    params?.id
  );

  console.log(hotelData);

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
        <div className="my-4">
          <p className="text-xl mb-2">Overview</p>

          <p>
            You can directly book the best price if your travel dates are
            available, all discounts are already included. In the following
            house description you will find all information about our listing.
            2-room terraced house on 2 levels. Comfortable and cosy furnishings:
            1 room with 1 french bed and radio. Shower, sep. WC. Upper floor:
            (steep stair) living/dining room with 1 sofabed (110 cm, length 180
            cm), TV. Exit to the balcony. Small kitchen (2 hot plates, oven,
          </p>
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
