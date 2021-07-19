import { combineReducers } from "redux";
import users from "./users.reducers";

const rootReducer = combineReducers({
  users: users,
});
export default rootReducer;
