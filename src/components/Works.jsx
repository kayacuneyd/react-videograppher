import React from "react";
import arif1 from "../assets/img/arif-1.jpeg";
import arif2 from "../assets/img/arif-2.jpeg";
import arif3 from "../assets/img/arif-3.jpeg";
import arif4 from "../assets/img/arif-4.jpeg";
import arif5 from "../assets/img/arif-5.jpeg";

function Works() {
  return (
    <>
      <div className="w3-padding-64 w3-content" id="photos">
        <div className="w3-row-padding" style={{ margin: "0 -16px" }}>
          <h2 className="w3-text-light-grey w3-center">Me at Work</h2>
          <div className="w3-half">
            <img
              src={arif1}
              style={{ width: "100%" }}
              alt="portfolio_works-1"
            />
            <img
              src={arif3}
              style={{ width: "100%" }}
              alt="portfolio_works-2"
            />
            <img
              src={arif5}
              style={{ width: "100%" }}
              alt="portfolio_works-3"
            />
          </div>

          <div className="w3-half">
            <img
              src={arif2}
              style={{ width: "100%" }}
              alt="portfolio_works-5"
            />
            <img
              src={arif4}
              style={{ width: "100%" }}
              alt="portfolio_works-6"
            />
          </div>
        </div>
      </div>
      <div
        loading="lazy"
        data-mc-src="663c07fd-2953-4d3c-bbd0-5edcdd527f59#instagram"
      ></div>
    </>
  );
}

export default Works;
