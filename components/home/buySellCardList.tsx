import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BuySellCard from "./buySellCard";
import { buySellCardMethods, buySellCardTypes } from "./types";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& *": {
      marginBottom: "10px",
    },
  },
});

interface buySellCardListType {
  type: buySellCardTypes;
  method: buySellCardMethods;
}

const BuySellCardList = ({ type, method }: buySellCardListType) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <BuySellCard type={type} method={method} />
    </div>
  );
};

export default BuySellCardList;
