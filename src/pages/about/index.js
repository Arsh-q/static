import React from "react";
import About from "./About";
import OurTeam from "./OurTeam";
import Soln from "./Solution";
import './About.scss';
import './Responsive.scss';

const AboutUs = () => {
  return (
    <>
      <div className="container">
        <About />
      </div>
      <OurTeam />
      <Soln />
    </>
  );
};

export default AboutUs;
