import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PopUpInput from "./popUpInput";

const useStyles = makeStyles({
  optionCardRoot: {
    width: "95%",
    margin: "20px auto",
    padding: "10px",
    backgroundColor: "#eeeeee",
    display: "grid",
    gridTemplateColumns: "15% auto 20%",
    gridColumnGap: "20px",
    "& > img": {
      width: "100%",
      margin: "auto",
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
    justifyContent: "flex-start",
    alignContent: "center",
    "& > p": {
      textAlign: "center",
      margin: "10px auto",
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
        <img src="/contract_icon.png" alt="contract icon" />
        <div className={classes.optionCardAmounts}>
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
