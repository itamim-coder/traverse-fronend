import { baseApi } from "./baseApi";

const BOOKING_URL = "/booking";
export const bookingApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    bookHotel: build.mutation({
      query: (data) => ({
        url: `${BOOKING_URL}/hotel`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: ["bookingHotel"],
    }),
    bookTour: build.mutation({
      query: (data) => ({
        url: `${BOOKING_URL}/tour`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: ["bookingTour"],
    }),
    // getHotels: build.query({
    //   query: () => ({
    //     url: `${HOTEL_URL}`,
    //     method: "GET",
    //   }),
    //   providesTags: ["getHotel"],
    // }),

  }),
});

export const {
useBookHotelMutation,
useBookTourMutation
} = bookingApi;