import { combineReducers } from "redux";
import seasonReducer from "./seasonReducer";
import divisionReducer from "./divisionReducer";
import teamReducer from "./teamReducer";

const rootReducer = combineReducers({
  season: seasonReducer,
  division: divisionReducer,
  team: teamReducer,
});

export default rootReducer;
