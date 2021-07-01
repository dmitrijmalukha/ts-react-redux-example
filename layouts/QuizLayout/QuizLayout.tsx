import React, { useEffect, JSX } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Layout from "antd/lib/layout";
import Row from "antd/lib/row";
import Button from "antd/lib/button";
import Menu from "antd/lib/menu";

import { IRootState } from "../../store/interfaces";
import "./styles.css";
import { GoogleLogout } from "react-google-login";
import { logoutGoogle } from "../../store/actions/auth.actions";
import { logout } from "../../store/actions/auth.actions";
import { GOOGLE_CLIENT_ID } from "../../constants/google-id.constant";

const { Header, Content, Sider } = Layout;

interface IQuizLayout {
  children: JSX.Element | JSX.Element[];
}

const QuizLayout = ({ children }: IQuizLayout) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const {
    auth: { email, name, googleId, access_token },
  } = useSelector((state: IRootState) => state);

  useEffect(() => {
    if (!email || !name) {
      history.push('url');
    }
  }, [email, name]);

  const handleGoogleLogout = () => {
    dispatch(logoutGoogle());
  };

  const handleLogout = () => {
    dispatch(logout());
    history.push('url');
  };

  return (
    <Layout className="quiz-layout">
      <Sider className="site-layout-background">
        <div className="logo" />
        <Menu selectedKeys={[pathname]} mode="inline">
          <Menu.Item key={'url'}>
            <Link to={'url'}>Text</Link>
          </Menu.Item>
          <Menu.Item key={'url'}>
            <Link to={'url'}>Text</Link>
          </Menu.Item>
          <Menu.Item key={'url'}>
            <Link to={'url'}>Text</Link>
          </Menu.Item>
          {!access_token && (
            <Menu.Item key={'url'}>
              <Link to={'url'}>Text</Link>
            </Menu.Item>
          )}
        </Menu>
      </Sider>
      <Layout>
        <Header className="header">
          <Row justify="end" className="header-content-row">
            <div className="header-user-name">
              <p>Text {name}!</p>
            </div>
            {googleId ? (
              <div className="googleBtn-box">
                <GoogleLogout
                  clientId={GOOGLE_CLIENT_ID}
                  buttonText="Logout"
                  onLogoutSuccess={handleGoogleLogout}
                >
                  <p>Log out </p>
                </GoogleLogout>
              </div>
            ) : (
              <div className="header-user-btn">
                <Button
                  disabled={!access_token}
                  onClick={handleLogout}
                  type="text"
                >
                  <p> Log out</p>
                </Button>
              </div>
            )}
          </Row>
        </Header>
        <Row className="content-border">
          <Content className="content">{children}</Content>
        </Row>
      </Layout>
    </Layout>
  );
};

export default QuizLayout;
