import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import WelcomeNote from "../uiComponents/welcomeNote";
import SelectionCard from "../uiComponents/selectionCard";
import BuySellCardList from "./buySellCardList";
import { buySellCardMethods, buySellCardTypes } from "./types";

const useStyles = makeStyles({
  root: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  list: {
    width: "100%",
  },
});

const Home = ({ theme }: { theme: string }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <WelcomeNote title="Shield Finance!" subtitle="Market Crash Protection" />
      {/* <SelectionCard theme={theme} /> */}
      <div className={classes.list}>
        <h3>Protection</h3>
        <BuySellCardList type={buySellCardTypes.index} method={buySellCardMethods.buy} />
      </div>
      <div className={classes.list}>
        <h3>Deposits</h3>
        <BuySellCardList type={buySellCardTypes.index} method={buySellCardMethods.sell} />
      </div>
    </div>
  );
};

export default Home;
