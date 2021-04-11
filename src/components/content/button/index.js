import "./button.css"

import BTN_NEXT from '../../../assets/INTERFACE/BTN_NEXT.svg'
import BTN_START from '../../../assets/INTERFACE/BTN_START.svg'

import BTN_ARROW_LEFT from '../../../assets/INTERFACE/BTN_ARROW_LEFT.svg'
import BTN_ARROW_RIGHT from '../../../assets/INTERFACE/BTN_ARROW_RIGHT.svg'

import BTN_HISTORY_1 from '../../../assets/INTERFACE/BTN_HISTORY_1.svg'
import BTN_HISTORY_2 from '../../../assets/INTERFACE/BTN_HISTORY_2.svg'
import BTN_HISTORY_3 from '../../../assets/INTERFACE/BTN_HISTORY_3.svg'

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