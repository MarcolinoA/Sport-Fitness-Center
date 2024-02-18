import React, { useEffect, useState } from "react";
import LogoIcon from "../../../Icons/Logo";
import LogoExt from "../../../Icons/LogoExt";
import "./FooterStyle.css";

const FirstSection = () => {
  return (
    <div className="first-section">
      <div className="logo">
        <LogoExt />
      </div>
      <div className="company-info">
        <h4 className="company-name title">Sport & Fitness Center</h4>
        <p className="company-info desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, odio
          libero voluptas officiis voluptates maxime natus rem temporibus ut at
          magnam velit nisi pariatur non nesciunt facere eligendi? Quam,
          consequatur.
        </p>
      </div>
    </div>
  );
};

export default FirstSection;

