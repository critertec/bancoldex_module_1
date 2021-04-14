import {  useEffect } from 'react'
import classnames from 'classnames'
import Button from '../../../../../content/button'
import HeaderStars from '../../../../../content/HeaderStars/index'
import "./DialogEnd.css"

const DialogEnd = ({
    currentStory,
    currentQuestion,
    currentPuntage,
    onCall
}) => {

    useEffect(()=>{
        console.log('DialogEnd', currentQuestion)
    }, [])

    const TextDesc = () => {
        if (!currentQuestion) return '';
        let desc = "";

        if (currentQuestion.pages){
            desc = currentQuestion?.pages[0]?.desc;
        }

        if (currentQuestion.feedback){
            desc = currentQuestion.feedback;
        }

        return (
            <div>
                { Array.isArray(desc) ? 
                        desc.map( (t, index) => (
                            <div 
                                key={index}
                                className="dialogHistory-text"
                            >
                                { t }
                            </div> 
                        ))
                    :
                    <div className="dialogHistory-text">
                        { desc }
                    </div>  
                }
            </div>
        )
    }

    return (
        <div className="dialogEnd-container">
            <div className="dialogEnd-stars-container">
                <div className="dialogEnd-stars">
                    <HeaderStars 
                        story={currentStory}
                        puntage={currentPuntage}
                    />
                </div>
            </div>

            <div className="dialogEnd-content-container">
                <div className="dialogEnd-content">
                    <div className="dialogEnd-text-container">
                        {/* <div className="dialogEnd-text-content"> */}
                        <div>
                            <TextDesc />
                        </div>
                    </div>

                    <div className="dialogEnd-footer">
                        <div className="dialogEnd-btn-next">
                            <Button 
                                type="next"
                                onClick={onCall}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default DialogEnd;