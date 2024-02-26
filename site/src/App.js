import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from "./Components/Pages/Home/Home";
import StaffHome from "./Components/Pages/Personale/StaffHome";
import AttivitaHome from "./Components/Pages/Attivita/AttivitaHome";
import AntonioUngaro from "./Components/Pages/Personale/SingleItem/AntonioUngaro";
import DavideGiangreco from "./Components/Pages/Personale/SingleItem/DavideGiangreco";
import FrancescoMaglie from "./Components/Pages/Personale/SingleItem/FrancescoMaglie";
import FitnessItem from "./Components/Pages/Attivita/SingleItems/FitnessItem";
import PowerliftItem from "./Components/Pages/Attivita/SingleItems/PowerliftItem";
import PosturaleItem from "./Components/Pages/Attivita/SingleItems/Posturale";
import Contattaci from "./Components/Pages/ContactUs/ContactUs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <div className="pages">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/staffhome" element={<StaffHome />} />
          <Route exact path="/attivita" element={<AttivitaHome />} />
          <Route exact path="/contattaci" element={<Contattaci /> } />
          <Route exact path="/antonioungaro" element={<AntonioUngaro />} />
          <Route exact path="/davidegiangreco" element={<DavideGiangreco />} />
          <Route exact path="/francescomaglie" element={<FrancescoMaglie />} />
          <Route exact path="/fitnessitem" element={<FitnessItem />} />
          <Route exact path="/powerliftitem" element={<PowerliftItem />} />
          <Route exact path="/posturaleitem" element={<PosturaleItem />} />
        </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
