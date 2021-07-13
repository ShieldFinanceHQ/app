import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TypeSelector from "./typeSelector";
import OptionList from "./optionList";
import { instrumentType } from "../../lib/interfaces/instrument";
import { orderBookType } from "../../lib/interfaces/orderBook";

const useStyles = makeStyles({
  root: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    "& .MuiInput-root": {
      width: "100%",
    },
  },
});

interface investorUiMainType {
  instruments: instrumentType[];
  orderBooks: orderBookType[];
}

const InvestorUiMain = ({ instruments, orderBooks }: investorUiMainType) => {
  const classes = useStyles();
  const [currencyType, setCurrencyType] = React.useState<string>("BTC");
  const [sortIndex, setSortIndex] = React.useState<number>(0);
  return (
    <div className={classes.root}>
      <TypeSelector
        currencyType={currencyType}
        setCurrencyType={setCurrencyType}
        sortIndex={sortIndex}
        setSortIndex={setSortIndex}
      />
      <OptionList instruments={instruments} orderBooks={orderBooks} filter={currencyType} sortIndex={sortIndex} />
    </div>
  );
};

export default InvestorUiMain;
