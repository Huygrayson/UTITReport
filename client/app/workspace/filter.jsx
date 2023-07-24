"use client"
import styles from '../styles/filter.module.css'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import Media from 'react-media';
import { useState } from 'react';

export default function FilterBtn() {
    const [filter, viewFilter] = useState(false);

    function handleOpenFilter() {
        viewFilter(true);
    }

    function handleCloseFilter() {
        viewFilter(false);
    }

    return(
        <>
            <Media query="(min-width: 650px)">
            {
                matches =>
                matches?    
                    (<div>
                        {filter? 
                            (
                            <div style={{display: "flex", flexDirection: "row"}}>                          
                                <div style={{marginRight: "5px", marginTop: "8px"}}>
                                    <select name="components" id="components" style={{width: "300px"}}>
                                        <option value="default">-- Run a specific component --</option>
                                        <option value="component 1">component 1</option>
                                        <option value="component 2">component 2</option>
                                        <option value="component 3">component 3</option>
                                    </select>
                                </div>
                                <div style={{marginRight: "5px", marginTop: "8px"}}>
                                    <select name="functions" id="functions" style={{width: "300px"}}>
                                        <option value="default">-- Run a specific function --</option>
                                        <option value="function 1">function 1</option>
                                        <option value="function 2">function 2</option>
                                        <option value="function 3">function 3</option>
                                    </select>
                                </div>
                                <div style={{textAlign: "center", marginRight: "6px"}}>
                                    <button className="btn btn-dark">
                                        Select
                                    </button>
                                </div>
                                
                                <button className={styles.btnFilterLeft} title="Filter target" onClick={handleCloseFilter}>
                                    <span><KeyboardDoubleArrowLeftIcon /></span>
                                </button>
                            </div>
                            ):
                            (<button className={styles.btnFilterRight} title="Filter target" onClick={handleOpenFilter}>
                                <span><KeyboardDoubleArrowRightIcon /></span>
                            </button>)
                        }
                    </div>):

                    (<div>
                        {filter? 
                            (
                            <div style={{display: "flex", flexDirection: "column"}}>
                                <div>
                                    <div style={{marginRight: "5px", marginTop: "8px"}}>
                                        <select name="components" id="components" style={{width: "300px"}}>
                                            <option value="default">-- Run a specific API set --</option>
                                            <option value="API set 1">API set 1</option>
                                            <option value="API set 2">API set 2</option>
                                            <option value="API set 3">API set 3</option>
                                        </select>
                                    </div>
                                    <div style={{marginRight: "5px", marginTop: "8px"}}>
                                        <select name="functions" id="functions" style={{width: "300px"}}>
                                            <option value="default">-- Run a specific function --</option>
                                            <option value="function 1">function 1</option>
                                            <option value="function 2">function 2</option>
                                            <option value="function 3">function 3</option>
                                        </select>
                                    </div>
                                    <div style={{textAlign: "center", marginTop: "6px"}}>
                                        <button className="btn btn-dark">
                                            Select
                                        </button>
                                    </div>
                                </div>
                                <button className={styles.btnFilterUp} title="Filter target" onClick={handleCloseFilter}>
                                    <span><KeyboardDoubleArrowUpIcon /></span>
                                </button>
                            </div>
                            ):
                            (<button className={styles.btnFilterDown} title="Filter target" onClick={handleOpenFilter}>
                                <span><KeyboardDoubleArrowDownIcon /></span>
                            </button>)
                        }   
                    </div>)
                    
            }
            </Media>
        </>
    )
}
