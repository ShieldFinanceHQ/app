import React from "react";
import { InferGetStaticPropsType } from "next";
import { makeStyles } from "@material-ui/core/styles";
import InvestorUiMain from "../components/investorUi";
import { getInstrumentsFromCache } from "../lib/api/deribit/getInstrumentsFromCache";
import { getOrderBooksFromCache } from "../lib/api/deribit/getOrderBooksFromCache";
import { Instrument } from "../lib/api/deribit/interfaces/Instrument";
import { OrderBook } from "../lib/api/deribit/interfaces/OrderBook";

const useStyles = makeStyles({
  root: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});

const Investor = ({ instruments, orderBooks }: InferGetStaticPropsType<typeof getServerSideProps>) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <InvestorUiMain instruments={instruments} orderBooks={orderBooks} />
    </div>
  );
};

export default Investor;

export const getServerSideProps = async () => {
  const instruments: Instrument[] = await getInstrumentsFromCache();
  const orderBooks: OrderBook[] = await getOrderBooksFromCache();

  return {
    props: {
      instruments: await instruments,
      orderBooks: await orderBooks,
    },
  };
};
