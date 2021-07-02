import React from "react";
import Link from "next/link";
import SelectionCard from "../components/uiComponents/selectionCard";
import styles from "../styles/layout.module.css";
import Home from "../components/home";

export default function Index({ theme }: { theme: String }) {
  return (
    <main className={styles.main}>
      <Home theme={theme} />
      <SelectionCard />
    </main>
  );
}
