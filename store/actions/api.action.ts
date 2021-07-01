import { ApiActionType, IFetchPayload } from "../interfaces/api.interfaces";
import { ApiTypes } from "../types";
import agent from "../../utils/agent";

export function fetchData({
  url,
  method,
  data,
  onSuccess,
  onSuccessCustom,
  onFailure,
  onFailureCustom,
  headers,
}: IFetchPayload) {
  return (dispatch: Function) => {
    dispatch(setLoading(true));
    dispatch(setLoaded(false));
    agent({
      url,
      method,
      headers,
      data,
    })
      .then(({ data }) => {
        dispatch(setLoaded(true));
        if (onSuccessCustom) {
          onSuccessCustom(data);
          return;
        }
        if (onSuccess) {
          dispatch(onSuccess(data));
        }
      })
      .catch((err: any) => {
        const message = err.response.data?.message
          ? err.response.data.message
          : err.response.data.error;
        if (onFailure) {
          dispatch(onFailure(message));
        }
        if (onFailureCustom) {
          onFailureCustom();
        }
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  };
}

export const setLoading = (loading: boolean): ApiActionType => ({
  type: ApiTypes.LOADING_DATA,
  payload: { loading },
});

export const setLoaded = (loaded: boolean): ApiActionType => ({
  type: ApiTypes.LOADED_DATA,
  payload: { loaded },
});
