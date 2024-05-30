import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  seasons: [],
  loading: false,
  error: null,
};

const seasonSlice = createSlice({
  name: "season",
  initialState,
  reducers: {
    fetchSeasonsStart(state) {
      state.loading = true;
    },
    fetchSeasonsSuccess(state, action) {
      state.loading = false;
      state.seasons = action.payload;
    },
    fetchSeasonsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    addSeason(state, action) {
      state.seasons.push(action.payload);
    },
  },
});

export const {
  fetchSeasonsStart,
  fetchSeasonsSuccess,
  fetchSeasonsFailure,
  addSeason,
} = seasonSlice.actions;

export default seasonSlice.reducer;
