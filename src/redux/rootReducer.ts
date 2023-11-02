import hotelReducer from "./Features/hotelSlice";
import searchReducer from "./Features/searchSlice";
import { baseApi } from "./api/baseApi";


export const reducer = {
    search: searchReducer,
  hotel: hotelReducer,
  [baseApi.reducerPath]: baseApi.reducer,
};
