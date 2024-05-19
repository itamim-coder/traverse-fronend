"use client";
import Alert from "@/app/components/ui/Alert/alert";
import { useHotelDetailsQuery } from "@/redux/api/hotelApi";
import {
  useDeleteRoomCategoryMutation,
  useDeleteRoomNoMutation,
  useGetSingleRoomQuery,
} from "@/redux/api/roomApi";
import Link from "next/link";
import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import toast from "react-hot-toast";

const RoomDetails = ({ params }) => {
  console.log(params);
  const { data: roomDetails, isLoading } = useGetSingleRoomQuery(params?.id);
  const [deleteRoomNo] = useDeleteRoomNoMutation();
  const [selectedDates, setSelectedDates] = useState<Date[]>([]);
  const rooms = roomDetails;
  console.log(selectedDates);
  const handleDelete = async (id: string) => {
    try {
      const res = await deleteRoomNo(id);
      if (res?.id) {
        toast.success("Room Delete Succesfully");
      }
    } catch (err) {
      console.log(err);
      toast.error("Something Went Wrong");
    }
  };

  return (
    <div className="m-5">
      <div className="flex justify-between">
        <div className="flex">
          <img
            src={roomDetails?.photos[0]}
            className="object-cover rounded  w-64 h-32"
            alt=""
          />
          <div className="mx-3">
            <p>{roomDetails?.name}</p>
            <p>{roomDetails?.address}</p>
          </div>
        </div>
        <div>
          <button className="btn btn-info">Info</button>
        </div>
      </div>

      <div className="mt-3">
        <div>
          <p className="text-xl font-semibold">
            Room Category Info :{" "}
            <span className="text-sm">{rooms?.length} Available</span>
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-[100%] shadow-md  mx-auto border-gray-100 my-6">
            <thead>
              <tr className=" text-black ">
                <th className="py-4 px-6 text-base font-medium text-left border-b ">
                  Serial
                </th>
                <th className="py-4 px-6 text-base font-medium text-left  border-b">
                  Room Type
                </th>
                <th className="py-4 px-6 text-base font-medium text-left border-b ">
                  Max People
                </th>
                <th className="py-4 px-6 text-base font-medium text-left border-b ">
                  Price
                </th>

                <th className="py-4 px-6 text-base font-medium border-b text-end">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {rooms?.RoomNumber?.map((data: any, index: number) => (
                <>
                  <tr className="hover:bg-gray-50 border-b transition duration-300">
                    <td className="py-4 px-6 border-b text-base font-medium font-medium">
                      {index + 1}
                    </td>

                    <td className="py-4 px-6 border-b text-base font-medium">
                      {data.number}
                    </td>
                    <td className="py-4 px-6 border-b text-base font-medium">
                      {data.maxPeople}
                    </td>
                    <td className="py-4 px-6 border-b text-base font-medium">
                      {data.price}
                    </td>

                    <td className="py-4 px-6  border-b text-end">
                      <Link
                        href={`/admin/manage-hotel/room-details/${data?.id}`}
                        className="bg-blue-500 mx-1 hover:scale-110 scale-100 transition-all duration-100 text-white py-2 px-4 rounded-md"
                      >
                        Details
                      </Link>
                      <button
                        onClick={() =>
                          document
                            .getElementById(`my_modal_${index}`)
                            .showModal()
                        }
                        className="bg-red-500 mx-1 hover:scale-110 scale-100 transition-all duration-100 text-white py-2 px-4 rounded-md"
                      >
                        Check
                      </button>
                      <button
                        onClick={() => handleDelete(data.id)}
                        className="bg-red-500 mx-1 hover:scale-110 scale-100 transition-all duration-100 text-white py-2 px-4 rounded-md"
                      >
                        Delete
                      </button>
                    </td>
                    <dialog id={`my_modal_${index}`} className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          <button
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            onClick={() =>
                              document
                                .getElementById(`my_modal_${index}`)
                                .close()
                            }
                          >
                            ✕
                          </button>
                        </form>
                        <h3 className="font-bold text-lg">
                          Unavailable Dates:
                        </h3>

                        <DayPicker
                          mode="multiple"
                          selected={data.unavailableDates.map((dateString) => {
                            const date = new Date(dateString);
                            return date.toLocaleDateString("en-US", {
                              weekday: "long",
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            });
                          })}
                          onSelect={(dates) => setSelectedDates(dates || [])}
                        />
                      </div>
                    </dialog>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Alert />
    </div>
  );
};

export default RoomDetails;
