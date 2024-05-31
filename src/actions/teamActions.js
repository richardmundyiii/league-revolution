import {
  fetchTeamStart,
  fetchTeamSuccess,
  fetchTeamFailure,
  addTeam,
} from "../reducers/teamReducer";

export const fetchTeams = (divisionId) => async (dispatch) => {
  dispatch(fetchTeamStart());

  try {
    const response = await fetch(`/api/teams/${divisionId}`);
    const data = await response.json();
    dispatch(fetchTeamSuccess(data));
  } catch (error) {
    dispatch(fetchTeamFailure(error.toString()));
  }
};

export const createTeam = (team) => async (dispatch) => {
  dispatch(fetchTeamStart());

  try {
    const response = await fetch(`/api/teams`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(team),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    dispatch(addTeam(data));
  } catch (error) {
    dispatch(fetchTeamFailure(error.toString()));
  }
};
