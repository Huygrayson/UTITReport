"use client"
import "bootstrap/dist/css/bootstrap.min.css";
import styles from './styles/page.module.css'
import FilterBtn from './filter'
import Task from "./task";
import Log from "./logs";
import ITTemplate from "./IT_template";

export default function Workspace() {
    return(
        <>
            <div className={styles.filterArea}>
                <FilterBtn />
            </div>
            <div className={styles.layout}>
                <div className={styles.mainArea}>
                    <ITTemplate />
                </div>
                <div className={styles.taskArea}>
                    <Task />
                </div>
                <div className={styles.logArea}>
                    <Log />
                </div>
            </div>

        </>
    )
}