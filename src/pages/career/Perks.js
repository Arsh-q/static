import React from "react";
import env from "../../images/env.png";
import success from "../../images/success.png";
import team from "../../images/Team-Spirit.jpg";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const Perks = () => {
  const useStyles = makeStyles({
    root: {
      minWidth: 200,
      borderRadius:30,
    },
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)",
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <>
      <div className="perks">
        <h1>Perks of Working here</h1>
        <p>
          Perks of Working here At Mekvahan, we believe in creating a mutually
          enriching relationship offering opportunities for professional
          development, to master new skills and to grow into other roles.In
          recognition of your astounding work, we provide a vying remuneration
          package offering more than the industry standard with potential for
          performance bonuses and growth.
        </p>
      </div>
      <div className="cards">
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
        >
          <Grid className="card" item md={3}>
            <Card className={classes.root}>
              <CardContent className='content'>
                <img height="60" src={env} alt="image" />
                <Typography variant="h5" component="h2">
                  Good Environment
                </Typography>

                <Typography variant="body2" component="p">
                  For every good work you should always be appreciated.
                  <br />
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid className="card" item md={3}>
            <Card className={classes.root}>
              <CardContent className='content'>
                <img height="60" src={success} alt="image" />
                <Typography variant="h5" component="h2">
                  Shared Success
                </Typography>

                <Typography variant="body2" component="p">
                  With accountability in mind, we empower you
                  <br />
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid className="card" item md={3}>
            <Card className={classes.root}>
              <CardContent className='content'>
                <img height="60" src={team} alt="image" />
                <Typography variant="h5" component="h2">
                  Team Spirit
                </Typography>

                <Typography variant="body2" component="p">
                  We know you have a life outside of work, so why not go out and
                  enjoy it?
                  <br />
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      <section></section>
      </div>
    </>
  );
};
export default Perks;
