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
      <BrowserRouter basename="/cheeky-chicken">
        <Routes>    
          <Route path="/cheeky-chicken" exact element={<Disclaimer />} />
          <Route path="/" exact element={<Disclaimer />} />
          <Route path="/home" exact element={<Home />} />
          <Route path="/our-story" exact element={<Story />} />
          <Route path="/kids-club" exact element={<KidsClub />} />
          <Route path="/catering" exact element={<Catering />} />
          <Route path="/menu" exact element={<Menu />} />
          <Route path="/contact" exact element={<Contact />} />
        </Routes>
      </BrowserRouter>
      
    </Fragment>
  );
}

export default App;
