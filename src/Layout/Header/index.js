import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
// import Logo from "../../Assets/img/logo.png";
// import classes from "./style.module.css";

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md bg-warning navbar-warning">
        {/* Brand */}
        <Link
          to="/"
          className="navbar-brand"
          href="#"
          style={{
            border: "5px solid white",
            background: "white",
            fontWeight: "bold",
            borderRadius: "10px",
          }}
        >
          {/* <img src={Logo} className={classes.logo} alt="logo" /> */}
          WEB COURSES
        </Link>
        {/* Toggler/collapsibe Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon" />
        </button>
        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <NavLink
                activeStyle={{ color: "red" }}
                exact
                to="/"
                className="nav-link "
                href="#"
                style={{ fontWeight: "bold" }}
              >
                Trang Chủ
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav ">
            <li className="nav-item">
              <NavLink
                activeStyle={{ color: "red" }}
                to="/signup"
                className="nav-link"
                href="#"
                style={{ fontWeight: "bold" }}
              >
                Đăng Ký
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeStyle={{ color: "red" }}
                to="/signin"
                className="nav-link"
                href="#"
                style={{ fontWeight: "bold" }}
              >
                Đăng Nhập
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default Header;
