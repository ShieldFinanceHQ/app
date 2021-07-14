import React from "react";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import { buySellCardMethods, buySellCardTypes } from "./types";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    border: "1px solid #888888",
    borderRadius: "10px",
    padding: 20,
    alignItems: "center",
    maxWidth: 250,
    "& *": {
      marginBottom: "10px",
    },
    "&:hover": {
      cursor: "pointer",
      opacity: "0.7",
    },
  },
  icon: {
    color: "black",
    border: "2px solid black",
    width: "max-content",
    padding: "8px 15px",
    borderRadius: "60%",
    fontSize: 40,
  },
});

interface buySellCardType {
  type: buySellCardTypes;
  method: buySellCardMethods;
}

const BuySellCard = ({ type, method }: buySellCardType) => {
  const classes = useStyles();

  return (
    <Link href={method === buySellCardMethods.buy ? "/investor" : "#"}>
      <div className={classes.root}>
        {type === buySellCardTypes.index ? (
          <>
            <div>
              <h2 className={classes.icon}>{method === buySellCardMethods.buy ? "+" : "-"}</h2>
            </div>
            <h4>{method === buySellCardMethods.buy ? "Buy" : "Sell"} protection</h4>
          </>
        ) : null}
      </div>
    </Link>
  );
};

export default BuySellCard;
