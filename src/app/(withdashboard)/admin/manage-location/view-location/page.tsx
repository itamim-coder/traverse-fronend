"use client";
import Loading from "@/app/components/Loading";
import Table from "@/app/components/ui/Table/table";
import loading from "@/app/loading";
import { useGetLocationQuery } from "@/redux/api/locationApi";
import React from "react";

const ViewLocation = () => {
  const { data: location, isLoading } = useGetLocationQuery(undefined);
  console.log(location);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="m-5">
      <div>
        <p>Location Info</p>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-[100%] shadow-md border mx-auto border-gray-100 my-6">
          <thead>
            <tr className="bg-[#0095FF] text-white">
              <th className="py-4 px-6 text-lg text-left border-b">Serial</th>
              <th className="py-4 px-6 text-lg text-left border-b">Location</th>
              <th className="py-4 px-6 text-lg text-left border-b">
                Location Name
              </th>
              <th className="py-4 px-6 text-lg text-left border-b">Featured</th>
              <th className="py-4 px-6 text-lg border-b text-end">Action</th>
            </tr>
          </thead>
          <tbody>
            {location?.map((data, index) => (
              <>
                <tr className="hover:bg-gray-50 border-b transition duration-300">
                  <td className="py-4 px-6 border-b text-xl font-medium">
                    {index + 1}
                  </td>
                  <td className="py-4 px-4 flex justify-start">
                    <img
                      src={data.image}
                      alt="table navigate ui"
                      className="h-16 w-16 object-cover bg-gray-300"
                    />
                  </td>
                  <td className="py-4 px-6 border-b text-xl font-medium">
                    {data.name}
                  </td>
                  <td className="py-4 px-6 border-b text-lg font-medium">
                    {data.featured ? "Yes" : "No"}
                  </td>
                  <td className="py-4 px-6  border-b text-end">
                    <button className="bg-blue-500 mx-1 hover:scale-110 scale-100 transition-all duration-100 text-white py-2 px-4 rounded-md">
                      Details
                    </button>
                    <button className="bg-red-500 mx-1 hover:scale-110 scale-100 transition-all duration-100 text-white py-2 px-4 rounded-md">
                      Delete
                    </button>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewLocation;
