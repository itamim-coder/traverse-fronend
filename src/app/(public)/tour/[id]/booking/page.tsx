"use client";
import FormInput from "@/app/components/Forms/FormInput";
import Form from "@/app/components/Forms/form";
import { getUserInfo } from "@/app/services/auth.services";
import { useBookTourMutation } from "@/redux/api/bookingApi";

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
  const { totalAmount, options, tourInfo } = useAppSelector(
    (state) => state.tourBooking
  );
  const [tourBooking] = useBookTourMutation();
  console.log(getUserInfo())
  const { userId:loginUserId } = getUserInfo();
console.log(loginUserId)
  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    try {
      //   const res = await userLogin({ ...data }).unwrap();
      data.userId = loginUserId;
      data.tourBooks = {
        tourInfo,
        totalAmount,
        options,
      };
      console.log(data);
      const res = await tourBooking({ ...data }).unwrap();
      console.log(res);
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
                  <p> {tourInfo?.title}</p>
                  <p>{options.member} Member</p>
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
                {tourInfo?.starting_date}
                <br />

                {tourInfo?.departure}
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
                      <p>
                        {" "}
                        {tourInfo?.title} X {options.member}
                      </p>
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
                {/* Date: {checkin} to {checkout} <br />{" "} */}
                {/* <span className="text-sm">({days}/nights)</span> */}
              </p>
              <p className="font-semibold text-gray-900 text-base px-6 py-3">
                {/* Room: {roomInfo.name} */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelBooking;
