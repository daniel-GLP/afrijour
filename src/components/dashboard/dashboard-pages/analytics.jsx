import React from "react";
import "./../dashboard-layout.css";
import LeftPanel from "../components/left-panel";
import TopPanel from "../components/top-panel";
import FooterPanel from "../components/footer-panel";

const Analytics = () => {
  return (
    <div className="wrapper">
      <div
        className="container"
        style={{ overflow: "hidden", maxWidth: "-webkit-fill-available" }}
      >
        <div className="left-panel">
          <LeftPanel />
        </div>
        <div className="top-panel">
          <TopPanel />
        </div>
        <div className="main-content">
          {/* Main Content */}
          <h1>Analytics Content</h1>
          <p>This is where your Analytics content goes.</p>
          <FooterPanel />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
