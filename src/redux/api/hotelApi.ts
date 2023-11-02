import { baseApi } from "./baseApi";

const HOTEL_URL = "/hotel";
export const hotelApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // createHotel: build.mutation({
    //   query: (data) => ({
    //     url: `${HOTEL_URL}`,
    //     method: "POST",
    //     data: data,
    //   }),
    //   invalidatesTags: ["createHotel"],
    // }),
    // getHotels: build.query({
    //   query: () => ({
    //     url: `${HOTEL_URL}`,
    //     method: "GET",
    //   }),
    //   providesTags: ["getHotel"],
    // }),
    hotelDetails: build.query({
      query: (id) => ({
        url: `${HOTEL_URL}/${id}`,
        method: "GET",
      }),
      providesTags: ["hotelDetails"],
    }),
  }),
});

export const {
//   useGetHotelsQuery,
 useHotelDetailsQuery,
//   useCreateHotelMutation,
} = hotelApi;