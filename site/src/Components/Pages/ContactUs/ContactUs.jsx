import React from "react";
import LogoExt from "../../Icons/LogoExt";
import EmailIcon from "../../Icons/EmailIcon";
import PhoneIcon from "../../Icons/PhoneIcon";
import PositionIcon from "../../Icons/PositionIcon";
import IgIcon from "../../Icons/IgIcon";
import "./ContactStyle.css";
import LogoExtContact from "../../Icons/LogoExtContact";
import Footer from "../Footer/Footer";

const Contattaci = () => {
  return (
    <div className="contact-us">
      <h1 className="contactus-title">Contact Us</h1>

      <div className="contact-header">
        <div className="logo">
          <LogoExtContact className={"contact-logo"}/>
        </div>
        <div className="contact-info">
          <h4 className="contact-info-name">Sport & Fitness Center</h4>
          <p className="contact-info-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
            odio libero voluptas officiis voluptates maxime natus rem temporibus
            ut at magnam velit nisi pariatur non nesciunt facere eligendi? Quam,
            consequatur.
          </p>
        </div>
      </div>

      <div className="link-container">
        <h4 className="link-title">Contatti</h4>
        <p className="link-desc">Corso Italia, 257, 73040 Specchia LE</p>
        <hr />

        <div className="link-maps-field">
          <div className="link-maps-icon">
            <PositionIcon className={"contact-link-icon"}/>
          </div>
          <div className="contact-maps-link">
            <a
              className="contact-a"
              href="https://www.google.com/maps/place/A.S.R.C.+SPORT+%26+FITNESS+CENTER/@39.9429617,18.293594,19z/data=!4m15!1m8!3m7!1s0x13440e5a62d58585:0xe04eb7b18cb31809!2s73040+Specchia+LE!3b1!8m2!3d39.9411672!4d18.2999958!16zL20vMGZfbWNk!3m5!1s0x13440fcad9261467:0xef7cc9440b1ea739!8m2!3d39.9433979!4d18.2940054!16s%2Fg%2F11t4x3y8nx?entry=ttu"
            >
              A.S.R.C. SPORT & FITNESS CENTER
            </a>
          </div>
        </div>

        <div className="link-phone-field">
          <div className="link-phone-icon">
            <PhoneIcon className={"contact-link-icon"}/>
          </div>
          <div className="contact-phone-link">
            <a className="contact-a" href="tel:3358285510">
              3358285510
            </a>
          </div>
        </div>

        <div className="link-email-field">
          <div className="link-email-icon">
            <EmailIcon className={"contact-link-icon"}/>
          </div>
          <div className="contact-email-link">
            <a className="contact-a" href="mailto:provapalestra@gmail.com">
              provapalestra@gmail.com
            </a>
          </div>
        </div>

        <div className="link-ig-field">
          <div className="link-ig-icon">
            <IgIcon className={"contact-link-icon"}/>
          </div>
          <div className="contact-ig-link">
            <a className="contact-a" href="https://www.instagram.com/sportfitnesscenter.specchia/">
              @sportfitnesscenter.specchia
            </a>
          </div>
        </div>
      </div>
    
      <div className="contact-us-footer">
        <Footer />
      </div>
    </div>
  );
};

export default Contattaci;
