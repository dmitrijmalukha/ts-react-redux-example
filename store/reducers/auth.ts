import { AuthActionType, IStateAuth } from "../interfaces/auth.interfaces";
import { IStateSavedQuiz } from "../interfaces/saved-quiz.interfaces";
import { AuthTypes } from "../types";

const initState: IStateAuth = {
  access_token: "",
  email: "",
  expires_in: "",
  id: null,
  googleId: "",
  name: "",
  sendOwlOrderId: "",
  userQuiz: {} as IStateSavedQuiz,
};

const AuthReducer = (state = initState, action: AuthActionType) => {
  switch (action.type) {
    case AuthTypes.SET_AUTH_DATA: {
      return {
        ...state,
        ...action.payload.data,
        userQuiz: action.payload.data.userQuiz || {},
      };
    }
    case AuthTypes.GOOGLE_LOGOUT: {
      return { ...state, ...initState };
    }
    case AuthTypes.LOGOUT: {
      return { ...state, ...initState };
    }
    case AuthTypes.SET_EMAIL: {
      return { ...state, email: action.payload.email };
    }
    case AuthTypes.SET_USER_NAME: {
      return { ...state, name: action.payload.name };
    }
    default:
      return state;
  }
};

export default AuthReducer;
