import { createSlice } from "@reduxjs/toolkit";

interface IHotelFilter {
  searchQuery: string;
}

const initialState: IHotelFilter = {
  searchQuery: "",
};

const hotelSlice = createSlice({
  name: "hotel",
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { setSearchQuery } = hotelSlice.actions;

export default hotelSlice.reducer;
