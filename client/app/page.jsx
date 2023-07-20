import styles from './styles/page.module.css'
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div>
          <img src="/img/undraw_programming_re_kg9v.svg" id={styles.programmerImg} alt="Programmer" />
        </div>
        <div className={styles.btnArea}>
          <button className={`btn btn-dark ${styles.btnLoad}`}>Load Project</button>
          <button className={`btn btn-dark ${styles.btnNew}`}>New Project</button>
        </div>
      </main>
    </>
  )
}
