import "./Navbar.css";
import { NavLink } from "react-router-dom";

import { useState } from "react";
import BtnTheme from "../BtnTheme/BtnTheme";
import LogoExt from "./Icons/LogoExt";
import MenuIcon from "./Icons/MenuIcon";
import XIcon from "./Icons/XIcon";


const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink exact to="/" className="nav-logo">
          <LogoExt className={"logo-ext"} />
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
          click ? <XIcon className={"menu-icon"}/> : <MenuIcon className={"menu-icon"}/>
        }
      </div>
      <div className="btn-theme">
        <BtnTheme />
      </div>
    </nav>
  );
};

export default Navbar;
