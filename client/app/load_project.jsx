import "bootstrap/dist/css/bootstrap.min.css";
import styles from './styles/load_project.module.css'
import SearchIcon from '@mui/icons-material/Search';

export default function LoadProject(props) {
    /* The Modal (background) */
    const modal = {
        display: "block",
        overflow: "auto",
        backgroundColor: "rgba(0, 0, 0, 0.7)"
    }

    function closeViewLoadProject() {
        document.getElementById("formLoadProject").reset();
        props.viewLoadProject(false);
    }

    return(
        <>
            <div style={modal} className="modal">
                <div className={`${styles.modalStyle} modal-content`}>
                    <div className={styles.header}>
                        <p className={`${styles.close} close`} onClick={closeViewLoadProject} >&times;</p>
                        <h4>Load your project</h4>
                    </div>
                    <div className="container-fluid modal-body" >
                        <form id="formLoadProject" className={styles.modalContent} >
                            <div className={styles.projectPath}>
                                <label htmlFor="Path">Project path:&nbsp;</label>
                                <input type="text" style={{width: "300px"}} className="form-control" placeholder="Project path"/>
                                <button type="submit" className={`${styles.btnBrowse} btn`}>
                                    <span><SearchIcon style={{paddingRight: "5px"}}/></span> 
                                </button> 
                            </div>
                            <div className={styles.recentPath}>
                                <label htmlFor="recentPath">Recent path:&nbsp;</label>
                                <table style={{width: "300px", marginRight: "40px"}} className="table table-hover table-bordered table-md" cellspacing="0" width="100%">
                                    <tbody style={{cursor: "pointer"}}>
                                        <tr>
                                            <td>Path 1</td>
                                        </tr>
                                        <tr>
                                            <td>Path 2</td>
                                        </tr>
                                        <tr>
                                            <td>Path 3</td>
                                        </tr>
                                    </tbody>
                                </table> 
                            </div> 
                            <div>
                                <button type="submit" className={`${styles.btnOpen} btn btn-dark`}>Open</button>  
                            </div>                                                                                       
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}