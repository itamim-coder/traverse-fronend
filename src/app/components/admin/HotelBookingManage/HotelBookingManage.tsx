"use client";
import Loading from "@/app/components/Loading";
import Alert from "@/app/components/ui/Alert/alert";
import Pagination from "@/app/components/ui/Pagination/Pagination";
import { useUserHotelQuery } from "@/redux/api/bookingApi";

import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const HotelBookingManage = () => {
  const query: Record<string, any> = {};
  const [selectedBooking, setSelectedBooking] = useState<any>(null);
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;
  const { data: hotelBooking, isLoading } = useUserHotelQuery({ ...query });
  //   const [deleteLocation] = useDeleteLocationMutation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);
  if (isLoading) {
    return <Loading />;
  }
  const meta = hotelBooking?.meta;

  const data = hotelBooking;
  // console.log("hotel booking", data);
  // Assuming hotelBooking.meta.totalPages exists
  const handlePageChange = (pageNumber: number) => {
    setPage(pageNumber + 1); // Pagination starts from 0, but page state starts from 1
  };

  //   const handleDelete = async (id: string) => {
  //     toast.loading("Deleting....");

  //     try {
  //       const res = await deleteLocation(id).unwrap();
  //       console.log(res);
  //       if (res.id) {
  //         toast.success("Delete Successfully");
  //       }
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  return (
    <div className="m-5">
      <div>
        <p className="text-2xl font-semibold">
          Hotel Booking Info :{" "}
          <span className="text-sm">{meta?.total} Available</span>
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
                Customer
              </th>
              <th className="py-4 px-6 text-base font-medium text-left border-b ">
                Phone
              </th>
              <th className="py-4 px-6 text-base font-medium text-left border-b ">
                Booking Status
              </th>
              <th className="py-4 px-6 text-base font-medium text-left border-b ">
                Pay
              </th>
              <th className="py-4 px-6 text-base font-medium text-left border-b ">
                Payment Status
              </th>
              <th className="py-4 px-6 text-base font-medium border-b text-end">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {hotelBooking?.data?.result.map((data: any, index: number) => (
              <>
                <tr className="hover:bg-gray-50 border-b transition duration-300">
                  <td className="py-4 px-6 border-b text-base font-medium">
                    {index + 1}
                  </td>

                  <td className="py-4 px-6 border-b text-base font-medium">
                    {data?.customer_name}
                  </td>
                  <td className="py-4 px-6 border-b text-base font-medium">
                    {data?.phone}
                  </td>
                  <td className="py-4 px-6 border-b text-base font-medium">
                    {data?.status}
                  </td>
                  <td className="py-4 px-6 border-b text-base font-medium">
                    {data?.hotelBooks?.totalAmount}
                  </td>
                  <td className="py-4 px-6 border-b text-base font-medium">
                    {data?.status}
                  </td>
                  <td className="py-4 px-6  border-b text-end">
                    <button
                      onClick={() => {
                        setSelectedBooking(data); // Set the selected booking
                        document.getElementById("my_modal_3").showModal();
                      }}
                      className="bg-blue-500 mx-1 hover:scale-110 scale-100 transition-all duration-100 text-white py-2 px-4 rounded-md"
                    >
                      Details
                    </button>
                    {/* <button
                      // onClick={() => handleDelete(data?.id)}
                      className="bg-red-500 mx-1 hover:scale-110 scale-100 transition-all duration-100 text-white py-2 px-4 rounded-md"
                    >
                      Delete
                    </button> */}
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            {selectedBooking ? (
              <div>
                <h3 className="font-bold text-lg">
                  Booking Details for {selectedBooking.customer_name}
                </h3>
                <ul className="py-4">
                  <li>
                    <strong>Phone:</strong> {selectedBooking.phone}
                  </li>
                  <li>
                    <strong>Status:</strong> {selectedBooking.status}
                  </li>
                  <li>
                    <strong>Total Amount:</strong>{" "}
                    {selectedBooking.hotelBooks?.totalAmount}
                  </li>
                  <li>
                    <strong>Payment Status:</strong>{" "}
                    {selectedBooking.status}
                  </li>
                </ul>
              </div>
            ) : (
              <p className="py-4">No booking details available.</p>
            )}
          </div>
        </dialog>
      </div>

      <Pagination
        currentPage={page - 1} // Subtract 1 to sync with pagination component
        totalPages={meta?.totalPage || 0}
        onPageChange={handlePageChange}
      />
      <Alert />
    </div>
  );
};

export default HotelBookingManage;
