"use client";
import FormInput from "@/app/components/Forms/FormInput";
import Form from "@/app/components/Forms/form";
import React from "react";
import { SubmitHandler } from "react-hook-form";
type FormValues = {
  email: string;
  password: string;
};

const HotelBooking = () => {
  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    try {
      //   const res = await userLogin({ ...data }).unwrap();
      console.log(data);
    } catch (err) {}
  };
  return (
    <div className="px-24 bg-background min-h-screen">
      <div className="flex gap-3">
        <div className="w-3/5 ">
          <div className="bg-white mt-5 ">
            <p>Your Booking Details</p>
          </div>
          <div className="bg-white mt-5  ">
            <p className="pt-5 text-xl font-semibold px-10">Guest Details</p>
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <div>
                <Form submitHandler={onSubmit}>
                  <div>
                    <FormInput
                      name="email"
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
                      Apple MacBook Pro 17"
                    </th>

                    <td className="px-6 py-4">$2999</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr className="font-semibold text-gray-900 ">
                    <th scope="row" className="px-6 py-3 text-base">
                      Total
                    </th>

                    <td className="px-6 py-3">21,000</td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-base px-6 py-3">
                Date
              </p>
              <p className="font-semibold text-gray-900 text-base px-6 py-3">
                Room
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelBooking;
