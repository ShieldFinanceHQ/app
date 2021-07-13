import React from "react";
import { InferGetStaticPropsType } from "next";
import { makeStyles } from "@material-ui/core/styles";
import InvestorUiMain from "../components/investorUi";
import { getInstruments } from "../lib/functions/getInstruments";
import { getOrderBooks } from "../lib/functions/getOrderBooks";
import { Instrument } from "../lib/interfaces/instrument";
import { OrderBook } from "../lib/interfaces/orderBook";

const useStyles = makeStyles({
  root: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});

const InvestorUi = ({ instruments, orderBooks }: InferGetStaticPropsType<typeof getServerSideProps>) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <InvestorUiMain instruments={instruments} orderBooks={orderBooks} />
    </div>
  );
};

export default InvestorUi;

export const getServerSideProps = async () => {
  const instruments: Instrument[] = await getInstruments();
  const orderBooks: OrderBook[] = await getOrderBooks();

  return {
    props: {
      instruments: await instruments,
      orderBooks: await orderBooks,
    },
  };
};
