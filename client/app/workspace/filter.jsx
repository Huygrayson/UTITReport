"use client"
import styles from './styles/filter.module.css'
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
            <Media query="(min-width: 900px)">
            {
                matches =>
                matches?    
                    (<div>
                        {filter? 
                            (
                            <div style={{display: "flex", flexDirection: "row"}}>  
                                <div style={{display: "flex", flexDirection: "row", marginTop: "8px", marginRight: "20px"}}>
                                    <label htmlFor="device">Device:&nbsp;</label>
                                    <div style={{paddingTop: "0px"}}>
                                        <input type="checkbox" id="V3M2" name="V3M2" value="V3M2"/>
                                        <label for="V3M2">&nbsp;V3M2</label><br/>
                                        <input type="checkbox" id="V3H1" name="V3H1" value="V3H1"/>
                                        <label for="V3H1">&nbsp;V3H1</label><br/>
                                        <input type="checkbox" id="V3H2" name="V3H2" value="V3H2"/>
                                        <label for="V3H2">&nbsp;V3H2</label><br/>
                                        <input type="checkbox" id="V4H" name="V4H" value="V4H"/>
                                        <label for="V4H">&nbsp;V4H</label><br/>
                                        <input type="checkbox" id="V4H2" name="V4H2" value="V4H2"/>
                                        <label for="V4H2">&nbsp;V4H2</label>
                                    </div>
                                </div>          
                                <div style={{display: "flex", flexDirection: "row", marginTop: "8px", marginRight: "20px"}}>
                                    <label htmlFor="OS">OS:&nbsp;</label>
                                    <div style={{paddingTop: "0px"}}>
                                        <input type="checkbox" id="Linux-GCC" name="Linux-GCC" value="Linux-GCC"/>
                                        <label for="Linux-GCC">&nbsp;Linux-GCC</label><br/>
                                        <input type="checkbox" id="Linux-ARM" name="Linux-ARM" value="Linux-ARM"/>
                                        <label for="Linux-ARM">&nbsp;Linux-ARM</label><br/>
                                        <input type="checkbox" id="Zephyr-ARM" name="Zephyr-ARM" value="Zephyr-ARM"/>
                                        <label for="Zephyr-ARM">&nbsp;Zephyr-ARM</label><br/>
                                        <input type="checkbox" id="QNX" name="QNX" value="QNX"/>
                                        <label for="QNX">&nbsp;QNX</label>
                                    </div>
                                </div>                 
                                <div style={{display: "flex", flexDirection: "row", marginTop: "8px", marginRight: "20px"}}>
                                    <label htmlFor="components">Component:&nbsp;</label>
                                    <div style={{paddingTop: "0px"}}>
                                        <input type="checkbox" id="component1" name="component1" value="component1"/>
                                        <label for="component1">&nbsp;Component 1</label><br/>
                                        <input type="checkbox" id="component2" name="component2" value="component2"/>
                                        <label for="component2">&nbsp;Component 2</label><br/>
                                        <input type="checkbox" id="component3" name="component3" value="component3"/>
                                        <label for="Zephyr-ARM">&nbsp;Component 3</label>
                                    </div>
                                </div>
                                
                                <div style={{textAlign: "center", marginTop: "10px", marginRight: "6px", marginLeft: "6px"}}>
                                    <button className="btn btn-dark">
                                        Select
                                    </button>
                                </div>
                                
                                <button className={styles.btnFilterLeft} title="Filter view" onClick={handleCloseFilter}>
                                    <span><KeyboardDoubleArrowLeftIcon /></span>
                                </button>
                            </div>
                            ):
                            (<button className={styles.btnFilterRight} title="Filter view" onClick={handleOpenFilter}>
                                <span><KeyboardDoubleArrowRightIcon /></span>
                            </button>)
                        }
                    </div>):

                    (<div>
                        {filter? 
                            (
                            <div style={{display: "flex", flexDirection: "column"}}>
                                <div className={styles.filterBarCol}>
                                    <div>
                                        <div><label htmlFor="device">Device</label></div>
                                    </div>
                                    <div>
                                    <div>
                                        :&nbsp;<input type="checkbox" id="V3M2" name="V3M2" value="V3M2"/>
                                            <label for="V3M2">&nbsp;V3M2</label><br/>
                                            &nbsp;&nbsp;<input type="checkbox" id="V3H1" name="V3H1" value="V3H1"/>
                                            <label for="V3H1">&nbsp;V3H1</label><br/>
                                            &nbsp;&nbsp;<input type="checkbox" id="V3H2" name="V3H2" value="V3H2"/>
                                            <label for="V3H2">&nbsp;V3H2</label><br/>
                                            &nbsp;&nbsp;<input type="checkbox" id="V4H" name="V4H" value="V4H"/>
                                            <label for="V4H">&nbsp;V4H</label><br/>
                                            &nbsp;&nbsp;<input type="checkbox" id="V4H2" name="V4H2" value="V4H2"/>
                                            <label for="V4H2">&nbsp;V4H2</label>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.filterBarCol}>
                                    <div>
                                        <div><label htmlFor="OS">OS</label></div>
                                    </div>
                                    <div>
                                    <div>
                                        :&nbsp;<input type="checkbox" id="Linux-GCC" name="Linux-GCC" value="Linux-GCC"/>
                                            <label for="Linux-GCC">&nbsp;Linux-GCC</label><br/>
                                            &nbsp;&nbsp;<input type="checkbox" id="Linux-ARM" name="Linux-ARM" value="Linux-ARM"/>
                                            <label for="Linux-ARM">&nbsp;Linux-ARM</label><br/>
                                            &nbsp;&nbsp;<input type="checkbox" id="Zephyr-ARM" name="Zephyr-ARM" value="Zephyr-ARM"/>
                                            <label for="Zephyr-ARM">&nbsp;Zephyr-ARM</label><br/>
                                            &nbsp;&nbsp;<input type="checkbox" id="QNX" name="QNX" value="QNX"/>
                                            <label for="QNX">&nbsp;QNX</label>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.filterBarCol}>
                                    <div>
                                        <div><label htmlFor="components">Component</label></div>
                                    </div>
                                    <div>
                                    <div>
                                        :&nbsp;<input type="checkbox" id="component1" name="component1" value="component1"/>
                                            <label for="component1">&nbsp;Component 1</label><br/>
                                            &nbsp;&nbsp;<input type="checkbox" id="component2" name="component2" value="component2"/>
                                            <label for="component2">&nbsp;Component 2</label><br/>
                                            &nbsp;&nbsp;<input type="checkbox" id="component3" name="component3" value="component3"/>
                                            <label for="Zephyr-ARM">&nbsp;Component 3</label>
                                        </div>
                                    </div>
                                </div>
                                <div style={{textAlign: "center", marginTop: "10px"}}>
                                    <button className="btn btn-dark">
                                        Select
                                    </button>
                                </div>
                                <button className={styles.btnFilterUp} title="Filter view" onClick={handleCloseFilter}>
                                    <span><KeyboardDoubleArrowUpIcon /></span>
                                </button>
                            </div>
                            ):
                            (<button className={styles.btnFilterDown} title="Filter view" onClick={handleOpenFilter}>
                                <span><KeyboardDoubleArrowDownIcon /></span>
                            </button>)
                        }   
                    </div>)
                    
            }
            </Media>
        </>
    )
}
