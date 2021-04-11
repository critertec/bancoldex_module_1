import { useEffect } from 'react';

import Dialog from '../dialog/index'
import Personage from '../../personages/personage'

import "./scene.css";

const Scene = ({
    currentStory,
    currentQuestion,
    nextScene
}) => {
    const side = 'right';

    const CurrentPersonage = () => {
        return (
            <Personage
                name="don alfonso"
            />
        )
    }

    const DialogBox = () => {
        return (
            <div className="scene-box">
                <Dialog
                    Personage={CurrentPersonage}
                    currentQuestion={currentQuestion}
                    nextScene={nextScene}
                />
            </div>  
        )
    }

    const PersonageBox = () => {
        return (
            <div className="scene-personage-container">
                <div className="scene-personage">
                    <CurrentPersonage />
                </div>
            </div>            
        )
    }

    // useEffect(()=>{
    //     console.log("historySelected", currentStory)
    // }, [])

    return (
        <div className="scene-container">
            <div className={currentStory.cover}>
                <div className="scene-title-container">
                    <div className="scene-title-content">
                        <div className="title-history-1"/>
                    </div>
                </div>
                        <div className="scene-content">  
                            <DialogBox /> 
                            <PersonageBox />
                        </div>
                    {/* {side === 'right' ?
                    :
                        <div className="history-content">  
                            <PersonageBox />
                            <DialogBox /> 
                        </div>

                    } */}
            </div>
        </div>
    )
}

export default Scene;