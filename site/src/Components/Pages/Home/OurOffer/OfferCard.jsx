import FitnessIcon100 from "../Icons/pullups/pullups100.png";
import FitnessIcon50 from "../Icons/pullups/pullups50.png";
import PowerIcon50 from "../Icons/deadlift/deadlift50.png";
import PowerIcon100 from "../Icons/deadlift/deadlift100.png";
import Stretching100 from "../Icons/streching/stretching100.png";
import "./OurOfferStyle.css";

const OfferCard = () => {
  const offerts = [
    {
      id: 1,
      title: "Fitness",
      desc: "Breve descrizione dell'attivita",
      icon100: FitnessIcon100,
      icon50: FitnessIcon50,
    },
    {
      id: 2,
      title: "Powerlifting",
      desc: "Breve descrizione dell'attivita",
      icon100: PowerIcon100,
      icon50: PowerIcon50,
    },
    {
      id: 3,
      title: "Posturale",
      desc: "Breve descrizione dell'attivita",
      icon100: Stretching100,
      
    },
  ];

  return (
    <>
      <h1 className="offer-title">Our Offer</h1>
      <div className="offer-container">
        {offerts.map((offert) => (
          <div className="card" key={offert.id}>
            <img src={offert.icon100} alt="" className="icon-card"/>
            <h4 className="offert-title">{offert.title}</h4>
            <p className="offert-desc">{offert.desc}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default OfferCard;
