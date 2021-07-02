import React from "react";
import footer from "./footer.module.css";

interface footerPropsType {
  copyrightText: String;
  theme: String;
}

const Footer = ({ copyrightText, theme }: footerPropsType) => {
  return (
    <div
      className={
        theme === "light"
          ? `${footer.footerWrapper} ${footer.lightFooter}`
          : `${footer.footerWrapper} ${footer.darkFooter}`
      }
    >
      &copy; {copyrightText}, {new Date().getFullYear()}
    </div>
  );
};

export default Footer;
