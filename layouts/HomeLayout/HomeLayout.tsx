import React, { JSX } from "react";
import { Link } from "react-router-dom";
import Layout from "antd/lib/layout";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import Button from "antd/lib/button";
import "./styles.css";

const { Header, Content, Footer } = Layout;

interface IHomeLayout {
  children: JSX.Element | JSX.Element[];
}

const HomeLayout = ({ children }: IHomeLayout) => {
  return (
    <Layout className="home-layout">
      <Header className="header">
        <Row justify="start" align="middle">
          <Col span={12}>
            <Row justify="start" align="middle">
              <Col span={12}>
                <div className="home-logo" />
              </Col>
            </Row>
          </Col>
          <Col span={12}>
            <Row justify="end" align="middle">
              <Col span={5}>
                <Link to={'url'}>
                  <Button className="menu-btn">Text</Button>
                </Link>
              </Col>
              <Col span={5}>
                <a
                  target="blank"
                  href={'url'}
                  className="sub-menu"
                >
                  <Button className="menu-btn">Text</Button>
                </a>
              </Col>
              <Col span={5}>
                <Link to={'url'}>
                  <Button className="menu-btn">Text</Button>
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Header>
      <Content className="content">{children}</Content>
      <Footer className="footer">
        <Row justify="center">
          Text
        </Row>
      </Footer>
    </Layout>
  );
};

export default HomeLayout;
