import { baseApi } from "./api/baseApi";
// import searchReducer from "./features/searchSlice";

export const reducer = {
//   search: searchReducer,
  [baseApi.reducerPath]: baseApi.reducer,
};