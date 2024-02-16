import { NavLink } from "react-router-dom";
import DeadliftIcon from "../../../Icons/DeadliftIcon";
import PositionIcon from "../../../Icons/PositionIcon";
import EmailIcon from "../../../Icons/EmailIcon";
import PhoneIcon from "../../../Icons/PhoneIcon";
import "./FooterStyle.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="first-section">
        <div className="logo">
          <DeadliftIcon />
        </div>
        <div className="company-info">
          <h4 className="company-name">Sport & Fitness Center</h4>
          <p className="company-info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
            odio libero voluptas officiis voluptates maxime natus rem temporibus
            ut at magnam velit nisi pariatur non nesciunt facere eligendi? Quam,
            consequatur.
          </p>
        </div>
      </div>

      <div className="second-section">
        <h4 className="browse-title">Browse</h4>
        <ul className="browse-nav">
          <li className="browse-item">
            <NavLink
              exact
              to="/"
              activeClassName="active"
              className="browse-link"
            >
              Home
            </NavLink>
          </li>
          <li className="browse-item">
            <NavLink
              exact
              to="/personale"
              activeClassName="active"
              className="browse-link"
            >
              Personale
            </NavLink>
          </li>
          <li className="browse-item">
            <NavLink
              exact
              to="/attivita"
              activeClassName="active"
              className="browse-link"
            >
              Attivita
            </NavLink>
          </li>
          <li className="browse-item">
            <NavLink
              exact
              to="/contattaci"
              activeClassName="active"
              className="browse-link"
            >
              Contattaci
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="third-section">
        <div className="contact-section">
          <h4 className="contact-title">Contact</h4>
          <div className="contact-container">
            <div className="position">
              <div className="position-icon">
                <PositionIcon />
              </div>
              <div className="position-desc">
                Via Prova Rotondo 68
              </div>
            </div>
            <div className="email">
              {" "}
              <EmailIcon /> provatotti@gmail.com
            </div>
            <div className="number">
              {" "}
              <PhoneIcon /> 1234567890
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
