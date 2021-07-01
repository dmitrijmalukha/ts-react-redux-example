import { ErrorsTypes } from "../types";

export interface IStateErrors {
  alert: string;
}
interface ISetErrors {
  type: typeof ErrorsTypes.SET_ERROR;
  payload: { alert: string };
}

interface IUNSetErrors {
  type: typeof ErrorsTypes.UNSET_ERROR;
}

export type ErrorsActionType = ISetErrors | IUNSetErrors;
