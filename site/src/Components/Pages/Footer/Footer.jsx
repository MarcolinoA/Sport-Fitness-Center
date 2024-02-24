import "./FooterStyle.css";
import Contact from "./Sections/Contact";
import Browse from "./Sections/Browse";
import FirstSection from "./Sections/FirstSection";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="first-section">
        <FirstSection />
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
