import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Contattaci from "./Components/Pages/Contattaci";
import Home from "./Components/Pages/Home/Home";
import StaffHome from "./Components/Pages/Personale/StaffHome";
import AntonioUngaro from "./Components/Pages/Personale/AntonioUngaro";
import AttivitaHome from "./Components/Pages/Attivita/AttivitaHome";

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
          <Route exact path="/contattaci" element={<Contattaci />} />
          <Route exact path="/antonioungaro" element={<AntonioUngaro />} />
        </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
