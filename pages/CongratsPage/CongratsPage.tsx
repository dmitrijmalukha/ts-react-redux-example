import { Button, Col, Row } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import SubHeader from "../../components/SubHeader/SubHeader";
import { IRootState } from "../../store/interfaces";

import "./styles.css";

const CongratsPage: React.FC = () => {
  const {
    common: { progress },
    auth: { access_token, sendOwlOrderId },
    savedQuiz: { sheetsId },
  } = useSelector((state: IRootState) => state);

  return (
    <>
      <SubHeader
        title="Text"
        text="Text"
        progressLine={progress}
      />
      <Row className="congrats-page">
        <Row className="width100 congrats-row">
          <Col span={12}>
            <p>Text</p>
          </Col>
          <Col span={12}>
            <Row justify="end" className="width100 congrats-row">
              <a
                className="btn-link"
                rel="noreferrer"
                href={`url`}
              >
                <Button className="secondary-btn">Text</Button>
              </a>
            </Row>
          </Col>
        </Row>
        <Row className="width100 congrats-row">
          <Col span={12}>
            <p>Text</p>
          </Col>
          <Col span={12}>
            <Row justify="end" className="width100 congrats-row">
              {!sendOwlOrderId && (
                <Button className="primary-btn">
                  <a
                    href="url"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <p>Text</p>
                  </a>
                  <script
                    type="text/javascript"
                    src="https://transactions.sendowl.com/assets/sendowl.js"
                  ></script>
                </Button>
              )}
            </Row>
          </Col>
        </Row>
        {!access_token && (
          <Row className="width100 congrats-row">
            <Col span={12}>
              <p>Text</p>
            </Col>
            <Col span={12}>
              <Row justify="end" className="width100 congrats-row">
                <Link className="btn-link" to={'url'}>
                  <Button className="secondary-btn">Text</Button>
                </Link>
              </Row>
            </Col>
          </Row>
        )}
      </Row>
    </>
  );
};

export default CongratsPage;
