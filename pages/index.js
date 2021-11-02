import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Apple servis "Yabooka"</title>
        <meta name='description' content='Apple servis Yabooka Nis' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          <div className={styles.logo}>
            <Image src={'/logo-final.svg'} width={400} height={300} />
          </div>
          <div className={styles.big}>Website je u izradi.</div>
          <div className={styles.small}>
            Za sve informacije u vezi servisa možete nam se obratiti na
            <span className={styles.bold}> yabooka.rs@gmail.com</span> ili na
            broj telefona <span className={styles.bold}>0677/209-310</span>.
          </div>
        </div>
      </main>
    </div>
  )
}
