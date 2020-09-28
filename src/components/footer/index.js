import React from "react";
import store from "../../images/playstore.png";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { twitter } from "react-icons-kit/entypo/twitter";
import "./Footer.scss";
import "./Responsive.scss";
import { ic_email } from "react-icons-kit/md/ic_email";
import { instagram } from "react-icons-kit/feather/instagram";
import { googlePlus } from "react-icons-kit/entypo/googlePlus";
import { Icon } from "react-icons-kit";
import { facebook } from "react-icons-kit/fa/facebook";
import logo from "../../images/logo.svg";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import TextField from "@material-ui/core/TextField";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="update">
          <Container>
            <Grid
              container
              direction="row"
              alignItems="center"
              justify="space-around"
            >
              <Grid className="col" item xs={12} md={3}>
                <h2>Get updates!</h2>
                <p>Provide your Email ID to get updates.</p>
              </Grid>
              <Grid className="col" item xs={12} md={3}>
                <TextField label="emailid@gmail.com" />
              </Grid>
              <Grid className="col" id="standard-basic" item xs={12} md={2}>
                <ArrowForwardIcon color="disabled" fontSize="large" />
              </Grid>
            </Grid>
          </Container>
        </div>
        <div className="bg">
          <Grid
            container
            direction="row"
            alignItems="center"
            justify="space-around"
          >
            <Grid className="foot" item xs={12} md={4}>
              <img src={logo} alt="" />
              <h1>MEKVAHAN</h1>
            </Grid>
            <Grid className="foot" item xs={12} md={3}>
              <ul>
                <li>Home</li>
                <li>FAQs</li>
                <li>Contact Us</li>
                <li>Get App Link</li>
              </ul>
            </Grid>
            <Grid className="foot" item xs={12} md={3}>
              <ul>
                <li>
                  <Icon icon={facebook} size={28} />
                </li>
                <li>
                  <Icon icon={googlePlus} size={28} />
                </li>
                <li>
                  <Icon icon={twitter} size={28} />
                </li>
                <li>
                  <Icon icon={instagram} size={28} />
                </li>
              </ul>
            </Grid>
          </Grid>
          <Grid
            id="play"
            container
            direction="row"
            alignItems="center"
            justify="space-around"
          >
            <Grid className="foot2" item xs={12} md={3}>
              <div className="address">
                <p>
                  <span>G-318 , PH-6-AYA</span>
                  <span>Nagar Extn.</span>
                  <span>Delhi - 110047, India</span>
                </p>
              </div>
            </Grid>
            <Grid className="foot2" item xs={12} md={3}>
              <ul>
                <li>About Us</li>
                <li>Privacy Policy</li>
                <li>
                  <Icon icon={ic_email} size={28} /> support@mekvahan.com
                </li>
              </ul>
            </Grid>
            <Grid className="foot2" item xs={12} md={3}>
              <img src={store} alt="playstore" />
            </Grid>
          </Grid>
        </div>
      </footer>
    </>
  );
};

export default Footer;
