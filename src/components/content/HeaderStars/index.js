import { useState, useEffect } from 'react'
import "./HeaderStars.css"

import header_start_0 from "../../../assets/INTERFACE/HEADER_STAR_0.svg"
import header_start_1 from "../../../assets/INTERFACE/HEADER_STAR_1.svg"
import header_start_2 from"../../../assets/INTERFACE/HEADER_STAR_2.svg"
import header_start_3 from"../../../assets/INTERFACE/HEADER_STAR_3.svg"

const HeaderStars = ({ 
    story,
    puntage = 0
}) => {

    const [score, setScore] = useState(0);

    const imgStar = () => {
        if (score === 0)
            return header_start_0;

        if (score < 50){
            return header_start_1

        }else if (score < 75){
            return header_start_2;
        }

        return header_start_3;
    } 

    useEffect(()=>{
        console.log('inicHeaders')
        if (story){
            let porcentage = 100 / Number(story.ptsMax / puntage)
            setScore(Number(porcentage.toFixed(2)))
            // console.log('porcentage', porcentage)
        }
    }, [puntage]);

    return (
        <div className="header-stars">
            <img 
                src={imgStar()}
                alt=""
            />
        </div>
    )
}

export default HeaderStars;