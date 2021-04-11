import { useState } from 'react';
import classNames from 'classnames';
import Letter from './Letter/index'
import "./Option.css"

const Option = ({
    desc,
    option = 'A',
    onCall
}) => {
    const [active, setActive] = useState(false);

    return (
        <div 
            className={classNames({
                    'option-container': true,
                    'active': active
            })}
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
            onClick={onCall}
        >
            <div className="option-letter">
                <Letter 
                    option={option}
                    active={active}
                />
            </div>
            <div className="option-content-text">
                <div className="option-text">
                    {desc} 
                </div>
            </div>
        </div>
    )
}

export default Option;