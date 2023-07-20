"use client"
import { useState } from 'react';
import styles from './styles/navbar.module.css'
import SettingsIcon from '@mui/icons-material/Settings';
import Media from 'react-media';

export default function Navbar(){
    const [settings, viewSettings] = useState(false);

    function handleViewSettings(){
      settings? viewSettings(false): viewSettings(true);
      console.log(settings);
    }

    function Settings(){
      return(
        <div className={styles.settingsPane}>
            Hello
        </div>
      )
    }

    return(
        <>
            <Media>
            {
                
            }    
            </Media>
            <div className={styles.navStyle}>
                <nav>
                    <label htmlFor={styles.checkBoxLeft}></label>
                    <input type="checkbox" id={styles.checkBoxLeft} />
                    <SettingsIcon 
                        id={styles.settingsIconLeft}
                        onClick={handleViewSettings}
                    />
                    <label htmlFor={styles.checkBoxRight}></label>
                    <input type="checkbox" id={styles.checkBoxRight} />
                    <SettingsIcon 
                        id={styles.settingsIconRight}
                        onClick={handleViewSettings}
                    />
                </nav>
            </div>
            {settings? <Settings />: <></>}
            <div>
                <img src="/logo/logo.svg" id={styles.logoImg} alt="Logo" />
            </div>
        </>
    )
}