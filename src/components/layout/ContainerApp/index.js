import "./containerApp.css"
import React from 'react';
import { useState, useEffect } from 'react'
import Header from '../Header/index'
import Footer from '../Footer/index'

import useSound from 'use-sound';

// import SoundBtn from '../../../assets/SOUNDS/ETC_Sfx_Swipe_01.mp3'
// import SoundPtsOk from '../../../assets/SOUNDS/ETC_Sfx_Correcto_01.mp3'
// import SoundPtsBad from '../../../assets/SOUNDS/ETC_Sfx_Incorrecto_01.mp3'
// import SoundPts from '../../../assets/SOUNDS/ETC_Sfx_Puntaje_01.mp3'
import SoundBG from '../../../assets/SOUNDS/bensound-memories.mp3'

const ContainerApp = (props) => {
    const { stateSound, children } = props;

    const [soundBg, soundBgOptions] = useSound(SoundBG);
    // const [soundBtn] = useSound(SoundBtn)
    // const [soundPtsOk] = useSound(SoundPtsOk)
    // const [soundPtsBad] = useSound(SoundPtsBad)
    // const [soundPts] = useSound(SoundPts)

    useEffect(()=>{
        console.log('soundBgOptions', soundBgOptions);
        if (!stateSound){
          soundBgOptions.stop();
          return;
        }
    
        // if (soundBgOptions.isPlaying){
        //   return;
        // }
        
        if (soundBgOptions.sound && !soundBgOptions.isPlaying){
          soundBg();
          soundBgOptions.interrupt = true;
          console.log('playyy')
        }
        
      }, [!soundBgOptions.sound, !stateSound])

    return (
        <div className="layout-container">
            <Header  
                {...props}
            />

            <div className="layout-content">
                { children }
            </div>

            <div className="layout-footer">
                <Footer  
                    {...props} 
                />
            </div>
        </div>
    )
}

export default ContainerApp;