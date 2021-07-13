import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PopUpInput from "./popUpInput";

const useStyles = makeStyles({
  optionCardRoot: {
    width: "90%",
    margin: "20px",
    padding: "5px",
    border: "1px solid black",
    backgroundColor: "#eeeeee",
    display: "flex",
    justifyContent: "space-evenly",
    "&:hover": {
      cursor: "pointer",
      opacity: "0.9",
    },
  },
  optionCardAmounts: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    "& *": {
      margin: "5px 0",
    },
    "& > p": {
      "&  > span": {
        fontWeight: "bold",
      },
    },
  },
  optionCardTotal: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignContent: "center",
    "& > p": {
      marginBottom: 0,
    },
    "& > span": {
      fontSize: 24,
      textAlign: "center",
    },
  },
});

const getDate = (timestamp: number) => {
  return new Date(parseInt(timestamp.toString())).toDateString();
};

interface optionCardType {
  instrument_name: string;
  expiration_date: number;
  asset: string;
  guaranteed: number;
}

const OptionCard = ({ instrument_name, expiration_date, asset, guaranteed }: optionCardType) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState<boolean>(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className={classes.optionCardRoot} onClick={handleClickOpen}>
        <div className={classes.optionCardAmounts}>
          <strong>Liquidity:</strong> 100 USDT
          <strong>Expiration date:</strong> {getDate(expiration_date)}
          <strong>Guaranteed Price:</strong> 1 {asset} = {guaranteed} USDT
        </div>
        <div className={classes.optionCardTotal}>
          <p>Total Cost</p>
          <span>$10</span>
        </div>
      </div>

      <PopUpInput open={open} setOpen={setOpen} handleClose={handleClose} instrument_name={instrument_name} />
    </div>
  );
};

export default OptionCard;
