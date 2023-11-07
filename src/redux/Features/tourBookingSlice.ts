import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tourInfo: {},
  totalAmount: 0,
  options: {
    member: 1,
  },
};

const tourBookingSlice = createSlice({
  name: "tourBooking",
  initialState,
  reducers: {
    setTourBookingInfo: (state, action) => {
      state.tourInfo = action.payload.tourInfo;
      state.totalAmount = action.payload.totalAmount;

      state.options = action.payload.options;
    },
  },
});

export const { setTourBookingInfo } = tourBookingSlice.actions;

export default tourBookingSlice.reducer;
