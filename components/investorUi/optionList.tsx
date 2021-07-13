import React from "react";
import OptionCard from "./optionCard";
import { makeStyles } from "@material-ui/core/styles";
import { Instrument } from "../../lib/interfaces/Instrument";
import { OrderBook } from "../../lib/interfaces/OrderBook";

const useStyles = makeStyles({
  optionListRoot: {
    height: "100%",
    width: "100%",
    overflowY: "scroll",
    margin: "20px 0",
    scrollbarColor: "red white",
    // "&::-webkit-scrollbar": {
    //   width: "10px",
    //   background: "grey",
    // },
    "&::-webkit-scrollbar": {
      width: "12px",
    },

    "&::-webkit-scrollbar-track": {
      background: "white",
    },

    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "grey",
      borderRadius: "10px",
      border: "2px solid white",
    },
  },
});

interface optionListType {
  instruments: Instrument[];
  orderBooks: OrderBook[];
  filter: string;
  sortIndex: number;
}

const OptionList = ({ instruments, orderBooks, filter, sortIndex }: optionListType) => {
  const classes = useStyles();

  const filteredInstruments =
    instruments !== null ? instruments.filter((instrument) => instrument.base_currency === filter) : [];

  const filteredOrders = orderBooks !== null ? orderBooks.filter((orderBook) => orderBook !== null) : [];

  return (
    <div className={classes.optionListRoot}>
      <h6 style={{ textAlign: "center" }}>Available Contracts ({filteredInstruments.length})</h6>
      {filteredInstruments
        .sort((a, b) =>
          sortIndex === 0
            ? a.expiration_timestamp > b.expiration_timestamp
              ? 1
              : -1
            : sortIndex === 1
            ? a.expiration_timestamp < b.expiration_timestamp
              ? 1
              : -1
            : sortIndex === 2
            ? a.strike > b.strike
              ? 1
              : -1
            : sortIndex === 3
            ? a.strike < b.strike
              ? 1
              : -1
            : null
        )
        .map((instrument, index) => {
          const orderBook = filteredOrders.filter(
            (orderBook) => orderBook.instrument_name === instrument.instrument_name
          );
          return (
            <OptionCard
              key={index}
              instrument_name={instrument.instrument_name}
              expiration_date={instrument.expiration_timestamp}
              asset={filter}
              // guaranteed={orderBook[0] ? orderBook[0].estimated_delivery_price : null}
              guaranteed={instrument.strike}
            />
          );
        })}
    </div>
  );
};

export default OptionList;
