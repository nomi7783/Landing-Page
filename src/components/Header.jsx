import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../img/logo.png";

import { useEffect } from "react";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <NavLink className="navbar-brand" href="#" to="/">
          <img src={logo} />
        </NavLink>
        {/* <a className="navbar-brand" href="#"><img src={logo}/></a> */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Resourcing
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </div>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown1"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Download
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown1">
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </div>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Pricing
              </NavLink>
            </li>
          </ul>
          <a className="loginBtn">Login</a>
          <a className="regBtn">Register Now</a>
        </div>
      </nav>
    </>
  );
};

export default Header;
