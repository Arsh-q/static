import React from "react";
import TabComp from "./Tab";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";
import { Container } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));
const Jobs = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Container className="tabss">
        <h2>Recent Job Openings</h2>
        <div className={classes.root}>
          <TabContext value={value}>
            <AppBar position="static">
              <TabList id="appbar" onChange={handleChange}>
                <Tab label="Design" value="1" />
                <Tab label="Development" value="2" />
                <Tab label="Sales" value="3" />
                <Tab label="Management" value="4" />
              </TabList>
            </AppBar>
            <TabPanel className='panel' value="1">
              <TabComp h1="Product/UX Designer" exp="1-2 Years" area="Noida" />
              <TabComp h1="Graphic Designer" exp="1-2 Years" area="Noida" />
              <TabComp h1="Content Head" exp="1-2 Years" area="Noida" />
            </TabPanel>
            <TabPanel value="2">
              <TabComp h1="Q/A Automation" exp="2-5 Years" area="Noida" />
              <TabComp h1="Full-stack developer" exp="2-5 Years" area="Noida" />
              <TabComp h1="Android developer" exp="2-5 Years" area="Noida" />
            </TabPanel>
            <TabPanel value="3">Item Three</TabPanel>
            <TabPanel value="4">Item Four</TabPanel>
          </TabContext>
        </div>
      </Container>
    </>
  );
};
export default Jobs;
