"use client";
import Loading from "@/app/components/Loading";
import Pagination from "@/app/components/ui/Pagination/Pagination";

import { useGetLocationQuery } from "@/redux/api/locationApi";
import React, { useEffect, useState } from "react";

const ViewLocation = () => {
  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;
  const { data: location, isLoading } = useGetLocationQuery({ ...query });
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);
  if (isLoading) {
    return <Loading />;
  }
  const meta = location?.meta;
  console.log(meta);
  // Assuming location.meta.totalPages exists
  const handlePageChange = (pageNumber: number) => {
    setPage(pageNumber + 1); // Pagination starts from 0, but page state starts from 1
  };

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
            {location?.data?.result.map((data: any, index: number) => (
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

      <Pagination
        currentPage={page - 1} // Subtract 1 to sync with pagination component
        totalPages={meta?.totalPage || 0}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default ViewLocation;
