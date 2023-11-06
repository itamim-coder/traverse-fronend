
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dates: [],
  days: 0,
  selectedRooms :[],
  roomInfo: {},
  totalAmount: 0,
  options: {
    adult: 1,
    children: 0,
    room: 1,
  },
};

const bookingSlice = createSlice({
  name: "hotelBooking",
  initialState,
  reducers: {
    setBookingInfo: (state, action) => {
      state.days = action.payload.days;
      state.roomInfo = action.payload.roomInfo;
      state.selectedRooms = action.payload.selectedRooms;
      state.totalAmount = action.payload.totalAmount;
      state.dates = action.payload.dates;
      state.options = action.payload.options;
    },
  },
});

export const { setBookingInfo } = bookingSlice.actions;

export default bookingSlice.reducer;
