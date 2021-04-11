import { useState } from 'react';
import classNames from 'classnames'

import "./CardHistory.css"

import header_start_0 from "../../../../assets/INTERFACE/HEADER_STAR_0.svg"
import header_start_1 from "../../../../assets/INTERFACE/HEADER_STAR_1.svg"
import header_start_2 from"../../../../assets/INTERFACE/HEADER_STAR_2.svg"
import header_start_3 from"../../../../assets/INTERFACE/HEADER_STAR_3.svg"

import icon_eye from '../../../../assets/INTERFACE/ICON_EYE.svg'
import icon_eye_close from '../../../../assets/INTERFACE/ICON_EYE_CLOSE.svg'

import Button from '../../../content/button'
import Personage from '../../../personages/personage'

const HeaderStars = ({ score = 0 }) => {
    const imgStar = () => {
        switch(score){
            case 1: return header_start_1;
            case 2: return header_start_2;
            case 3: return header_start_3;
            default:
                return header_start_0;
        }
    } 
    return (
        <div className="header-stars">
            <img 
                src={imgStar()}
                alt=""
            />
        </div>
    )
}

const CardHistory = ({
    title,
    cover,
    desc,
    personage,
    onCall
}) => {
    const [showDesc, setShowDesc] = useState(false);

    return (
        <div className="cardHistory-container">
                <div className="btn-eye-container">
                    <div 
                        className="btn-eye"
                        onClick={()=> {setShowDesc(!showDesc)}}
                    >
                        <img 
                            className="img"
                            src={!showDesc ? icon_eye : icon_eye_close}
                            alt=""
                        />
                    </div>
                </div>
            <div className="cardHistory-stars">
                <HeaderStars />
            </div>
            <div className="cardHistory-content">
                <div className={classNames({
                    "cardHistory-content-bg": true,
                    "desc": showDesc
                })}>
                    {
                        !showDesc ?
                        <>
                            <div className="cardHistory-content-personage">
                                <Personage 
                                    name={personage}
                                />
                            </div>
                            <div className={cover} />
                        </>
                        :
                        <div className="cardHistory-content-text">
                            {desc}
                        </div>
                    }
                </div>

            </div>
            <div className="cardHistory-btn-next-container">
                <div 
                    className="cardHistory-btn-next"
                    onClick={onCall}
                >
                    <Button 
                        type={title}
                    />
                </div>
            </div>
        </div>
    )
}

export default CardHistory;