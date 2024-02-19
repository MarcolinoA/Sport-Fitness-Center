import "./FooterStyle.css";
import Contact from "./Contact";
import Browse from "./Browse";
import FirstSection from "./FirstSection";

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
