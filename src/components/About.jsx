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
        Hello! I am Arif and I have been working as a cameraman and technical director in the media industry for 12 years. Thanks to my experience, I have become an expert in live broadcast equipment, Uplink, direction, sound, and lighting.
        </p>
        <p>On my portfolio website, you can find a range of video examples that showcase my work on various projects. I always strive to deliver creative and high-quality video shoots that meet the needs of my clients. I have worked on various types of videos, including live broadcasts, commercials, short films, and documentaries.
        </p>
        <p>
        
        By browsing my portfolio website, you can get a better sense of my work and the high-quality standards that I uphold as a professional cameraman and technical director. If you want to avoid any technical difficulties and ensure the best results for your projects, I believe that working with me is the right choice.
        </p>

        <div className="w3-row w3-center w3-padding-16 w3-section w3-light-grey">
          <div className="w3-quarter w3-section">
            <span className="w3-xlarge">12+</span>
            <br />
            Years of Experiences
          </div>
          <div className="w3-quarter w3-section">
            <span className="w3-xlarge">35+</span>
            <br />
            Projects Done
          </div>
          <div className="w3-quarter w3-section">
            <span className="w3-xlarge">19+</span>
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
          <br/>
          {/* <h3 className="w3-center">...</h3> */}
        </div>
      </div>
    </>
  );
}

export default About;
