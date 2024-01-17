import React from "react";
import { NavLink } from "react-router-dom";
import "./shop-header.scss";

const ShopHeader = ({ numItems, total }) => {
  return (
    <header className="shop-header row">
      <NavLink to="/" className="logo text-dark">
        ReStore
      </NavLink>
      <NavLink to="/cart" className="shopping-cart">
        <i className="cart-icon fa fa-shopping-cart" />
        {numItems} items (${total})
      </NavLink>
    </header>
  );
};

export default ShopHeader;
