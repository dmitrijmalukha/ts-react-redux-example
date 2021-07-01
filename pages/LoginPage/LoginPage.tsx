import React, { useEffect } from "react";
import Form from "antd/lib/form";
import Input from "antd/lib/input";
import Button from "antd/lib/button";
import { GoogleLogin } from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import "./styles.css";
import {
  googleAuthSuccess,
  googleAuthFailure,
} from "../../helpers/google-auth.helper";
import { GOOGLE_CLIENT_ID } from "../../constants/google-id.constant";
import { IRootState } from "../../store/interfaces";
import { setInLocalStorage } from "../../utils/localStorage";
import { fetchData } from "../../store/actions/api.action";
import { setError } from "../../store/actions/errors.actions";
import { setAuthData } from "../../store/actions/auth.actions";
import { ILoginPage } from "./interfaces";
import { calculateNextProgress } from "../../helpers/calculateProgress.helper";
import { setQuizProgress } from "../../store/actions/common.actions";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    auth: { access_token },
  } = useSelector((state: IRootState) => state);

  useEffect(() => {
    if (!access_token) {
      return;
    }
    setInLocalStorage("token", access_token);
    const progress = calculateNextProgress(0);
    dispatch(setQuizProgress(progress));
    history.push('url');
  }, [access_token, history]);

  const onSubmit = (values: ILoginPage) => {
    dispatch(
      fetchData({
        url: "url",
        method: "POST",
        data: {
          email: values.email,
          password: values.password,
        },
        onSuccess: setAuthData,
        onFailure: setError,
      })
    );
  };
  return (
    <div className="login-main">
      <div className="login-logo"></div>
      <div className="login-titiel-box">
        <h1 className="login-title">Text</h1>
      </div>
      <Form onFinish={onSubmit}>
        <div className="email-box">
          <div className="email-title">
            <p>Text</p>
          </div>
          <Form.Item name="email" rules={[{ type: "email", required: true }]}>
            <Input
              className="login-input"
              placeholder="Enter your email address"
            />
          </Form.Item>
        </div>
        <div className="password-box">
          <div className="password-title">
            <p>Text</p>
          </div>
          <Form.Item
            name="password"
            rules={[{ type: "string", required: true }]}
          >
            <Input className="login-input" placeholder="Enter your password" />
          </Form.Item>
        </div>
        <Form.Item className="btn-box">
          <Button htmlType="submit" className="login-btn">
            {" "}
            Text
          </Button>
        </Form.Item>
      </Form>
      <div className="text-box">
        <p>or</p>
      </div>
      <div className="googlelogin-btn">
        <GoogleLogin
          clientId={GOOGLE_CLIENT_ID}
          buttonText="Login with Google"
          onSuccess={googleAuthSuccess(dispatch)}
          onFailure={googleAuthFailure(dispatch)}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
        />
      </div>
    </div>
  );
};

export default Login;
