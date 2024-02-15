import React from "react";
import "./HomeStyle.css";
import Background from "./Background/Background";
import OfferCard from "./OurOffer/OfferCard";

const Home = () => {
  return (
    <div className="home">
      <Background />

      <div className="our-offer">
        <OfferCard />
      </div>

      <div className="footer"></div>
    </div>
  );
};

export default Home;
