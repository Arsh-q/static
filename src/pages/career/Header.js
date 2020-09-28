import React from "react";
import Button from '@material-ui/core/Button';

const Header = () => {
  return (
    <>
      <div className="header">
        <h1>Career at Mekvahan</h1>
        <p>
          We’re redefining the automotive aftermarket industry and empowering
          mechanics to live better lives. Join us in building a company that
          improves everybody’s vehicle ownership experience.
        </p>
        <Button variant="contained" color="primary">
        Join Us
      </Button>
      </div>
    </>
  );
};
export default Header;
