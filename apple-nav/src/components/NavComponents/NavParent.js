import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import "./Nav.scss";

const NavParent = props => {
  return (
    <ul className="apple-nav__categories">
      <li className="apple-nav__categories__item">
        <img
          className="apple-nav__categories__item--image"
          src="images/nav/nav-logo.png"
          alt=""
        />
      </li>
      <li className="apple-nav__categories__item">Mac</li>
      <li className="apple-nav__categories__item">iPad</li>
      <li className="apple-nav__categories__item">iPhone</li>
      <li className="apple-nav__categories__item">Watch</li>
      <li className="apple-nav__categories__item">TV</li>
      <li className="apple-nav__categories__item">Music</li>
      <li className="apple-nav__categories__item">Support</li>
      <li className="apple-nav__categories__item">
        <img
          className="apple-nav__categories__item--image"
          src="images/nav/nav-search.png"
          alt="Search"
        />
      </li>
      <li className="apple-nav__categories__item">
        <img
          className="apple-nav__categories__item--image"
          src="images/nav/nav-bag.png"
          alt="Your Bag"
        />
      </li>
    </ul>
  );
};

export default NavParent;
