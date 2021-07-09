import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Select } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-evenly",
    "& .MuiInput-root": {
      width: "calc(100% - 120px) !important",
    },
  },
});

const options: string[] = [
  "Expiration date - longest first",
  "Expiration date - shortest first",
  "Guaranteed price - highest first",
  "Guaranteed price - lowest first",
];

interface typeSelectorPropsType {
  currencyType: string;
  setCurrencyType: React.Dispatch<React.SetStateAction<String>>;
  sortIndex: number;
  setSortIndex: React.Dispatch<React.SetStateAction<number>>;
}

const TypeSelector = ({ currencyType, setCurrencyType, sortIndex, setSortIndex }: typeSelectorPropsType) => {
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
      <Select
        value={currencyType}
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
      <Button onClick={handleClickListItem}> Sort by</Button>
      <Menu id="lock-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        {options.map((option, index) => (
          <MenuItem key={option} selected={index === sortIndex} onClick={(event) => handleMenuItemClick(event, index)}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default TypeSelector;
