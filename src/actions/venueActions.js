import {
  fetchVenueStart,
  fetchVenueSuccess,
  fetchVenueFailure,
  addVenue,
} from "../reducers/venueReducer";

export const fetchVenues = () => async (dispatch) => {
  dispatch(fetchVenueStart());

  try {
    const response = await fetch(`/api/venues`);
    const data = await response.json();
    dispatch(fetchVenueSuccess(data));
  } catch (error) {
    dispatch(fetchVenueFailure(error.toString()));
  }
};

export const createVenue = (venue) => async (dispatch) => {
  dispatch(fetchVenueStart());

  try {
    const response = await fetch(`/api/venues`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(venue),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    dispatch(addVenue(data));
  } catch (error) {
    dispatch(fetchVenueFailure(error.toString()));
  }
};
