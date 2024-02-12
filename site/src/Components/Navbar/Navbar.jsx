import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { ReactComponent as LogoExt } from "../Icons/Logo_esteso.svg";
import { useState } from "react";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink exact to="/" className="nav-logo">
          <LogoExt />
        </NavLink>
      </div>

      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <NavLink
            exact
            to="/"
            activeClassName="active"
            className="nav-links"
            onClick={handleClick}
          >
            Home
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            exact
            to="/personale"
            activeClassName="active"
            className="nav-links"
            onClick={handleClick}
          >
            Personale
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            exact
            to="/attivita"
            activeClassName="active"
            className="nav-links"
            onClick={handleClick}
          >
            Attivita
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            exact
            to="/contattaci"
            activeClassName="active"
            className="nav-links"
            onClick={handleClick}
          >
            Contattaci
          </NavLink>
        </li>
      </ul>
      <div className="nav-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times " : "fas fa-bars"}></i>
      </div>
    </nav>
  );
};

export default Navbar;
