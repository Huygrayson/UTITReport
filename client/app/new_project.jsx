import "bootstrap/dist/css/bootstrap.min.css";
import styles from './styles/new_project.module.css'
import Media from "react-media";

export default function NewProject(props){
    /* The Modal (background) */
    const modal = {
        display: "block",
        overflow: "auto",
        backgroundColor: "rgba(0, 0, 0, 0.7)"
    }

    function closeViewNewProject() {
        document.getElementById("formNewProject").reset();
        props.viewNewProject(false);
    }

    return(
        <>
            <div style={modal} className="modal">
                <div className={`${styles.modalStyle} modal-content`}>
                    <div className={styles.header}>
                        <p className={`${styles.close} close`} onClick={closeViewNewProject} >&times;</p>
                        <h4>Create your new project</h4>
                    </div>
                    <div className="container-fluid modal-body" >
                        <Media query="(min-width: 850px)">
                        {
                            matches =>
                            <form id="formNewProject" className={styles.modalContent} >
                                <div className={matches? styles.configAreaRow:styles.configAreaCol}>
                                    <div className={styles.generalConfig}>
                                        <div style={{textAlign: "center"}}>
                                            <h6><b>--- <u>General configuration</u> ---</b></h6>
                                        </div>
                                        <div>
                                            <label htmlFor="projectName">Project:&nbsp;</label><br/>
                                            <input type="text" style={{width: "300px", padding: "2px"}} className="form-control" placeholder="Project name"/>
                                        </div>
                                        <div>
                                            <label style={{width: "80px"}} htmlFor="testType">Test type:&nbsp;</label>
                                            <select name="testType">
                                                <option value="UT">UT</option>
                                                <option value="IT">IT</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label style={{width: "80px"}} htmlFor="moduleType">Module:&nbsp;</label>
                                            <select name="moduleType">
                                                <option value="IMRDRV">IMRDRV</option>
                                                <option value="IMPDRV">IMPDRV</option>
                                                <option value="IMRDLG">IMRDLG</option>
                                                <option value="IMPFW">IMPFW</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label style={{width: "80px"}} htmlFor="deviceType">Device:&nbsp;</label>
                                            <select name="deviceType">
                                                <option value="V3M2">V3M2</option>
                                                <option value="V3H1">V3H1</option>
                                                <option value="V3H2">V3H2</option>
                                                <option value="V4H">V4H</option>
                                                <option value="V4H2">V4H2</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label style={{width: "80px"}} htmlFor="OS">OS:&nbsp;</label>
                                            <select name="OS">
                                                <option value="Linux-GCC">Linux-GCC</option>
                                                <option value="Linux-ARM">Linux-ARM</option>
                                                <option value="Zephyr-ARM">Zephyr-ARM</option>
                                                <option value="QNX">QNX</option>
                                            </select>
                                        </div>
                                        <div className={styles.jiraConfig}>
                                            <div style={{textAlign: "center"}}>
                                                <h6><b>--- <u>Jira configuration (Optional)</u> ---</b></h6>
                                            </div>
                                            <div>
                                                <label htmlFor="jiraToken">Jira token:&nbsp;</label><br/>
                                                <input type="password" style={{width: "300px", padding: "2px"}} className="form-control" placeholder="Jira access token"/>
                                            </div>
                                            <div>
                                                <label htmlFor="jiraLink">Jira link:&nbsp;</label><br/>
                                                <input type="text" style={{width: "300px", padding: "2px"}} className="form-control" placeholder="Jira ticket link"/>
                                            </div>
                                        </div>  
                                    </div>

                                    <div className={styles.localConfig}>
                                        <div style={{textAlign: "center"}}>
                                            <h6><b>--- <u>Local configuration</u> ---</b></h6>
                                        </div>
                                        <div>
                                            <label htmlFor="specPath">Test-spec path:&nbsp;</label><br/>
                                            <input type="text" style={{width: "350px", padding: "2px"}} className="form-control" placeholder="Local path of your test-spec"/>
                                        </div>
                                        <div>
                                            <label htmlFor="logPath">Log path:&nbsp;</label><br/>
                                            <input type="text" style={{width: "350px", padding: "2px"}} className="form-control" placeholder="Local path to save your log"/>
                                        </div>
                                        <div style={{display: "flex", flexDirection: "row"}}>
                                            <label htmlFor="logType">Log type:&nbsp;</label>    
                                            <div style={{paddingTop: "0px"}}>
                                                <input type="checkbox" id="testLog" name="testLog" value="testLog"/>
                                                <label for="testLog">&nbsp;Test-case log</label><br/>
                                                <input type="checkbox" id="romRam" name="romRam" value="romRam"/>
                                                <label for="romRam">&nbsp;ROM/RAM log</label><br/>
                                                <input type="checkbox" id="S0S1" name="S0S1" value="S0S1"/>
                                                <label for="S0S1">&nbsp;S0S1 log</label><br/>
                                                <input type="checkbox" id="stackSize" name="stackSize" value="stackSize"/>
                                                <label for="stackSize">&nbsp;Stack-size info</label>
                                            </div>
                                        </div>
                                        
                                        <div style={{textAlign: "center"}}>
                                            <h6><b>--- <u>LabPC configuration</u> ---</b></h6> 
                                        </div>
                                        <div>
                                            <div>
                                                <label htmlFor="username">Username:&nbsp;</label>
                                                <input type="text" style={{float: "right", width: "230px", padding: "2px"}} className="form-control" placeholder="Username"/>
                                            </div>
                                            <div>
                                                <label htmlFor="password">Password:&nbsp;</label>
                                                <input type="password" style={{float: "right", width: "230px", padding: "2px"}} className="form-control" placeholder="Password"/>
                                            </div>
                                            <div>
                                                <label htmlFor="pathOnLab">Userpath:&nbsp;</label>
                                                <input type="text" style={{float: "right", width: "230px", padding: "2px"}} className="form-control" placeholder="/data2/<username>"/>
                                            </div>                                    
                                        </div>
                                    </div>

                                    <div className={styles.gitlabConfig}>
                                        <div style={{textAlign: "center"}}>
                                            <h6><b>--- <u>Gitlab configuration</u> ---</b></h6> 
                                        </div>
                                        <div>
                                            <label htmlFor="gitlabToken">Gitlab token:&nbsp;</label><br/>
                                            <input type="password" style={{width: "350px", padding: "2px"}} className="form-control" placeholder="Gitlab personal token"/>
                                        </div>
                                        <div>
                                            <label htmlFor="MRLink">MR link:&nbsp;</label><br/>
                                            <input type="text" style={{width: "350px", padding: "2px"}} className="form-control" placeholder="Merge request link"/>
                                        </div>
                                        <div>
                                            <label htmlFor="commitID">Chosen pipeline:&nbsp;</label>
                                            <input type="text" style={{width: "100px", padding: "0px", borderRadius: "5px", cursor: "no-drop"}} 
                                                readOnly title="Choose from the table below"/>
                                            <div>
                                                <table className="table table-hover table-bordered table-sm" cellspacing="0" width="100%">
                                                    <thead className="table-dark">
                                                        <tr>
                                                            <th className="th-sm">Pipeline ID</th>
                                                            <th className="th-sm">Commit ID</th>
                                                            <th className="th-sm">Commit message</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody style={{cursor: "pointer"}}>
                                                        <tr>
                                                            <td>12345</td>
                                                            <td>a23bf4</td>
                                                            <td>First commit</td>
                                                        </tr>
                                                        <tr>
                                                            <td>67890</td>
                                                            <td>a23bee</td>
                                                            <td>Second commit</td>
                                                        </tr>
                                                        <tr>
                                                            <td>14345</td>
                                                            <td>a23baa</td>
                                                            <td>Third commit</td>
                                                        </tr>
                                                        <tr>
                                                            <td>78678</td>
                                                            <td>a23bff</td>
                                                            <td>Fourth commit</td>
                                                        </tr>
                                                        <tr>
                                                            <td>98678</td>
                                                            <td>a23bcc</td>
                                                            <td>Fifth commit</td>
                                                        </tr>
                                                        <tr>
                                                            <td>11212</td>
                                                            <td>a23b33</td>
                                                            <td>Sixth commit</td>
                                                        </tr>
                                                        {/* <tr>
                                                            <td>343434</td>
                                                            <td>a23b55</td>
                                                            <td>Seventh commit</td>
                                                        </tr>
                                                        <tr>
                                                            <td>101010</td>
                                                            <td>a23b77</td>
                                                            <td>Eighth commit</td>
                                                        </tr>
                                                        <tr>
                                                            <td>168023</td>
                                                            <td>a23bea</td>
                                                            <td>Ninth commit</td>
                                                        </tr>
                                                        <tr>
                                                            <td>623454</td>
                                                            <td>a23b81</td>
                                                            <td>Tenth commit</td>
                                                        </tr> */}
                                                    </tbody>
                                                </table>
                                            </div>  
                                        </div>
                                                                              
                                    </div>
                                </div>
                                <button type="submit" className={`${styles.btnCreate} btn btn-dark`}>Create</button>                            
                            </form>
                        }
                        </Media>
                    </div>
                </div>
            </div>
        </>
    )
}