import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTeam } from "../../actions/teamActions";

export default function CreateTeam({ divisionId }) {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  async function handleSubmit(evt) {
    evt.preventDefault();
    await dispatch(createTeam({ name, division: divisionId }));
    setName("");
  }

  return (
    <>
      <div>
        <h3>Create A New Team</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="teamName">Team Name:</label>
            <input
              type="text"
              id="teamName"
              value={name}
              onChange={(evt) => setName(evt.target.value)}
              required
            />
          </div>
          <button type="submit">Create Team</button>
        </form>
      </div>
    </>
  );
}
