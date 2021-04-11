
import DialogFeedBack from './DialogFeedBack/index'
import Personage from '../../../../personages/personage'
import "./FeedBack.css";

const SceneFeedBack = ({
    currentStory,
    currentOption,
    newQuestion
}) => {
    // const side = 'left';

    const DialogBox = () => {
        return (
            <div className="feedBack-box">
                <DialogFeedBack 
                    Personage={()=>(<Personage name="girl"/>)}
                    currentOption={currentOption}
                    onCall={newQuestion}
                />
            </div>  
        )
    }

    const PersonageBox = () => {
        return (
            <div className="feedBack-personage-container">
                <div className="feedBack-personage">
                    <Personage 
                        name="girl"
                    />
                </div>
            </div>            
        )
    }

    return (
        <div className="feedBack-container">
            <div className={currentStory.cover}>
                <div className="feedBack-title-container">
                    <div className="feedBack-title-content">
                        <div className="title-history-1"/>
                    </div>
                </div>
                <div className="feedBack-content">  
                    <PersonageBox />
                    <DialogBox /> 
                </div>     
            </div>
        </div>
    )
}

export default SceneFeedBack;