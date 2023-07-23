import styles from '../styles/workspace.module.css'
import FilterBtn from './filter'

export default function Workspace() {
    return(
        <>
            <div className={styles.filterBtn}>
                <FilterBtn />
            </div>
            <div className={styles.mainArea}>
                Main content
            </div>
        </>
    )
}