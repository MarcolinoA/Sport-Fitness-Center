import image_prova from "./home-image.jpg";
import "./CoachStyle.css";

const StaffCard = () => {
  /*   
  --title_size: 80px;
  --subtitle_size: 48px;
  --desc_size: 28px; */
  const first_coaches = [
    {
      id: 1,
      image: image_prova,
      name: "Antonio Ungaro",
      job: "Titolare, Coach, ...",
      desc: "Breve descrizione dell'allenatore, della sua formazione e della sua manzione",
    },
    {
      id: 2,
      image: image_prova,
      name: "Davide Giangreco",
      job: "Coach, ...",
      desc: "Breve descrizione dell'allenatore, della sua formazione e della sua manzione",
    },
    {
      id: 3,
      image: image_prova,
      name: "Francesco Maglie",
      job: "Coach, ...",
      desc: "Breve descrizione dell'allenatore, della sua formazione e della sua manzione",
    },
  ];

  const second_coaches = [];

  return (
    <div className="staff-card">
      <div className="staff-header">
        <h1 className="staff-title">Coaches</h1>
        <p className="staff-desc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
        </p>
      </div>
      <div className="staff-first-container">
        {first_coaches.map((coach) => (
          <div className="coach" key={coach.id}>
            <img className="coach-image" src={coach.image} alt={coach.name} />
            <div className="info-container">
              <h4 className="coach-name">{coach.name}</h4>
              <p className="coach-job">{coach.job}</p>
              <p className="coach-desc">{coach.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StaffCard;
