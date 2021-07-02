import React from "react";
import styles from "../styles/layout.module.css";
import Home from "../components/home";

export default function Index({ theme }: { theme: String }) {
  return (
    <main className={styles.main}>
      <Home theme={theme} />
    </main>
  );
}
