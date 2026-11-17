import React from "react";
import { Link } from "react-router";
const Nav = () => {
  return (
    <nav>
      <Link to="/">Home Page</Link>
      <Link to="/products">Products</Link>
      <Link to="/new-product">Create Product</Link>
    </nav>
  );
};

export default Nav;
