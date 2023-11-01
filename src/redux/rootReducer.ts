import hotelReducer from "./Features/hotelSlice";
import { baseApi } from "./api/baseApi";
// import searchReducer from "./features/searchSlice";

export const reducer = {
  //   search: searchReducer,
  hotel: hotelReducer,
  [baseApi.reducerPath]: baseApi.reducer,
};
