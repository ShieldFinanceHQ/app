import Link from 'next/link'
import styles from '../styles/layout.module.css'

export default function Index() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        Welcome to <Link href="/">Shield Finance!</Link>
      </h1>

      <p className={styles.description}>
        Get started by exploring our UI preview.
      </p>

      <div className={styles.grid}>
        <Link href="/investor" passHref className={styles.card}>
          <h3>Investor UI &rarr;</h3>
          <p>Investors can <strong>buy insurance</strong> against price drops.</p>
        </Link>

        <Link href="/protector" passHref className={styles.card}>
          <h3>Protector UI &rarr;</h3>
          <p>Protectors can <strong>earn yield</strong> for selling insurance.</p>
        </Link>
      </div>
    </main>
  )
}
