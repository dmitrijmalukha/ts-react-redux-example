import pick from "lodash/pick";

import { fetchData } from "../store/actions/api.action";
import { setAuthData } from "../store/actions/auth.actions";
import { setError } from "../store/actions/errors.actions";

export const googleAuthSuccess = (dispatch: Function) => (res: any) => {
  dispatch(
    fetchData({
      url: "/auth/google-registration",
      method: "POST",
      data: pick(res.profileObj, ["email", "name", "googleId"]),
      onSuccess: setAuthData,
      onFailure: setError,
    })
  );
};

export const googleAuthFailure = (dispatch: Function) => (res: any) => {
  dispatch(setError(res?.error?.message));
};
