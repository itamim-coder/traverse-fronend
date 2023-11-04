import {
  useGetSingleRoomQuery,
  useReserveAroomMutation,
} from "@/redux/api/roomApi";
import { useAppSelector } from "@/redux/hooks";
import React, { useState } from "react";

const Room = ({ params }: any) => {
  const [selectedRooms, setSelectedRooms] = useState([]);

  const { data: roomData, isLoading: loading } = useGetSingleRoomQuery(
    params?.id
  );

  const { dates } = useAppSelector((state) => state.search);

  const getDatesInRange = (
    startDate: string | number | Date,
    endDate: string | number | Date
  ) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const date = new Date(start.getTime());

    const dates = [];

    while (date <= end) {
      const isoDate = new Date(date).toISOString(); // Convert timestamp to ISO-8601
      dates.push(isoDate);
      date.setDate(date.getDate() + 1);
    }

    return dates;
  };
  const alldates = getDatesInRange(dates[0]?.startDate, dates[0]?.endDate);
  console.log(alldates);

  const isAvailable = (roomNumber: { unavailableDates: any[] }) => {
    return alldates?.every((date) => {
      const dateToCheck = new Date(date).getTime();
      return !roomNumber?.unavailableDates?.some(
        (unavailableDate) => new Date(unavailableDate).getTime() === dateToCheck
      );
    });
  };

  const handleSelect = (e: { target: { checked: any; value: any } }) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item: any) => item !== value)
    );
  };
  const [reserveAroom] = useReserveAroomMutation();
  const handleClick = async () => {
    try {
      await Promise.all(
        selectedRooms.map(async (roomId) => {
          const unavailableDates = alldates.map((date) =>
            new Date(date).toISOString()
          );

          const roomData = {
            unavailableDates, // Add the unavailableDates property
          };

          const updatedData = await reserveAroom({ id: roomId, roomData });
          console.log(updatedData);
          // const res = axios.put(`/rooms/availability/${roomId}`, {
          //   dates: alldates,
          // });

          // return res.data;
        })
      );
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="grid grid-cols-2 gap-2">
        {roomData?.RoomNumber?.map((rd: any) => (
          <div key={rd.id} className="border p-4  ">
            <div>
              <h1 className=" font-bold">Room No: {rd.number}</h1>

              <label className="block text-gray-500">
                Availability: {isAvailable(rd) ? "Available" : "Not Available"}
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                value={rd.id}
                onChange={handleSelect}
                disabled={!isAvailable(rd)}
              />
              <label className="text-gray-600">Select</label>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={handleClick}
        className={`w-1/2 mt-2  py-3 rounded-lg text-white ${
          selectedRooms.length === 0
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600"
        }`}
        disabled={selectedRooms.length === 0}
      >
        Reserve Now!
      </button>
    </>
  );
};

export default Room;
function setSelectedRooms(arg0: any) {
  throw new Error("Function not implemented.");
}
