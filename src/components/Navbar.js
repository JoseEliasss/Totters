import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../gallery/style/Navbar.css";
import logo from "../gallery/images/logo.png";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <ul className="nav-links">
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
        <div className="burger" onClick={toggleSidebar}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* Overlay */}
      <div className={`overlay ${isSidebarOpen ? "show" : ""}`} onClick={toggleSidebar}></div>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={toggleSidebar}>X</button>
        <ul>
          <li>
            <Link to="/" onClick={toggleSidebar}>HOME</Link>
          </li>
          <li>
            <Link to="/restaurants" onClick={toggleSidebar}>RESTAURANTS</Link>
          </li>
          <li>
            <Link to="/aboutUs" onClick={toggleSidebar}>ABOUT US</Link>
          </li>
          <li>
            <Link to="/contactUs" onClick={toggleSidebar}>CONTACT US</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
