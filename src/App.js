import "./css/main.css";
import Disclaimer from "./components/Disclaimer";
import Home from "./components/Home";
import Story from "./components/Story";
import KidsClub from "./components/KidsClub";
import Catering from "./components/Catering";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import { Fragment } from "react";

import { BrowserRouter , Routes, Route } from "react-router-dom";

function App() {
  return (    
    <Fragment>
      <BrowserRouter>
        <Routes>    
          <Route path="/cheeky-chicken" element={<Disclaimer />} />
          <Route path="/" element={<Disclaimer />} />
          <Route path="/home" element={<Home />} />
          <Route path="/our-story" element={<Story />} />
          <Route path="/kids-club" element={<KidsClub />} />
        </Routes>
      </BrowserRouter>
      
    </Fragment>
  );
}

export default App;
