"use client"
import styles from './styles/task.module.css'
import Media from 'react-media';

export default function Task() {
    return(
        <>
            <Media query="(min-width: 800px)">
                {
                    matches =>
                    <div style={matches? {display: "flex", flexDirection: "row", marginRight: "6px"}:{display: "flex", flexDirection: "column", marginRight: "6px"}}>
                        <div>
                            <button type="submit" className={`btn btn-dark ${styles.btnRun}`}>Run (S0S1)</button>   
                        </div>
                        <div>
                            <button type="submit" className={`${styles.btnLog} btn btn-dark`}>Get log</button>   
                        </div>
                        <div>
                            <button type="submit" className={`${styles.btnReport} btn btn-dark`}>Report</button>   
                        </div>
                    </div>
                }
            </Media>
        </>
    )
}