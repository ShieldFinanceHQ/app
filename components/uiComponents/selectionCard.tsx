import React from "react";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { muiTheme } from "../../pages/_app";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 400,
    padding: "0 20px",
    "&:hover": {
      cursor: "pointer",
      border: "4px solid rgba(0, 112, 243, 0.5)",
    },
    "& *": {
      margin: "20px 0",
    },
  },
  lightBg: {
    border: "4px solid rgba(0, 0, 0, 0.4)",
    background: muiTheme.palette.secondary.main,
  },
  darkBg: {
    border: "4px solid rgba(225, 225, 225, 0.5)",
    background: muiTheme.palette.primary.main,
  },
  title: {
    fontSize: 22,
  },
  pos: {
    marginBottom: 12,
  },
});

const SelectionCard = ({ theme }: { theme: String }) => {
  const classes = useStyles();

  return (
    <Link href="/investorUi" passHref>
      <Card className={theme === "light" ? `${classes.root} ${classes.lightBg}` : `${classes.root} ${classes.darkBg}`}>
        <CardContent>
          <Typography className={classes.title} color={theme === "light" ? "primary" : "secondary"} gutterBottom>
            Investor UI &rarr;
          </Typography>
          <Typography className={classes.pos} color={theme === "light" ? "primary" : "secondary"}>
            Investors can <strong>buy insurance</strong> against price drops.
          </Typography>
          <Typography variant="body2" component="p" color={theme === "light" ? "primary" : "secondary"}>
            Click to continue ...
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default SelectionCard;
