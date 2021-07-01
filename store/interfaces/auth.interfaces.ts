import { AuthTypes } from "../types";
import { IStateSavedQuiz } from "./saved-quiz.interfaces";

export interface IStateAuth {
  email: string;
  name: string;
  googleId: string;
  id: number | null;
  access_token: string;
  expires_in: string;
  sendOwlOrderId: string;
  userQuiz: IStateSavedQuiz;
}

interface ISetAuthData {
  type: typeof AuthTypes.SET_AUTH_DATA;
  payload: { data: IStateAuth };
}

interface ILogoutGoogle {
  type: typeof AuthTypes.GOOGLE_LOGOUT;
}

interface ILogout {
  type: typeof AuthTypes.LOGOUT;
}

interface ISetEmail {
  type: typeof AuthTypes.SET_EMAIL;
  payload: { email: string };
}

interface ISetUserName {
  type: typeof AuthTypes.SET_USER_NAME;
  payload: { name: string };
}

export type AuthActionType =
  | ISetAuthData
  | ILogoutGoogle
  | ILogout
  | ISetEmail
  | ISetUserName;
