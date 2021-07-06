import React from "react";
import { InferGetStaticPropsType } from "next";
import { makeStyles } from "@material-ui/core/styles";
import InvestorUiMain from "../components/investorUi";
import { getInstruments } from "../functions/getInstruments";
import { getOrderBooks } from "../functions/getOrderBooks";
import { instrumentType } from "../interfaces/instrument";

const useStyles = makeStyles({
  root: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});

const investorUi = ({ instruments, orderBooks }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <InvestorUiMain instruments={instruments} orderBooks={orderBooks} />
    </div>
  );
};

export default investorUi;

export const getStaticProps = async () => {
  const instruments: instrumentType[] = await getInstruments();
  const orderBooks = await getOrderBooks();

  return {
    props: {
      instruments: await instruments,
      orderBooks: await orderBooks,
    },
  };
};
