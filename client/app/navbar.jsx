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
            {/* <Media query="(min-width: 850px)">
            {
                matches => { */}
                    <div>
                        <div className={styles.navStyle}>
                            <nav>
                                <button>
                                    {settings? 
                                    <SettingsIcon 
                                        id={styles.settingsIconLeft}
                                        onClick={handleViewSettings}
                                    />: 
                                    <SettingsIcon 
                                        id={styles.settingsIconRight}
                                        onClick={handleViewSettings}
                                    />}
                                </button>
                                {settings? <Settings />: <></>}                           
                            </nav>
                        </div>
                    
                        <div>
                            <img src="/logo/logo.svg" id={styles.logoImg} alt="Logo" />
                        </div>
                    </div>
                {/* }
            }    
            </Media> */}
        </>
    )
}