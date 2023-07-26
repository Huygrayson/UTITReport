"use client"
import styles from './styles/logs.module.css'
import { Box, Tab} from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import { useState } from 'react'
import TerminalIcon from '@mui/icons-material/Terminal';
import BugReportIcon from '@mui/icons-material/BugReport';

export default function Log() {
    const [value, setValue] = useState("1")

    function handleChange(event, value) {
        setValue(value)
    }

    return(
        <>
            <div className={styles.layout}>
                <TabContext value={value}>
                    <Box sx={{borderBottom: 1, borderColor: "divider", backgroundColor: "#DBE3AB"}} >
                        <TabList 
                            onChange={handleChange}
                            sx={{height: "10px"}}
                        >
                            <Tab 
                                label="Console" 
                                value="1"
                                icon={<TerminalIcon />}
                                iconPosition='start'
                                sx={{fontSize: "10px"}}
                            />
                            <Tab 
                                label="Error" 
                                value="2"
                                icon={<BugReportIcon />}
                                iconPosition='start'
                                sx={{fontSize: "10px"}}
                            />
                        </TabList>
                    </Box>
                    <TabPanel value="1" sx={{padding: "6px"}}>Pannel 1</TabPanel>
                    <TabPanel value="2" sx={{padding: "6px"}}>Pannel 2</TabPanel>
                </TabContext>
            </div>
        </>
    )
}