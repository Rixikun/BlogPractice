import React from "react";
import { Link } from "react-router-dom";

function StaticHeader() {
  return (
    <div>
      Static Header
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default StaticHeader;
