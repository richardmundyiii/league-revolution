import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeams } from "../../actions/teamActions";
import { useNavigate } from "react-router-dom";

export default function ShowTeams() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const teams = useSelector((state) => state.team.teams);
  const loading = useSelector((state) => state.team.loading);
  const error = useSelector((state) => state.team.error);

  useEffect(() => {
    dispatch(fetchTeams());
  }, [dispatch]);

  if (loading) {
    return <p>Loading teams...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <h1>Show Teams</h1>
      {teams.length > 0 ? (
        <>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Venue</th>
              </tr>
            </thead>
            <tbody>
              {teams.map((team) => (
                <tr key={team._id}>
                  <td>{team.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <p>No Teams Available...</p>
      )}
    </>
  );
}
