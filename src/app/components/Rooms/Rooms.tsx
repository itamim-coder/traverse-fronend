import { setBookingInfo } from "@/redux/Features/bookingSlice";
import {
  useGetSingleRoomQuery,
  useReserveAroomMutation,
} from "@/redux/api/roomApi";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Room = ({ params }: any) => {
  const [selectedRooms, setSelectedRooms] = useState<
    { id; price; roomNumber }[]
  >([]);
  console.log(params);
  const { data: roomData, isLoading: loading } = useGetSingleRoomQuery(
    params?.id
  );
  console.log(roomData);
  const { dates, options } = useAppSelector((state) => state.search);
  const router = useRouter();
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
  console.log(selectedRooms);


  const handleSelect = (e: { target: { checked: any; value: any } }) => {
    const checked = e.target.checked;
    const value = e.target.value;

    // Find the selected room by ID
    const selectedRoom = roomData?.RoomNumber.find((room) => room.id === value);

    if (checked && selectedRoom) {
      // Add the selected room to the array along with its information, including room number
      setSelectedRooms([
        ...selectedRooms,
        {
          id: selectedRoom.id,
          price: roomData.price,
          roomNumber: selectedRoom.number, // Include room number
        },
      ]);
    } else {
      // Remove the room if it's unchecked
      setSelectedRooms(selectedRooms.filter((room) => room.id !== value));
    }
  };
  console.log(selectedRooms);
  const [reserveAroom] = useReserveAroomMutation();
  const dispatch = useAppDispatch();
  const handleReserve = async () => {
    console.log(alldates);
    console.log(options);

    const days = alldates.length - 1;

    let totalPrice = 0;
    if (days > 0) {
      selectedRooms.forEach((room) => {
        totalPrice += room.price * days;
      });
    }
    console.log(totalPrice);
    dispatch(
      setBookingInfo({
        days,
        roomInfo: roomData,
        selectedRooms: selectedRooms,
        totalAmount: totalPrice,
        dates: alldates,
        options: options,
      })
    );
    router.push(`/hotel/booking/${params.name}`);
    // try {
    //   await Promise.all(
    //     selectedRooms.map(async (roomId) => {
    //       const unavailableDates = alldates.map((date) =>
    //         new Date(date).toISOString()
    //       );

    //       const roomData = {
    //         unavailableDates, // Add the unavailableDates property
    //       };

    //       const updatedData = await reserveAroom({ id: roomId, roomData });
    //       console.log(updatedData);
    //       // const res = axios.put(`/rooms/availability/${roomId}`, {
    //       //   dates: alldates,
    //       // });

    //       // return res.data;
    //     })
    //   );
    // } catch (err) {
    //   console.log(err);
    // }
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
        onClick={handleReserve}
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
