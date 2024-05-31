import { combineReducers } from "redux";
import seasonReducer from "./seasonReducer";
import divisionReducer from "./divisionReducer";

const rootReducer = combineReducers({
  season: seasonReducer,
  division: divisionReducer,
});

export default rootReducer;
