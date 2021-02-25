import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-bootstrap-typeahead/css/Typeahead.css';
import styles from '../styles/layout.module.css'
import Head from 'next/dist/next-server/lib/head.js'

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Shield Finance</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
      {/*<footer className={styles.footer}>*/}
      {/*  &copy; Shield Finance, {new Date().getFullYear()}*/}
      {/*</footer>*/}
    </div>
  )
}

export default MyApp
