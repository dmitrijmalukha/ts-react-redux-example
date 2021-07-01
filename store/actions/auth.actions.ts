import { AuthActionType, IStateAuth } from "../interfaces/auth.interfaces";
import { AuthTypes } from "../types";

export const setAuthData = (data: IStateAuth): AuthActionType => ({
  type: AuthTypes.SET_AUTH_DATA,
  payload: { data },
});

export const logoutGoogle = (): AuthActionType => ({
  type: AuthTypes.GOOGLE_LOGOUT,
});

export const logout = (): AuthActionType => ({
  type: AuthTypes.LOGOUT,
});

export const setEmail = (email: string): AuthActionType => ({
  type: AuthTypes.SET_EMAIL,
  payload: { email },
});

export const setUserName = (name: string): AuthActionType => ({
  type: AuthTypes.SET_USER_NAME,
  payload: { name },
});
