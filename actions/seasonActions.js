import {
  fetchSeasonsStart,
  fetchSeasonsSuccess,
  fetchSeasonsFailure,
} from "../reducers/seasonReducer";

export const fetchSeasons = () => async (dispacth) => {
  dispacth(fetchSeasonsStart());

  try {
    const response = await fetch("/api/seasons");
    const data = await response.json();
    dispacth(fetchSeasonsSuccess(data));
  } catch (error) {
    dispacth(fetchSeasonsFailure(error.toString()));
  }
};
