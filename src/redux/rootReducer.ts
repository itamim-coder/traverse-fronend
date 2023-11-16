import bookingReducer from "./Features/bookingSlice";
import hotelReducer from "./Features/hotelSlice";
import searchReducer from "./Features/searchSlice";
import tourBookingReducer from "./Features/tourBookingSlice";
import userReducer from "./Features/userSlice";

import { baseApi } from "./api/baseApi";

export const reducer = {
  search: searchReducer,
  hotel: hotelReducer,
  hotelBooking: bookingReducer,
  tourBooking: tourBookingReducer,
  user: userReducer,
  [baseApi.reducerPath]: baseApi.reducer,
};
