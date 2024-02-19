import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Attivita from "./Components/Pages/Attivita";
import Contattaci from "./Components/Pages/Contattaci";
import Home from "./Components/Pages/Home/Home";
import StaffHome from "./Components/Pages/Personale/StaffHome";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <div className="pages">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/staffhome" element={<StaffHome />} />
          <Route exact path="/attivita" element={<Attivita />} />
          <Route exact path="/contattaci" element={<Contattaci />} />
        </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
