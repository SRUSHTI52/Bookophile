import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
import img from '../image/cart.png';
import logo from '../image/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="brandname"><img className="logo" src={logo}/>Bookophile</div>
      <ul className="menu">
        <li><Link to="/" className="homelink">Home</Link></li>
        <li>Products</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="box">
      <img className="cart" src={img}/>
      <button className="login">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
