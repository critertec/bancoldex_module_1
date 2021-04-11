
import DialogSelectOption from './DialogSelectOption/index'

import Personage from '../../../../personages/personage'

import "./SelectOption.css";

const SceneHistory = ({
    currentStory,
    currentQuestion,
    selectOption
}) => {
    const side = 'right';

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
                <DialogSelectOption 
                    Personage={CurrentPersonage}
                    currentQuestion={currentQuestion}
                    selectOption={selectOption}
                />
            </div>  
        )
    }

    const PersonageBox = () => {
        return (
            <div className="selectOption-personage-container">
                <div className="selectOption-personage">
                    <CurrentPersonage />
                </div>
            </div>            
        )
    }

    return (
        <div className="selectOption-container">
            <div className={currentStory.cover}>
                <div className="selectOption-title-container">
                    <div className="selectOption-title-content">
                        <div className="title-history-1"/>
                    </div>
                </div>
                <div className="selectOption-content-container">  
                    <div className="selectOption-content">
                        {side === 'right' ?
                            <>
                                <DialogBox /> 
                                <PersonageBox />
                            </>
                        :
                            <>
                                <PersonageBox />
                                <DialogBox /> 
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SceneHistory;