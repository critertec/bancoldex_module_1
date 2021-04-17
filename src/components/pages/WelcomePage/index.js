import classNames from 'classnames'
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
        </div>
    )
}