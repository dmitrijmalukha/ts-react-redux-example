import { combineReducers } from "redux";
import errors from "./errors";
import api from "./api";
import auth from "./auth";

export default combineReducers({
  errors,
  api,
  auth,
});
