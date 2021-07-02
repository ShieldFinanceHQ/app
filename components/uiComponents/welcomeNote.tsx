import { Typography } from "@material-ui/core";
import React from "react";
import welcome from "./welcome.module.css";

interface welcomePropsType {
  theme: String;
  title: String;
  subtitle: String;
  description: String;
}

const WelcomeNote = ({ theme, title, subtitle, description }: welcomePropsType) => {
  return (
    <div className={welcome.welcomeWrapper}>
      <Typography
        variant="h5"
        component="h1"
        className={
          theme === "light"
            ? `${welcome.subtitle} ${welcome.lightWelcome}`
            : `${welcome.subtitle} ${welcome.darkWelcome}`
        }
      >
        {subtitle}
      </Typography>
      <Typography variant="h2" component="h1" className={welcome.title}>
        <a href="#" className={welcome.link}>
          {title}
        </a>
      </Typography>
      <Typography
        component="p"
        className={
          theme === "light"
            ? `${welcome.description} ${welcome.lightWelcome}`
            : `${welcome.description} ${welcome.darkWelcome}`
        }
      >
        {description}
      </Typography>
    </div>
  );
};

export default WelcomeNote;
