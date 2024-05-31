import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSeason, fetchSeasons } from "../../actions/seasonActions";

const NewSeason = () => {
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const dispatch = useDispatch();
  const seasonState = useSelector(
    (state) => state.season || { loading: false, error: null }
  ); // Ensure season state is defined
  const loading = seasonState.loading;
  const error = seasonState.error;

  async function handleSubmit(evt) {
    evt.preventDefault();
    await dispatch(createSeason({ name, year }));
    dispatch(fetchSeasons());
  }

  return (
    <div>
      <h2>Create a New Season</h2>
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
        <button type="submit" disabled={loading}>
          {loading ? "Creating..." : "Create Season"}
        </button>
      </form>
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default NewSeason;
