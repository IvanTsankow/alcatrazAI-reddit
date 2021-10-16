import React from "react";

import "./Landing.css";
import Navbar from "../navbar/Navbar";
import Posts from "./../posts/Posts"

const Landing = () =>  {
  return (
    <div>
      <Navbar />
      <Posts />
    </div>
  );
}

export default Landing;