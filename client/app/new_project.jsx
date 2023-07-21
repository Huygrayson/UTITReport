import "bootstrap/dist/css/bootstrap.min.css";
import styles from './styles/new_project.module.css'

export default function NewProject(props){
    /* The Modal (background) */
    const modal = {
        display: props.newProject? "block":"none",
        overflow: "auto",
        backgroundColor: "rgba(0, 0, 0, 0.7)"
    }

    function closeViewNewProject() {
        document.getElementById("formNewProject").reset();
        viewSignup(false);
        setWarning(false);
        setMessage("");
    }

    return(
        <>
            <div style={modal} className="modal">
                <div className={`${styles.modalContent} modal-content`}>
                    <div className={styles.header}>
                        <p className={`${styles.close} close`} >&times;</p>
                        <h5>Create your new project</h5>
                    </div>
                    <div className="container-fluid modal-body">
                        <form id="formNewProject" >
                            <div className={styles.generalConfig}>
                                <div>
                                    <label htmlFor="projectName">Project:&nbsp;</label>
                                    <input type="text" placeholder="Project name"/>
                                </div>
                                <div>
                                    <label htmlFor="testType">Test type:&nbsp;</label>
                                    <select name="testType">
                                        <option value="UT">UT</option>
                                        <option value="IT">IT</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="moduleType">Module:&nbsp;</label>
                                    <select name="moduleType">
                                        <option value="IMRDRV">IMRDRV</option>
                                        <option value="IMPDRV">IMPDRV</option>
                                        <option value="IMRDLG">IMRDLG</option>
                                        <option value="IMPFW">IMPFW</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="deviceType">Device:&nbsp;</label>
                                    <select name="deviceType">
                                        <option value="V3M2">V3M2</option>
                                        <option value="V3H1">V3H1</option>
                                        <option value="V3H2">V3H2</option>
                                        <option value="V4H">V4H</option>
                                        <option value="V4H2">V4H2</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="OS">OS:&nbsp;</label>
                                    <select name="OS">
                                        <option value="Linux-GCC">Linux-GCC</option>
                                        <option value="Linux-ARM">Linux-ARM</option>
                                        <option value="Zephyr-ARM">Zephyr-ARM</option>
                                        <option value="QNX">QNX</option>
                                    </select>
                                </div>
                            </div>

                            <div className={styles.localConfig}>
                                <div>
                                    <label htmlFor="logPath">Log path:&nbsp;</label>
                                    <input type="text" placeholder="Local path to save your log"/>
                                </div>
                                <div>
                                    <label htmlFor="specPath">Test-spec path:&nbsp;</label>
                                    <input type="text" placeholder="Local path of your test-spec"/>
                                </div>
                                <div>
                                    <label htmlFor="logType">Log type:&nbsp;</label>    
                                    <div>
                                        <input type="checkbox" id="testLog" name="testLog" value="testLog"/>
                                        <label for="testLog">&nbsp;Test log</label><br/>
                                        <input type="checkbox" id="romRam" name="romRam" value="romRam"/>
                                        <label for="romRam">&nbsp;ROM/RAM log</label><br/>
                                        <input type="checkbox" id="S0S1" name="S0S1" value="S0S1"/>
                                        <label for="S0S1">&nbsp;S0S1 log</label><br/>
                                        <input type="checkbox" id="stackSize" name="stackSize" value="stackSize"/>
                                        <label for="stackSize">&nbsp;Stack-size info</label>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.thirdPartyConfig}>
                                <div>
                                    <label htmlFor="MRLink">MR link:&nbsp;</label>
                                    <input type="text" placeholder="Merge request link"/>
                                    <label htmlFor="commitID">Pipeline ID:&nbsp;</label>
                                    <input type="text" placeholder="Latest by default"/>
                                </div>
                                <div>
                                    <label htmlFor="username">Username:&nbsp;</label>
                                    <input type="text" placeholder="Username"/><br/>
                                    <label htmlFor="password">Password:&nbsp;</label>
                                    <input type="password" placeholder="Password"/><br/>
                                    <label htmlFor="pathOnLab">Userpath:&nbsp;</label>
                                    <input type="text" placeholder="/data2/<username>"/><br/>
                                </div>
                                <div>
                                    <label htmlFor="jiraLink">Jira link (optional):&nbsp;</label>
                                    <input type="text" placeholder="Jira ticket link"/><br/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}