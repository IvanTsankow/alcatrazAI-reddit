import React from "react";

import "./Logo.css";
import logo from "./../../../images/logo/reddit-logo-transparent.png"

const Logo = () => {
  return (
    <div className="logo hoverable">
      <img src={logo} alt="reddit icon logo"/>
      <span>reddit</span>
    </div>
  );
}

export default Logo;