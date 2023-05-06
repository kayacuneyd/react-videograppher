import React from "react";
import logo from "../assets/img/logo_kayacan.png";

function Footer() {
  return (
    <>
      <footer className="w3-container w3-padding-24">
        <div className="w3-row-padding">
          <div className="w3-half w3-center w3-padding-tb">
            <p>
              Bir çok platformda olduğu gibi beni sosyal medyadan da takip edebilirsiniz.
              <br /> 
            </p>
            <a href="https://www.facebook.com/arif.kayacan.967" target="_blank" rel="noreferrer" style={{ fontSize: "20px" }}>
              <i className="fa fa-facebook-official w3-hover-opacity" />
            </a>
            <a href="https://www.instagram.com/arfkycn/" target="_blank" rel="noreferrer" style={{ fontSize: "20px" }}>
              <i
                className="fa fa-instagram w3-hover-opacity"
                style={{ width: "70px" }}
              />
            </a>
          </div>

          <div className="w3-half w3-center">
            <img src={logo} alt="logo" width="250px" />
          </div>
        </div>
        <div className="w3-row-padding w3-center">
          <p>
            Powered by{" "}
            <a href="https://kayacuneyt.com" target="_blank" rel="noreferrer">
              Cüneyt Kaya
            </a>
            - 2023
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
