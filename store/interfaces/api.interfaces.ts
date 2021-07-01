import { ApiTypes } from "../types";

export interface IStateApi {
  loading: boolean;
  loaded: boolean;
}

export interface IFetchPayload {
  url: string;
  method: "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
  data?: any;
  headers?: any[];
  onSuccess?: Function;
  onSuccessCustom?: Function;
  onFailure?: Function;
  onFailureCustom?: Function;
}

interface IFetchData {
  type: typeof ApiTypes.FETCH_DATA;
  payload: IFetchPayload;
}

interface ISetLoading {
  type: typeof ApiTypes.LOADING_DATA;
  payload: { loading: boolean };
}

interface ISetLoaded {
  type: typeof ApiTypes.LOADED_DATA;
  payload: { loaded: boolean };
}

export type ApiActionType = IFetchData | ISetLoaded | ISetLoading;
