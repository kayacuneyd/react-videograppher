import React from "react";
import Footer from "./Footer";

function Contact() {
  return (
    <>
      <div className="w3-padding-large w3-content w3-text-grey" id="contact">
        <h2 className="w3-text-light-grey w3-center">Contact Me</h2>
        <hr className="w3-opacity" />
        <div className="">
          <div
            className="w3-row-padding w3-center w3-padding-24"
            style={{ margin: "0 -16px" }}
          >
            <div className="w3-third w3-dark-grey">
              <p>
                <i className="fa fa-envelope w3-xxlarge w3-text-light-grey" />
              </p>
              <p>info@arifkayacan.com</p>
            </div>
            <div className="w3-third w3-red">
              <p>
                <i className="fa fa-map-marker w3-xxlarge w3-text-light-grey" />
              </p>
              <p>İstanbul, TR</p>
            </div>
            <div className="w3-third w3-dark-grey">
              <p>
                <i className="fa fa-phone w3-xxlarge w3-text-light-grey" />
              </p>
              <p>+90 535 576 0211</p>
            </div>
          </div>
        </div>
        <br />
        <div className="w3-center">
          <p>Let's get in touch. Send me a message:</p>
          <form action="https://formsubmit.co/arfkycn@gmail.com" method="POST" target="_blank">
            <p>
              <input
                className="w3-input w3-padding-16"
                type="text"
                placeholder="Name"
                required
                name="name"
              />
            </p>
            <p>
              <input
                className="w3-input w3-padding-16"
                type="text"
                placeholder="Email"
                required
                name="email"
              />
            </p>
            <p>
              <input
                className="w3-input w3-padding-16"
                type="text"
                placeholder="Subject"
                required
                name="subject"
              />
            </p>
            <p>
              <input
                className="w3-input w3-padding-16"
                type="text"
                placeholder="Message"
                required
                name="message"
                
              />
            </p>
            <p>
              <button
                className="w3-button w3-light-grey w3-padding-large"
                type="submit"
              >
                <i className="fa fa-paper-plane"></i> SEND MESSAGE
              </button>
            </p>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Contact;
