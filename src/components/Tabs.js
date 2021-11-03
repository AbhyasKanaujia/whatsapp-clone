import React from "react";
import "./Tabs.css";

const Tabs = () => {
  return (
    <div className="tabs">
      <div>
        <i className="fa fa-camera"></i>
      </div>
      <div className="active-tab">CHATS</div>
      <div>STATUS</div>
      <div>CALLS</div>
    </div>
  );
};

export default Tabs;
