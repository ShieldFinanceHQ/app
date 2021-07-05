import React from "react";
import OptionCard from "./optionCard";
import { makeStyles } from "@material-ui/core/styles";
import { instrumentType } from "../../interfaces/instrument";

const useStyles = makeStyles({
  optionListRoot: {
    height: "100%",
    width: "100%",
    overflow: "scroll",
    margin: "20px 0",

    "&::-webkit-scrollbar": {
      width: 0,
      background: "transparent",
    },
  },
});

const dummyResult = [1, 2, 3, 4, 5, 6];

interface optionListType {
  instruments: instrumentType[];
  orderBooks: any;
  filter: string;
}

interface offerType {
  name: String;
  expirationDate: Number;
}

const OptionList = ({ instruments, orderBooks, filter }: optionListType) => {
  const classes = useStyles();

  const filteredInstruments = instruments.filter((instrument) => instrument.base_currency === filter);
  console.log(filteredInstruments, orderBooks);

  return (
    <div className={classes.optionListRoot}>
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
      )
    </div>
  );
};

export default OptionList;