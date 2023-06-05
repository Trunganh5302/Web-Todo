import React from "react";
import "../header/header.css"; // Import file CSS cho Header
import { FaBars, FaHome, FaSearch, FaBell, FaUser } from "react-icons/fa";

function header() {
  return (
    <header className="header">
      <div className="Wrapper">
        <div className="menu-icon">
          <FaBars />
        </div>
        <div className="logo"><FaHome /></div>
        <div className="search-bar">
          <input type="text" placeholder="Search" />
          <FaSearch className="search-icon" />
        </div>
      </div>
      <div className="header-icons">
        <FaBell className="icon" />
        <FaUser className="icon" />
      </div>
    </header>
  );
}

export default header;
