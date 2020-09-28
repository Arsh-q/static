import React from "react";
import Grid from "@material-ui/core/Grid";

const TabComp = (props) => {
  return (
    <div className="tabcomp">
      <Grid
        container
        direction="row"
        alignItems="flex-end"
        justify="space-around"
      >
        <Grid item md={6}>
          <h1>{props.h1}</h1>
          <p>Experience: {props.exp}</p>
          <p>Location: {props.area}</p>
        </Grid>
        <Grid className="btn" item md={6}>
          <button>View Details</button>
        </Grid>
      </Grid>
    </div>
  );
};

export default TabComp;
