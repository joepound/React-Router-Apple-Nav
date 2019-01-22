import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";

import "./Nav.scss";

import NavParent from "./NavParent.js";
import NavChildren from "./NavChildren.js";

const NavWrapper = props => {
  return (
    <nav className="apple-nav">
      <NavParent />
    </nav>
  );
};

export default NavWrapper;
