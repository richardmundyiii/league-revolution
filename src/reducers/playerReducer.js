import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  players: [],
  loading: false,
  error: null,
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    fetchPlayerStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchPlayerSuccess(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    fetchPlayerFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    addPlayer(state, action) {
      state.players.push(action.payload);
      state.loading = false;
    },
  },
});

export const {
  fetchPlayerStart,
  fetchPlayerSuccess,
  fetchPlayerFailure,
  addPlayer,
} = playerSlice.actions;

export default playerSlice.reducer;
