import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { ReactComponent as LogoExt } from "./Icons/Logo_esteso.svg";
import { useState } from "react";
import BtnTheme from "../BtnTheme/BtnTheme";
import { ReactComponent as Menu } from "./Icons/menu.svg";
import { ReactComponent as MenuLight } from "./Icons/menu_light.svg";
import { ReactComponent as X } from "./Icons/x.svg";
import { ReactComponent as XLight } from "./Icons/x_light.svg";


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
        {
          click ? <XLight /> : <MenuLight />
        }
      </div>
      <div className="btn-theme">
        <BtnTheme />
      </div>
    </nav>
  );
};

export default Navbar;
