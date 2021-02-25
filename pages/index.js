import styles from '../styles/layout.module.css'

export default function Index() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        Welcome to <a href="/">Shield Finance!</a>
      </h1>

      <p className={styles.description}>
        Get started by exploring our UI preview.
      </p>

      <div className={styles.grid}>
        <a href="/investor" className={styles.card}>
          <h3>Investor UI &rarr;</h3>
          <p>Investors can <strong>buy insurance</strong> against price drops.</p>
        </a>

        <a href="/protector" className={styles.card}>
          <h3>Protector UI &rarr;</h3>
          <p>Protectors can <strong>earn yield</strong> for selling insurance.</p>
        </a>
      </div>
    </main>
  )
}
