import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  divisions: [],
  loading: false,
  error: null,
};

const divisionSlice = createSlice({
  name: "division",
  initialState,
  reducers: {
    fetchDivisionsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchDivisionsSuccess(state, action) {
      state.loading = false;
      state.divisions = action.payload;
    },
    fetchDivisionsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    addDivision(state, action) {
      state.divisions.push(action.payload);
      state.loading = false;
    },
  },
});

export const {
  fetchDivisionsStart,
  fetchDivisionsSuccess,
  fetchDivisionsFailure,
  addDivision,
} = divisionSlice.actions;

export default divisionSlice.reducer;
