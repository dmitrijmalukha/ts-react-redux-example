import {
  ErrorsActionType,
  IStateErrors,
} from "../interfaces/errors.interfaces";
import { ErrorsTypes } from "../types";

export const initState: IStateErrors = {
  alert: "",
};

const ErrorsReducer = (state = initState, action: ErrorsActionType) => {
  switch (action.type) {
    case ErrorsTypes.SET_ERROR: {
      return { ...state, alert: action.payload.alert };
    }
    case ErrorsTypes.UNSET_ERROR: {
      return { ...state, alert: "" };
    }
    default:
      return state;
  }
};

export default ErrorsReducer;
