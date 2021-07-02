import React from "react";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 400,
    padding: 20,
    border: "2px solid rgba(0, 0, 0, 0.5)",
    "&:hover": {
      cursor: "pointer",
      border: "2px solid rgba(0, 112, 243, 0.5)",
    },
  },
  title: {
    fontSize: 22,
  },
  pos: {
    marginBottom: 12,
  },
});

const SelectionCard = () => {
  const classes = useStyles();

  return (
    <Link href="/investor" passHref>
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Investor UI &rarr;
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Investors can <strong>buy insurance</strong> against price drops.
          </Typography>
          <Typography variant="body2" component="p">
            Click to continue ...
          </Typography>
        </CardContent>
        {/* <CardActions>
          <Button size="small">Click here</Button>
        </CardActions> */}
      </Card>
    </Link>
  );
};

export default SelectionCard;
