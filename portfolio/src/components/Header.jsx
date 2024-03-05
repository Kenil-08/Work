// Header.js
import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <nav>
        <div className="brand">Kenil Kanani</div>
        <div className="links">
          <NavLink className={"link"} to="/">
            Home
          </NavLink>
          <NavLink className={"link"} to="/about">
            About
          </NavLink>
          <NavLink className={"link"} to="/projects">
            Projects
          </NavLink>
          <NavLink className={"link"} to="/contact">
            Contact
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Header;
