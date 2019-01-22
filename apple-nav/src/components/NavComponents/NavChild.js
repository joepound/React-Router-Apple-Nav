import React from "react";
import PropTypes from "prop-types";

import "./Nav.scss";

const NavChild = props => {
  const products = Array(5).fill(props.navCategoryData);

  return (
    <ul className="apple-nav__subcategory">
      {products.map((product, i) => (
        <li className="apple-nav__subcategory__item">
          <img
            className="apple-nav__subcategory__item__icon"
            src={product.icon}
            alt=""
          />
          <div className="apple-nav__subcategory__item__name">
            {`${product.productName} ${i + 1}`}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default NavChild;
