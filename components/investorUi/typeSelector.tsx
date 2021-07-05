import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Select } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles({
  root: {
    "& .MuiInput-root": {
      width: "100%",
    },
  },
});

interface typeSelectorPropsType {
  currencyType: string;
  setCurrencyType: React.Dispatch<React.SetStateAction<String>>;
}

const TypeSelector = ({ currencyType, setCurrencyType }: typeSelectorPropsType) => {
  const classes = useStyles();
  const types: string[] = ["BTC", "ETH"];

  return (
    <div className={classes.root}>
      <Select
        value={currencyType}
        onChange={(e) => {
          setCurrencyType(e.target.value as string);
        }}
      >
        {types.map((type, index) => (
          <MenuItem key={index} value={type}>
            {type}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default TypeSelector;
