import React from "react";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import TypeSelector from "./typeSelector";
import OptionList from "./optionList";
import { Instrument } from "../../lib/api/deribit/interfaces/Instrument";
import { OrderBook } from "../../lib/api/deribit/interfaces/OrderBook";

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
  arrow: {
    fontSize: "32px",
    // fontWeight: "bold",
  },
});

interface investorUiMainType {
  instruments: Instrument[];
  orderBooks: OrderBook[];
}

const InvestorUiMain = ({ instruments, orderBooks }: investorUiMainType) => {
  const classes = useStyles();
  const [currencyType, setCurrencyType] = React.useState<string>("BTC");
  const [amount, setAmount] = React.useState<string>("0.1");
  const [sortIndex, setSortIndex] = React.useState<number>(0);
  const [contractsAvailable, setContractsAvailable] = React.useState<number>(0);
  return (
    <div className={classes.root}>
      <div className={classes.arrow}>
        <Link href="/">&lt;&lt;</Link>
      </div>
      <TypeSelector
        currencyType={currencyType}
        setCurrencyType={setCurrencyType}
        sortIndex={sortIndex}
        setSortIndex={setSortIndex}
        amount={amount}
        setAmount={setAmount}
        contractsAvailable={contractsAvailable}
      />
      <OptionList
        instruments={instruments}
        orderBooks={orderBooks}
        filter={currencyType}
        sortIndex={sortIndex}
        setContractsAvailable={setContractsAvailable}
      />
    </div>
  );
};

export default InvestorUiMain;
