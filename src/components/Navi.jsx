import React from "react";
import logo from "../assets/img/logo_kayacan.png";

function Navi() {
  return (
    <>
      <nav className="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center w3-black">
        <img
          src={logo}
          style={{ width: "100%" }}
          alt="an avatar of smoking guy"
        />
        <a
          href="#home"
          className="w3-bar-item w3-button w3-padding-large w3-black"
        >
          <i className="fa fa-home w3-xxlarge" />
          <p>HOME</p>
        </a>
        <a
          href="#about"
          className="w3-bar-item w3-button w3-padding-large w3-hover-black"
        >
          <i className="fa fa-user w3-xxlarge" />
          <p>ABOUT</p>
        </a>
        <a
          href="#photos"
          className="w3-bar-item w3-button w3-padding-large w3-hover-black"
        >
          <i className="fa fa-eye w3-xxlarge" />
          <p>PHOTOS</p>
        </a>
        <a
          href="#contact"
          className="w3-bar-item w3-button w3-padding-large w3-hover-black"
        >
          <i className="fa fa-envelope w3-xxlarge" />
          <p>CONTACT</p>
        </a>
      </nav>
    </>
  );
}

export default Navi;
