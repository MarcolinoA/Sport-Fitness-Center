import FitnessIconLigth from "../Icons/pullups/pullups100.png";
import FitnessIconDark from "../Icons/pullups/pullups100-2.png";
import PowerIconLigth from "../Icons/deadlift/deadlift100.png";
import PowerIconDark from "../Icons/deadlift/deadlift100-2.png";
import StretchingIconLigth from "../Icons/streching/streatching100.png";
import StretchingIconDark from "../Icons/streching/stretching100-2.png";
import "./OurOfferStyle.css";

const OfferCard = () => {
  let aux;
  let bodyTag = document.querySelector("body");
  if (bodyTag.getAttribute("data-theme") === "dark") {
    aux = false;
  } else if (bodyTag.getAttribute("data-theme") === "light") {
    aux = true;
  }

  const offerts = [
    {
      id: 1,
      title: "Fitness",
      desc: "Breve descrizione dell'attivita",
      iconLight: FitnessIconLigth,
      iconDark: FitnessIconDark,
    },
    {
      id: 2,
      title: "Powerlifting",
      desc: "Breve descrizione dell'attivita",
      iconLight: PowerIconLigth,
      iconDark: PowerIconDark,
    },
    {
      id: 3,
      title: "Posturale",
      desc: "Breve descrizione dell'attivita",
      iconLight: StretchingIconLigth,
      iconDark: StretchingIconDark,
    },
  ];

  return (
    <>
      <h1 className="offer-title-main">Our Offer</h1>
      <div className="offer-container">
        {offerts.map((offert) => (
          <div className="card" key={offert.id}>
            <img
              src={aux ? offert.iconLight : offert.iconDark}
              alt=""
              className="icon-card"
            />
            <h4 className="offert-title">{offert.title}</h4>
            <p className="offert-desc">{offert.desc}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default OfferCard;
