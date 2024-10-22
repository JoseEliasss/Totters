import React from "react";
import { Link } from "react-router-dom";
import "../components/Navbar.css";
import logo from "../gallery/images/logo.png";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/aboutUs">ABOUT US</Link>
        </li>
        <li>
          <Link to="/restaurantList">Restaurants</Link>
        </li>
        <li>
          <Link to="/contactUs">CONTACT US</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
