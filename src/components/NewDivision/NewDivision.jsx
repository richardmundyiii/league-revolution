import { useState } from "react";
import { useDispatch } from "react-redux";
import { createDivision } from "../../actions/divisionActions";

export default function NewDivision({ seasonId }) {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  async function handleSubmit(evt) {
    evt.preventDefault();
    await dispatch(createDivision({ name, season: seasonId }));
    setName("");
  }

  return (
    <>
      <div>
        <h3>Create a New Division</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="divisionName">Division Name:</label>
            <input
              type="text"
              id="divisionName"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <button type="submit">Create Division</button>
        </form>
      </div>
    </>
  );
}
