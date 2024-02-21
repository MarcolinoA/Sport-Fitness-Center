import Footer from "../Footer/Footer";
import image_prova from "./coachProva.jpg";

const AntonioUngaro = () => {
  return (
    <div className="personal-container">
      <div className="personal-title">
        <h1 className="title">Antonio Ungaro</h1>
      </div>

      <div className="personal-info">
        <img src={image_prova} alt="" />
        <h4 className="personal-name">Antonio Ungaro</h4>
        <p className="personal-job">
          <strong>Coach</strong>
        </p>
        <p className="personal-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
        </p>
        <div className="personal-age-container">
          <p className="age">ETA: </p>
          <p className="age-numb">40</p>
        </div>
        <div className="personal-qualifications-container">
          <p className="age">QUALIFICHE: </p>
          <p className="age-numb">Certificato sportivo...</p>
        </div>

        <div className="other-desc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
          obcaecati aliquam sapiente aliquid delectus quos sunt accusamus omnis
          facilis mollitia molestiae soluta iusto quasi, quod accusantium in,
          expedita nam asperiores!
        </div>
      </div>

      <div className="staff-footer">
        <Footer />
      </div>
    </div>
  );
};

export default AntonioUngaro;
