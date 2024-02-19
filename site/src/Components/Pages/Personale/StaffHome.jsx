import React from "react";
import StaffCard from "./StaffCard";
import "./CoachStyle.css";
import Footer from "../Footer/Footer";

const StaffHome = () => {
  return (
    <div className="staff-home">

      <div className="staff-field">
        <StaffCard />
      </div>

      <div className="staff-footer">
        <Footer />
      </div>
    </div>
  );
};

export default StaffHome;
