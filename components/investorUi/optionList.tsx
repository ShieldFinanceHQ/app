import React from "react";
import OptionCard from "./optionCard";
import { makeStyles } from "@material-ui/core/styles";
import { instrumentType } from "../../interfaces/instrument";
import { orderBookType } from "../../interfaces/orderBook";

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

const dummyResult = [1, 2, 3, 4, 5, 6];

interface optionListType {
  instruments: instrumentType[];
  orderBooks: orderBookType[];
  filter: string;
}

interface offerType {
  name: String;
  expirationDate: Number;
}

const OptionList = ({ instruments, orderBooks, filter }: optionListType) => {
  const classes = useStyles();

  const filteredInstruments =
    instruments !== null ? instruments.filter((instrument) => instrument.base_currency === filter) : [];

  return (
    <div className={classes.optionListRoot}>
      <h6 style={{ textAlign: "center" }}>Available Contracts ({filteredInstruments.length})</h6>
      {filteredInstruments.map((instrument, index) => {
        // const orderBook = orderBooks.filter((orderBook) => orderBook.instrument_name === instrument.instrument_name);
        return (
          <OptionCard
            key={index}
            instrument_name={instrument.instrument_name}
            expiration_date={instrument.expiration_timestamp}
          />
        );
      })}
    </div>
  );
};

export default OptionList;
