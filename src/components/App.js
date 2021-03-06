import React from "react";
import {BrowserRouter, Route} from "react-router-dom";

// CSS
import "../main.scss";

// Components
import HomeContainer from "./Home/HomeContainer";
import AboutContainer from "./About/AboutContainer";
import Causes from "../containers/Causes/Causes";
import CauseContainer from "./Cause/CauseContainer";
import ArtistsContainer from "./Artists/ArtistsContainer";
import ArtistContainer from "./Artist/ArtistContainer";
import Performances from "../containers/Performances/Performances";
import PerformanceContainer from "./Performance/PerformanceContainer";
import ContactContainer from "./Contact/ContactContainer";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <main className="main-container grid">
          <Route path="/" exact component={HomeContainer} />
          <Route path="/about" component={AboutContainer} />
          <Route path="/causes" exact component={Causes} />
          <Route path="/causes/:id" component={CauseContainer} />
          <Route path="/artists" exact component={ArtistsContainer} />
          <Route path="/artists/:id" component={ArtistContainer} />
          <Route path="/performances" exact component={Performances} />
          <Route path="/performances/:id" component={PerformanceContainer} />
          <Route path="/contact" component={ContactContainer} />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
