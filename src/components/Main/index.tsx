import styles from './styles.module.scss'
import Image from 'next/image'

export const Main = () => (
  <main className={styles.container}>
    <div className={styles.title}>
      <Image
        src="/background-logo.svg"
        width={140}
        height={99}
        alt="logo de background do valorant"
      />

      <h1>AGENTES</h1>
    </div>

    <div className={styles.characters}>listagem de agentes</div>
  </main>
)
