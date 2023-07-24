import "bootstrap/dist/css/bootstrap.min.css";
import styles from '../styles/workspace.module.css'
import FilterBtn from './filter'
import IT from "./IT";

export default function Workspace() {
    return(
        <>
            <div className={styles.filterArea}>
                <FilterBtn />
            </div>
            <div className={styles.mainArea}>
                <IT />
            </div>
        </>
    )
}