import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TypeSelector from "./typeSelector";
import OptionList from "./optionList";
import { instrumentType } from "../../interfaces/instrument";

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
  orderBooks: any;
}

const InvestorUiMain = ({ instruments, orderBooks }: investorUiMainType) => {
  const classes = useStyles();
  const [currencyType, setCurrencyType] = React.useState<string>("BTC");
  return (
    <div className={classes.root}>
      <TypeSelector currencyType={currencyType} setCurrencyType={setCurrencyType} />
      <OptionList instruments={instruments} orderBooks={orderBooks} filter={currencyType} />
    </div>
  );
};

export default InvestorUiMain;
