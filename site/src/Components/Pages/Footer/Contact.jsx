import EmailIcon from "../../Icons/EmailIcon";
import PhoneIcon from "../../Icons/PhoneIcon";
import PositionIcon from "../../Icons/PositionIcon";

const Contact = () => {
  return (
    <div className="contact">
      <h4 className="contact-title title">Contatti</h4>
      <p className="address desc">Corso Italia, 257, 73040 Specchia LE</p>
      <hr />

      <div className="maps-field">
        <div className="maps-icon">
          <PositionIcon />
        </div>
        <div className="maps-link">
          <a
            className="a"
            href="https://www.google.com/maps/place/A.S.R.C.+SPORT+%26+FITNESS+CENTER/@39.9429617,18.293594,19z/data=!4m15!1m8!3m7!1s0x13440e5a62d58585:0xe04eb7b18cb31809!2s73040+Specchia+LE!3b1!8m2!3d39.9411672!4d18.2999958!16zL20vMGZfbWNk!3m5!1s0x13440fcad9261467:0xef7cc9440b1ea739!8m2!3d39.9433979!4d18.2940054!16s%2Fg%2F11t4x3y8nx?entry=ttu"
          >
            A.S.R.C. SPORT & FITNESS CENTER
          </a>
        </div>
      </div>

      <div className="phone-field">
        <div className="phone-icon">
          <PhoneIcon />
        </div>
        <div className="phone-link">
          <a className="a" href="tel:3358285510">
            3358285510
          </a>
        </div>
      </div>

      <div className="email-field">
        <div className="email-icon">
          <EmailIcon />
        </div>
        <div className="email-link">
          <a className="a" href="mailto:provapalestra@gmail.com">
            provapalestra@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
