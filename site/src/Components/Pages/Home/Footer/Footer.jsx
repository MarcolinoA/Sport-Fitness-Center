import DeadliftIcon from "../../../Icons/DeadliftIcon";
import "./FooterStyle.css";
import Contact from "./Contact";
import Browse from "./Browse";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="first-section">
        <div className="logo">
          <DeadliftIcon />
        </div>
        <div className="company-info">
          <h4 className="company-name title">Sport & Fitness Center</h4>
          <p className="company-info desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
            odio libero voluptas officiis voluptates maxime natus rem temporibus
            ut at magnam velit nisi pariatur non nesciunt facere eligendi? Quam,
            consequatur.
          </p>
        </div>
      </div>
      
      <div className="second-section">
        <Browse />
      </div>

      <div className="third-section">
        <Contact />
      </div>
    </div>
  );
};

export default Footer;
