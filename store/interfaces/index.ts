import { IStateErrors } from "./errors.interfaces";
import { IStateApi } from "./api.interfaces";
import { IStateAuth } from "./auth.interfaces";

export interface IRootState {
  errors: IStateErrors;
  api: IStateApi;
  auth: IStateAuth;
}
