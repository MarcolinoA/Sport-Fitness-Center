import React from "react";
import "./BtnThemeStyle.css";
import MoonIcon from "./Icons/MoonIcon";
import SunIcon from "./Icons/SunIcon";

const BtnTheme = () => {
  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme", "dark");
  };

  //#15F5BA verde acqua
  //#F72798 magenta
  //#F9F9F9 bianco

  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("selectedTheme", "light");
  };

  const ToggleTheme = (e) => {
    if (e.target.checked) setDarkMode();
    else setLightMode();
  };

  return (
    <div>
      <label>
        <input type="checkbox" onChange={ToggleTheme} className="inp" />
        <MoonIcon className={"moon-icon"} />
        <SunIcon className={"sun-icon"} />
        <span className="toggle"></span>
      </label>
    </div>
  );
};

export default BtnTheme;
