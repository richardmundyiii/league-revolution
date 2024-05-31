import {
  fetchDivisionsStart,
  fetchDivisionsSuccess,
  fetchDivisionsFailure,
  addDivision,
} from "../reducers/divisionReducer";

// Fetch Divisions
export const fetchDivisions = (seasonId) => async (dispatch) => {
  dispatch(fetchDivisionsStart());

  try {
    const response = await fetch(`/api/seasons/${seasonId}/divisions`);
    const data = await response.json();
    dispatch(fetchDivisionsSuccess(data));
  } catch (error) {
    dispatch(fetchDivisionsFailure(error.toString()));
  }
};

// Create Division
export const createDivision = (division) => async (dispatch) => {
  dispatch(fetchDivisionsStart());

  try {
    const response = await fetch("/api/divisions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(division),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    dispatch(addDivision(data)); // Add the new division to the state
  } catch (error) {
    dispatch(fetchDivisionsFailure(error.toString()));
  }
};
