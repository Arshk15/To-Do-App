import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header({ title = "My Todo App" }) {
  return (
    <nav className="glass-nav">
      <div className="nav-left">
        <h2 className="brand">{title}</h2>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>

      <div className="search-box">
        <input type="search" placeholder="Search..." />
      </div>
    </nav>
  );
}

export default Header;
