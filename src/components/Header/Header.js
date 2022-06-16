import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  // <div className="logo">
  // <img src="https://icon-library.com/images/uppercase-latin-letter-round-j-keyboard-2-512.png" height="50" width="50" alt="logo"></img>
  // </div>
  return (
    <div className=" ">
      <div>
        <div className="logo">
          <h1 style={{ color: "#64ffda" }}>J</h1>
        </div>
      </div>
      <div>
        <Link to="/about">about</Link>
        <Link to="/contact">contact</Link>
        <Link to="/resume">resume</Link>
      </div>
    </div>
  );
};

export default Header;
