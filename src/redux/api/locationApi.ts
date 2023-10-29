import { baseApi } from "./baseApi";

const LOCATION_URL = "/location";
export const locationApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getLocation: build.query({
      query: () => ({
        url: `${LOCATION_URL}`,
        method: "GET",
      }),
      providesTags: ["getLocation"],
    }),
    locationBasedHotel: build.query({
        query: (id) => ({
          url: `${LOCATION_URL}/hotels/${id}`,
          method: "GET",
        }),
        providesTags: ["locationBasedHotel"],
      }),
  }),
});

export const { useGetLocationQuery, useLocationBasedHotelQuery } = locationApi;