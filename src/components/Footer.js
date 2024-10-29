import React from "react";
import { Link } from "react-router-dom";
import "../gallery/style/Footer.css";
import logo from "../gallery/images/Logo-white.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="Logo" />
        </div>
        <ul className="footer-links">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/restaurants">RESTAURANTS</Link>
          </li>
          <li>
            <Link to="/aboutUs">ABOUT US</Link>
          </li>
          <li>
            <Link to="/contactUs">CONTACT US</Link>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Toters Delivery. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
