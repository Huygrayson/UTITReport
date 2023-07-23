import styles from '../styles/filter.module.css'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

export default function FilterBtn() {
    function FilterBar() {
        return(
            <>
                <div>
                    <div>
                        <select name="components" id="components">
                            <option value="default">-- Run a specific component --</option>
                            <option value="component 1">component 1</option>
                            <option value="component 2">component 2</option>
                            <option value="component 3">component 3</option>
                        </select>
                    </div>
                    <div>
                        <select name="functions" id="functions">
                            <option value="default">-- Run a specific function --</option>
                            <option value="function 1">function 1</option>
                            <option value="function 2">function 2</option>
                            <option value="function 3">function 3</option>
                        </select>
                    </div>
                    <div>
                        <button>Select</button>
                    </div>
                </div>
            </>
        )
    }
    return(
        <>
            <div style={{display: "flex", flexDirection: "row"}}>
                <button className={styles.btnFilterRight} title="Filter target">
                    <span><KeyboardDoubleArrowRightIcon /></span>
                </button>

                <button className={styles.btnFilterLeft} title="Filter target">
                    <span><KeyboardDoubleArrowLeftIcon /></span>
                </button>

                <button className={styles.btnFilterDown} title="Filter target">
                    <span><KeyboardDoubleArrowDownIcon /></span>
                </button>

                <button className={styles.btnFilterUp} title="Filter target">
                    <span><KeyboardDoubleArrowUpIcon /></span>
                </button>
            </div>
        </>
    )
}
