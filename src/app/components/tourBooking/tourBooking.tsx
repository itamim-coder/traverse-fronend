"use client"

import { token } from "@/app/services/auth.services";
import { useUserHotelQuery, useUserTourQuery } from "@/redux/api/bookingApi";
import React from "react";

const TourBooking = () => {

  const { data: tourData } = useUserTourQuery(undefined);
  console.log(tourData);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Days</th>
              <th>Total Amount</th>
              <th>Order Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {tourData?.map((dt, index) => (
              <tr>
                <th>{index+1}</th>
                <td>{dt?.tourBooks?.tourInfo?.title}</td>
                <td>{dt?.tourBooks?.tourInfo?.duration}</td>
                <td>{dt?.tourBooks?.totalAmount}</td>
                <td>{dt?.status}</td>
              </tr>
            ))}
            {/* row 2 */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TourBooking;
