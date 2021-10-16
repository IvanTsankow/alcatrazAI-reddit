import React from "react";

import "./Actions.css";
import Button from "../../button/Button";

import PersonOutline from "@material-ui/icons/PersonOutline";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const Actions = () => {
  return (
    <div className="actions">
      <Button secondary label="LOG IN" />
      <Button label="SIGN UP" />
      <div className="profile">
        <PersonOutline className="hoverable" />
        <ArrowDropDownIcon className="hoverable" />
      </div>
    </div>
  );
}

export default Actions;