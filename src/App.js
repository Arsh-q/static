import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import AboutUs from "./pages/about";
import Career from "./pages/career";

const App = () => {
  return (
    <>
      <div className="container">
        <Navbar />
      </div>
      <Router>
        <AboutUs path="/" />
        <Career path="career" />
      </Router>

      <Footer />
    </>
  );
};

export default App;
