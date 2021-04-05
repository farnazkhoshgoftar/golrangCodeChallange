import { combineReducers } from "redux";
import { peoplesReducer } from "../index";

export const rootReducer = combineReducers({
  peoples:peoplesReducer
});
