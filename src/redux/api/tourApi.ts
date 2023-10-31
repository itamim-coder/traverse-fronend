import { baseApi } from "./baseApi";

const TOUR_URL = "/tour";
export const tourApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getTour: build.query({
      query: () => ({
        url: `${TOUR_URL}`,
        method: "GET",
      }),
      providesTags: ["getTour"],
    }),
    getAvailableTour: build.query({
      query: () => ({
        url: `${TOUR_URL}/available`,
        method: "GET",
      }),
      providesTags: ["getAvailableTour"],
    }),
    getUpcomingTour: build.query({
      query: () => ({
        url: `${TOUR_URL}/upcoming`,
        method: "GET",
      }),
      providesTags: ["getUpcomingTour"],
    }),
    singleTour: build.query({
        query: (id) => ({
          url: `${TOUR_URL}/${id}`,
          method: "GET",
        }),
        providesTags: ["singleTour"],
      }),
  }),
});

export const { useGetTourQuery, useSingleTourQuery, useGetAvailableTourQuery, useGetUpcomingTourQuery } = tourApi;