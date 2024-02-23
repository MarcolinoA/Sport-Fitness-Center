import React from "react";
import "./AttivitaStyle.css";
import StreatchingIcon from "./Icons/AttStreIcon";
import PullupsIcon from "./Icons/AttPullIcon";
import DeadliftIcon from "./Icons/AttDeadIcon";
import { NavLink } from "react-router-dom";

const AttivitaCard = () => {
  const attivita = [
    {
      id: 1,
      icon: <PullupsIcon className={"icon-card-att"} width={"300"} height={"300"}/>,
      name: "Fitness",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, placeat tempore ullam sapiente ex odio facere cupiditate iure quos",
      btn: "FITNESS",
    },
    {
      id: 2,
      icon: <DeadliftIcon className={"icon-card-att"} width={"300"} height={"300"}/>,
      name: "Powerlift",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, placeat tempore ullam sapiente ex odio facere cupiditate iure quos",
      btn: "POWERLIFTING",
    },
    {
      id: 3,
      icon: <StreatchingIcon className={"icon-card-att"} width={"300"} height={"300"}/>,
      name: "Posturale",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, placeat tempore ullam sapiente ex odio facere cupiditate iure quos",
      btn: "POSTURALE",
    },
  ];

  return (
    <div className="att-container">
      <div className="att-header">
        <h1 className="att-title">Attivita</h1>
        <p className="header-desc">
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
              <div className="info-att-container">
                <h4 className="att-name">{item.name}</h4>
                <p className="att-desc">{item.desc}</p>
                <NavLink exact to="/antonioungaro">
                  <button class="bn632-hover bn22">{item.btn}</button>
                </NavLink>
              </div>
          </div>
        ))}
      </div>

      
    </div>
  );
};

export default AttivitaCard;
