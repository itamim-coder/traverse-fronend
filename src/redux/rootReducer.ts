import bookingReducer from "./Features/bookingSlice";
import hotelReducer from "./Features/hotelSlice";
import searchReducer from "./Features/searchSlice";

import { baseApi } from "./api/baseApi";

export const reducer = {
  search: searchReducer,
  hotel: hotelReducer,
  hotelBooking: bookingReducer,
  [baseApi.reducerPath]: baseApi.reducer,
};
