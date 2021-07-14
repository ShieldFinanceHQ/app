import React from "react";
import type { AppProps } from "next/app";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import Head from "next/dist/next-server/lib/head.js";
import SimpleContainer from "../components/uiComponents/container";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import "../styles/globals.css";
import styles from "../styles/layout.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-typeahead/css/Typeahead.css";

export const muiTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#141414",
    },
    secondary: {
      main: "#ffffff",
    },
  },
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = React.useState<string>("light");
  return (
    <ThemeProvider theme={muiTheme}>
      <div
        className={
          theme === "light"
            ? `${styles.container} ${styles.lightContainer}`
            : `${styles.container} ${styles.darkContainer}`
        }
      >
        <Head>
          <title>Shield Finance</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {/* <Header title="Shield Finance" theme={theme} switchTheme={setTheme} /> */}
        <SimpleContainer>
          <Component {...pageProps} theme={theme} />
        </SimpleContainer>
        {/* <Footer copyrightText="Shield Finance" theme={theme} /> */}
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
