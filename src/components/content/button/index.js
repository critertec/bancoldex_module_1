import "./button.css"

import BTN_NEXT from '../../../assets/INTERFACE/BTN_NEXT.svg'
import BTN_START from '../../../assets/INTERFACE/BTN_START.svg'
import BTN_BACK from '../../../assets/INTERFACE/ICON_BACK.svg'
// import BTN_BACK_MOBILE from '../../../assets/INTERFACE/BTN_.svg'
import BTN_HELP from '../../../assets/INTERFACE/ICON_HELP.svg'

import BTN_ARROW_LEFT from '../../../assets/INTERFACE/BTN_ARROW_LEFT.svg'
import BTN_ARROW_RIGHT from '../../../assets/INTERFACE/BTN_ARROW_RIGHT.svg'

import BTN_HISTORY_1 from '../../../assets/INTERFACE/BTN_HISTORY_1.svg'
import BTN_HISTORY_2 from '../../../assets/INTERFACE/BTN_HISTORY_2.svg'
import BTN_HISTORY_3 from '../../../assets/INTERFACE/BTN_HISTORY_3.svg'

import BTN_HOME from '../../../assets/INTERFACE/BTN_HOME.svg'
import BTN_MUSIC from '../../../assets/INTERFACE/BTN_MUSIC.svg'
import BTN_MUSIC_MUTE from '../../../assets/INTERFACE/BTN_MUSIC_MUTE.svg'

import BTN_RETURN from '../../../assets/INTERFACE/BTN_RETURN.svg'

const Button = ({
    type,
    ...rest
}) => {
        const imgBtn = () => {
            switch(type){
                case 'next':
                    return BTN_NEXT;
                case 'arrow right':
                    return BTN_ARROW_RIGHT;
                case 'arrow left':
                    return BTN_ARROW_LEFT;
                case 'history 1':
                    return BTN_HISTORY_1;
                case 'history 2':
                    return BTN_HISTORY_2;
                case 'history 3':
                    return BTN_HISTORY_3;
                case 'home':
                    return BTN_HOME;
                case 'music':
                    return BTN_MUSIC;
                case 'music muted':
                    return BTN_MUSIC_MUTE;
                case 'back':
                    return BTN_BACK;
                case 'help':
                    return BTN_HELP;
                case 'return':
                    return BTN_RETURN;
                default:
                    return BTN_START;
            }
        }

    return (
        <div 
            className="btn-next-container"
            {...rest}
        >
            <img 
                src={imgBtn()}
                alt=""
            />
        </div>
    )
}

export default Button;