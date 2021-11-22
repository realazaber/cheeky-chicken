import "./css/main.css";
import Disclaimer from "./components/Disclaimer";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Story from "./components/Story";
import KidsClub from "./components/KidsClub";
import Catering from "./components/Catering";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import { Fragment } from "react";

import { Router, Routes, Route } from "react-router-dom"

function App() {
  return (    
      <Router>
        <Routes>
          <Route path="/" element={<Disclaimer />} />
          <Route path="/cheeky-chicken" element={<Disclaimer />} />
        </Routes>
      </Router>
  );
}

export default App;
