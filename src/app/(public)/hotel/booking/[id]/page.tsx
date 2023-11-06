"use client";
import FormInput from "@/app/components/Forms/FormInput";
import Form from "@/app/components/Forms/form";
import { useBookHotelMutation } from "@/redux/api/bookingApi";
import { useReserveAroomMutation } from "@/redux/api/roomApi";
import { useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";

import React, { useEffect } from "react";
import { SubmitHandler } from "react-hook-form";
type FormValues = {
  email: string;
  password: string;
};
const HotelBooking = () => {
  const router = useRouter();
  const { dates, days, selectedRooms, totalAmount, options, roomInfo } =
    useAppSelector((state) => state.hotelBooking);
  const lastDay = dates.length - 1;
  const date1 = new Date(dates[0]);
  const date2 = new Date(dates[lastDay]);

  const checkin = date1.toLocaleDateString();
  const checkout = date2.toLocaleDateString();
  console.log(checkin);
  // console.log(window.history);
  // const hotelId = console.log(roomInfo?.hotel?.id);
  // useEffect(() => {
  //   const handleBeforeUnload = (e: BeforeUnloadEvent) => {
  //     e.preventDefault();
  //     e.returnValue = "";
  //     // alert("previous url is: " + window.history);
  //     // Use the Next.js router to navigate back to the previous page
  //     router.push(`/hotel/${roomInfo?.hotel?.id}`); //
  //     // history.back()
  //   };

  //   // Add the event listener for beforeunload to capture browser refresh
  //   window.addEventListener("beforeunload", handleBeforeUnload);

  //   return () => {
  //     // Clean up the event listener when the component unmounts
  //     window.removeEventListener("beforeunload", handleBeforeUnload);
  //   };
  // }, [router]);

  // if (!days || days <= 0) {
  //   // alert("previous url is: " + window.history.previous.href);
  //   // Redirect to the previous page or any other desired page
  //   // history.back() // Change '/previous-page' to your desired URL
  //   return null; // You can also return a loading state or an error message if needed
  // }
  const [hotelBooking] = useBookHotelMutation();
  const [reserveAroom] = useReserveAroomMutation();
  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    try {
      //   const res = await userLogin({ ...data }).unwrap();
      data.userId = "764fc795-dd1b-4dda-8e45-63814bae728c";
      data.hotelBooks = {
        dates,
        days,
        selectedRooms,
        totalAmount,
        options,
        roomInfo,
      };
      console.log(data);
      // const res = await hotelBooking({ ...data }).unwrap();
      // console.log(res);

      selectedRooms.map(async (roomId) => {
        const unavailableDates = dates.map((date) =>
          new Date(date).toISOString()
        );

        const roomData = {
          unavailableDates, // Add the unavailableDates property
        };
console.log(roomId)
        const updatedData = await reserveAroom({ id: roomId?.id, roomData });
        console.log(updatedData);
        // const res = axios.put(`/rooms/availability/${roomId}`, {
        //   dates: alldates,
        // });

        // return res.data;
      });
    } catch (err) {}
  };
  return (
    <div className="px-24 bg-background min-h-screen">
      <div className="flex gap-3">
        <div className="w-3/5 ">
          <div className="bg-white mt-5 ">
            <div className="p-5 pl-10">
              <p>Your Booking Details</p>
              <div className="flex pt-5 justify-between">
                <div>
                  <p> {roomInfo?.hotel?.name}</p>
                  <p>{options.adult} Adult</p>
                </div>
                <div>
                  <div className="mask  w-20 h-20">
                    <img
                      className="rounded"
                      src="https://api.sharetrip.net/api/v1/hotel/image?key=HyANbffVjkBh1mA2CJLuNFZlI6UkKrgAbXWPt8bqt5XudxSGJg/auh/IeYO9o63FWll2h/tvGridd5Ar9ZmNcPTM8OcRpOtHeEYsWFDkzIlIDetC5aH8fy/0QL9Q6EMgjGOr7GTIXk+IDqaa4q6qSw=="
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
              </div>
              <div>
                {roomInfo?.name}
                <br />
                Room Number:
                {selectedRooms?.map((room) => (
                  <div key={room.id}>
                    <p>{room.roomNumber}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-white mt-5  ">
            <p className="pt-5 text-xl font-semibold px-10">Guest Details</p>
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <div>
                <Form submitHandler={onSubmit}>
                  <div>
                    <FormInput
                      name="customer_name"
                      type="text"
                      size="large"
                      label="Guest Name"
                    />
                  </div>
                  <div className="my-4">
                    <FormInput
                      name="phone"
                      type="number"
                      size="large"
                      label="Guest Number"
                    />
                  </div>
                  <div className="my-4">
                    <FormInput
                      name="address"
                      type="text"
                      size="large"
                      label="Guest Address"
                    />
                  </div>
                  <button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Pay
                  </button>
                </Form>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white w-2/5 border p-5 mt-5">
          <div className="">
            <p className="p-2 bg-gray-100">Your Price Summary</p>

            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Details
                    </th>

                    <th scope="col" className="px-6 py-3">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                    >
                      {roomInfo?.name} x {selectedRooms.length}
                    </th>

                    <td className="px-6 py-4">{totalAmount}</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr className="font-semibold text-gray-900 ">
                    <th scope="row" className="px-6 py-3 text-base">
                      Total
                    </th>

                    <td className="px-6 py-3">{totalAmount}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-base px-6 py-3">
                Date: {checkin} to {checkout} <br />{" "}
                <span className="text-sm">({days}/nights)</span>
              </p>
              <p className="font-semibold text-gray-900 text-base px-6 py-3">
                Room: {roomInfo.name}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelBooking;
