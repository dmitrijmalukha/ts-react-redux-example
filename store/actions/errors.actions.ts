import { ErrorsActionType } from "../interfaces/errors.interfaces";
import { ErrorsTypes } from "../types";

export const setError = (alert: string): ErrorsActionType => ({
  type: ErrorsTypes.SET_ERROR,
  payload: { alert },
});

export const unsetError = (): ErrorsActionType => ({
  type: ErrorsTypes.UNSET_ERROR,
});
