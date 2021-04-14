import { useEffect } from 'react';

const Scenes = ({

}) => {

    const CurrentPersonage = () => {
        return (
            <Personage
                name={currentStory.personage}
            />
        )
    }

    const DialogBox = () => {
        return (
            <div className="history-box">
                <DialogHistory 
                    Personage={CurrentPersonage}
                    currentQuestion={currentQuestion}
                    nextScene={nextScene}
                />
            </div>  
        )
    }

    const PersonageBox = () => {
        return (
            <div className="history-personage-container">
                <div className="history-personage">
                    <CurrentPersonage />
                </div>
            </div>            
        )
    }

    return (
        <div className="history-container">
            <div className={currentStory.cover}>
                <div className="history-title-container">
                    <div className="history-title-content">
                        <div className="title-history-1"/>
                    </div>
                </div>
                        <div className="history-content">  
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

export default Scenes;