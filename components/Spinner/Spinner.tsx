import React from "react";
import Spin from "antd/lib/spin";
import { useSelector } from "react-redux";
import { IRootState } from "../../store/interfaces";
import "./styles.css";

export const Spinner: React.FC = () => {
  const {
    api: { loading },
  } = useSelector((state: IRootState) => state);
  return (
    <>
      {loading ? (
        <div className="spin-box">
          <Spin className="spin" size="large" tip="Loading ..." />
        </div>
      ) : null}
    </>
  );
};
