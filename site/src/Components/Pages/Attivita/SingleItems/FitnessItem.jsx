import Footer from "../../Footer/Footer";
import Gallery from "../../Gallery/Gallery";

const FitnessItem = () => {

  const images = [
    "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/632522/pexels-photo-632522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  return (
    <div className="personal">
      <h1 className="title-name">Fitness</h1>

      <div className="personal-info-container">
        <div className="personal-info-img">
          <Gallery images={images}/>
        </div>

        <div className="personal-info">
          <p className="personal-job">
            <strong className="strong">Coach</strong>
          </p>
          <p className="personal-desc">
            Pietra miliare di H2O Concept ed oggi DT, inizia il suo percorso nel
            mondo del fitness da molto giovane e si appassiona quasi da subito
            al bodybuilding e alla pesistica.
          </p>
          <div className="personal-age-container">
            <p className="age">
              <strong className="strong">ETA:</strong> 40
            </p>
          </div>
          <div className="personal-qualifications-container">
            <p className="quali">
              <strong className="strong">QUALIFICHE:</strong> Allenatore
              Personal Trainer certificato FIPE
            </p>
          </div>
        </div>
      </div>

      <div className="other-desc">
        Nel tempo si specializza nell’allenamento funzionale e di cross training
        diversificando i format di allenamento proposti nelle sue classi e negli
        allenamenti individuali. I continui corsi di aggiornamento gli
        consentono di sviluppare sempre maggiori competenze che abbinate alla
        sua dedizione, creatività e forte passione gli permettono di soddisfare
        le esigenze specifiche dei suoi allievi garantendo loro il
        raggiungimento dei propri obiettivi.
      </div>

      <div className="staff-footer">
        <Footer />
      </div>
    </div>
  );
};

export default FitnessItem;
