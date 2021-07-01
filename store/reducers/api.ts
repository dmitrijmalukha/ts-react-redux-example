import { ApiTypes } from "../types";
import { ApiActionType, IStateApi } from "../interfaces/api.interfaces";

export const initState: IStateApi = {
  loaded: false,
  loading: false,
};

const ApiReducer = (state = initState, action: ApiActionType) => {
  switch (action.type) {
    case ApiTypes.LOADED_DATA: {
      return { ...state, loaded: action.payload.loaded };
    }
    case ApiTypes.LOADING_DATA: {
      return { ...state, loading: action.payload.loading };
    }
    default:
      return state;
  }
};

export default ApiReducer;
