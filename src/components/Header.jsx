import React from "react";
import profile from "../assets/img/arifkycn.png";

function Header() {
  return (
    <>
      <header
        className="w3-container w3-padding-32 w3-center w3-black"
        id="home"
      >
        <h1 className="w3-jumbo">
          <span className="w3-hide-small">I'm</span> Arif M. Kayacan.
        </h1>
        <p>Videographer.</p>
        <img src={profile} alt="boy" className="w3-image" />
      </header>
    </>
  );
}

export default Header;
