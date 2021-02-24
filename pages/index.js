import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Shield Finance</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Shield Finance!</a>
        </h1>

        <p className={styles.description}>
          Get started by exploring our UI preview.
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Investor UI &rarr;</h3>
            <p>Investors can <strong>buy insurance</strong> against price drops.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Protector UI &rarr;</h3>
            <p>Protectors can <strong>earn yield</strong> for selling insurance.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        &copy; Shield Finance, {new Date().getFullYear()}
      </footer>
    </div>
  )
}
