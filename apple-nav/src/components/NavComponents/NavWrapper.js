import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";

import "./Nav.scss";

import NavParent from "./NavParent.js";
import NavChildren from "./NavChild.js";

import navCategoryData from "../../navCategoryData.js";

const NavWrapper = props => {
  const categories = navCategoryData;

  return (
    <nav className="apple-nav">
      <NavParent categories={categories.map(category => category.categoryName)} />
      <Route exact path="/" />
      {categories.map(category => (
        <Route
          path={`/${category.categoryName.toLowerCase()}`}
          render={props => (
            <NavChildren {...props} products={category.products} />
          )}
        />
      ))}
    </nav>
  );
};

export default NavWrapper;
