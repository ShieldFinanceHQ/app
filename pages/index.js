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
        <div className={styles.card}>
          <h3>Investor UI</h3>
          <p>Investors can <strong>buy insurance</strong> against price drops.</p>
          <p><Link href="/investor" passHref>Visit &rarr;</Link></p>
        </div>

        <div className={styles.card}>
          <h3>Protector UI</h3>
          <p>Protectors can <strong>earn yield</strong> for selling insurance.</p>
          <p><Link href="/protector" passHref className={styles.card}>Visit &rarr;</Link></p>
        </div>
      </div>
    </main>
  )
}
