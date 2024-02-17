import React from "react";
import "./OurOfferStyle.css";
import StreatchingIcon from "../../../Icons/Streatching";
import PullupsIcon from "../../../Icons/PullupsIcon";
import DeadliftIcon from "../../../Icons/DeadliftIcon";

const OfferCard = () => {
  const offerts = [
    {
      id: 1,
      title: "Fitness",
      desc: "Breve descrizione dell'attivita",
      icon: <PullupsIcon className={"icon-card"} />,
    },
    {
      id: 2,
      title: "Powerlifting",
      desc: "Breve descrizione dell'attivita",
      icon: <DeadliftIcon className={"icon-card"} />,
    },
    {
      id: 3,
      title: "Posturale",
      desc: "Breve descrizione dell'attivita",
      icon: <StreatchingIcon className={"icon-card"} />,
    },
  ];

  return (
    <>
      <div className="aux">
        <h1 className="offer-title-main">Our Offer</h1>
      </div>
      <div className="offer-container">
        {offerts.map((offert) => (
          <div className="card" key={offert.id}>
            <div>{offert.icon}</div>
            <h4 className="offert-title">{offert.title}</h4>
            <p className="offert-desc">{offert.desc}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default OfferCard;
