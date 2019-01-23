import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import "./Nav.scss";

const NavParent = props => {
  return (
    <ul className="apple-nav__categories">
      <li className="apple-nav__categories__item">
        <NavLink to="/">
          <img
            className="apple-nav__categories__item--image"
            src="images/nav/nav-logo.png"
            alt=""
          />
        </NavLink>
      </li>
      {props.categories.map(category => (
        <li className="apple-nav__categories__item">
          <NavLink
            to={`/${category.toLowerCase()}`}
            activeClassName="apple-nav__categories__item--active"
          >
            {category}
          </NavLink>
        </li>
      ))}
      <li className="apple-nav__categories__item">
        <a onClick={e => alert("COMING SOON")}>Support</a>
      </li>
      <li className="apple-nav__categories__item">
        <a onClick={e => alert("COMING SOON")}>
          <img
            className="apple-nav__categories__item--image"
            src="images/nav/nav-search.png"
            alt="Search"
          />
        </a>
      </li>
      <li className="apple-nav__categories__item">
        <a onClick={e => alert("COMING SOON")}>
          <img
            className="apple-nav__categories__item--image"
            src="images/nav/nav-bag.png"
            alt="Your Bag"
          />
        </a>
      </li>
    </ul>
  );
};

export default NavParent;
