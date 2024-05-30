import {
  fetchSeasonsStart,
  fetchSeasonsSuccess,
  fetchSeasonsFailure,
  addSeason,
} from "../reducers/seasonReducer";

// Fetch Seasons
export const fetchSeasons = () => async (dispatch) => {
  dispatch(fetchSeasonsStart());

  try {
    const response = await fetch("/api/seasons"); // Replace with your API endpoint
    const data = await response.json();
    dispatch(fetchSeasonsSuccess(data));
  } catch (error) {
    dispatch(fetchSeasonsFailure(error.toString()));
  }
};

// Create Season
export const createSeason = (season) => async (dispatch) => {
  dispatch(fetchSeasonsStart());

  try {
    const response = await fetch("/api/seasons", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(season),
    });

    const data = await response.json();
    dispatch(addSeason(data)); // Add the new season to the state
  } catch (error) {
    dispatch(fetchSeasonsFailure(error.toString()));
  }
};
