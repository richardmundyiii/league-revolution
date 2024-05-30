import { combineReducers } from "@reduxjs/toolkit";
import seasonReducer from "./seasonReducer";

const rootReducer = combineReducers({
  seasons: seasonReducer,
});

export default rootReducer;
