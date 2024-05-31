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
      state.error = null;
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
      state.loading = false;
    },
    updateSeasonSuccess(state, action) {
      const index = state.seasons.findIndex(
        (season) => season._id === action.payload._id
      );
      if (index !== -1) {
        state.seasons[index] = action.payload;
      }
      state.loading = false;
    },
  },
});

export const {
  fetchSeasonsStart,
  fetchSeasonsSuccess,
  fetchSeasonsFailure,
  addSeason,
  updateSeasonSuccess,
} = seasonSlice.actions;

export default seasonSlice.reducer;
