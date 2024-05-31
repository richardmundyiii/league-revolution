import {
  fetchPlayerStart,
  fetchPlayerSuccess,
  fetchPlayerFailure,
  addPlayer,
} from "../reducers/playerReducer";

export const fetchPlayers = (teamId) => async (dispatch) => {
  dispatch(fetchPlayerStart());

  try {
    const response = await fetch(`/api/players/${teamId}`);
    const data = await response.json();
    dispatch(fetchPlayerSuccess(data));
  } catch (error) {
    dispatch(fetchPlayerFailure(error.toString()));
  }
};

export const createPlayer = (player) => async (dispatch) => {
  dispatch(fetchPlayerStart());

  try {
    const response = await fetch(`/api/players`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(player),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    dispatch(addPlayer(data));
  } catch (error) {
    dispatch(fetchPlayerFailure(error.toString()));
  }
};
