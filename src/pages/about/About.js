import React, { useState } from "react";

import Grid from "@material-ui/core/Grid";
const About = () => {
  const [state, setstate] = useState(false);
  function changeClass() {
    const content = document.getElementById("extra_content");
    const btn = document.getElementById("read_more");
    setstate(!state);

    if (state) {
      btn.innerHTML = "Read Less";
    } else {
      btn.innerHTML = "Read More";
    }
  }
  return (
    <>
      <div className="about">
        <Grid
          className="response"
          container
          direction="row"
          justify="space-around"
          alignItems="center"
        >
          <h1>
            <span>Who &nbsp;</span> we are.
          </h1>
          <p>
            Mekvahan beleives in making auto care more cost effective, engagnig
            and trustworthy than ever before.
          </p>
        </Grid>
      </div>
      <div className="mission">
        <Grid container direction="row" justify="space-around">
          <Grid className="grid1" item xs={12} md={6}>
            <h1>Our Mission</h1>
            <p>
              Mevahan s the industry leader in automobile service , repair,
              maintenance, and inspection, offering 200+ services to consumers
              and fleets across the Delhi NCR. The prime objective of mekvahan
              is to provide superior quality services to all the vecihle owners
              ho are facing multifarious problem in their day to day life, in a
              very reliable and cost effective way. The traditional automobile
              service sector is still stuck in the pre - digital age and these
              inefficiencies have no place in todays fast place world.
            </p>
          </Grid>
          <Grid className="grid2" item md={6}>
            <img
              src="https://thumbs.dreamstime.com/b/handshake-14482643.jpg"
              alt=""
            />
          </Grid>
        </Grid>
      </div>
      <Grid container direction="row" justify="space-around">
        <Grid className="grid4" item xs={12} md={6}>
          <img
            src="https://ak.picdn.net/shutterstock/videos/13810685/thumb/4.jpg"
            alt=""
          />
        </Grid>
        <Grid className="grid3" item xs={12} md={6}>
          <p>
            We at mekvahan aim to triform the way the automotive service
            business functions, at both end. For service providers, we offer
            asses to a vide ranger inventory, spare parts accessories directly
            from the authorised OEM and OES to this workshops and the there is
            the quality lead generation to them, and the wave the way to gain
            costumers trust and loyalty.
          </p>
          <p id="extra_content" className={state ? "" : "show"}>
            When it comes to consumers, we help them experience automotive
            repair and services in a cost-effective, reliable, easy and
            transparent manner. We eliminate bottlenecks in the current process
            and ensure consumers find trustworthy & cost-effective service with
            the click of a button. We also facilitate payments for automotive
            services in a safe, convenient and frictionless way – helping
            automobile owners pay for services in the safest manner.
          </p>

          <button onClick={changeClass} id="read_more" className="read_more">
            Read More
          </button>
        </Grid>
      </Grid>
    </>
  );
};
export default About;
