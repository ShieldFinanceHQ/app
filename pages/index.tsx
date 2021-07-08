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

// export async function getStaticProps(context) {
//   const res = await fetch(`${process.env.DEVELOPMENT_DOMAIN}/api/getInstrumentsAndOrders`);
//   const data = await res.json();

//   if (!data) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: { data }, // will be passed to the page component as props
//   };
// }
