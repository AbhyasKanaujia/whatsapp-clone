import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div>WhatsApp</div>
      <div className="menu">
        <i className="fa fa-search"></i>
        <i className="fa fa-ellipsis-v"></i>
      </div>
    </div>
  );
};

export default Header;
