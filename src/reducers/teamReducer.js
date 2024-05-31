import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  teams: [],
  loading: false,
  error: null,
};

const teamSlice = createSlice({
  name: "team",
  initialState,
  reducers: {
    fetchTeamStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchTeamSuccess(state, action) {
      state.loading = false;
      state.teams = action.payload;
    },
    fetchTeamFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    addTeam(state, action) {
      state.teams.push(action.payload);
      state.loading = false;
    },
  },
});

export const { fetchTeamStart, fetchTeamSuccess, fetchTeamFailure, addTeam } =
  teamSlice.actions;

export default teamSlice.reducer;
