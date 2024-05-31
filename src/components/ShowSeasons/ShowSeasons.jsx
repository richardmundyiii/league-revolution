import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSeasons } from "../../actions/seasonActions";
import { useNavigate } from "react-router-dom";

export default function ShowSeasons() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const seasons = useSelector((state) => state.season.seasons);
  const loading = useSelector((state) => state.season.loading);
  const error = useSelector((state) => state.season.error);

  useEffect(() => {
    dispatch(fetchSeasons());
  }, [dispatch]);

  if (loading) {
    return <p>Loading seasons...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <h1>Show Seasons</h1>
      {seasons.length > 0 ? (
        <>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Year</th>
                <th>Active</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {seasons.map((season) => (
                <tr key={season._id}>
                  <td>{season.name}</td>
                  <td>{season.year}</td>
                  {season.isActive === false ? <td>No</td> : <td>Active</td>}
                  <td>
                    <button
                      onClick={() => navigate(`/admin/edit/${season._id}`)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <p>No Seasons Available...</p>
      )}
    </>
  );
}
