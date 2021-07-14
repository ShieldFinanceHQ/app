import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  welcomeWrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    "& *": {
      marginBottom: "10px",
    },
    "& > h1": {
      color: "royalblue",
    },
    "& > h2": {
      color: "#888888",
    },
  },
});

interface welcomePropsType {
  title: string;
  subtitle: string;
}

const WelcomeNote = ({ title, subtitle }: welcomePropsType) => {
  const classes = useStyles();
  return (
    <div className={classes.welcomeWrapper}>
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
    </div>
  );
};

export default WelcomeNote;
