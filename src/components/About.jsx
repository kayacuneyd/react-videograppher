import React from "react";
import power from "../assets/img/power-group.jpeg";

function About() {
  return (
    <>
      <div
        className="w3-content w3-justify w3-text-grey w3-padding-64"
        id="about"
      >
        <h2 className="w3-text-light-grey">A little about me</h2>
        <hr style={{ width: "200px" }} className="w3-opacity" />
        <p>
          Some text about me. Some text about me. I am lorem ipsum consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>

        <div className="w3-row w3-center w3-padding-16 w3-section w3-light-grey">
          <div className="w3-quarter w3-section">
            <span className="w3-xlarge">11+</span>
            <br />
            Partners
          </div>
          <div className="w3-quarter w3-section">
            <span className="w3-xlarge">55+</span>
            <br />
            Projects Done
          </div>
          <div className="w3-quarter w3-section">
            <span className="w3-xlarge">89+</span>
            <br />
            Happy Clients
          </div>
          <div className="w3-quarter w3-section">
            <span className="w3-xlarge">150+</span>
            <br />
            Meetings
          </div>
        </div>

        <div className="w3-half">
          <h3 className="w3-padding-16 w3-text-light-grey">My Skills</h3>
          <p className="w3-wide">Photography</p>
          <div className="w3-white">
            <div
              className="w3-dark-grey"
              style={{ height: "28px;width:95%" }}
            ></div>
          </div>
          <p className="w3-wide">Final cut7/Final cut proX</p>
          <div className="w3-white">
            <div
              className="w3-dark-grey"
              style={{ height: "28px;width:85%" }}
            ></div>
          </div>
          <p className="w3-wide">Adobe Premiere</p>
          <div className="w3-white">
            <div
              className="w3-dark-grey"
              style={{ height: "28px;width:80%" }}
            ></div>
          </div>
          <p className="w3-wide">MS Office</p>
          <div className="w3-white">
            <div
              className="w3-dark-grey"
              style={{ height: "28px;width:80%" }}
            ></div>
          </div>
          <p className="w3-wide">Vmix</p>
          <div className="w3-white">
            <div
              className="w3-dark-grey"
              style={{ height: "28px;width:80%" }}
            ></div>
          </div>

          <button className="w3-button w3-light-grey w3-padding-large w3-section">
            <i className="fa fa-download"></i> Download Resume
          </button>
        </div>

        <div className="w3-half">
          <h3 className="w3-padding-24 w3-text-light-grey">Work History</h3>
          <img
            src="https://cdnassets.aa.com.tr/assets/newVersion/images/footerlogo.png"
            alt="Avatar"
            className="w3-left w3-circle w3-margin-right"
            style={{ width: "80px" }}
          />
          <p>
            <span className="w3-large w3-margin-right">Anadolu Agency.</span>
            Cameraman
          </p>
          <p>Started at the Agency in 2021.</p>
          <br />

          <img
            src={power}
            alt="Avatar"
            className="w3-left w3-circle w3-margin-right"
            style={{ width: "80px", height: "80px" }}
          />
          <p>
            <span className="w3-large w3-margin-right">Power Media Group</span>
            Cameraman
          </p>
          <p>Worked until 2020.</p>
        </div>
      </div>
    </>
  );
}

export default About;
