import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import WelcomeNote from "../uiComponents/welcomeNote";
import SelectionCard from "../uiComponents/selectionCard";

const useStyles = makeStyles({
  root: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});

const Home = ({ theme }: { theme: String }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <WelcomeNote theme={theme} subtitle="Welcome to" title="Shield Finance!" description="xyz..." />
      <SelectionCard theme={theme} />
    </div>
  );
};

export default Home;
