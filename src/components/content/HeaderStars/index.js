import "./HeaderStars.css"

import header_start_0 from "../../../assets/INTERFACE/HEADER_STAR_0.svg"
import header_start_1 from "../../../assets/INTERFACE/HEADER_STAR_1.svg"
import header_start_2 from"../../../assets/INTERFACE/HEADER_STAR_2.svg"
import header_start_3 from"../../../assets/INTERFACE/HEADER_STAR_3.svg"

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

export default HeaderStars;