import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import resume from "../../../src/Photos/resume/JasimUddin_RESUME_.pdf";
import Intro from "../AboutMe/Intro";

import "./Header.css";

const Header = () => {
  // <div className="logo">
  // <img src="https://icon-library.com/images/uppercase-latin-letter-round-j-keyboard-2-512.png" height="50" width="50" alt="logo"></img>
  // </div>
  return (
    <div className="home">
      <div className="d-flex align-center justify-content-between ms-5 me-5 mt-4 ">
        <div className="logo text-center">
          <h1 style={{ color: "#64ffda" }}>J</h1>
        </div>
        <div>
          <div className="d-flex justify-content-evenly align-center mt-2  ">
            <div className="container">
              <a href="#aboutme">
                <span className="nav-order me-1">01.</span>About
              </a>
            </div>
            <div className="container">
              <a href="/contact">
                <span className="nav-order me-1">02.</span>Experience
              </a>
            </div>
            <div className="container">
              <a href="/resume">
                <span className="nav-order me-1">03.</span>Work
              </a>
            </div>
            <div className="container">
              <a href="/resume">
                <span className="nav-order me-1">04.</span>Contact
              </a>{" "}
            </div>

            <div className="container">
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <Button variant="outline-info">RESUME</Button>{" "}
              </a>{" "}
            </div>
          </div>
        </div>
      </div>

      <Intro id="aboutme" />
      
    </div>
  );
};

export default Header;
