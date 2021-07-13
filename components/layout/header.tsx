import React from "react";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import header from "./header.module.css";

const useStyles = makeStyles({
  title: {
    "&:hover": {
      cursor: "pointer",
    },
  },
});

interface headerPropsType {
  title: string;
  theme: string;
  switchTheme: React.Dispatch<React.SetStateAction<string>>;
}

const Header = ({ title, theme, switchTheme }: headerPropsType) => {
  const classes = useStyles();

  const handleSwitchTheme = (theme: string): void => {
    if (theme === "light") switchTheme("dark");
    else switchTheme("light");
  };

  return (
    <div className={header.headerWrapper}>
      <Link href="/">
        <Typography
          variant="h5"
          component="h1"
          className={
            theme === "light" ? `${classes.title} ${header.lightTitle}` : `${classes.title} ${header.darkTitle}`
          }
        >
          {title}
        </Typography>
      </Link>
      <div style={{ display: "none" }} onClick={() => handleSwitchTheme(theme)} className={header.switch}>
        {theme === "light" ? <NightsStayIcon color="primary" /> : <WbSunnyIcon color="secondary" />}
      </div>
    </div>
  );
};

export default Header;
