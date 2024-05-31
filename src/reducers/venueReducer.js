import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  venues: [],
  loading: false,
  error: null,
};

const venueSlice = createSlice({
  name: "venue",
  initialState,
  reducers: {
    fetchVenueStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchVenueSuccess(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    fetchVenueFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    addVenue(state, action) {
      state.venues.push(action.payload);
      state.loading = false;
    },
  },
});

export const {
  fetchVenueStart,
  fetchVenueSuccess,
  fetchVenueFailure,
  addVenue,
} = venueSlice.actions;

export default venueSlice.reducer;
