import React from "react";
import { Link } from "react-router-dom";
import'./Navbar.css';

const Navbar = () => {
  return (
    <nav className="Nabb">
      <Link to="/">Home</Link>
      <Link to="/about">About us</Link>
      <Link to="/contact">Contact-us</Link>
      <Link to="/shop">Shop</Link>
    
    </nav>
  );
};

export default Navbar;
