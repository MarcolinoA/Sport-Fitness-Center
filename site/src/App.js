import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Personale from "./Components/Pages/Personale";
import Attivita from "./Components/Pages/Attivita";
import Contattaci from "./Components/Pages/Contattaci";
import Home from "./Components/Pages/Home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <div className="pages">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/personale" element={<Personale />} />
          <Route exact path="/attivita" element={<Attivita />} />
          <Route exact path="/contattaci" element={<Contattaci />} />
        </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
