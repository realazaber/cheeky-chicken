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
          <Route path="/cheeky-chicken/cheeky-chicken" exact element={<Disclaimer />} />
          <Route path="/cheeky-chicken/" exact element={<Disclaimer />} />
          <Route path="/" exact element={<Disclaimer />} />
          <Route path="/cheeky-chicken/home" exact element={<Home />} />
          <Route path="/cheeky-chicken/our-story" exact element={<Story />} />
          <Route path="/cheeky-chicken/kids-club" exact element={<KidsClub />} />
          <Route path="/cheeky-chicken/catering" exact element={<Catering />} />
          <Route path="/cheeky-chicken/menu" exact element={<Menu />} />
          <Route path="/cheeky-chicken/contact" exact element={<Contact />} />
        </Routes>
      </BrowserRouter>
      
    </Fragment>
  );
}

export default App;
