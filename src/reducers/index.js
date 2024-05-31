import { combineReducers } from "redux";
import seasonReducer from "./seasonReducer";
import divisionReducer from "./divisionReducer";
import teamReducer from "./teamReducer";
import playerReducer from "./playerReducer";
import venueReducer from "./venueReducer";

const rootReducer = combineReducers({
  season: seasonReducer,
  division: divisionReducer,
  team: teamReducer,
  player: playerReducer,
  venue: venueReducer,
});

export default rootReducer;
