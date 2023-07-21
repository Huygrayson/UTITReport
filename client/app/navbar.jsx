"use client"
import { useState } from 'react';
import styles from './styles/navbar.module.css'
import SettingsIcon from '@mui/icons-material/Settings';

export default function Navbar(){
    const [settings, viewSettings] = useState(false);

    function handleViewSettings(){
      settings? viewSettings(false): viewSettings(true);
    }

    function Settings(){
      return(
        <div className={styles.settingsExpand}>
            <div className={styles.settingsContent}>
                <p>Vietnamese</p>
                <p>Darkmode</p>
            </div>
        </div>
      )
    }

    return(
        <>
            <div>
                <div className={styles.navStyle}>
                    <nav>
                        <button id={settings?styles.settingsBtnLeft:styles.settingsBtnRight} onClick={handleViewSettings}>
                            <span><SettingsIcon /></span>
                        </button>  
                    </nav>
                </div>

                {settings? <Settings />: <></>}     
            
                <div>
                    <img src="/logo/logo.svg" id={styles.logoImg} alt="Logo" />
                </div>
            </div>
        </>
    )
}