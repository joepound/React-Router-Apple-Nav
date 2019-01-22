import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";

import "./Nav.scss";

import NavParent from "./NavParent.js";
import NavChildren from "./NavChild.js";

import navCategoryData from "../../navCategoryData.js";

const NavWrapper = props => {
  return (
    <nav className="apple-nav">
      <NavParent />
      <NavChildren navCategoryData={navCategoryData[0]} />
    </nav>
  );
};

export default NavWrapper;
