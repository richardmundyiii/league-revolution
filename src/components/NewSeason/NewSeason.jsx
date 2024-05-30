import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSeason } from "../../actions/seasonActions";

const NewSeason = () => {
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.season.loading);
  const error = useSelector((state) => state.season.error);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createSeason({ name, year }));
  };

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
