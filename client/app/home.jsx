"use client"
import { useState } from 'react';
import styles from './styles/page.module.css'
import "bootstrap/dist/css/bootstrap.min.css";
import NewProject from './new_project';

export default function Home() {
  const [newProject, viewNewProject] = useState(false);

  function handleNewProject(){
    viewNewProject(true);
  }

  return (
    <>
      {newProject? <NewProject newProject={newProject}/>: <></>}
      <main className={styles.main}>
        <div>
          <img src="/img/undraw_programming_re_kg9v.svg" id={styles.programmerImg} alt="Programmer" />
        </div>
        <div className={styles.btnArea}>
          <button className={`btn btn-dark ${styles.btnLoad}`}>Load Project</button>
          <button className={`btn btn-dark ${styles.btnNew}`} onClick={handleNewProject}>New Project</button>
        </div>
      </main>
    </>
  )
}