// searchSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  destination: '',
  dates: [],
  options: {
    adult: 1,
    children: 0,
    room: 1,
  },
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchParameters: (state, action) => {
      state.destination = action.payload.destination;
      state.dates = action.payload.dates;
      state.options = action.payload.options;
    },
  },
});

export const { setSearchParameters } = searchSlice.actions;

export default searchSlice.reducer;