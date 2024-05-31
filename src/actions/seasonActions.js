import {
  fetchSeasonsStart,
  fetchSeasonsSuccess,
  fetchSeasonsFailure,
  addSeason,
  updateSeasonSuccess,
} from "../reducers/seasonReducer";

// Fetch Seasons
export const fetchSeasons = () => async (dispatch) => {
  dispatch(fetchSeasonsStart());

  try {
    const response = await fetch("/api/seasons");
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

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    dispatch(addSeason(data)); // Add the new season to the state
  } catch (error) {
    dispatch(fetchSeasonsFailure(error.toString()));
  }
};

// Update Season
export const updateSeason = (season) => async (dispatch) => {
  dispatch(fetchSeasonsStart());

  try {
    const response = await fetch(`/api/seasons/${season.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(season),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    dispatch(updateSeasonSuccess(data)); // Update the season in the state
  } catch (error) {
    dispatch(fetchSeasonsFailure(error.toString()));
  }
};
