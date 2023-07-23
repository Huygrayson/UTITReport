"use client"
import { useState } from 'react';
import styles from './styles/page.module.css'
import "bootstrap/dist/css/bootstrap.min.css";
import NewProject from './new_project';
import LoadProject from './load_project';

export default function Home() {
  const [newProject, viewNewProject] = useState(false);
  const [loadProject, viewLoadProject] = useState(false);

  function handleNewProject(){
    viewNewProject(true);
  }

  function handleLoadProject(){
    viewLoadProject(true);
  }

  return (
    <>
      {newProject? <NewProject viewNewProject={viewNewProject}/>: <></>}
      {loadProject? <LoadProject viewLoadProject={viewLoadProject}/>: <></>}
      <main className={styles.main}>
        <div>
          <img src="/img/undraw_programming_re_kg9v.svg" id={styles.programmerImg} alt="Programmer" />
        </div>
        <div className={styles.btnArea}>
          <button className={`btn btn-dark ${styles.btnLoad}`} onClick={handleLoadProject}>Load Project</button>
          <button className={`btn btn-dark ${styles.btnNew}`} onClick={handleNewProject}>New Project</button>
        </div>
      </main>
    </>
  )
}