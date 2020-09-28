import Grid from "@material-ui/core/Grid";
import React from "react";

const Solution = () => {
  return (
    <>
      <div className="soln">
        <h1>What makes us a One stop solution.</h1>
        <Grid container direction="row" justify="space-around">
          <Grid className="grid7" item xs={10} md={6}>
            <h2>Better Experience</h2>
            <p>
              Driven to work and create products And features that will help
              consumers And businesses make a better choices Of services.
            </p>
          </Grid>
          <Grid className="grid8" item xs={10} md={6}>
            <h2>Trust and transparent</h2>
            <p>
              Trained service providers will care for your vehicle. We will
              share the every service details with you in real time.
            </p>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Solution;
