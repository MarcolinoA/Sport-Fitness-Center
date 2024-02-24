import image_prova from "./Images/coachProva.jpg";
import "./Styles/StaffStyle.css";
import { Link } from "react-router-dom";

const StaffCard = () => {
  /*   
  --title_size: 80px;
  --subtitle_size: 48px;
  --desc_size: 28px; */
  const coaches = [
    {
      id: 1,
      image: image_prova,
      name: "Antonio Ungaro",
      job: "DIRETTORE TECNICO",
      desc: "Pietra miliare di H2O Concept ed oggi DT, inizia il suo percorso nel mondo del fitness da molto giovane e si appassiona quasi da subito al bodybuilding e alla pesistica.",
      link: "/antonioungaro"
    },
    {
      id: 2,
      image: image_prova,
      name: "Davide Giangreco",
      job: "DIRETTORE TECNICO",
      desc: "Pietra miliare di H2O Concept ed oggi DT, inizia il suo percorso nel mondo del fitness da molto giovane e si appassiona quasi da subito al bodybuilding e alla pesistica.",
      link: "/davidegiangreco"
    },
    {
      id: 3,
      image: image_prova,
      name: "Francesco Maglie",
      job: "DIRETTORE TECNICO",
      desc: "Pietra miliare di H2O Concept ed oggi DT, inizia il suo percorso nel mondo del fitness da molto giovane e si appassiona quasi da subito al bodybuilding e alla pesistica.",
      link: "/francescomaglie"
    },
  ];

  return (
    <div className="staff-card">
      <div className="staff-header">
        <h1 className="staff-title">Istruttori</h1>
        <p className="staff-desc">
          Professionisti altamente qualificati specializzati in ipertrofia
          muscolare o dimagrimento e tonificazione, rieducazione posturale,
          riabilitazione motoria e benessere psicofisico attraverso i percorsi
          di yoga e pilates. In continuo e costante aggiornamento per esser al
          passo con le evoluzioni delle discipline che insegnano i trainers
          scelti da H2O Concept per la forte dedizione e passione, si
          prenderanno cura di voi contribuendo giorno dopo giorno al
          raggiungimento dei vostri desideri di allenamento e sport. Il nostro
          obiettivo è farvi stare bene!
        </p>
      </div>
      <div className="staff-container">
        {coaches.map((coach) => (
          <div className={`${"coach" + coach.id}`} key={coach.id}>
            <img className="coach-image" src={coach.image} alt={coach.name} />
            <div className="info-container">
              <h4 className="coach-name">{coach.name}</h4>
              <p className="coach-job">
                <strong>{coach.job}</strong>
              </p>
              <p className="coach-desc">{coach.desc}</p>
              <Link exact to={coach.link} className={"staff-link"}>
                <button class="bn632-hover bn22">DETTAGLI</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StaffCard;
