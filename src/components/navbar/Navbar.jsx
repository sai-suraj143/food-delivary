import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import search from "../../assets/search.svg";
import basket from "../../assets/basket.svg";
import { Link } from "react-router-dom";

const Navbar = ({ SetLogin }) => {
  const [menu, setMenu] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar">
      <img src={logo} alt="Logo" />

      <div
        className={`hamburger ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      ></div>

      <ul className={`navbar-middle ${isOpen ? "open" : ""}`}>
        <Link to="/">
          <li
            onClick={() => {
              setMenu("home");
              setIsOpen(false);
            }}
            className={menu === "home" ? "active" : ""}
          >
            home
          </li>
        </Link>
        <li
          onClick={() => {
            setMenu("menu");
            setIsOpen(false);
          }}
          className={menu === "menu" ? "active" : ""}
        >
          menu
        </li>
        <li
          onClick={() => {
            setMenu("mobile-app");
            setIsOpen(false);
          }}
          className={menu === "mobile-app" ? "active" : ""}
        >
          mobile-app
        </li>

        <li
          onClick={() => {
            setMenu("contact-us");
            setIsOpen(false);
          }}
          className={menu === "contact-us" ? "active" : ""}
        >
          contact us
        </li>
      </ul>

      <div className="navbar-right">
        <img src={search} alt="Search" width={20} />
        <Link to="/cart">
          <img src={basket} alt="Basket" width={30} />
        </Link>
        <button onClick={() => SetLogin(true)} className="sign-in">
          Sign-in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
