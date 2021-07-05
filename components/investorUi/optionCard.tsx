import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  optionCardRoot: {
    width: "90%",
    height: "100px",
    margin: "20px",
    padding: "5px",
    border: "1px solid black",
    backgroundColor: "#eeeeee",
    "&:hover": {
      cursor: "pointer",
      opacity: "0.9",
    },
  },
});

const getDate = (timestamp: Number) => {
  return new Date(parseInt(timestamp.toString())).toDateString();
};

interface optionCardType {
  instrument_name: String;
  expiration_date: Number;
}

const OptionCard = ({ instrument_name, expiration_date }: optionCardType) => {
  const classes = useStyles();
  return (
    <div className={classes.optionCardRoot}>
      <strong>Instrument name:</strong> {instrument_name}
      <br />
      <strong>Expiration date:</strong> {getDate(expiration_date)}
    </div>
  );
};

export default OptionCard;
