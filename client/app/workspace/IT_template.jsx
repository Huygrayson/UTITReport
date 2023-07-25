import styles from '../styles/IT_template.module.css'

export default function ITTemplate() {
    return(
        <>
            <div id={styles.testSummarySheet} style={{overflow: "auto"}}>
                <div className={styles.generalInfo}>
                    <div>
                        <label htmlFor="testType"><b>Test type</b></label><br/>
                        <label htmlFor="module"><b>Module</b></label><br/>
                        <label htmlFor="device"><b>Device</b></label><br/>
                        <label htmlFor="OS"><b>OS</b></label>
                    </div>
                    <div>
                        <b>:</b>&nbsp;IT<br/>
                        <b>:</b>&nbsp;IMRDRV<br/>
                        <b>:</b>&nbsp;V3M2<br/>
                        <b>:</b>&nbsp;Linux-GCC<br/>
                    </div>
                </div>
                <div className={styles.tableTitle}>
                    Test Summary
                </div>
                <div className={styles.testResult}>
                    <label htmlFor="testResult">Test result</label>
                    <table className="table table-hover table-bordered table-sm" cellSpacing="1" width="100%">
                        <thead>
                            <tr>
                                <th className="th-sm" colSpan={5}>V3H1</th>
                                <th className="th-sm" colSpan={5}>V3H2</th>
                                <th className="th-sm" colSpan={5}>V3M2</th>
                                <th className="th-sm" colSpan={5}>V4H</th>
                                <th className="th-sm" colSpan={5}>V4H2</th>
                            </tr>
                            <tr>
                                <th className="th-sm">Total</th>
                                <th className="th-sm">Passed</th>
                                <th className="th-sm">Failed</th>
                                <th className="th-sm">Remaining</th>
                                <th className="th-sm">N/A</th>
                                <th className="th-sm">Total</th>
                                <th className="th-sm">Passed</th>
                                <th className="th-sm">Failed</th>
                                <th className="th-sm">Remaining</th>
                                <th className="th-sm">N/A</th>
                                <th className="th-sm">Total</th>
                                <th className="th-sm">Passed</th>
                                <th className="th-sm">Failed</th>
                                <th className="th-sm">Remaining</th>
                                <th className="th-sm">N/A</th>
                                <th className="th-sm">Total</th>
                                <th className="th-sm">Passed</th>
                                <th className="th-sm">Failed</th>
                                <th className="th-sm">Remaining</th>
                                <th className="th-sm">N/A</th>
                                <th className="th-sm">Total</th>
                                <th className="th-sm">Passed</th>
                                <th className="th-sm">Failed</th>
                                <th className="th-sm">Remaining</th>
                                <th className="th-sm">N/A</th>
                            </tr>
                        </thead>
                        <tbody style={{cursor: "pointer"}}>
                            <tr>
                                <td>2392</td>
                                <td>2392</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2392</td>
                                <td>2392</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2392</td>
                                <td>2392</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2392</td>
                                <td>2392</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2392</td>
                                <td>2392</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <div className={styles.coverageResult}>
                    <label htmlFor="coverage">Coverage results</label>
                    <table className="table table-hover table-bordered table-sm" cellSpacing="1" width="100%">
                        <thead>
                            <tr>
                                <th className="th-sm" style={{visibility: "hidden"}}></th>
                                <th className="th-sm" style={{visibility: "hidden"}}></th>
                                <th className="th-sm" colSpan={3}>V3H1</th>
                                <th className="th-sm" colSpan={3}>V3H2</th>
                                <th className="th-sm" colSpan={3}>V3M2</th>
                                <th className="th-sm" colSpan={3}>V4H</th>
                                <th className="th-sm" colSpan={3}>V4H2</th>
                            </tr>
                            <tr>
                                <th className="th-sm">Component</th>
                                <th className="th-sm">Function</th>
                                <th className="th-sm">S0 Rate</th>
                                <th className="th-sm">S1 Rate</th>
                                <th className="th-sm">Remarks</th>
                                <th className="th-sm">S0 Rate</th>
                                <th className="th-sm">S1 Rate</th>
                                <th className="th-sm">Remarks</th>
                                <th className="th-sm">S0 Rate</th>
                                <th className="th-sm">S1 Rate</th>
                                <th className="th-sm">Remarks</th>
                                <th className="th-sm">S0 Rate</th>
                                <th className="th-sm">S1 Rate</th>
                                <th className="th-sm">Remarks</th>
                                <th className="th-sm">S0 Rate</th>
                                <th className="th-sm">S1 Rate</th>
                                <th className="th-sm">Remarks</th>
                            </tr>
                        </thead>
                        <tbody style={{cursor: "pointer"}}>
                            <tr>
                                <td>basic_function</td>
                                <td>R_IMRDRV_Init</td>
                                <td>100.00%</td>
                                <td>100.00%</td>
                                <td>-</td>
                                <td>100.00%</td>
                                <td>100.00%</td>
                                <td>-</td>
                                <td>100.00%</td>
                                <td>100.00%</td>
                                <td>-</td>
                                <td>100.00%</td>
                                <td>100.00%</td>
                                <td>-</td>
                                <td>100.00%</td>
                                <td>100.00%</td>
                                <td>-</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <div className={styles.executionTime}>
                    <label htmlFor="executionTime">Execution time</label>
                    <table className="table table-hover table-bordered table-sm" cellSpacing="1" width="100%">
                        <thead>
                            <tr>
                                <th className="th-sm" style={{visibility: "hidden"}}></th>
                                <th className="th-sm" style={{visibility: "hidden"}}></th>
                                <th className="th-sm" colSpan={4}>V3H1</th>
                                <th className="th-sm" colSpan={4}>V3H2</th>
                                <th className="th-sm" colSpan={4}>V3M2</th>
                                <th className="th-sm" colSpan={4}>V4H</th>
                                <th className="th-sm" colSpan={4}>V4H2</th>
                            </tr>
                            <tr>
                                <th className="th-sm">Component</th>
                                <th className="th-sm">Function</th>
                                <th className="th-sm">Max(ns)</th>
                                <th className="th-sm">Average(ns)</th>
                                <th className="th-sm">Expected max execution time(ns)</th>
                                <th className="th-sm">Judgement</th>
                                <th className="th-sm">Max(ns)</th>
                                <th className="th-sm">Average(ns)</th>
                                <th className="th-sm">Expected max execution time(ns)</th>
                                <th className="th-sm">Judgement</th>
                                <th className="th-sm">Max(ns)</th>
                                <th className="th-sm">Average(ns)</th>
                                <th className="th-sm">Expected max execution time(ns)</th>
                                <th className="th-sm">Judgement</th>
                                <th className="th-sm">Max(ns)</th>
                                <th className="th-sm">Average(ns)</th>
                                <th className="th-sm">Expected max execution time(ns)</th>
                                <th className="th-sm">Judgement</th>
                                <th className="th-sm">Max(ns)</th>
                                <th className="th-sm">Average(ns)</th>
                                <th className="th-sm">Expected max execution time(ns)</th>
                                <th className="th-sm">Judgement</th>
                            </tr>
                        </thead>
                        <tbody style={{cursor: "pointer"}}>
                            <tr>
                                <td>basic_function</td>
                                <td>R_IMRDRV_Init</td>
                                <td>16020</td>
                                <td>434</td>
                                <td>10,000,000</td>
                                <td>OK</td>
                                <td>16020</td>
                                <td>434</td>
                                <td>10,000,000</td>
                                <td>OK</td>
                                <td>16020</td>
                                <td>434</td>
                                <td>10,000,000</td>
                                <td>OK</td>
                                <td>16020</td>
                                <td>434</td>
                                <td>10,000,000</td>
                                <td>OK</td>
                                <td>16020</td>
                                <td>434</td>
                                <td>10,000,000</td>
                                <td>OK</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className={styles.memoryUsage}>
                    <label htmlFor="stackSize">Memory usage</label>
                    <table className="table table-hover table-bordered table-sm" cellSpacing="1" width="100%">
                        <thead>
                            <tr>
                                <th className="th-sm" style={{visibility: "hidden"}}></th>
                                <th className="th-sm" style={{visibility: "hidden"}}></th>
                                <th className="th-sm" colSpan={3}>V3H1</th>
                                <th className="th-sm" colSpan={3}>V3H2</th>
                                <th className="th-sm" colSpan={3}>V3M2</th>
                                <th className="th-sm" colSpan={3}>V4H</th>
                                <th className="th-sm" colSpan={3}>V4H2</th>
                            </tr>
                            <tr>
                                <th className="th-sm">Component</th>
                                <th className="th-sm">Function</th>
                                <th className="th-sm">ROM</th>
                                <th className="th-sm">RAM</th>
                                <th className="th-sm">Judgement</th>
                                <th className="th-sm">ROM</th>
                                <th className="th-sm">RAM</th>
                                <th className="th-sm">Judgement</th>
                                <th className="th-sm">ROM</th>
                                <th className="th-sm">RAM</th>
                                <th className="th-sm">Judgement</th>
                                <th className="th-sm">ROM</th>
                                <th className="th-sm">RAM</th>
                                <th className="th-sm">Judgement</th>
                                <th className="th-sm">ROM</th>
                                <th className="th-sm">RAM</th>
                                <th className="th-sm">Judgement</th>
                            </tr>
                        </thead>
                        <tbody style={{cursor: "pointer"}}>
                            <tr>
                                <td>basic_function</td>
                                <td>R_IMRDRV_Init</td>
                                <td>16020</td>
                                <td>434</td>
                                <td>OK</td>
                                <td>16020</td>
                                <td>434</td>
                                <td>OK</td>
                                <td>16020</td>
                                <td>434</td>
                                <td>OK</td>
                                <td>16020</td>
                                <td>434</td>
                                <td>OK</td>
                                <td>16020</td>
                                <td>434</td>
                                <td>OK</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>                   
        </>
    )
}