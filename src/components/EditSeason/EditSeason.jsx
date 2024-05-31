import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { fetchSeasons, updateSeason } from "../../actions/seasonActions";

const EditSeason = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const seasons = useSelector((state) => state.season.seasons);
  const season = seasons.find((season) => season._id === id);

  const [name, setName] = useState("");
  const [year, setYear] = useState("");

  useEffect(() => {
    if (season) {
      setName(season.name);
      setYear(season.year);
    } else {
      dispatch(fetchSeasons());
    }
  }, [season, dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(updateSeason({ id, name, year }));
    navigate("/admin");
  };

  return (
    <div>
      <h2>Edit Season</h2>
      {season ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Season Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="year">Year:</label>
            <input
              type="number"
              id="year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              required
            />
          </div>
          <button type="submit">Save</button>
        </form>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default EditSeason;
