import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import Form from "antd/lib/form";
import ReactPlayer from "react-player";
import message from "antd/lib/message";
import { GoogleLogin } from "react-google-login";

import "./styles.css";

import { setEmail } from "../../store/actions/auth.actions";
import { setError } from "../../store/actions/errors.actions";
import { EMAIL_PATTERN } from "../../constants/patterns.constants";
import { IRootState } from "../../store/interfaces";
import { fetchData } from "../../store/actions/api.action";
import { setInLocalStorage } from "../../utils/localStorage";
import { calculateNextProgress } from "../../helpers/calculateProgress.helper";
import { setQuizProgress } from "../../store/actions/common.actions";
import { GOOGLE_CLIENT_ID } from "../../constants/google-id.constant";
import {
  googleAuthSuccess,
  googleAuthFailure,
} from "../../helpers/google-auth.helper";

const formLayout = {
  wrapperCol: { span: 24 },
};

const LandingPage: React.FC = () => {
  const dispatch = useDispatch();
  const {
    auth: { access_token, name },
  } = useSelector((state: IRootState) => state);
  let history = useHistory();

  useEffect(() => {
    if (!access_token) {
      return;
    }
    setInLocalStorage("token", access_token);
    if (name) {
      const progress = calculateNextProgress(0);
      dispatch(setQuizProgress(progress));
      history.push('url');
    } else {
      history.push('url');
    }
  }, [access_token, name, dispatch, history]);

  const onStart = (data: any) => {
    const isEmail = EMAIL_PATTERN.test(data.email);
    if (!isEmail) {
      message.warning("Email not valid");
      return;
    }
    const onSuccessCustom = (isEmailValid: boolean) => {
      if (isEmailValid) {
        message.warning("Email already exist");
        setTimeout(() => {
          history.push('url');
        }, 5000);
      } else {
        dispatch(setEmail(data.email));
        history.push('url');
      }
    };
    dispatch(
      fetchData({
        url: "url",
        method: "POST",
        data: { email: data.email },
        onSuccessCustom,
        onFailure: setError,
      })
    );
  };
  return (
    <Row className="home-page">
      <Col span={24}>
        <Row>
          <Col className="homePage-mainCol" span={12}>
            <Row>
              <h1 className="home-title">Text</h1>
            </Row>
            <Row className="homePage-title-row">
              <h1 className="home-title second">Text</h1>
            </Row>
            <Row className="homePage-subTitle">
              <h2 className="sub-title">Text</h2>
            </Row>
            <Row className="homePage-form-row">
              <Form
                {...formLayout}
                className="homePage-form"
                onFinish={onStart}
              >
                <Col span={24}>
                  <Row className="googleLogin-row">
                    <Col className="homePage-googleLogin-box" span={18}>
                      <GoogleLogin
                        className="landing-google-btn"
                        clientId={GOOGLE_CLIENT_ID}
                        buttonText="Signup / Signin with Google"
                        onSuccess={googleAuthSuccess(dispatch)}
                        onFailure={googleAuthFailure(dispatch)}
                        cookiePolicy={"single_host_origin"}
                        isSignedIn={true}
                      />
                    </Col>
                  </Row>
                </Col>
              </Form>
            </Row>
          </Col>
          <Col span={12}>
            <ReactPlayer
              controls
              url="url"
            />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default LandingPage;
