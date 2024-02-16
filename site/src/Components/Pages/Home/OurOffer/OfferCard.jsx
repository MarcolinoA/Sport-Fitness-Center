import React from "react";
import "./OurOfferStyle.css";
import StreatchingIcon from "../Icons/Streatching";

const OfferCard = () => {
  const offerts = [
    {
      id: 1,
      title: "Fitness",
      desc: "Breve descrizione dell'attivita",
      icon: <StreatchingIcon className={"icon-card"} theme="light" />,
    },
    {
      id: 2,
      title: "Powerlifting",
      desc: "Breve descrizione dell'attivita",
      icon: <StreatchingIcon className={"icon-card"} theme="light" />,
    },
    {
      id: 3,
      title: "Posturale",
      desc: "Breve descrizione dell'attivita",
      icon: <StreatchingIcon className={"icon-card"} theme="light" />,
    },
  ];

  return (
    <>
      <h1 className="offer-title-main">Our Offer</h1>
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
