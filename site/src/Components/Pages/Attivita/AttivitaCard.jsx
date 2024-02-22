import React from "react";
import "./AttivitaStyle.css";
import StreatchingIcon from "../../Icons/Streatching";
import PullupsIcon from "../../Icons/PullupsIcon";
import DeadliftIcon from "../../Icons/DeadliftIcon";
import { NavLink } from "react-router-dom";

const AttivitaCard = () => {
  const attivita = [
    {
      id: 1,
      icon: <PullupsIcon />,
      name: "Fitness",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, placeat tempore ullam sapiente ex odio facere cupiditate iure quos",
      btn: "FITNESS",
    },
    {
      id: 2,
      icon: <DeadliftIcon />,
      name: "Powerlift",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, placeat tempore ullam sapiente ex odio facere cupiditate iure quos",
      btn: "POWERLIFTING",
    },
    {
      id: 3,
      icon: <StreatchingIcon />,
      name: "Posturale",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, placeat tempore ullam sapiente ex odio facere cupiditate iure quos",
      btn: "POSTURALE",
    },
  ];

  return (
    <div className="att-container">
      <div className="att-header">
        <h1 className="att-title">Attivita</h1>
        <p className="att-desc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero,
          placeat tempore ullam sapiente ex odio facere cupiditate iure quos
          laboriosam reiciendis, perspiciatis beatae accusantium perferendis
          quia atque esse. At, ea?
        </p>
      </div>

      <div className="att-container">
        {attivita.map((item) => (
          <div className={`${"attivita" + item.id}`} key={item.id}>
            <div className="att-icon">{item.icon}</div>
            <h4 className="att-name">{item.name}</h4>
            <p className="att-desc">{item.desc}</p>
            <NavLink exact to="/antonioungaro">
              <button class="bn632-hover bn22">{item.btn}</button>
            </NavLink>
          </div>
        ))}
      </div>

      
    </div>
  );
};

export default AttivitaCard;
