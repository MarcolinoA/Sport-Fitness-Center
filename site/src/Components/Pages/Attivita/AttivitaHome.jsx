import Footer from "../Footer/Footer"
import "./Styles/AttivitaStyle.css";
import AttivitaCard from "./AttivitaCard"

const AttivitaHome = () => {
  return (
    <div className="attivita-home">
      <div className="att-field">
        <AttivitaCard />
      </div>

      <div className="att-footer">
        <Footer />
      </div>
    </div>
  )
}

export default AttivitaHome