import DialogWelcome from './DialogWelcome';
import "./welcomePage.css"
import Personage from '../../personages/personage'

export default (props) => {

    return (
        <div className="welcome-container">
            <div className="welcome-container-content">
                <div className="welcome-container-personage">
                    <div className="welcome-personage">
                        <Personage name="girl"/>
                    </div>
                </div>
                <DialogWelcome {...props} />
            </div>
                <div className="welcome-footer">
                    <div className='welcome-footer-text'>
                        Music: {' '} 
                        <a href="https://www.bensound.com/"         styles={{ cursor: 'pointer'}}
                        >
                            https://www.bensound.com/
                        </a> 
                    </div>
                </div>
        </div>
    )
}