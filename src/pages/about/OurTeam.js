import React from "react";
// import "./About.scss";
import Grid from "@material-ui/core/Grid";
const OurTeam = () => {
  return (
    <>
      <div className="our-team">
        <Grid container direction="row" justify="space-around">
          <Grid className="grid5" item xs={12} md={6}>
            <img
              src="https://www.ctrlbytes.com/assets/img/feature_dev.svg"
              alt=""
            />
          </Grid>
          <Grid className="grid6" item xs={12} md={6}>
            <h1>Our Team</h1>
            <p>
              MekVahan is the foundation as a result of the fire that broke out
              from inside some techies and finally came into existence in May
              2018. The brand aims at providing its outstanding assistance and
              services to all the automobile owners while trapped in a difficult
              situation. Our dedicated service will never fail to enthrals you
              and force you to build an unbreakable trust on us. We assure you
              to provide lifetime services and delighting experience if you
              remain and cooperate with us. Mekvahan will be driving its sales
              and services together on a single platform. Since it’s the initial
              stage, our services are limited to Delhi-NCR only. But, very soon,
              we are planning to open our services to all the major cities,
              towns and eventually every possible corner. Although the motive is
              very big and difficult, we are following the quote of Paulo Coelho
              “when you want something, all the universe conspires in helping
              you to achieve it.”
            </p>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default OurTeam;
