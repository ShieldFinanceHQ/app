import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Select } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import TextField from "@material-ui/core/TextField";
import { onlyNumbers } from "../../lib/validation/index";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  pairContainer: {
    padding: 15,
    backgroundColor: "#d3e0f8",
    borderRadius: 10,
    marginBottom: 20,
  },
  pairSelect: {
    display: "grid",
    gridTemplateColumns: "20% auto",
    margin: "5px auto",
    "& img": {
      width: "100%",
      padding: 10,
    },
    "& .MuiInputBase-root": {
      margin: "auto 0",
      width: "calc(100%) !important",
      height: 50,
      background: "#eeeeee",
    },
  },
  amountProtected: {
    display: "grid",
    margin: "5px auto",
    gridTemplateColumns: "2fr 3fr 1fr",
    "& span": {
      fontWeight: "light",
      fontSize: "20px",
    },
    h4: {
      color: "red",
      fontWeight: 400,
    },
    "& > *": {
      margin: "auto",
      textAlign: "center",
    },
    "& .MuiInputBase-root": {
      margin: "auto 5px",
      height: 50,
      background: "#eeeeee",
    },
  },
  contractCount: {
    textAlign: "center",
  },
  sortBy: {
    margin: "auto",
    "& > span:first-of-type": {
      fontWeight: "bold",
    },
    "& .MuiButtonBase-root": {
      background: "#eeeeee",
    },
  },
});

const options: string[] = [
  "Expiration date - shortest first",
  "Expiration date - longest first",
  "Guaranteed price - highest first",
  "Guaranteed price - lowest first",
];

interface typeSelectorPropsType {
  currencyType: string;
  setCurrencyType: React.Dispatch<React.SetStateAction<string>>;
  sortIndex: number;
  setSortIndex: React.Dispatch<React.SetStateAction<number>>;
  amount: string;
  setAmount: React.Dispatch<React.SetStateAction<string>>;
  contractsAvailable: number;
}

const TypeSelector = ({
  currencyType,
  setCurrencyType,
  sortIndex,
  setSortIndex,
  amount,
  setAmount,
  contractsAvailable,
}: typeSelectorPropsType) => {
  const classes = useStyles();
  const types: string[] = ["BTC", "ETH"];

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event: React.MouseEvent<HTMLElement>, index: number) => {
    setSortIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <h4>Pair</h4>
      <div className={classes.pairContainer}>
        <div className={classes.pairSelect}>
          <img src="/pair_icon.png" alt="pair icon" />
          <Select
            value={currencyType}
            variant="outlined"
            onChange={(e) => {
              setCurrencyType(e.target.value as string);
            }}
          >
            {types.map((type, index) => (
              <MenuItem key={index} value={type}>
                {type} - USD
              </MenuItem>
            ))}
          </Select>
        </div>
        <div className={classes.amountProtected}>
          <span>Amount Protected:</span>
          <TextField
            id="asset-value"
            label={amount.length > 0 ? "" : "Amount"}
            value={amount}
            variant="outlined"
            error={!onlyNumbers(amount) && amount !== ""}
            helperText={!onlyNumbers(amount) && amount !== "" ? "Enter a valid amount" : null}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />
          <h4>{currencyType}</h4>
        </div>
      </div>
      <div className={classes.contractCount}>
        <h4>Contracts available ({contractsAvailable})</h4>
      </div>
      <div className={classes.sortBy}>
        <span>Sort by:</span> <Button onClick={handleClickListItem}> {options[sortIndex]}</Button>
        <Menu
          id="lock-menu"
          color="primary"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {options.map((option, index) => (
            <MenuItem
              key={option}
              selected={index === sortIndex}
              onClick={(event) => handleMenuItemClick(event, index)}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
      </div>
    </div>
  );
};

export default TypeSelector;
